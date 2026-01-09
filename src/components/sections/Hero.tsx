"use client"

import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PlayCircle, ArrowRight, Activity, AlertTriangle, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-28 lg:pb-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto"
        >
          <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none text-foreground leading-tight max-w-3xl">
              Early triage decisions shouldn’t guess.
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed max-w-[700px]">
              Safety-first clinical decision support for primary care and telemedicine — built to <span className="font-bold text-primary">know its limits</span>, not overrule clinicians.
            </p>

            {/* Credibility Anchors */}
            <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-foreground/80 py-2">
              <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full text-emerald-800 border border-emerald-500/20">
                <Activity className="h-4 w-4" /> Calibrated (ECE ≈ 0.02)
              </div>
              <div className="flex items-center gap-2 bg-blue-500/10 px-3 py-1.5 rounded-full text-blue-800 border border-blue-500/20">
                <AlertTriangle className="h-4 w-4" /> Explicit OOD Warnings
              </div>
              <div className="flex items-center gap-2 bg-slate-500/10 px-3 py-1.5 rounded-full text-slate-800 border border-slate-500/20">
                <ShieldCheck className="h-4 w-4" /> No Autonomous Diagnosis
              </div>
            </div>
          </div>
          
          <div className="space-y-6 flex flex-col items-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-lg shadow-lg shadow-primary/20 bg-primary hover:bg-primary/90">
                <Link href="#video">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Innovation Video
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg bg-background/50 backdrop-blur-sm border-2">
                <Link href="#contact">
                  Join Pilot Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground max-w-md bg-muted/50 px-4 py-2 rounded-full">
               <AlertTriangle className="h-3 w-3 text-amber-500 shrink-0" />
               <span>Prototype decision support system. Not a diagnostic medical device.</span>
            </div>
          </div>
        </motion.div>
        
        {/* Decorative background element since image is gone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[800px] w-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      </div>
    </section>
  )
}
