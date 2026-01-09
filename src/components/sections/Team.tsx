"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const teamMembers = [
  {
    name: "Mehmet Sabit Yıldız",
    role: "Lead Architect & Founder",
    description: "End-to-end system design, ML pipeline, API/UI, and safety orchestration.",
    bg: "Engineering & AI"
  },
  {
    name: "Yusuf Emir Balıkçı",
    role: "Clinical Product & Validation",
    description: "Medical guideline mapping, benchmarking, and clinician-facing UX.",
    bg: "Medicine & Operations"
  },
  {
    name: "Naci Gürz",
    role: "Technical Advisor",
    description: "Architecture review, scalability guidance, and engineering mentorship.",
    bg: "Computer Engineering"
  }
]

export function Team() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Built By</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            The Team
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          {teamMembers.map((member) => (
            <Card key={member.name} className="text-center shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-primary/20">
              <CardHeader className="flex flex-col items-center pb-2 pt-8">
                <CardTitle className="text-xl font-bold">{member.name}</CardTitle>
                <div className="mt-2">
                   <Badge variant="secondary" className="font-normal">{member.bg}</Badge>
                </div>
                <CardDescription className="font-bold text-primary text-base mt-2">{member.role}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed px-4">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
