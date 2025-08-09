import Image from "next/image"
import { cn } from "@/lib/utils"

export default function LovedBy() {
  return (
    <section className="relative overflow-hidden" aria-label="Loved by people and finance teams">
      {/* Section background continues the warm-to-cool wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px 600px at 0% 80%, rgba(252,222,180,0.32), transparent 60%), radial-gradient(1000px 520px at 100% 0%, rgba(179,211,240,0.32), transparent 60%), linear-gradient(180deg, #F6F4F1 0%, #FFFFFF 70%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6 py-14 md:py-20">
        {/* Window banner (exact proportions + generous rounding) */}
        <div
          className={cn(
            "relative mx-auto overflow-hidden",
            "rounded-[32px] sm:rounded-[40px] md:rounded-[48px]",
            "px-6 sm:px-10 md:px-12 py-10 sm:py-12 md:py-16",
            "bg-[linear-gradient(180deg,#1A3A58_0%,#0E2A44_58%,#0B2237_100%)]",
            "border border-white/10",
            "shadow-[0_38px_120px_-45px_rgba(2,32,71,0.60)]",
            "min-h-[320px] sm:min-h-[360px] md:min-h-[420px]",
          )}
        >
          {/* Inner glass highlights */}
          <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-white/10" aria-hidden />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-[0.10] mix-blend-overlay"
            style={{ backgroundImage: "url(/images/grain.png)" }}
          />

          {/* Arc vector overlays (from provided SVG) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left arc cluster */}
            <Image
              src="/images/arc-overlay.svg"
              alt="Decorative arcs"
              width={620}
              height={620}
              className="absolute -left-8 sm:left-0 top-0 opacity-[0.30] -translate-y-6"
              priority
            />
            {/* Bottom-right arc cluster (mirrored and anchored) */}
            <Image
              src="/images/arc-overlay.svg"
              alt="Decorative arcs"
              width={680}
              height={680}
              className="absolute -right-10 bottom-[-40px] opacity-[0.28] -scale-x-100 translate-y-8"
              priority
            />
          </div>

          {/* Glow nodes positioned along arcs */}
          <GlowDot className="left-6 sm:left-8 bottom-[92px]" color="blue" />
          <GlowDot className="right-[26%] top-[110px]" color="orange" />
          <GlowDot className="right-10 bottom-[58px]" color="blue" />

          {/* Copy with inline avatar chips (three, as in screenshot) */}
          <div className="relative mt-12">
            <h3
              className="text-white/95 font-semibold  text-center items-center leading-tight tracking-tight text-[28px] sm:text-[36px] md:text-[44px]"
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {"Loved by people "}
              <AvatarChip src="/images/avatars/ava-2.jpg" alt="Customer 1" bg="amber" />
              {" and finance teams that "}
              <AvatarChip src="/images/avatars/download(8).jpeg" alt="Customer 2" bg="sky" />
              {" care about their "}
              <AvatarChip src="/images/avatars/download(9).jpeg" alt="Customer 3" bg="sky" />
              {" people and their finances"}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

function AvatarChip({
  src,
  alt,
  bg = "sky",
}: {
  src: string
  alt: string
  bg?: "sky" | "amber"
}) {
  const bgClass = bg === "amber" ? "bg-amber-300/80 ring-1 ring-amber-200/80" : "bg-sky-300/80 ring-1 ring-sky-200/80"
  return (
    <span
      className={cn(
        "inline-flex align-middle h-10 w-15 mx-1.5 sm:mx-2 -mb-1 rounded-full  transition-transform duration-200",
        "hover:scale-[1.03]",
        bgClass,
      )}
    >
      <span className="relative block overflow-hidden rounded-full shadow-[0_10px_22px_-12px_rgba(2,32,71,0.70)]">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={80}
          height={80}
          className="h-full w-full object-cover object-center"
          priority
        />
      </span>
    </span>
  )
}

function GlowDot({ className, color }: { className?: string; color: "blue" | "orange" }) {
  const palette =
    color === "blue"
      ? {
          core: "bg-sky-400",
          halo: "after:bg-[radial-gradient(closest-side,rgba(56,189,248,0.85),rgba(56,189,248,0.25),transparent_70%)]",
        }
      : {
          core: "bg-amber-400",
          halo: "after:bg-[radial-gradient(closest-side,rgba(251,191,36,0.85),rgba(251,191,36,0.22),transparent_70%)]",
        }
  return (
    <span
      className={cn(
        "absolute z-[1] grid place-items-center h-5 w-5 rounded-full",
        "after:absolute after:-inset-6 after:rounded-full",
        palette.halo,
        className,
      )}
    >
      <span className={cn("h-3.5 w-3.5 rounded-full ring-2 ring-white/30", palette.core)} />
    </span>
  )
}
