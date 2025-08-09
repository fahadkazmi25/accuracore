import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonial() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 500px at 90% -10%, rgba(14,103,179,0.20), transparent 60%), linear-gradient(180deg, #F7FAFF 0%, #FFFFFF 60%)",
        }}
      />
      <div className="relative z-10 container mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-xl md:text-2xl font-medium text-slate-900">
            “Accuracore transformed how we manage daily operations — everything lives in one place. From tasks to
            finances, we’ve reduced context switching and gained clarity.”
          </p>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border">
              <Image src="/images/layer-1.png" alt="Customer portrait" width={96} height={96} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-slate-900">Happy Customer</div>
              <div className="text-slate-500 text-sm">Operations Lead</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
