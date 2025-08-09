import type React from "react"
import Image from "next/image"
import { ChevronRight, LayoutGrid, Workflow, BadgeDollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Item = {
  icon: React.ElementType
  title: string
  desc: string
  active?: boolean
}

const items: Item[] = [
  {
    icon: LayoutGrid,
    title: "Unified Dashboard Experience",
    desc: "One Platform. Total Control. Zero Hassle.",
    active: true,
  },
  {
    icon: Workflow,
    title: "Workflow That Matches Your Business",
    desc: "We adapt to you with custom workflows and live updates.",
  },
  {
    icon: BadgeDollarSign,
    title: "Built‑In Financial Intelligence",
    desc: "Budgeting, estimates, invoicing — accurate and audit‑ready.",
  },
]

export default function WhatMakesDifferent() {
  return (
    <section
      id="what-makes-different"
      className="relative overflow-hidden"
      aria-labelledby="what-makes-different-title"
    >
      {/* Warm subtle background to match the screenshot */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
  background: `
    radial-gradient(900px 480px at 10% 10%, rgba(255,205,154,0.10), transparent 60%),
    linear-gradient(180deg, #F8F6F3 0%, #FAF9F7 40%, #FFFFFF 100%)
  `,
}}

      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left column */}
          <div>
            <h2
              id="what-makes-different-title"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              What Makes <span className="text-slate-900">Accuracore</span> Different?
            </h2>

            <div className="mt-8 space-y-5">
              {items.map((item, idx) => (
                <article
                  key={idx}
                  className={cn(
                    "group relative flex items-center gap-4 rounded-2xl border bg-white p-4 sm:p-5",
                    "shadow-[0_18px_40px_-20px_rgba(2,32,71,0.22)]",
                    item.active &&
                      "ring-1 ring-sky-200/60 shadow-[0_28px_60px_-28px_rgba(2,32,71,0.32)] after:absolute after:inset-0 after:-z-10 after:rounded-2xl after:bg-gradient-to-r after:from-sky-100/40 after:to-transparent",
                  )}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0E67B3] text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[17px] sm:text-[18px] font-semibold text-slate-900"
                      style={{ fontFamily: "var(--font-sora)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600" />
                </article>
              ))}
            </div>

            <div className="mt-7">
              <Button
                className=" rounded-full px-6 py-6 text-white bg-[#0E67B3] hover:bg-[#0C5CA0] shadow-[0_12px_30px_-10px_rgba(14,103,179,0.55)]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Book Demo
                <ChevronRight className=" h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="relative">
            {/* Soft glow behind image */}
            <div className="absolute -inset-6 rounded-[28px] bg-sky-900/5 blur-2xl" aria-hidden />
            {/* Main lifestyle image */}
            <div className=" overflow-hidden h-[550px] rounded-[28px] border bg-white shadow-[0_25px_80px_-30px_rgba(2,32,71,0.35)]">
              <Image
                src="/images/diff-portrait.avif"
                alt="Professional using Accuracore"
                width={1100}
                height={1500}
                className="w-full h-full object-cover object-center"
                priority
              />
            </div>

            {/* Floating logo chip (top-left of image) */}
             <div className="absolute bottom-110 -left-10">
              <div className="rounded-2xl border bg-white/95 backdrop-blur px-3 py-2 shadow-[0_12px_30px_-12px_rgba(2,32,71,0.45)]">
                <div className="flex items-center gap-2">
                  <Image src="/images/logo-color.png" alt="Accuracore" width={84} height={24} />
                </div>
              </div>
            </div>

            {/* Dashboard overlay (bottom-right) */}
            <div className="absolute bottom-10 -right-12">
              <div className="max-w-[400px] overflow-hidden rounded-2xl border bg-white shadow-[0_18px_50px_-16px_rgba(2,32,71,0.45)]">
                <Image
                  src="/images/diff-dashboard.png"
                  alt="Accuracore dashboard preview"
                  width={700}
                  height={350}
                  className="w-full h-auto"
                />
              </div>
            </div> 
          </div>
        </div>
      </div>
    </section>
  )
}
