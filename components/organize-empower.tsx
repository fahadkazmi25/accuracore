import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export default function OrganizeEmpower() {
  return (
    <section id="organize-empower" className="relative overflow-hidden" aria-labelledby="organize-empower-title">
      {/* Section background: warm-to-cool with gentle glows (matches reference) */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 520px at 95% 0%, rgba(179,211,240,0.45), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(252,222,180,0.35), transparent 60%), linear-gradient(180deg, #F6F4F1 0%, #FFFFFF 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div>
            <h2
              id="organize-empower-title"
              className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              Organize Your Company &amp; <br className="hidden sm:block" />
              Empower Your Team
            </h2>
            <p className="mt-4 text-[15px] sm:text-base leading-7 text-slate-600 max-w-xl">
              Easily create your company profile, onboard team members with ease, assign custom roles, set permissions,
              and manage user access — all from one powerful, centralized dashboard built for control and clarity.
            </p>
          </div>

          {/* Right: glass container with photo and floating form card */}
          <div className="relative">
            {/* Soft glow behind the glass panel */}
            <div className="absolute -inset-6 rounded-[36px] bg-sky-900/5 blur-2xl" aria-hidden />
            <div
              className={cn(
                "relative rounded-[36px] p-5 sm:p-7 md:p-10",
                // glass
                "bg-white/55 backdrop-blur-[10px]",
                "border border-white/70",
                // outer + inner shadows
                "shadow-[0_30px_80px_-40px_rgba(2,32,71,0.28)]",
              )}
            >
              {/* Subtle grain and inner highlight */}
              <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/40" aria-hidden />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[36px] opacity-[0.18] mix-blend-overlay"
                style={{ backgroundImage: "url(/images/grain.png)" }}
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-[36px] bg-[radial-gradient(350px_180px_at_20%_0%,rgba(255,255,255,0.65),transparent_70%)]"
              />

              {/* Stage area to position image and card precisely */}
              <div className="relative h-[360px] sm:h-[420px] md:h-[460px]">
                {/* Portrait image at top-right inside rounded rect */}
                <div className="absolute right-6 sm:right-8 top-6 sm:top-8">
                  <div className="overflow-hidden rounded-[22px] border border-white/80 shadow-[0_18px_50px_-22px_rgba(2,32,71,0.35)]">
                    <Image
                      src="/images/diff-portrait.avif"
                      alt="Team member working at a laptop"
                      width={560}
                      height={520}
                      className="h-[230px] w-[300px] sm:h-[260px] sm:w-[340px] md:h-[300px] md:w-[380px] object-cover"
                    />
                  </div>
                </div>

                {/* Floating “Create Your Company” card bottom-left */}
                <div className="absolute left-4 sm:left-6 bottom-2 sm:bottom-4">
                  <div
                    className={cn(
                      "relative w-[300px] sm:w-[340px] md:w-[360px] rounded-2xl",
                      "bg-white shadow-[0_24px_60px_-24px_rgba(2,32,71,0.35)] border border-slate-100",
                    )}
                  >
                    {/* Soft lifted shadow under card */}
                    <div
                      aria-hidden
                      className="absolute -inset-x-4 h-8 rounded-[28px] bg-slate-900/5 blur-lg"
                    />
                    <div className="relative p-4 sm:p-5">
                      <div
                        className="text-[15px] font-semibold text-slate-900"
                        style={{ fontFamily: "var(--font-sora)" }}
                      >
                        Create Your Company
                      </div>
                      {/* faux fields using dividers like the reference */}
                      <ul className="mt-3 text-[12.5px] text-slate-500">
                        {["Name", "Phone No", "Company Name", "Email Address", "Password"].map((label) => (
                          <li key={label} className="py-2.5 border-b last:border-b-0 border-slate-200/70">
                            {label}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className="mt-4 w-full justify-between rounded-full h-10 px-4 text-white bg-[linear-gradient(90deg,#0E67B3,#0B5598)] hover:brightness-110"
                        style={{ fontFamily: "var(--font-sora)" }}
                      >
                        <span>Create Company</span>
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
