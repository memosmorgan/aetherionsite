"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, BarChart3, Siren, AlertOctagon, Check, X } from "lucide-react"

export function Solution() {
  return (
    <section id="solution" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Approach</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl max-w-3xl">
            Decision support that prioritizes safety and clarity.
          </h2>
        </div>

        {/* What Aetherion Is / Is Not */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-background rounded-2xl p-8 border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-emerald-700">
              <Check className="h-6 w-6" /> What Aetherion Is
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-muted-foreground">Workflow-integrated clinical decision support.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-muted-foreground">A "second opinion" for triage ranking.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-muted-foreground">A safety layer for high-risk/uncertain cases.</span>
              </li>
            </ul>
          </div>

          <div className="bg-background rounded-2xl p-8 border shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-red-700">
              <X className="h-6 w-6" /> What Aetherion Is Not
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span className="text-muted-foreground">Autonomous diagnostic AI.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span className="text-muted-foreground">A finalized medical device.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                <span className="text-muted-foreground">A replacement for clinical protocols or physician judgment.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border-0 shadow-lg bg-background hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-blue-700" />
              </div>
              <CardTitle className="text-lg">Ranked Differential</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Provides a ranked list of potential conditions with calibrated likelihoods to support clinical reasoning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center mb-4">
                <Siren className="h-6 w-6 text-indigo-700" />
              </div>
              <CardTitle className="text-lg">Triage Levels</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Categorizes cases from Low to Critical urgency, aligning with standard triage protocols.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-red-700" />
              </div>
              <CardTitle className="text-lg">Red-Flag Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deterministic rule layer catches "cannot miss" signs regardless of AI model output.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-background hover:translate-y-[-4px] transition-transform duration-300">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                <AlertOctagon className="h-6 w-6 text-amber-700" />
              </div>
              <CardTitle className="text-lg">Uncertainty & OOD</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                explicitly warns when a case is uncertain or Out-Of-Distribution (OOD), preventing silent failures.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
