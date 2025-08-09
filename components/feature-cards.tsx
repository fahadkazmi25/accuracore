import { cn } from "@/lib/utils"
import { CheckCircle2, LineChart, FolderKanban } from "lucide-react"

type FeatureCardsProps = { className?: string }

const features = [
  {
    icon: LineChart,
    title: "Intuitive Dashboard Overview",
    desc: "See KPIs, trends, and priorities at a glance with a minimal, precise layout.",
  },
  {
    icon: FolderKanban,
    title: "Workflows That Match Your Business",
    desc: "Adapt the platform to your process with boards, statuses, and templates.",
  },
  {
    icon: CheckCircle2,
    title: "Built‑In Finance & Insights",
    desc: "Track invoices, payments, and performance without leaving your workspace.",
  },
]

export default function FeatureCards({ className }: FeatureCardsProps = { className: "" }) {
  return (
    <section id="features" className={cn("py-14 md:py-20", className)}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-slate-100 text-slate-600 text-xs px-3 py-1">
              What Makes Accuracore Different?
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Designed for clarity, built for scale.
            </h2>
            <p className="text-slate-600 text-lg">
              A structured system that helps your team move faster, stay aligned, and deliver with confidence.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={i} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow transition-shadow">
                <f.icon className="h-5 w-5 text-[#0E67B3]" />
                <h3 className="mt-3 font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
