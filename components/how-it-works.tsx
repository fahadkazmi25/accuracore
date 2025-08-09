import type { ElementType } from "react"
import { cn } from "@/lib/utils"
import { Building2, Workflow, LayoutDashboard } from "lucide-react"

type Step = {
  icon: ElementType
  title: string
  desc: string
}

const steps: Step[] = [
  {
    icon: Building2,
    title: "Create Your Company",
    desc: "Create your workspace in minutes — then invite your team to collaborate.",
  },
  {
    icon: Workflow,
    title: "Build Custom Workflows",
    desc: "Adapt the platform to your process, not the other way around. No templates needed.",
  },
  {
    icon: LayoutDashboard,
    title: "All‑in‑One Control Panel",
    desc: "Stay on top of operations, finances, and team performance — all in one clean interface.",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-it-works-title" className="relative overflow-hidden">
      {/* Warm, subtle gradient background to match reference */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 480px at 8% 6%, rgba(255,208,173,0.12), transparent 55%), linear-gradient(180deg, #F7F4F1 0%, #FFFFFF 60%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20">
        {/* Section heading + subcopy */}
        <div className="max-w-3xl">
          <h2
            id="how-it-works-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            How It Works To Power Your Business
          </h2>
          <p className="mt-3 text-slate-600">
            From setup to execution — see how Accuracore simplifies operations, streamlines workflows, and puts you in
            control.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-8 grid gap-5 md:gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <article
              key={i}
              className={cn(
                "group relative overflow-hidden rounded-[22px] border bg-white p-6 sm:p-7",
                "border-slate-200/70 shadow-[0_18px_40px_-22px_rgba(2,32,71,0.18)]",
                "transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_32px_80px_-28px_rgba(2,32,71,0.28)]",
                "focus-within:-translate-y-0.5",
                // gradient halo on hover/focus
                "before:absolute before:inset-0 before:rounded-[22px] before:content-[''] before:bg-[radial-gradient(220px_120px_at_60%_0%,rgba(14,103,179,0.10),transparent)] before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-100 group-focus:before:opacity-100",
                // subtle inner highlight
                "after:pointer-events-none after:absolute after:inset-0 after:rounded-[22px] after:content-[''] after:ring-1 after:ring-transparent group-hover:after:ring-sky-200/60",
              )}
              tabIndex={0}
            >
              {/* Icon tile */}
              <div className="mb-4">
                <div
                  className={cn(
                    "relative grid h-12 w-12 place-items-center rounded-lg text-white",
                    "bg-[#0E67B3] ring-1 ring-white/20",
                    "shadow-[0_10px_26px_-12px_rgba(14,103,179,0.70)] transition-transform duration-300 group-hover:-translate-y-0.5",
                  )}
                  aria-hidden="true"
                >
                  <s.icon className="h-6 w-6" />
                  {/* soft glow */}
                  <span className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(22px_12px_at_50%_-4px,rgba(255,255,255,0.6),transparent_60%)] opacity-60" />
                </div>
              </div>

              <h3
                className="text-lg sm:text-xl font-semibold text-slate-900"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>

              {/* Micro‑interaction: underline sweep */}
              <span
                className={cn(
                  "mt-5 block h-px w-0 bg-gradient-to-r from-sky-300/80 to-transparent",
                  "transition-all duration-500 group-hover:w-full",
                )}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
