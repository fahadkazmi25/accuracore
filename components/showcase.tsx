import Image from "next/image"

export default function Showcase() {
  return (
    <section id="showcase" className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(14,103,179,0.18), transparent 60%), linear-gradient(180deg, #0E263D 0%, #0B2034 100%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-center gap-2 text-slate-200/80 text-sm">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10">
            Everything You Need To Run And Grow Your Business
          </span>
        </div>
        <div className="mt-8 rounded-[28px] overflow-hidden border border-white/10 shadow-[0_30px_80px_-30px_rgba(2,32,71,0.6)]">
          <Image
            src="/images/hero-dashboard.png"
            alt="Dashboard overview"
            width={1600}
            height={900}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  )
}
