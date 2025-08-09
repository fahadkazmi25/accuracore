import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Mail, Instagram, Send, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SiteFooter() {
  return (
    <footer
      className={cn(
        "relative overflow-hidden border-t border-white/10 text-white",
        // Page background (deep, slightly vignetted)
        "bg-[radial-gradient(1400px_700px_at_90%_-10%,rgba(4,19,33,0.55),transparent_60%),linear-gradient(180deg,#0F2F4D_0%,#0C263F_60%,#0A2036_100%)]",
      )}
      aria-labelledby="footer-title"
    >
      <div className="  pt-15 pl-15">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
          {/* LEFT: Logo, copy, CTA */}
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-white.png"
                alt="Accuracore logo"
                width={120}
                height={40}
                className="h-[60px] w-auto"
                priority
              />
            </div>

            <p
              id="footer-title"
              className="mt-6 max-w-[50ch] text-white/90 leading-[1.45] text-[18px] sm:text-[20px]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Accuracore a complete, enterprise ready platform to manage your business from start to finish, absolutely
              free.
            </p>

            <div className="mt-8">
              <Button
                asChild
                className={cn(
                  "h-10 rounded-full px-5 text-white",
                  "bg-[linear-gradient(90deg,#1676C5,#0E67B3)] hover:brightness-110",
                  "shadow-[0_16px_40px_-24px_rgba(14,103,179,0.65)]",
                )}
                style={{ fontFamily: "var(--font-sora)" }}
              >
                <Link href="#book-demo">
                  <span>Book Demo</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* RIGHT: Lighter-toned panel with precise arcs and copyright inside */}
          <div className="col-span-12 md:col-span-6">
            <RightPanel />
          </div>
        </div>
      </div>
    </footer>
  )
}

function RightPanel() {
  return (
    <div
      className={cn(
        "relative overflow-hidden h-full min-h-[320px]",
        // Bright azure outline on top and left; large radii per reference
        "rounded-tl-[56px]  border-t border-l border-[#1D82D1]/90",
      )}
    >
      {/* Panel fill is a lighter, different blue than page bg */}
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-tl-[56px] ",
          "bg-[linear-gradient(180deg,#123A5E_0%,#0E2F4F_100%)]",
        )}
      />
      {/* Extremely subtle inner ring for crispness */}
      <div className="pointer-events-none absolute inset-0 rounded-tl-[56px]  ring-1 ring-white/5" />

      {/* Arc vector: shifted further to the right and higher to cross top edge (matches crop in reference) */}
      <Image
        src="/images/arc-overlay.svg"
        alt="Decorative arcs"
        width={760}
        height={760}
        className="pointer-events-none absolute -right-28 -top-28 opacity-[0.18] scale-110"
        priority
      />

      {/* Content grid inside the panel */}
      <div className="relative grid grid-cols-12 gap-6 px-6 sm:px-7 md:px-8 pt-8 pb-12">
        {/* CONTACT (left side) */}
        <div className="col-span-7 sm:col-span-6">
          <div
            className="text-[12px] tracking-[0.12em] font-semibold text-white/85"
            style={{ fontFamily: "var(--font-sora)" }}
          >
            CONTACT
          </div>
          <ul className="mt-4 space-y-4 text-white/90">
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/6 border border-white/10">
                <Phone className="h-[18px] w-[18px] text-white/85" />
              </span>
              <span className="text-[15px]">999-999-999</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/6 border border-white/10">
                <Mail className="h-[18px] w-[18px] text-white/85" />
              </span>
              <span className="text-[15px]">Accuracore@.com</span>
            </li>
          </ul>
        </div>

        {/* Concentric rings cluster (right side) */}
        <div className="col-span-5 sm:col-span-6 relative">
          <ClusterRings />
        </div>
      </div>

      {/* Copyright sits INSIDE the panel near bottom-left (precise placement) */}
      <div className="absolute left-7 sm:left-8 bottom-6 text-[13px] text-white/60">© 2023 — Copyright</div>
    </div>
  )
}

function ClusterRings() {
  return (
    <div className="relative h-[260px] md:h-[280px]">
      {/* Outer orbit anchored towards the top to match the crop against the top border */}
      <div className="absolute right-4 -top-4">
        {/* Outer ring */}
        <div className="relative size-[300px] md:size-[320px] rounded-full border border-white/28">
          {/* Inner ring (slightly smaller and brighter) */}
          <div className="absolute left-[18%] top-[18%] size-[64%] rounded-full border border-white/55" />

          {/* Glow nodes placed along the outer ring: ~10 o'clock and ~6 o'clock */}
          <GlowDot className="absolute left-[24%] top-[18%]" />
          <GlowDot className="absolute left-[34%] bottom-[10%]" />

          {/* Follow us label and socials — offset toward the upper-left quadrant of the inner ring */}
          <div className="absolute inset-0">
            <div className="absolute left-[34%] top-[30%] -translate-x-1/2 -translate-y-1/2 text-center">
              <div
                className="text-[12px] tracking-[0.14em] font-semibold text-white/90"
                style={{ fontFamily: "var(--font-sora)" }}
              >
                FOLLOW US
              </div>
              <div className="mt-3 flex items-center justify-center gap-3">
                <Social icon={Instagram} label="Instagram" />
                <Social icon={MessageCircle} label="WhatsApp" />
                <Social icon={Send} label="Telegram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Social({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <button
      aria-label={label}
      className={cn(
        "grid place-items-center h-10 w-10 rounded-full",
        "bg-white/10 hover:bg-white/14",
        "border border-white/18",
        "transition-colors",
        "shadow-[0_10px_26px_-18px_rgba(2,32,71,0.55)]",
      )}
      title={label}
    >
      <Icon className="h-[18px] w-[18px] text-white/88" />
    </button>
  )
}

function GlowDot({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative block h-3.5 w-3.5 rounded-full",
        "bg-sky-400 ring-2 ring-white/30",
        "shadow-[0_0_0_3px_rgba(56,189,248,0.25),0_0_30px_6px_rgba(56,189,248,0.28)]",
        className,
      )}
      aria-hidden
    />
  )
}
