"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ArrowRight, Stethoscope, Video, FileText } from "lucide-react"
import Link from "next/link"

export function GetInvolved() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter md:text-5xl">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Help us shape the future of safe, explainable clinical decision support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Judges */}
          <Card className="flex flex-col border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary">
                <Video className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">Conrad Judges</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                See the system in action via our video and technical evidence.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="#contact">
                  Review Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Clinicians */}
          <Card className="flex flex-col border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-blue-700">
                <Stethoscope className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">Clinicians & Mentors</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Join our expert advisory board or sign up for pilot studies.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full border-blue-200 text-blue-700 hover:bg-blue-50">
                <Link href="#contact">
                  Join Pilot Program <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Partners */}
          <Card className="flex flex-col border-2 border-primary/10 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-indigo-700">
                <FileText className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl">Partners & Investors</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <p className="text-muted-foreground">
                Request a technical deep-dive or executive summary.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild variant="secondary" className="w-full">
                <Link href="#contact">
                  Request Demo & Brief <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
