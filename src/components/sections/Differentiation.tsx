"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GitBranch, AlertCircle, BrainCircuit } from "lucide-react"

export function Differentiation() {
  return (
    <section id="differentiation" className="py-24 bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Positioning</span>
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Why this is different
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto mb-12">
          <Card className="shadow-sm border-dashed bg-background/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-muted rounded-full w-fit mb-2">
                <GitBranch className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg">Protocols / Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground font-medium">Static, rule-heavy, slow to adapt.</p>
              <p className="text-xs text-muted-foreground mt-2">Often rigid for complex presentations.</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-dashed bg-background/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-muted rounded-full w-fit mb-2">
                <AlertCircle className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg">Alerts / Rules Engines</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground font-medium">Noisy, interruptive, high fatigue.</p>
              <p className="text-xs text-muted-foreground mt-2">Integrated but often ignored.</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm border-dashed bg-background/50">
            <CardHeader className="text-center">
              <div className="mx-auto p-3 bg-muted rounded-full w-fit mb-2">
                <BrainCircuit className="h-6 w-6 text-muted-foreground" />
              </div>
              <CardTitle className="text-lg">Black-box AI</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground font-medium">Strong accuracy, weak safety signaling.</p>
              <p className="text-xs text-muted-foreground mt-2">Poor at handling uncertainty.</p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto text-center p-8 bg-background rounded-2xl border shadow-lg">
          <p className="text-xl md:text-2xl font-bold text-foreground">
            Aetherion exists <span className="text-primary underline decoration-2 underline-offset-4">between</span> protocols and black-box AI — prioritizing safe next steps over confident guesses.
          </p>
        </div>
      </div>
    </section>
  )
}
