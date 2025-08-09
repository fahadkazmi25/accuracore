import Image from "next/image"
import { cn } from "@/lib/utils"

type Props = {
  id?: string
  title: string
  desc: string
  image: string
  imageAlt: string
  reverse?: boolean
  className?: string
}

export default function SplitImageSection({ id, title, desc, image, imageAlt, reverse = false, className }: Props) {
  return (
    <section id={id} className={cn("py-14 md:py-20", className)}>
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className={cn("grid lg:grid-cols-2 gap-10 items-center", reverse && "lg:[&>*:first-child]:order-last")}>
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-slate-100 text-slate-600 text-xs px-3 py-1">Product</div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">{title}</h2>
            <p className="text-slate-600 text-lg">{desc}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[32px] bg-slate-900/5 blur-2xl" aria-hidden />
            <div className="relative rounded-[28px] overflow-hidden border bg-white shadow-[0_25px_80px_-30px_rgba(2,32,71,0.35)]">
              <Image
                src={image || "/placeholder.svg"}
                alt={imageAlt}
                width={1200}
                height={900}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
