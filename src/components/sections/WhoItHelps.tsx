"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, BarChart3, Siren, CheckCircle2, FileCheck, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhoItHelps() {
  return (
    <div className="border-t pt-16">
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Clinicians */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-primary/10 p-2 rounded-lg">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg">For Clinicians</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">Faster risk prioritization</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">Clear uncertainty boundaries</span>
            </li>
          </ul>
        </div>

        {/* Health Systems */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-blue-100 p-2 rounded-lg">
              <BarChart3 className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-lg">For Health Systems</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">More consistent front-door decisions</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">Audit-ready triage rationale</span>
            </li>
          </ul>
        </div>

        {/* Pilots & Mentors */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-indigo-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="font-bold text-lg">For Pilots & Mentors</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">Evaluation-ready prototype</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
              <span className="text-muted-foreground text-sm">Scope & limits stated upfront</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
        <Button asChild size="lg" className="shadow-sm">
           <Link href="#contact">
             Join Pilot Program <ArrowRight className="ml-2 h-4 w-4" />
           </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
           <Link href="#contact">
             Request Demo & Brief
           </Link>
        </Button>
      </div>
    </div>
  )
}
