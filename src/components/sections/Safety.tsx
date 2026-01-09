"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ShieldAlert, AlertTriangle, Eye, Lock, CheckCircle2 } from "lucide-react"

export function Safety() {
  return (
    <section id="safety" className="py-20 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Built to fail safely.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto items-start">
          <div className="grid gap-6">
             <div className="flex items-start space-x-4">
               <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
               <div>
                 <h3 className="font-semibold text-lg">Decision Support</h3>
                 <p className="text-muted-foreground">Designed as decision support, not autonomous diagnosis.</p>
               </div>
             </div>
             
             <div className="flex items-start space-x-4">
               <AlertTriangle className="w-6 h-6 text-primary shrink-0 mt-1" />
               <div>
                 <h3 className="font-semibold text-lg">Conservative Escalation</h3>
                 <p className="text-muted-foreground">Prioritizes conservative escalation when uncertainty is high.</p>
               </div>
             </div>

             <div className="flex items-start space-x-4">
               <Lock className="w-6 h-6 text-primary shrink-0 mt-1" />
               <div>
                 <h3 className="font-semibold text-lg">OOD Warnings</h3>
                 <p className="text-muted-foreground">Explicit warnings for out-of-scope or out-of-distribution cases.</p>
               </div>
             </div>

             <div className="flex items-start space-x-4">
               <Eye className="w-6 h-6 text-primary shrink-0 mt-1" />
               <div>
                 <h3 className="font-semibold text-lg">Clinician-Pulled</h3>
                 <p className="text-muted-foreground">Clinician-pulled workflow reduces alert fatigue.</p>
               </div>
             </div>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full bg-muted/20 p-6 rounded-2xl border">
              <AccordionItem value="scope" className="border-b-0">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline pt-0">Scope & Limits</AccordionTrigger>
                <AccordionContent className="space-y-4 text-muted-foreground pt-4">
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p><span className="font-medium text-foreground">Intended Use:</span> Evaluation and research prototype for clinician decision support.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p><span className="font-medium text-foreground">Not for Autonomous Diagnosis:</span> Does not provide medical diagnoses or treatment prescriptions.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p><span className="font-medium text-foreground">Data Limits:</span> Developed using synthetic datasets derived from medical ontologies; real-world validation is pending.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p><span className="font-medium text-foreground">Out-of-Scope:</span> Not applicable for pediatrics, rare genetic diseases, or trauma cases outside primary care triage scope.</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <p><span className="font-medium text-foreground">Human-in-the-Loop:</span> A qualified clinician must verify all outputs.</p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
