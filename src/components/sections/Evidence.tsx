"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle } from "lucide-react"

export function Evidence() {
  return (
    <section id="evidence" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Validation & Impact</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Where we are today
          </h2>
          <p className="text-sm text-muted-foreground font-medium bg-muted px-4 py-1 rounded-full">
            Evidence focuses on reliability signals (calibration + OOD behavior), not clinical outcome claims.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto mb-20">
           <Card className="text-center shadow-lg border-primary/10">
             <CardHeader className="pb-2">
               <CardTitle className="text-4xl font-extrabold text-primary">114</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm font-medium text-foreground">Conditions Covered</p>
               <p className="text-xs text-muted-foreground mt-1">High-volume primary care focus</p>
             </CardContent>
           </Card>

           <Card className="text-center shadow-lg border-primary/10">
             <CardHeader className="pb-2">
               <CardTitle className="text-4xl font-extrabold text-primary">~78%</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm font-medium text-foreground">Top-1 Accuracy</p>
               <p className="text-xs text-muted-foreground mt-1">On validation set</p>
             </CardContent>
           </Card>

           <Card className="text-center shadow-lg border-primary/10">
             <CardHeader className="pb-2">
               <CardTitle className="text-4xl font-extrabold text-primary">0.71</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm font-medium text-foreground">Macro-F1 Score</p>
               <p className="text-xs text-muted-foreground mt-1">Balanced performance</p>
             </CardContent>
           </Card>

           <Card className="text-center shadow-lg border-primary/10">
             <CardHeader className="pb-2">
               <CardTitle className="text-4xl font-extrabold text-primary">0.02</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm font-medium text-foreground">Calibration (ECE)</p>
               <p className="text-xs text-muted-foreground mt-1">Reliable probability estimates</p>
             </CardContent>
           </Card>

           <Card className="text-center shadow-lg bg-primary/5 border-primary/20">
             <CardHeader className="pb-2">
               <CardTitle className="text-2xl font-bold text-primary pt-2">Live</CardTitle>
             </CardHeader>
             <CardContent>
               <p className="text-sm font-medium text-foreground">Working API + UI</p>
               <p className="text-xs text-muted-foreground mt-1">Interactive prototype</p>
             </CardContent>
           </Card>
        </div>

        {/* Roadmap Timeline */}
        <div className="max-w-4xl mx-auto bg-background rounded-2xl p-8 md:p-12 shadow-sm border">
          <h3 className="text-2xl font-bold mb-8 text-center">Validation Roadmap</h3>
          <div className="relative">
             <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted-foreground/20" />
             
             <div className="space-y-8 pl-12">
               <div className="relative">
                 <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center ring-4 ring-background">
                   <CheckCircle2 className="h-4 w-4 text-white" />
                 </div>
                 <h4 className="font-bold text-lg">Phase 1: Architecture & Prototyping (Current)</h4>
                 <p className="text-muted-foreground">Developed core pipeline, trained on synthetic datasets (derived from verified medical ontologies), built interpretable UI, and implemented OOD safety gating.</p>
               </div>

               <div className="relative">
                 <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center ring-4 ring-background">
                   <Circle className="h-4 w-4 text-white fill-current" />
                 </div>
                 <h4 className="font-bold text-lg text-blue-700">Phase 2: Clinician-in-the-Loop Evaluation (Next)</h4>
                 <p className="text-foreground/80">
                   Qualitative study with primary care physicians to assess workflow fit, explanation utility, and trust calibration.
                   <br/>
                   <span className="text-sm font-semibold text-blue-800 mt-1 inline-block">Target: 10–15 clinicians reviewing simulated triage cases.</span>
                   <Badge variant="outline" className="ml-2">Starting Q2 2026</Badge>
                 </p>
               </div>

               <div className="relative opacity-70">
                 <div className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-muted border-2 border-muted-foreground flex items-center justify-center ring-4 ring-background">
                 </div>
                 <h4 className="font-semibold text-lg">Phase 3: Retrospective Validation</h4>
                 <p className="text-muted-foreground">Rigorous testing on de-identified real-world datasets from partner clinics to benchmark against standard care.</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
