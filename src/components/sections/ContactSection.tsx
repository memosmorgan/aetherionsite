"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    role: "",
    interest: "",
    name: "",
    email: "",
    message: "",
    company: "", // Honeypot
  })

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitted(true)
      setFormData({ role: "", interest: "", name: "", email: "", message: "", company: "" })
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-muted/30 border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg border-primary/10">
            <CardHeader className="text-center space-y-2">
              <CardTitle className="text-3xl font-bold">Connect with Aetherion</CardTitle>
              <CardDescription className="text-base">
                Pilot interest, mentorship, or demo requests. We respond within 72 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center animate-in fade-in zoom-in duration-300">
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Message Sent</h3>
                  <p className="text-muted-foreground">Thank you for your interest. We'll be in touch shortly.</p>
                  <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-4">
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                  
                  {/* Honeypot Field */}
                  <div className="hidden" aria-hidden="true">
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={(e) => handleChange("company", e.target.value)} 
                      tabIndex={-1} 
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="role">I am a...</Label>
                      <Select 
                        required 
                        value={formData.role} 
                        onValueChange={(val) => handleChange("role", val)}
                      >
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="judge">Conrad Judge</SelectItem>
                          <SelectItem value="clinician">Clinician / Mentor</SelectItem>
                          <SelectItem value="partner">Partner / Investor</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="interest">Interested in...</Label>
                      <Select 
                        required 
                        value={formData.interest} 
                        onValueChange={(val) => handleChange("interest", val)}
                      >
                        <SelectTrigger id="interest">
                          <SelectValue placeholder="Select interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pilot">Pilot Program</SelectItem>
                          <SelectItem value="advisory">Advisory Board</SelectItem>
                          <SelectItem value="demo">Demo</SelectItem>
                          <SelectItem value="brief">Brief</SelectItem>
                          <SelectItem value="other">Other Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Dr. Jane Doe" 
                      required 
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="jane@hospital.org" 
                      required 
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      disabled={loading}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your organization or how you'd like to help..." 
                      className="min-h-[120px]"
                      required 
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      disabled={loading}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2" disabled={loading}>
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
