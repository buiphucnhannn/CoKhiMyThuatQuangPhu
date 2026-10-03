"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { TimelineToClientsCurve } from "./SectionDividers";

export default function ParadeTimelineBanner({ onOpenConsultation }) {
  const timelineItems = [
    { year: "1930", image: "/images/generated/step_sketch.jpg" },
    { year: "1945", image: "/images/generated/step_finishing.jpg" },
    { year: "1954", image: "/images/1790914174375_3763498134712611457_3763498134712611457_e54ab99a13033bf058f6a1c62b99828e.jpg" },
    { year: "1975", image: "/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg" },
  ];

  return (
    <section
      id="dai-le"
      className="relative w-full bg-[#0C0D10] text-white pt-10 sm:pt-14 pb-0 overflow-hidden -mt-[1px]"
    >
      {/* Panoramic Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src="/images/1790914174280_3763498134712611457_3763498134712611457_f4251df77b0e623de3471c6cc5f761b7.jpg"
          alt="Đại lễ Ba Đình - Khối xe A80"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Cinematic gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />
        {/* Warm vignette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0C0D10]/70 to-transparent" />
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 relative z-10 flex flex-col justify-between min-h-[400px] sm:min-h-[440px]">
        {/* Top: Heading & CTA */}
        <div className="max-w-md pt-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-[#D4AF37]" />
            <span className="text-[11px] text-[#D4AF37] font-bold tracking-[0.25em] uppercase">
              Lịch sử
            </span>
          </div>

          <h2 className="font-serif text-[28px] sm:text-4xl lg:text-[46px] font-extrabold tracking-tight leading-[1.1]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1C5] via-[#E2B743] to-[#B58623] block">
              MỖI ĐẠI LỄ
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF1C5] via-[#E2B743] to-[#B58623] block">
              MỘT DẤU ẤN
            </span>
          </h2>

          <p className="mt-3 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
            Đồng hành cùng những sự kiện, lịch sử, và dân tộc.
          </p>

          <button
            onClick={onOpenConsultation}
            className="mt-6 group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-white hover:bg-zinc-100 text-[#111215] font-semibold text-[13px] sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Khám phá hành trình</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom: Timeline Thumbnails & A80 Badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 border-t border-white/12">
          {/* Milestone Thumbnails */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 max-w-full">
            {timelineItems.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start flex-shrink-0 group">
                <span className="text-[11px] font-mono text-zinc-300 font-bold mb-1.5 tracking-wider">
                  {item.year}
                </span>
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden border border-white/25 group-hover:border-[#D4AF37] shadow-lg bg-black/40 transition-all duration-300">
                  <img
                    src={item.image}
                    alt={item.year}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-400"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right: Year Range + A80 Badge + Arrow */}
          <div className="flex items-center gap-4 self-end">
            <div className="flex flex-col items-end text-right">
              <span className="text-[10px] text-zinc-400 font-mono tracking-widest">
                2024 — 2025
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#D4AF37] leading-none mt-0.5">
                A80
              </span>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-11 h-11 rounded-full bg-white hover:bg-[#D4AF37] text-zinc-900 flex items-center justify-center shadow-xl transform hover:scale-110 transition-all duration-300"
              aria-label="Xem chi tiết A80"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Wave Divider into Clients */}
      <TimelineToClientsCurve />
    </section>
  );
}
