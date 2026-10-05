"use client";

import { useEffect, useRef, useState } from "react";

const LINE_1 = "We are";
const LINE_2 = "Quảng Phú";
const TOTAL_CHARS = LINE_1.length + LINE_2.length;
const TYPE_SPEED = 130;
const START_DELAY = 550;

export default function HeroSection() {
  const [typed, setTyped] = useState(0);
  const titleRef = useRef(null);
  const timersRef = useRef({ start: null, interval: null });

  // Hiệu ứng gõ từng chữ kiểu Sun Bright: chạy chậm rãi rõ nét,
  // gõ lại từ đầu mỗi khi tiêu đề vào khung nhìn (mới load hay lướt lên/xuống đều thấy)
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTyped(TOTAL_CHARS);
      return;
    }

    const clearTimers = () => {
      if (timersRef.current.start) clearTimeout(timersRef.current.start);
      if (timersRef.current.interval) clearInterval(timersRef.current.interval);
      timersRef.current = { start: null, interval: null };
    };

    const startTyping = () => {
      clearTimers();
      setTyped(0);
      let count = 0;
      timersRef.current.start = setTimeout(() => {
        timersRef.current.interval = setInterval(() => {
          count += 1;
          setTyped(count);
          if (count >= TOTAL_CHARS && timersRef.current.interval) {
            clearInterval(timersRef.current.interval);
            timersRef.current.interval = null;
          }
        }, TYPE_SPEED);
      }, START_DELAY);
    };

    const el = titleRef.current;
    if (!el || !("IntersectionObserver" in window)) {
      startTyping();
      return clearTimers;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          } else {
            clearTimers();
            setTyped(0);
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, []);

  const l1Count = Math.min(typed, LINE_1.length);
  const l2Count = Math.max(0, typed - LINE_1.length);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[600px] lg:h-[100dvh] bg-[#0A0B0E] text-white flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-4 select-none"
    >
      {/* ============================================================== */}
      {/* NỀN ĐEN TỐI GIẢN & QUẦNG ĐỎ TINH TẾ PHÍA BIỂU TRƯỢNG THƯƠNG HIỆU */}
      {/* ============================================================== */}
      <div className="absolute right-10 top-1/2 -translate-x-1/2 w-[450px] sm:w-[650px] lg:w-[850px] h-[450px] sm:h-[650px] lg:h-[850px] bg-[#C1121F]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* ============================================================== */}
      {/* BỐ CỤC CHÍNH: CHỮ TRÁI | LOGO PHẢI CÂN ĐỐI, SANG TRỌNG         */}
      {/* ============================================================== */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* CỘT TẢ: TIÊU ĐỀ GÕ TỪNG CHỮ & ĐOẠN VĂN GIỚI THIỆU */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Headline khổng lồ gõ từng chữ chuẩn Sun Bright */}
            <h1
              ref={titleRef}
              aria-label="We are Quảng Phú"
              className="font-sans font-bold text-white text-[50px] xs:text-[62px] sm:text-[78px] md:text-[90px] lg:text-[98px] xl:text-[110px] leading-[1.02] tracking-tight"
            >
              <span className="block text-white" aria-hidden="true">
                <span>{LINE_1.slice(0, l1Count)}</span>
                <span className="text-transparent select-none">
                  {LINE_1.slice(l1Count)}
                </span>
              </span>
              <span className="inline-flex items-center text-white mt-1" aria-hidden="true">
                <span>{LINE_2.slice(0, l2Count)}</span>
                <span className="text-transparent select-none">
                  {LINE_2.slice(l2Count)}
                </span>
                {/* Con trỏ nhấp nháy chuẩn Sun Bright */}
                <span
                  className="inline-block w-[3.5px] sm:w-[5px] lg:w-[6px] h-[0.8em] bg-white ml-2 sm:ml-3"
                  style={{
                    animation: "cursorBlink 1s step-start infinite",
                  }}
                />
              </span>
            </h1>

            {/* Dòng chữ nhấn mạnh doanh nghiệp */}
            <p className="reveal-on-scroll reveal-float-up mt-6 sm:mt-8 text-zinc-300 text-[15.5px] sm:text-[17.5px] lg:text-[18.5px] leading-relaxed max-w-xl font-normal text-justify">
              Đồng hành cùng những sự kiện, công trình mang giá trị lịch sử và nghệ thuật của dân tộc. Trực tiếp thiết kế, thi công các khối xe nghi trượng Đại lễ Quốc gia từ A05 đến A80 và cụm tượng đài mỹ thuật uy nghiêm.
            </p>
          </div>

          {/* CỘT HỮU: LOGO THƯƠNG HIỆU QUẢNG PHÚ SẮC NÉT, KÍCH THƯỚC VỪA VẶN */}
          <div className="reveal-on-scroll reveal-scale-up lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            {/* Quầng sáng đỏ dịu phía sau logo */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-[#C1121F]/15 rounded-full blur-[70px] pointer-events-none" />

            {/* Logo HD siêu nét chuẩn gốc, scale nhỏ lại vừa vặn tinh tế */}
            <div className="relative w-[210px] h-[210px] sm:w-[280px] sm:h-[280px] lg:w-[340px] lg:h-[340px] xl:w-[380px] xl:h-[380px] select-none flex items-center justify-center p-2">
              <img
                src="/images/logo_brand_hd.png"
                alt="Cơ Khí Mỹ Thuật Quảng Phú"
                className="w-full h-full object-contain filter drop-shadow-[0_10px_28px_rgba(193,18,31,0.4)] transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>

      {/* Lớp mờ hòa đáy hero vào nền section kế tiếp */}
      <div
        className="absolute bottom-0 inset-x-0 h-24 sm:h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, #0A0B0E 100%)",
        }}
      />

      {/* CSS Keyframe con trỏ nhấp nháy */}
      <style jsx>{`
        @keyframes cursorBlink {
          0%, 49% {
            opacity: 1;
          }
          50%, 100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
