"use client"

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="pt-4 border-t w-full max-w-2xl border-none">
             <p className="text-xs text-muted-foreground">
               © {new Date().getFullYear()} Aetherion. All rights reserved.
             </p>
             <p className="text-xs text-muted-foreground mt-2 max-w-md mx-auto leading-relaxed">
               Aetherion is a clinical decision support prototype. Intended for evaluation and research pilots; not medical advice.
             </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
