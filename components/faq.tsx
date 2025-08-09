"use client"

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    q: "Is Accuracore Suitable For Small Companies Too?",
    a: "Absolutely. Accuracore scales down gracefully for small teams with simple setup, then grows with you—without switching tools.",
  },
  {
    q: "Can I Assign Different Roles To My Team Members?",
    a: "Yes. Create roles, assign granular permissions, and control access per workspace, board, and record for clean governance.",
  },
  {
    q: "Does Accuracore Automatically Calculate Financials?",
    a: "Invoices, estimates, and payments are tracked end‑to‑end. Accuracore surfaces totals, deltas, and trends automatically.",
  },
  {
    q: "Is Accuracore Cloud‑Based?",
    a: "Accuracore is fully cloud‑based with secure, multi‑region infrastructure for reliability and performance worldwide.",
  },
  {
    q: "Can I Export My Data From The System?",
    a: "You own your data. Export records to CSV or fetch via API at any time for backups, analytics, or migrations.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden" aria-labelledby="faq-title">
      {/* Background gradient: cream -> soft pink on right, very subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 520px at 16% 40%, rgba(248,244,238,0.65), transparent 60%), radial-gradient(1200px 540px at 100% 0%, rgba(245,219,219,0.35), transparent 60%), linear-gradient(180deg, #FBFAF8 0%, #FFFFFF 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Left heading block */}
          <div className="col-span-12 md:col-span-5 lg:col-span-4">
            <h2 id="faq-title" className="text-slate-900 text-[28px] sm:text-[32px] leading-tight">
              <span style={{ fontFamily: "var(--font-sora)" }}>Frequently</span>
              <br />
              <span className="font-semibold" style={{ fontFamily: "var(--font-sora)" }}>
                Asked
              </span>{" "}
              <span style={{ fontFamily: "var(--font-sora)" }}>Questions</span>
            </h2>
          </div>

          {/* Right accordion block */}
          <div className="col-span-12 md:col-span-7 lg:col-span-8">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger
                    className={cn(
                      "group relative w-full text-left",
                      "rounded-[16px] bg-white/95 hover:bg-white",
                      "px-5 sm:px-6 md:px-7 py-4 md:py-[18px]",
                      "shadow-[0_16px_40px_-28px_rgba(2,32,71,0.28)]",
                      "data-[state=open]:shadow-[0_22px_60px_-30px_rgba(2,32,71,0.32)]",
                      "text-[14px] sm:text-[15px] text-slate-800",
                    )}
                  >
                    <span className="pr-8">{f.q}</span>
                    {/* Right chevron exactly aligned */}
                   
                  </AccordionTrigger>
                  <AccordionContent className="px-5 sm:px-6 md:px-7 pt-3 pb-4 text-[14px] text-slate-600">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
