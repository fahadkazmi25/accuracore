import SiteHeader from "@/components/site-header"
import Hero from "@/components/hero"
import WhatMakesDifferent from "@/components/what-makes-different"
import HowItWorks from "@/components/how-it-works"
import SpotlightSlider from "@/components/spotlight-slider"
import SplitImageSection from "@/components/split-image-section"
import TestimonialAdvanced from "@/components/testimonial-advanced"
import FAQ from "@/components/faq"
import SiteFooter from "@/components/site-footer"
import { sora, outfit } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import OrganizeEmpower from "@/components/organize-empower"
import LovedBy from "@/components/loved-by"

export default function Page() {
  return (
    <div className={cn(outfit.variable, sora.variable, "font-[var(--font-outfit)] text-slate-900")}>
      <SiteHeader />
      <main>
        <Hero />
        {/* What Makes Accuracore Different */}
        <WhatMakesDifferent />
        <HowItWorks />
        <SpotlightSlider />
        <OrganizeEmpower />
        <SplitImageSection
          id="notes"
          reverse
          title="Integrated Notes & File Management"
          desc="Capture notes, tag records, and attach files across your workflows. Keep context where work happens."
          image="/images/notes.png"
          imageAlt="Integrated notes composite mockup"
        />
        <LovedBy />
        <TestimonialAdvanced />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  )
}
