import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const contactSchema = z.object({
  role: z.enum(['judge', 'clinician', 'partner', 'other']),
  interest: z.enum(['pilot', 'advisory', 'demo', 'brief', 'other']),
  name: z.string().min(2).max(80),
  email: z.string().email().max(254),
  message: z.string().min(10).max(2000),
  company: z.string().optional(), // Honeypot
});

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 5;
const WINDOW = 10 * 60 * 1000; // 10 minutes

function getIp(req: Request) {
  const forwardedFor = req.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  if (ip === 'unknown') return true; // Skip for unknown IPs or localhost dev mostly

  const now = Date.now();
  const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

  if (now - record.lastReset > WINDOW) {
    record.count = 0;
    record.lastReset = now;
  }

  if (record.count >= LIMIT) return false;

  record.count++;
  rateLimitMap.set(ip, record);
  return true;
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing');
      return NextResponse.json(
        { ok: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const ip = getIp(req);
    
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { ok: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.company) {
      // Silently succeed for bots
      return NextResponse.json({ ok: true });
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { ok: false, error: 'Invalid input', details: result.error.format() },
        { status: 400 }
      );
    }

    const { role, interest, name, email, message } = result.data;

    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    const toEmail = process.env.CONTACT_TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error('Missing Email configuration');
      return NextResponse.json(
        { ok: false, error: 'Server misconfiguration' },
        { status: 500 }
      );
    }

    const subject = `[Aetherion] Contact — ${interest} — ${name}`;
    
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: subject,
      text: `
Name: ${name}
Email: ${email}
Role: ${role}
Interest: ${interest}

Message:
${message}

---
IP: ${ip}
Time: ${new Date().toISOString()}
      `,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Interest:</strong> ${interest}</p>
          <hr />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br/>')}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">
            IP: ${ip}<br/>
            Time: ${new Date().toISOString()}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { ok: false, error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });

  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { ok: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
