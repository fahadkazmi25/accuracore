"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, KeyRound, ArrowRight, Menu, ChevronRight } from "lucide-react"

type NavItem = { label: string; items?: { label: string; href: string }[] }

const NAV: NavItem[] = [
  {
    label: "About",
    items: [
      { label: "Company", href: "#" },
      { label: "Team", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    label: "Features",
    items: [
      { label: "Dashboards", href: "#" },
      { label: "Workflows", href: "#" },
      { label: "Finance", href: "#" },
    ],
  },
  {
    label: "Solutions",
    items: [
      { label: "SMB", href: "#" },
      { label: "Enterprise", href: "#" },
      { label: "Agencies", href: "#" },
    ],
  },
  {
    label: "Sectors",
    items: [
      { label: "Healthcare", href: "#" },
      { label: "Logistics", href: "#" },
      { label: "SaaS", href: "#" },
    ],
  },
  {
    label: "Services",
    items: [
      { label: "Professional Services", href: "#" },
      { label: "Education", href: "#" },
      { label: "Retail", href: "#" },
    ],
  },
]

export default function SiteHeader({ className }: { className?: string } = { className: "" }) {
  return (
    <div className={cn("sticky top-2 md:top-5 z-50 ", className)} aria-label="Main navigation">
      <div className="container mx-auto max-w-7xl  px-4 md:px-6">
        {/* Pill container that visually blends with hero */}
        <div
          className={cn(
            "mx-auto flex h-[100px] items-center justify-between gap-4",
            "rounded-[999px] border border-white/15",
            // Dark, glassy blue gradient; not white. Subtle transparency + blur for hero integration.
            "bg-[linear-gradient(90deg,rgba(58,84,110,0.55),rgba(75,102,130,0.55),rgba(90,115,141,0.55))]",
            "backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_-12px_rgba(2,32,71,0.6)]",
            "px-3 sm:px-4 md:px-6",
          )}
          style={{ WebkitBackdropFilter: "blur(12px)" }}
          role="navigation"
        >
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0" aria-label="Accuracore Home">
            <Image
              src="/images/logo-white.png"
              alt="Accuracore logo"
              width={112}
              height={62}
              priority
              className="h-[50px] w-auto"
            />
          </Link>

          {/* Center: Desktop nav */}
          <div className="hidden md:flex items-center gap-8 xl:gap-12">
            {NAV.map((item, idx) => (
              <DropdownMenu key={idx}>
                <DropdownMenuTrigger
                  className={cn(
                    "group inline-flex items-center gap-1 outline-none",
                    "text-[15px] text-white/90 hover:text-white transition-colors",
                  )}
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 opacity-80 transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="min-w-[200px] rounded-xl border border-white/10 bg-white/95 backdrop-blur p-1"
                >
                  {(item.items ?? []).map((sub) => (
                    <DropdownMenuItem key={sub.label} asChild className="rounded-lg text-slate-800 focus:bg-slate-100">
                      <Link href={sub.href}>{sub.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </div>

          {/* Right: CTAs (desktop) */}
          <div className="hidden md:flex items-center gap-2">
            {/* White pill login fits inside navbar */}
            <Button
              variant="secondary"
              className={cn(
                "h-9 rounded-full px-6 py-6",
                "bg-white text-[#0E67B3] hover:bg-white/90",
                "border border-white/80",
              )}
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <KeyRound className="h-4 w-4" />
              Login
            </Button>
            {/* Solid blue Book Demo pill */}
            <Button
              asChild
              className={cn(
                "h-9 rounded-full px-6 py-6 text-white",
                "bg-[linear-gradient(90deg,#0E67B3,#0B5598)] hover:brightness-110",
              )}
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <Link href="#book-demo">
                Book Demo <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile: compact CTA + menu */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              asChild
              className={cn("h-8 rounded-full px-3 text-white bg-[#0E67B3] hover:bg-[#0C5CA0]")}
              style={{ fontFamily: "var(--font-sora)" }}
            >
              <Link href="#book-demo">Demo</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-8 w-8 rounded-full text-white hover:bg-white/10"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[88%] sm:w-[380px] bg-white/95 backdrop-blur border-l border-slate-200"
              >
                <SheetHeader>
                  <SheetTitle className="flex items-center gap-2">
                    <Image src="/images/logo-white.png" alt="Accuracore logo" width={92} height={48} />
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-6 space-y-2">
                  {NAV.map((group, i) => (
                    <div key={i} className="rounded-xl border border-slate-200">
                      <div className="px-4 py-2.5 font-medium" style={{ fontFamily: "var(--font-sora)" }}>
                        {group.label}
                      </div>
                      <div className="border-t divide-y">
                        {(group.items ?? []).map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="block px-4 py-2 text-slate-700 hover:bg-slate-100"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-2">
                  <Button className="flex-1 px-6 py-6 rounded-full bg-[#0E67B3] hover:bg-[#0C5CA0]">Book Demo</Button>
                  <Button variant="outline" className="flex-1 px-6 py-6 rounded-full bg-transparent">
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
}
