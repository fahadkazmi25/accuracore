"use client"

import type React from "react"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useMemo, useRef, useState } from "react"

export default function TestimonialAdvanced() {
  const stageRef = useRef<HTMLDivElement | null>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = stageRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setPos({ x, y })
  }

  const ringTransform = useMemo(() => {
    // very subtle parallax lift
    return `translate(${pos.x * 6}px, ${pos.y * 6}px)`
  }, [pos])

  return (
    <section id="testimonial" className="relative overflow-hidden" aria-labelledby="testimonial-title">
      {/* Section BG: cream -> soft pink right gradient like reference */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 10% 30%, rgba(252,222,180,0.30), transparent 60%), radial-gradient(1000px 600px at 100% 0%, rgba(244,214,214,0.24), transparent 60%), linear-gradient(180deg, #FBFAF8 0%, #FFFFFF 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center">
          <h2
            id="testimonial-title"
            className="text-[22px] sm:text-[24px] text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Trusted By Teams Who
          </h2>
          <p
            className="mt-1 text-[26px] sm:text-[30px] md:text-[34px] font-semibold text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            Value Clarity, Control, And Results.
          </p>
        </div>

        {/* Capsule card */}
        <div
          ref={stageRef}
          onMouseMove={handleMouseMove}
          className={cn(
            "relative mt-8 md:mt-10",
            "mx-auto grid items-center",
            "rounded-[200px]",
            "bg-white/92 backdrop-blur-md",
            "border border-white",
            "shadow-[0_50px_120px_-50px_rgba(2,32,71,0.35)]",
            "px-4 py-5 sm:px-6 sm:py-6 md:px-10 md:py-8",
            // layout: fixed height like screenshot
            "min-h-[300px] md:min-h-[360px]",
          )}
          style={{
            gridTemplateColumns: "minmax(260px, 420px) 1fr",
            gap: "2.2rem",
          }}
        >
          {/* Grain + subtle highlight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/50"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.10] mix-blend-overlay"
            style={{ backgroundImage: "url(/images/grain.png)" }}
          />

          {/* Left: Concentric portrait + arcs + glow nodes */}
          <div className="relative h-full flex items-center justify-center">
            {/* Arc vector left (provided SVG) */}
            <Image
              src="/images/arc-overlay.svg"
              alt="Arcs"
              width={520}
              height={520}
              className="pointer-events-none absolute -left-24 md:-left-20 top-1/2 -translate-y-1/2 opacity-[0.40]"
              priority
            />
            {/* Arc vector bottom-right small (mirror) */}
            <Image
              src="/images/arc-overlay.svg"
              alt="Arcs"
              width={360}
              height={360}
              className="pointer-events-none absolute right-10 -bottom-10 opacity-[0.20] -scale-x-100"
              priority
            />

            {/* Concentric circles */}
            <div
              className="relative"
              style={{
                transform: ringTransform,
              }}
            >
              {/* Outer faint ring with gradient stroke mimic */}
              <div className="absolute -inset-10 rounded-full border border-sky-300/40 opacity-60" />
              {/* Middle soft ring */}
              <div className="absolute -inset-6 rounded-full border border-sky-200/50 opacity-70" />
              {/* Main circle container */}
              <div className="relative size-[220px] sm:size-[260px] md:size-[300px] rounded-full grid place-items-center bg-white">
                {/* Image mask */}
                <div className="size-[82%] rounded-full overflow-hidden ring-8 ring-white shadow-[0_30px_80px_-40px_rgba(2,32,71,0.35)]">
                  <Image
                    src="/images/diff-portrait.avif"
                    alt="Sarah Malik"
                    width={640}
                    height={640}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Glow nodes on orbit */}
              <GlowDot className="absolute -left-8 top-1/2 -translate-y-1/2" color="orange" />
              <GlowDot className="absolute -right-3 bottom-6" color="blue" />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="relative">
            <div>
              <div
                className="text-slate-900 font-semibold text-[16px] sm:text-[17px]"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                Sarah Malik,
              </div>
              <p className="mt-2 text-slate-600 leading-7 text-[14.5px] sm:text-[15px] max-w-[56ch]">
                Accuracore transformed how we manage our daily operations. Everything is in one place — from tasks to
                invoices. It’s like having a full operations team inside one dashboard.
              </p>
              {/* Rating */}
              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block h-4 w-4 rounded-[2px] bg-amber-400 shadow-[0_0_0_1px_rgba(251,191,36,0.8)]"
                    aria-hidden
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Pager */}
          <div className="absolute left-1/2 -bottom-7 sm:-bottom-8 -translate-x-1/2">
            <div className="flex items-center gap-3">
              <span className="h-2 w-24 rounded-full bg-[#0E67B3]" aria-label="slide 1 active" />
              <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden />
              <span className="h-2 w-2 rounded-full bg-slate-300" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function GlowDot({ className, color }: { className?: string; color: "blue" | "orange" }) {
  const palette =
    color === "blue"
      ? {
          core: "bg-sky-500",
          halo: "after:bg-[radial-gradient(closest-side,rgba(56,189,248,0.85),rgba(56,189,248,0.20),transparent_70%)]",
        }
      : {
          core: "bg-amber-400",
          halo: "after:bg-[radial-gradient(closest-side,rgba(251,191,36,0.85),rgba(251,191,36,0.18),transparent_70%)]",
        }
  return (
    <span
      className={cn(
        "grid place-items-center h-6 w-6 rounded-full relative",
        "after:absolute after:-inset-6 after:rounded-full",
        palette.halo,
        className,
      )}
      aria-hidden
    >
      <span className={cn("h-3.5 w-3.5 rounded-full ring-2 ring-white/30", palette.core)} />
    </span>
  )
}
