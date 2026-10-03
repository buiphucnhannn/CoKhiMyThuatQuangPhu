"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function FeaturedProjectsSection({ onSelectProject }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: "a80-float",
      code: "A80",
      category: "Khối xe nghi trượng",
      title: "Khối Xe Nghi Trượng Quốc Gia A80",
      description: "Mô hình biểu tượng Quốc huy và đoàn xe nghi trượng phục vụ đại lễ 80 năm Quốc khánh.",
      image: "/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg",
      highlight: true,
    },
    {
      id: "a80-parade",
      code: "A80",
      category: "Khối xe nghi trượng",
      title: "Khối Xe Diễu Hành Nghệ Thuật Kim Quy",
      description: "Tạo tác khối rùa vàng và chim hạc cổ truyền kỳ công, hoàn thiện bề mặt dát đồng ánh kim rực rỡ.",
      image: "/images/1790914174280_3763498134712611457_3763498134712611457_f4251df77b0e623de3471c6cc5f761b7.jpg",
      highlight: false,
    },
    {
      id: "dien-bien-phu",
      code: "A70",
      category: "Khối xe nghi trượng",
      title: "Khối Xe 70 Năm Chiến Thắng Điện Biên Phủ",
      description: "Tái hiện tượng đài chiến thắng Điện Biên Phủ và đoàn quân giải phóng trên nền xe nghi trượng hùng tráng.",
      image: "/images/1790914174375_3763498134712611457_3763498134712611457_e54ab99a13033bf058f6a1c62b99828e.jpg",
      highlight: false,
    },
    {
      id: "bac-ho-quoc-gia",
      code: "A05-A80",
      category: "Tượng Bác Hồ",
      title: "Tượng Bác Hồ Vẫy Chào Tại Quảng Trường",
      description: "Chế tác tượng Bác Hồ uy nghiêm chuẩn tỷ lệ vàng và thần thái tại lễ đài trung tâm.",
      image: "/images/1790914174307_3763498134712611457_3763498134712611457_ac5b4699dd9463fc0898c16d464020e3.jpg",
      highlight: false,
    },
  ];

  const categories = [
    { label: "A05 – A80", sub: "Khối xe nghi trượng", anchor: "#cong-trinh" },
    { label: "Tượng đài lớn", sub: "Công trình mỹ thuật", anchor: "#cong-trinh" },
    { label: "Tượng Bác Hồ", sub: "Các kích thước", anchor: "#cong-trinh" },
    { label: "Tượng chân dung thờ", sub: "Dòng họ, gia đình", anchor: "#cong-trinh" },
    { label: "Quà tặng – Trang trí", sub: "Sản phẩm mỹ thuật", anchor: "#cong-trinh" },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="du-an" className="relative bg-[#121316] text-white pt-20 pb-16 overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Top Header & Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Title and Subtitle */}
          <div className="lg:col-span-4 flex flex-col items-start">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-500/40 text-red-400 text-xs font-semibold tracking-wider uppercase mb-5">
              <span>✦</span>
              <span>DỰ ÁN TIÊU BIỂU</span>
              <span>✦</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              DẤU ẤN <br />
              THỰC CHIẾN
            </h2>

            {/* Description */}
            <p className="mt-4 text-zinc-300 text-sm sm:text-base leading-relaxed max-w-sm">
              Những công trình không chỉ để nhìn, mà còn là minh chứng cho năng lực và uy tín của Quảng Phú.
            </p>

            {/* Link Button */}
            <a
              href="#cong-trinh"
              className="mt-8 group inline-flex items-center gap-3 text-sm font-semibold text-zinc-100 hover:text-red-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-red-600 border border-white/15 flex items-center justify-center transition-all">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <span>Khám phá các dự án</span>
            </a>
          </div>

          {/* Right Interactive Carousel */}
          <div className="lg:col-span-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
              {/* Card 1: Featured Main Card */}
              <div
                onClick={() => onSelectProject?.(projects[currentIndex])}
                className="cursor-pointer md:col-span-1 relative rounded-2xl overflow-hidden border-2 border-amber-400/50 shadow-[0_0_30px_rgba(212,175,55,0.2)] bg-black/60 group transition-all duration-300 transform hover:-translate-y-1.5"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-red-600/90 text-white text-[11px] font-bold tracking-wider">
                    {projects[currentIndex].code}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                      {projects[currentIndex].category}
                    </p>
                    <h3 className="font-serif text-lg font-bold text-white leading-snug mt-1">
                      {projects[currentIndex].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 2: Next Preview Card */}
              <div
                onClick={() => onSelectProject?.(projects[(currentIndex + 1) % projects.length])}
                className="cursor-pointer hidden md:block md:col-span-1 relative rounded-2xl overflow-hidden border border-white/15 bg-black/40 group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={projects[(currentIndex + 1) % projects.length].image}
                    alt={projects[(currentIndex + 1) % projects.length].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                      {projects[(currentIndex + 1) % projects.length].category}
                    </p>
                    <h3 className="font-serif text-base font-semibold text-white leading-snug mt-1 line-clamp-2">
                      {projects[(currentIndex + 1) % projects.length].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card 3: Info & Navigation Card */}
              <div className="md:col-span-1 rounded-2xl border border-white/10 bg-[#17181D] p-5 flex flex-col justify-between">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                  <img
                    src={projects[(currentIndex + 2) % projects.length].image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <span className="font-serif text-3xl font-extrabold text-amber-300 tracking-tight">
                    {projects[currentIndex].code}
                  </span>
                  <p className="text-sm font-semibold text-white mt-1">
                    {projects[currentIndex].category}
                  </p>
                  <button
                    onClick={() => onSelectProject?.(projects[currentIndex])}
                    className="mt-2 text-xs text-red-400 hover:text-red-300 inline-flex items-center gap-1 font-medium"
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-white/10">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 flex items-center justify-center text-zinc-300 hover:text-white transition-all"
                    aria-label="Previous project"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-red-600 hover:bg-red-500 text-white flex items-center justify-center shadow-lg shadow-red-900/50 transition-all"
                    aria-label="Next project"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Category Tabs Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.anchor}
              className="group p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-red-500/30 transition-all flex flex-col"
            >
              <span className="font-semibold text-sm text-zinc-200 group-hover:text-amber-300 transition-colors">
                {cat.label}
              </span>
              <span className="text-xs text-zinc-400 mt-0.5">
                {cat.sub}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
