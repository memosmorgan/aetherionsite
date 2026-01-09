"use client"

import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AlertTriangle, CheckCircle2, AlertOctagon, Activity } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const scenarios = {
  high_risk: {
    label: "High Urgency",
    triageLevel: "Critical",
    triageColor: "destructive",
    uncertainty: "Low",
    ood: "In Distribution",
    differentials: [
      { name: "Acute Myocardial Infarction", prob: 82, color: "bg-red-500" },
      { name: "Pulmonary Embolism", prob: 12, color: "bg-red-300" },
      { name: "Stable Angina", prob: 4, color: "bg-orange-200" }
    ],
    redFlags: ["Chest pain radiating to left arm", "Diaphoresis"]
  },
  uncertain: {
    label: "Moderate Risk / Uncertain",
    triageLevel: "Urgent",
    triageColor: "warning", // Custom handling
    uncertainty: "High",
    ood: "In Distribution",
    differentials: [
      { name: "Viral Upper Respiratory Infection", prob: 45, color: "bg-blue-400" },
      { name: "Acute Bronchitis", prob: 30, color: "bg-blue-300" },
      { name: "Pneumonia (Bacterial)", prob: 15, color: "bg-orange-300" }
    ],
    redFlags: []
  },
  ood: {
    label: "Out of Distribution",
    triageLevel: "Unknown",
    triageColor: "secondary",
    uncertainty: "Critical",
    ood: "Out of Distribution",
    differentials: [],
    redFlags: []
  }
}

export function DemoWidget() {
  const [activeScenario, setActiveScenario] = React.useState<keyof typeof scenarios>("high_risk")
  const data = scenarios[activeScenario]

  return (
    <div className="w-full max-w-md mx-auto bg-background rounded-xl shadow-2xl border border-border/50 overflow-hidden font-sans">
      <div className="bg-muted/50 p-2 border-b flex justify-between items-center">
        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider pl-2">
          Aetherion CDSS v0.9
        </div>
        <div className="flex gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500/50" />
          <div className="h-2 w-2 rounded-full bg-yellow-500/50" />
          <div className="h-2 w-2 rounded-full bg-green-500/50" />
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Scenario Selector */}
        <div className="flex justify-center mb-2">
          <Tabs defaultValue="high_risk" onValueChange={(v) => setActiveScenario(v as any)} className="w-full">
            <TabsList className="grid w-full grid-cols-3 h-8">
              <TabsTrigger value="high_risk" className="text-xs">Critical</TabsTrigger>
              <TabsTrigger value="uncertain" className="text-xs">Uncertain</TabsTrigger>
              <TabsTrigger value="ood" className="text-xs">OOD Case</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {/* Triage Status */}
            <div className="flex items-center justify-between bg-muted/30 p-3 rounded-lg border">
              <div>
                <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">Recommended Triage</span>
                <div className="flex items-center gap-2">
                  <Badge variant={data.triageColor === 'destructive' ? 'destructive' : 'secondary'} className="text-sm px-3 py-1">
                    {data.triageLevel}
                  </Badge>
                  {data.uncertainty === "High" && (
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600/50 text-xs">
                      Uncertainty High
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-muted-foreground uppercase font-bold block mb-1">OOD Status</span>
                <div className={`flex items-center justify-end gap-1 font-mono text-xs ${data.ood === "Out of Distribution" ? "text-red-600 font-bold" : "text-emerald-600"}`}>
                  {data.ood === "Out of Distribution" ? <AlertOctagon className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                  {data.ood}
                </div>
              </div>
            </div>

            {/* Red Flags */}
            {data.redFlags.length > 0 && (
              <Alert variant="destructive" className="py-2">
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle className="text-sm font-bold">Safety Alerts Present</AlertTitle>
                <AlertDescription className="text-xs">
                  <ul className="list-disc list-inside">
                    {data.redFlags.map((flag, i) => (
                      <li key={i}>{flag}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            )}

            {/* Differentials / OOD Warning */}
            <Card className="shadow-none border-0 bg-transparent">
              <CardHeader className="p-0 pb-2">
                <CardTitle className="text-sm font-medium text-foreground">
                  {data.ood === "Out of Distribution" ? "Analysis Paused" : "Top Differentials"}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                {data.ood === "Out of Distribution" ? (
                  <div className="p-4 bg-muted/50 rounded-lg text-center border border-dashed">
                    <AlertOctagon className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Input data deviates significantly from training distribution. Automated scoring suppressed for safety.
                    </p>
                    <p className="text-xs font-bold mt-2 text-foreground">Clinical assessment required.</p>
                  </div>
                ) : (
                  data.differentials.map((diff, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium">{diff.name}</span>
                        <span className="text-muted-foreground font-mono">{diff.prob}%</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${diff.prob}%` }}
                          transition={{ duration: 0.5, delay: 0.1 * i }}
                          className={`h-full ${diff.color}`}
                        />
                      </div>
                    </div>
                  ))
                )}
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <CardFooter className="bg-primary/5 p-3 border-t">
        <div className="flex items-start gap-2 text-[10px] text-muted-foreground leading-tight">
           <Activity className="h-3 w-3 shrink-0 mt-0.5" />
           <p>
             <strong>Demo Output Only.</strong> Probability scores are calibrated estimates. Not a medical diagnosis. Clinician verification required.
           </p>
        </div>
      </CardFooter>
    </div>
  )
}
