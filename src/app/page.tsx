"use client"

import { Navbar } from "@/components/sections/Navbar"
import { Hero } from "@/components/sections/Hero"
import { SystemFlow } from "@/components/sections/SystemFlow"
import { Problem } from "@/components/sections/Problem"
import { UncertaintyShowcase } from "@/components/sections/UncertaintyShowcase"
import { Solution } from "@/components/sections/Solution"
import { Evidence } from "@/components/sections/Evidence"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Safety } from "@/components/sections/Safety"
import { Differentiation } from "@/components/sections/Differentiation"
import { VideoSection } from "@/components/sections/VideoSection"
import { Team } from "@/components/sections/Team"
import { ContactSection } from "@/components/sections/ContactSection"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex flex-col selection:bg-primary/20">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SystemFlow />
        <UncertaintyShowcase />
        <Problem />
        <Solution />
        <Evidence />
        <HowItWorks />
        <Safety />
        <Differentiation />
        <VideoSection />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
