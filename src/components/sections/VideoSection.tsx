"use client"

import { Button } from "@/components/ui/button"
import { Play, Check, ArrowDown } from "lucide-react"
import Link from "next/link"

export function VideoSection() {
  return (
    <section id="video" className="py-24 bg-zinc-950 text-white">
      <div className="container px-4 md:px-6 mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tighter md:text-5xl mb-12">
          Innovation Video
        </h2>

        <div className="mx-auto max-w-5xl aspect-video bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 mb-8 relative group">
           <iframe 
             className="w-full h-full"
             src="https://www.youtube.com/embed/UsxqXzwxDI4?rel=0" 
             title="Aetherion Innovation Video" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin" 
             allowFullScreen
           ></iframe>
        </div>

        {/* Takeaways */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-12 text-sm text-zinc-400">
           <div className="flex items-center gap-2">
             <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="h-4 w-4 text-emerald-500" /></div>
             <span>Why early triage fails under uncertainty</span>
           </div>
           <div className="flex items-center gap-2">
             <div className="bg-emerald-500/20 p-1 rounded-full"><Check className="h-4 w-4 text-emerald-500" /></div>
             <span>How Aetherion signals limits and escalates conservatively</span>
           </div>
        </div>

        {/* Transcript Snippet Area */}
        <div className="max-w-2xl mx-auto text-center bg-white/5 rounded-xl p-6 border border-white/10 mb-12">
           <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 mb-3">Transcript Highlight</h3>
           <p className="text-base text-zinc-300 italic leading-relaxed">
             "...We built Aetherion to solve the 'front door' problem in healthcare. It knows when to speak up—and more importantly, when to stay silent if the data isn't clear."
           </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Button asChild size="lg" className="bg-white text-black hover:bg-zinc-200 text-lg px-8 h-12">
             <a href="https://youtu.be/UsxqXzwxDI4" target="_blank" rel="noopener noreferrer">
               Watch on YouTube
             </a>
           </Button>
           <Button asChild variant="outline" size="lg" className="border-zinc-700 text-zinc-300 hover:bg-zinc-900 hover:text-white h-12">
             <Link href="#evidence">
               See Evidence <ArrowDown className="ml-2 h-4 w-4" />
             </Link>
           </Button>
        </div>
      </div>
    </section>
  )
}
