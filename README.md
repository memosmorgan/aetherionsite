This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

To make the contact form work, you need to set up the following environment variables.

1. Create a file named `.env.local` in the root directory.
2. Add the following variables (see `.env.example`):

```bash
RESEND_API_KEY=re_your_resend_api_key_here
CONTACT_TO_EMAIL=your_email@example.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

- **RESEND_API_KEY**: Get this from [Resend](https://resend.com).
- **CONTACT_TO_EMAIL**: The email address where you want to receive contact form submissions.
- **CONTACT_FROM_EMAIL**: The email address the system sends FROM. If you don't have a custom domain on Resend, use `onboarding@resend.dev` (only sends to your own email).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Important:** When deploying to Vercel, remember to add the Environment Variables in your project settings.
