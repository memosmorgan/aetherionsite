"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertOctagon, CheckCircle2, XCircle } from "lucide-react"

export function UncertaintyShowcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">The Core Differentiator</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl max-w-4xl">
            Most AI answers questions.<br className="hidden md:block"/> Aetherion answers <span className="text-primary italic">when not to trust itself</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Typical AI Output */}
          <Card className="border-2 border-red-100 bg-red-50/10 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-100 text-red-700 px-3 py-1 text-xs font-bold rounded-bl-lg">
              Typical AI Output
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <XCircle className="h-6 w-6 text-red-500" />
                Silent Failure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-background rounded-lg border shadow-sm">
                <div className="text-sm text-muted-foreground mb-2">Input: Unusual presentation of rare tropical disease</div>
                <div className="font-bold text-lg text-foreground">Diagnosis: Influenza (99% confidence)</div>
                <div className="text-xs text-red-500 font-medium mt-2">❌ Wrong, but highly confident. Dangerous.</div>
              </div>
              <p className="text-sm text-muted-foreground">
                Standard models force a prediction even on data they've never seen, leading to confident hallucinations.
              </p>
            </CardContent>
          </Card>

          {/* Aetherion Output */}
          <Card className="border-2 border-emerald-100 bg-emerald-50/10 shadow-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-bold rounded-bl-lg">
              Aetherion Output
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                Safe Abstention
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="p-4 bg-background rounded-lg border border-emerald-200 shadow-sm">
                 <div className="text-sm text-muted-foreground mb-2">Input: Unusual presentation of rare tropical disease</div>
                 <Alert className="bg-amber-50 border-amber-200 py-2">
                   <AlertOctagon className="h-4 w-4 text-amber-600" />
                   <AlertTitle className="text-amber-800 font-bold text-sm">OOD Warning: Out of Distribution</AlertTitle>
                   <AlertDescription className="text-xs text-amber-700">
                     Case features deviate from training data. Prediction suppressed.
                   </AlertDescription>
                 </Alert>
                 <div className="text-xs text-emerald-600 font-medium mt-2">✅ Safely flags uncertainty. Clinician alerted.</div>
               </div>
               <p className="text-sm text-muted-foreground">
                 Aetherion measures distance from its training distribution. If it doesn't know, it says so.
               </p>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  )
}
