"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { scrollToSection } from "@/lib/smoothScroll";

export default function HeroSection({ onOpenConsultation }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const slides = [
    {
      id: "slide-1",
      code: "A80",
      badgeTitle: "KHỐI XE NGHI TRƯỢNG",
      image: "/images/generated/hero_bac_ho_bg.jpg",
      objectPosition: "center 30%",
      titleLine1: "TỪ KIM LOẠI",
      titleLine2: "KIẾN TẠO",
      titleHighlight: "BIỂU TƯỢNG",
      description:
        "Quảng Phú – Cơ khí mỹ thuật, đồng hành cùng những sự kiện, công trình mang giá trị lịch sử và nghệ thuật của dân tộc.",
      primaryCta: "Xem dự án nổi bật",
      primaryHref: "#du-an-noi-bat",
    },
    {
      id: "slide-2",
      code: "A80",
      badgeTitle: "ĐẠI LỄ QUỐC KHÁNH",
      image: "/images/1790914174280_3763498134712611457_3763498134712611457_f4251df77b0e623de3471c6cc5f761b7.jpg",
      objectPosition: "center 40%",
      titleLine1: "HÀO KHÍ NON SÔNG",
      titleLine2: "DẤU ẤN",
      titleHighlight: "ĐẠI LỄ QUỐC GIA",
      description:
        "Trực tiếp thiết kế, thi công và sản xuất các mô hình khối xe nghi trượng quy mô lớn phục vụ các đại lễ kỷ niệm từ A05 đến A80.",
      primaryCta: "Khám phá khối xe A80",
      primaryHref: "#du-an-noi-bat",
    },
    {
      id: "slide-3",
      code: "A70",
      badgeTitle: "CHIẾN THẮNG ĐIỆN BIÊN PHỦ",
      image: "/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg",
      objectPosition: "center 35%",
      titleLine1: "TINH HOA TAY NGHỀ",
      titleLine2: "ĐỘ CHÍNH XÁC",
      titleHighlight: "VÀ THẦN THÁI CAO",
      description:
        "Đội ngũ nghệ nhân tay nghề cao, điêu khắc chân thực và thần thái uy nghiêm trên từng khối đồng từ phác thảo ý tưởng đến bàn giao tận nơi.",
      primaryCta: "Xem quy trình sản xuất",
      primaryHref: "#quy-trinh",
    },
  ];

  useEffect(() => {
    setProgress(0);
    const DURATION = 6000;
    const STEP = 50;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (STEP / DURATION) * 100;
      });
    }, STEP);

    timerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, DURATION);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [currentSlide, slides.length]);

  const handleSelectSlide = (index) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    setProgress(0);
    setCurrentSlide(index);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex flex-col h-[100svh] min-h-[560px]"
    >
      {/* ===== Background Images with Ken Burns crossfade ===== */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className="absolute inset-0"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1)" : "scale(1.08)",
                transition: "opacity 1.4s ease-in-out, transform 8s ease-out",
              }}
            >
              <img
                src={slide.image}
                alt={slide.titleHighlight}
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.objectPosition }}
              />
            </div>
          );
        })}

        {/* Cinematic overlays — trong trẻo, giữ ảnh nền rõ nét ở chân trang để nối tiếp tự nhiên */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-transparent" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 75% 60% at 50% 45%, transparent 35%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* ===== Main Content — căn giữa, gọn để vừa đúng 1 màn hình ===== */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center w-full max-w-[960px] mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-4 sm:pb-5">
        {/* Logo + tên cơ sở giống header, căn giữa */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
          className="flex items-center justify-center gap-3 mb-3 sm:mb-4 animate-fadeIn shrink-0 cursor-pointer"
        >
          <img
            src="/images/logo_brand.png"
            alt="Cơ Khí Mỹ Thuật Quảng Phú"
            className="h-9 sm:h-11 w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(211,47,47,0.45)]"
          />
          <div className="flex flex-col text-left border-l border-white/25 pl-3">
            <span className="text-[11px] uppercase tracking-[0.22em] text-red-500 font-extrabold leading-tight">
              CƠ KHÍ MỸ THUẬT
            </span>
            <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-normal">
              QUẢNG PHÚ
            </span>
          </div>
        </a>

        {/* Headline — Font nghệ thuật Cormorant Upright với nét hoa mỹ, uyển chuyển kiểu chữ hoa thư pháp */}
        <div className="flex flex-col items-center justify-center shrink-0 w-full">
          <h1
            key={`h-${currentSlide}`}
            className="font-monument text-center animate-fadeIn overflow-visible py-1 uppercase"
          >
            <span className="block text-[28px] xs:text-[34px] sm:text-[54px] lg:text-[68px] font-bold text-white leading-[1.12] tracking-[0.02em] sm:tracking-[0.03em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] text-balance overflow-visible pb-[0.04em]">
              {activeSlide.titleLine1}
            </span>
            <span className="block text-[28px] xs:text-[34px] sm:text-[54px] lg:text-[68px] font-bold text-white leading-[1.12] tracking-[0.02em] sm:tracking-[0.03em] drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] mt-1 sm:mt-1.5 text-balance overflow-visible pb-[0.04em]">
              {activeSlide.titleLine2}
            </span>
            <span
              className="block text-[28px] xs:text-[34px] sm:text-[54px] lg:text-[68px] font-bold leading-[1.12] tracking-[0.02em] sm:tracking-[0.03em] mt-1 sm:mt-1.5 text-balance overflow-visible pb-[0.06em]"
              style={{
                background:
                  "linear-gradient(135deg, #FFF6D8 0%, #E5B842 48%, #B38728 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 4px 22px rgba(212,175,55,0.5))",
              }}
            >
              {activeSlide.titleHighlight}
            </span>
          </h1>
        </div>

        {/* Ornament divider — cân đối giữa */}
        <div className="flex items-center justify-center gap-3 mt-2 sm:mt-3 mb-2.5 sm:mb-3 shrink-0" aria-hidden="true">
          <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-[#E5B842]/80 to-transparent" />
          <span className="w-1.5 h-1.5 rotate-45 bg-[#E5B842]" />
          <span className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-[#E5B842]/80 to-transparent" />
        </div>

        {/* Description — nổi bật tự nhiên trực tiếp trên ảnh, KHÔNG dùng nền đè đen */}
        <p
          key={`d-${currentSlide}`}
          className="text-[13px] sm:text-[16px] text-white font-medium sm:font-semibold leading-[1.65] sm:leading-[1.75] text-center text-balance animate-fadeIn max-w-[620px] mx-auto px-2 sm:px-4 shrink-0"
          style={{
            textShadow:
              "0 1px 2px #000, 0 2px 6px rgba(0,0,0,0.95), 0 4px 16px rgba(0,0,0,0.9)",
          }}
        >
          {activeSlide.description}
        </p>

        {/* CTA Buttons — thích ứng mượt mà trên mobile */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto px-4">
          <a
            href={activeSlide.primaryHref}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(activeSlide.primaryHref);
            }}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full text-white font-semibold text-[13px] sm:text-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
            style={{
              background: "linear-gradient(135deg, #C1121F 0%, #9E0B0F 100%)",
              boxShadow:
                "0 8px 32px rgba(193,18,31,0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            <span>{activeSlide.primaryCta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-medium text-[13px] sm:text-sm text-white transition-all hover:bg-white/15 cursor-pointer text-center"
            style={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <span>Nhận tư vấn & báo giá</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ===== Bottom Bar — gọn, nằm trọn trong màn hình ===== */}
      <div className="relative z-20 flex flex-col items-center gap-2 pb-6 sm:pb-8 shrink-0">
        {/* Slide indicators dạng gạch ngang cân đối */}
        <div className="flex items-center justify-center gap-2">
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`relative h-[3px] rounded-full overflow-hidden transition-all duration-500 cursor-pointer ${
                  isActive ? "w-12 bg-white/20" : "w-6 bg-white/25 hover:bg-white/45"
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#C1121F] to-[#E5B842] rounded-full"
                    style={{ width: `${progress}%`, transition: "width 50ms linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Scroll hint cân giữa */}
        <a
          href="#ve-quang-phu"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("ve-quang-phu");
          }}
          className="flex flex-col items-center gap-0.5 text-zinc-400 hover:text-white transition-colors group cursor-pointer"
          aria-label="Cuộn xuống để khám phá"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">
            Cuộn để khám phá
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>

      {/* LỚP MỜ CHUYỂN TIẾP ÊM ÁI CHÂN HERO THEO ĐÚNG 2 NỬA MÀU NỀN CỦA ABOUT */}
      <div
        className="absolute bottom-0 inset-x-0 h-7 sm:h-9 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to right, rgba(251, 247, 238, 0.75) 0%, rgba(251, 247, 238, 0.6) 42%, rgba(212, 175, 55, 0.65) 45.5%, rgba(165, 18, 24, 0.75) 50%, rgba(181, 24, 28, 0.85) 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
    </section>
  );
}
