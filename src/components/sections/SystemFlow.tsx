"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  { id: 1, text: "Input Symptoms" },
  { id: 2, text: "Red-Flag Scan" },
  { id: 3, text: "Probability & Triage" },
  { id: 4, text: "OOD Check" },
  { id: 5, text: "Conservative Output" },
]

export function SystemFlow() {
  return (
    <section className="py-12 border-b bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/4 shrink-0">
            <h2 className="text-xl font-bold tracking-tight text-foreground">
              What the system actually does — in 5 seconds
            </h2>
          </div>
          
          <div className="flex-1 w-full overflow-x-auto pb-2 md:pb-0">
            <div className="flex items-center min-w-[600px] justify-between gap-2">
              {steps.map((step, idx) => (
                <div key={step.id} className="flex items-center gap-2 flex-1">
                  <div className="flex flex-col items-center text-center w-full bg-background rounded-lg border p-3 shadow-sm hover:border-primary/50 transition-colors">
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Step {step.id}</span>
                    <span className="font-semibold text-sm whitespace-nowrap">{step.text}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
