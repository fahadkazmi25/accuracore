import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type HeroProps = { className?: string }

export default function Hero({ className }: HeroProps = { className: "" }) {
  return (
    <section className={cn("overflow-hidden", className)}>
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
  background: `
    radial-gradient(1200px 600px at 25% 0%, rgba(25,99,177,0.25), transparent 55%),
    radial-gradient(900px 700px at 90% 10%, rgba(6,26,46,0.55), rgba(7,21,35,0.0) 60%),
    linear-gradient(180deg, #0B2744 0%, #0A2138 60%, #0A1E33 100%)
  `,
  backgroundColor: "#0A1E33" // fallback solid
}}

      />
      {/* Top decorative ring arc */}
      

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar sits visually inside hero; keep SiteHeader above. */}
        <div className="container mx-auto max-w-7xl px-4 md:px-6 pt-6 md:pt-10" />

        <div className="container mt-10 mx-auto max-w-7xl px-4 md:px-6 ">
          <div className="items-center">
            {/* Left column: copy */}
            <div className="text-center mt-20">
              <h1
                className={cn("text-slate-50 tracking-tight", "text-4xl sm:text-5xl lg:text-6xl leading-[1.07]")}
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {"Streamline Your "}
                 {"Business "}
                
                
                {"With Precision"}
              </h1>

              <p className="mt-6 text-center text-slate-300/90 text-base sm:text-lg leading-relaxed ">
                Accuracore is a powerful platform that brings everything you need into one dashboard —<br/> manage your team,
                track work orders, handle finances, and stay in control of every detail.
              </p>

              <div className="mt-8 justify-center flex flex-col sm:flex-row gap-3">
                <Button
  className="h-11 rounded-full py-6 px-6 bg-[#0E67B3] hover:bg-[#0C5CA0] text-white 
             shadow-[0_12px_30px_-10px_rgba(14,103,179,0.65)] 
             flex items-center justify-center gap-2"
  style={{ fontFamily: "var(--font-sora)" }}
  asChild
>
  <Link href="#book-demo">
    <span>Book Demo</span>
   <ChevronRight className="h-4 w-2" />
  </Link>
</Button>

<Button
  variant="secondary"
  className={cn(
    "h-11 rounded-full py-6 px-6 not-only:flex items-center justify-center gap-2",
    "bg-white text-slate-900 hover:bg-slate-100 border border-white/80"
  )}
  style={{ fontFamily: "var(--font-sora)" }}
  asChild
>
  <Link href="#get-started">
    <span>Get Started Free</span>
    <ChevronRight className="h-4 w-2" />
    {/* <ArrowRight className="h-4 w-4" /> */}
  </Link>
</Button>

              </div>
            </div>

            {/* Right column: visual */}
            
          </div>

          {/* Bottom fade into next section */}
          {/* <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-white" /> */}
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
  <div className="relative mx-auto mt-10 md:mt-12 max-w-[1150px]">
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] p-4 md:p-6", // padding inside
        "border border-white/20 bg-white/10 backdrop-blur-xl", // glassy effect
        "shadow-[0_40px_120px_-45px_rgba(2,32,71,0.60)]"
      )}
    >
      {/* Subtle inner highlight ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" />

      <Image
        src="/images/hero-dashboard.png"
        alt="Accuracore dashboard overview"
        width={1600}
        height={900}
        className="w-full h-auto rounded-[20px]" // image also has radius to match padding
        priority
      />
    </div>
    <div className="h-24" />
  </div>
</div>

    </section>
  )
}
