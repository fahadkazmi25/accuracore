"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Slide = { key: string; label: string; src: string; alt: string };

const SLIDES: Slide[] = [
  {
    key: "work",
    label: "Work Order Management",
    src: "/images/slider-work-order.png",
    alt: "Work Order Management",
  },
  {
    key: "smart",
    label: "Smart Dashboard",
    src: "/images/slider-smart.png",
    alt: "Smart Dashboard",
  },
  {
    key: "boards",
    label: "Boards",
    src: "/images/slider-boards.png",
    alt: "Boards",
  },
  {
    key: "contacts",
    label: "Contact Profiles",
    src: "/images/slider-contact.png",
    alt: "Contact Profiles",
  },
  {
    key: "calendar",
    label: "Calendar",
    src: "/images/slider-calendar.png",
    alt: "Calendar",
  },
];

export default function StaticCenterShowcase() {
  const centerIndex = 2; // Boards

  return (
    <section className="relative overflow-hidden bg-[#0B2034] py-16">
      <div className="">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white text-center mb-8"
          style={{ fontFamily: "var(--font-sora)" }}
        >
          Everything You Need To
          <br className="hidden sm:block" /> Run And Grow Your Business
        </h2>

        {/* Pills */}
        <div className="mt-6 flex flex-wrap justify-center gap-2 mb-12">
          {SLIDES.map((s, i) => (
            <span
              key={s.key}
              className={cn(
                "rounded-full px-4 sm:px-5 py-2 text-sm border backdrop-blur",
                i === centerIndex
                  ? "text-white border-white/30 bg-[linear-gradient(90deg,rgba(22,118,197,0.85),rgba(13,88,153,0.85))] shadow-md"
                  : "text-white/80 border-white/15 bg-white/5"
              )}
            >
              {s.label}
            </span>
          ))}
        </div>
<div className="w-full flex items-center justify-center gap-6  py-10">
      {/* Left Image */}
      <div className="relative w-[20%] h-[650px] overflow-hidden rounded-tr-2xl rounded-br-2xl">
        <Image
          src="/images/slider-smart.png"
          alt="Slider Smart"
          fill
          className="object-cover w-full h-full"
        />
        {/* Bluish fade towards right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2744]/80 via-[#0B2744]/50  to-transparent pointer-events-none"></div>
      </div>

      {/* Center Image (bigger) */}
      <div className="relative w-[80%] h-[750px] overflow-hidden rounded-2xl shadow-xl">
        <Image
          src="/images/slider-boards.png"
          alt="Slider Boards"
          width={1600}
        height={900}
        className="w-full h-full rounded-[20px]" // image also has radius to match padding
        priority
        />
      </div>

      {/* Right Image */}
      <div className="relative w-[20%] h-[650px] overflow-hidden rounded-tl-2xl rounded-bl-2xl">
        <Image
          src="/images/slider-contact.png"
          alt="Slider Contact"
          fill
          className="object-cover w-full h-full"
        />
        {/* Bluish fade towards left */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B2744]/80 via-[#0B2744]/50  to-transparent pointer-events-none"></div>
      </div>
    </div>
    
        
      </div>
    </section>
  );
}
