"use client";

import { Star, Target, Factory } from "lucide-react";
import { WaveLightToDark } from "./SectionDividers";

export default function USPSection() {
  const usps = [
    {
      icon: Star,
      title: "Kinh nghiệm thực chiến",
      desc: "Đã trực tiếp sản xuất các khối xe nghi trượng cho các đại lễ quốc gia.",
    },
    {
      icon: Target,
      title: "Độ chính xác và thần thái cao",
      desc: "Tay nghề cao, khắc họa chân thực, có hồn từ Bác Hồ đến tượng truyền thần.",
    },
    {
      icon: Factory,
      title: "Sản xuất trọn gói và quy mô lớn",
      desc: "Từ thiết kế, đúc/chế tác đến hoàn thiện, bàn giao tận nơi đúng tiến độ.",
    },
  ];

  return (
    <section id="nang-luc" className="relative bg-[#121316] text-white overflow-hidden pb-20">
      {/* Curved transition from preceding light section */}
      <WaveLightToDark />

      {/* Cinematic Workshop Background with Chiaroscuro Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/generated/nang_luc_bg.jpg"
          alt="Xưởng chế tác cơ khí mỹ thuật"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121316] via-[#121316]/85 to-[#121316]/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121316] via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 relative z-10">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            NĂNG LỰC <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-100 to-white">
              TẠO NÊN KHÁC BIỆT
            </span>
          </h2>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {usps.map((usp, idx) => {
            const Icon = usp.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-amber-400/40 p-8 flex flex-col items-center text-center transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl"
              >
                {/* Circular Gold/Red Ring Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-amber-400/40 group-hover:border-amber-400 bg-black/40 flex items-center justify-center text-amber-300 mb-6 shadow-[0_0_20px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 stroke-[1.5]" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors mb-3">
                  {usp.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-zinc-300/90 leading-relaxed font-light">
                  {usp.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
