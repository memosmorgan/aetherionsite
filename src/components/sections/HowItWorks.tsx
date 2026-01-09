"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const steps = [
  {
    step: 1,
    title: "Minimal Guided Intake",
    description: "Clinician or intake form collects key symptoms, duration, and vitals. Designed for speed.",
  },
  {
    step: 2,
    title: "Red-Flag Safety Layer",
    description: "Deterministic rules scan for critical signs (e.g., crushing chest pain) to trigger immediate escalation.",
  },
  {
    step: 3,
    title: "Interpretable Model",
    description: "Interpretable tabular model (LightGBM) estimates probabilities. No black-box complexity.",
  },
  {
    step: 4,
    title: "Reliability Check",
    description: "System runs calibration verification and Out-Of-Distribution (OOD) check.",
  },
  {
    step: 5,
    title: "Clinician Output",
    description: "Results presented with confidence intervals and 'Why' explanations. Full audit logging.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Pipeline</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            How it works
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-12 relative">
          {/* Connector Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-muted-foreground/20 md:left-1/2 md:-ml-px hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
              {/* Number Circle */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full border-4 border-background bg-primary text-primary-foreground font-bold text-xl shadow-lg z-10 shrink-0">
                {step.step}
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'} pl-20 md:pl-0`}>
                <div className={`space-y-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                   <h3 className="text-xl font-bold">{step.title}</h3>
                   <p className="text-muted-foreground leading-relaxed max-w-md">
                     {step.description}
                   </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
