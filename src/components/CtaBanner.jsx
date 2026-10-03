"use client";

import { Phone } from "lucide-react";

export default function CtaBanner({ onOpenConsultation }) {
  return (
    <section
      id="cta"
      className="relative w-full text-white overflow-hidden bg-[#2D0407] -mt-[1px]"
    >
      {/* ============================================================== */}
      {/* VÒM CONG CHUYỂN TIẾP TỪ KHÁCH HÀNG (TỐI) SANG CTA (ĐỎ SƠN MÀI)  */}
      {/* ============================================================== */}
      <div className="w-full pointer-events-none leading-none z-30 relative -mb-[1px]">
        <svg
          viewBox="0 0 1440 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[28px] sm:h-[38px] lg:h-[48px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="ctaGoldCurveTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5E10" stopOpacity="0.3" />
              <stop offset="30%" stopColor="#D4AF37" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FFF2B2" stopOpacity="1" />
              <stop offset="75%" stopColor="#E5C158" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8A5E10" stopOpacity="0.4" />
            </linearGradient>

            <filter id="ctaWaveGlow" x="-10%" y="-80%" width="120%" height="260%">
              <feDropShadow dx="0" dy="2" stdDeviation="3.5" floodColor="#D4AF37" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Vùng phía trên đường cong: Phủ đồng màu than đen #111217 của ClientsSection */}
          <path
            d="M 0 0 H 1440 V 14 C 1220 26, 940 38, 640 38 C 340 38, 140 26, 0 14 Z"
            fill="#111217"
          />

          {/* Dải chỉ vàng kim uốn lượn sắc nét */}
          <path
            d="M 0 14 C 140 26, 340 38, 640 38 C 940 38, 1220 26, 1440 14"
            stroke="url(#ctaGoldCurveTrim)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#ctaWaveGlow)"
          />

          {/* Sống sáng kim cương trắng mảnh trên viền vàng */}
          <path
            d="M 0 15 C 140 27, 340 39, 640 39 C 940 39, 1220 27, 1440 15"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </div>

      {/* ============================================================== */}
      {/* ẢNH NỀN TOÀN CẢNH ĐỒNG BỘ 100%: TƯỢNG ĐỒNG CHIẾN BINH + LỤA ĐỎ */}
      {/* Không chắp vá, hòa sắc đồng nhất và cực kỳ sắc nét             */}
      {/* ============================================================== */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <img
          src="/images/generated/cta_banner_master_bg.jpg"
          alt="Nghệ thuật đúc đồng cơ khí mỹ thuật Quảng Phú"
          className="w-full h-full object-cover object-[center_35%]"
        />
        {/* Lớp phủ chuyển sắc & làm mờ nền nhẹ để chữ nổi bật 100%, không bị chìm */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/50 backdrop-blur-[1.5px]" />
      </div>

      {/* ============================================================== */}
      {/* BỐ CỤC NỘI DUNG: CÂN ĐỐI 3 PHẦN HÀI HÒA & ĐẸP MẮT             */}
      {/* ============================================================== */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 relative z-20">
        {/* ============================================================== */}
        {/* BỐ CỤC ĐỐI XỨNG HOÀNG GIA: NÚT TRÁI - ĐOẠN Ở GIỮA - NÚT PHẢI */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 xl:gap-6">
          {/* Cột Trái: Nút Gửi yêu cầu tư vấn (Nằm bên trái đoạn ở giữa) */}
          <div className="reveal-on-scroll reveal-slide-right hidden lg:flex lg:col-span-3 xl:col-span-3 justify-end items-center">
            <button
              onClick={onOpenConsultation}
              className="group w-full max-w-[220px] h-[52px] rounded-full bg-[#FAF7F0] hover:bg-white text-[#680E14] font-bold text-[14px] shadow-[0_8px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.85)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center shrink-0 border border-[#E5C158]/50"
            >
              <span>Gửi yêu cầu tư vấn</span>
            </button>
          </div>

          {/* Cột Giữa: Tiêu đề 2 dòng đường hoàng + Phụ đề súc tích (KHÔNG BAO GIỜ RỚT CHỮ) */}
          <div className="reveal-on-scroll reveal-scale-up lg:col-span-6 xl:col-span-6 text-center flex flex-col items-center px-2 sm:px-4">
            <h2 className="font-serif text-white font-bold tracking-tight leading-[1.15] text-[25px] xs:text-[28px] sm:text-[34px] lg:text-[40px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)] max-w-2xl mx-auto">
              <span className="block break-words sm:whitespace-normal">Bạn đang có một công trình</span>
              <span className="block mt-0.5 sm:mt-1 text-[#FFFBF0]">cần được hiện thực hóa?</span>
            </h2>

            <p className="mt-3.5 sm:mt-4 text-zinc-100 text-[13px] sm:text-[14.5px] leading-relaxed max-w-lg mx-auto font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Hãy chia sẻ ý tưởng. Đội ngũ Quảng Phú sẽ tư vấn giải pháp phù hợp về thiết kế, chất liệu, quy mô và ngân sách.
            </p>

            {/* Cụm 2 nút hiển thị cho thiết bị Mobile/Tablet (bố trí 2 bên trái - phải cân xứng) */}
            <div className="reveal-on-scroll reveal-float-up flex lg:hidden flex-col sm:flex-row items-center justify-center gap-3 mt-6 w-full max-w-sm mx-auto">
              <button
                onClick={onOpenConsultation}
                className="group w-full sm:w-[200px] h-[48px] sm:h-[50px] rounded-full bg-[#FAF7F0] hover:bg-white text-[#680E14] font-bold text-[14px] shadow-[0_8px_25px_rgba(0,0,0,0.6)] transition-all flex items-center justify-center border border-[#E5C158]/50"
              >
                <span>Gửi yêu cầu tư vấn</span>
              </button>

              <a
                href="tel:0961031318"
                className="w-full sm:w-[210px] h-[48px] sm:h-[50px] rounded-full bg-[#3B070B]/95 hover:bg-[#520B10] border border-[#8B1E24] hover:border-[#D4AF37] text-white font-semibold text-[14px] shadow-[0_4px_18px_rgba(0,0,0,0.5)] transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#E5C158] fill-[#E5C158]" />
                <span>Gọi ngay: 0961 031 318</span>
              </a>
            </div>
          </div>

          {/* Cột Phải: Nút Gọi ngay: 0961 031 318 (Nằm bên phải đoạn ở giữa) */}
          <div className="reveal-on-scroll reveal-slide-left hidden lg:flex lg:col-span-3 xl:col-span-3 justify-start items-center">
            <a
              href="tel:0961031318"
              className="w-full max-w-[230px] h-[52px] rounded-full bg-[#3B070B]/95 hover:bg-[#520B10] border border-[#8B1E24] hover:border-[#D4AF37] text-white font-semibold text-[14px] shadow-[0_4px_18px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_24px_rgba(212,175,55,0.3)] transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 shrink-0"
            >
              <Phone className="w-4 h-4 text-[#E5C158] fill-[#E5C158]" />
              <span>Gọi ngay: 0961 031 318</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
