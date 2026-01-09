"use client"

import { Clock, Activity, AlertTriangle } from "lucide-react"
import { WhoItHelps } from "@/components/sections/WhoItHelps"

export function Problem() {
  return (
    <section id="problem" className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Context</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl text-foreground max-w-3xl">
            The front door of care is high-stakes—and often ambiguous.
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto mb-20">
          <div className="group flex flex-col items-start text-left space-y-4 p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="p-3 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Activity className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl">Symptom Overlap</h3>
            <p className="text-muted-foreground leading-relaxed">
              Early symptoms overlap across many conditions. Distinguishing a benign viral illness from a serious infection is statistically difficult without labs.
            </p>
          </div>
          
          <div className="group flex flex-col items-start text-left space-y-4 p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="p-3 rounded-xl bg-orange-100 text-orange-700 group-hover:bg-orange-600 group-hover:text-white transition-colors">
              <Clock className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl">Time Pressure</h3>
            <p className="text-muted-foreground leading-relaxed">
              Primary care and telemedicine visits are short. Limited context and high volume drive variability in decision-making and documentation.
            </p>
          </div>
          
          <div className="group flex flex-col items-start text-left space-y-4 p-8 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
            <div className="p-3 rounded-xl bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white transition-colors">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-xl">Triage Risks</h3>
            <p className="text-muted-foreground leading-relaxed">
              Under-triage risks delayed care for critical patients; over-triage drives unnecessary ER visits, costs, and system overload.
            </p>
          </div>
        </div>

        <WhoItHelps />
      </div>
    </section>
  )
}
