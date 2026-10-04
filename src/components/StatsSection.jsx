"use client";

import { Award, Cog, Landmark, Gem } from "lucide-react";

const stats = [
  {
    icon: Award,
    number: "A05 → A80",
    labelLine1: "Đồng hành trong",
    labelLine2: "các đại lễ quốc gia",
  },
  {
    icon: Cog,
    number: "10+",
    labelLine1: "Năm kinh nghiệm",
    labelLine2: "",
  },
  {
    icon: Landmark,
    number: "100+",
    labelLine1: "Công trình, dự án",
    labelLine2: "đã thực hiện",
  },
  {
    icon: Gem,
    number: "100%",
    labelLine1: "Đúng tiến độ",
    labelLine2: "và chất lượng",
  },
];

export default function StatsSection() {
  return (
    <section
      id="con-so"
      className="relative w-full overflow-hidden text-white select-none z-20"
      style={{
        background: "linear-gradient(180deg, #6E0D13 0%, #850F17 50%, #58080C 100%)",
      }}
    >
      {/* ============================================================== */}
      {/* LỚP MỜ CHUYỂN TIẾP ÊM ÁI ĐỈNH STATS VỚI ABOUT (THEO 2 NỬA MÀU NỀN TỰ NHIÊN) */}
      {/* ============================================================== */}
      <div className="absolute top-0 inset-x-0 h-7 sm:h-9 pointer-events-none z-30 flex justify-center">
        <div
          className="w-full max-w-[1620px] 2xl:max-w-[1720px] h-full"
          style={{
            background:
              "linear-gradient(to right, rgba(251, 247, 238, 0.75) 0%, rgba(251, 247, 238, 0.6) 44%, rgba(212, 175, 55, 0.65) 47.5%, rgba(110, 13, 19, 0.75) 52%, rgba(133, 15, 23, 0.85) 100%)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Đường chỉ vàng kim loại mảnh mai chạy dọc tiếp giáp */}
      <div className="absolute top-0 inset-x-0 h-[1.5px] z-30 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 15%, #FFEAA7 50%, rgba(212,175,55,0.3) 85%, transparent 100%)",
            boxShadow: "0 0 8px rgba(229,184,66,0.5)",
          }}
        />
      </div>

      {/* ============================================================== */}
      {/* HOA VĂN TRỐNG ĐỒNG ĐÔNG SƠN CHÌM DÁT VÀNG HOÀNG GIA             */}
      {/* ============================================================== */}
      {/* Trống đồng cánh tả */}
      <div className="absolute -left-12 sm:left-4 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-88 sm:h-88 rounded-full overflow-hidden pointer-events-none opacity-20 mix-blend-screen filter saturate-150">
        <img
          src="/images/generated/trong_dong.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trống đồng cánh hữu */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden pointer-events-none opacity-15 mix-blend-screen filter saturate-150">
        <img
          src="/images/generated/trong_dong.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Ánh sáng chiều sâu nhung đỏ */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 85% 70% at 50% 50%, transparent 20%, rgba(25,1,3,0.55) 100%), linear-gradient(to right, rgba(40,2,5,0.6) 0%, transparent 20%, transparent 80%, rgba(40,2,5,0.6) 100%)",
        }}
      />

      {/* ============================================================== */}
      {/* NỘI DUNG 4 THÔNG SỐ VÀNG KIM CÂN ĐỐI & THOÁNG ĐÃNG              */}
      {/* ============================================================== */}
      <div className="relative z-20 max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12 pt-9 sm:pt-11 lg:pt-12 pb-13 sm:pb-15 lg:pb-18">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-[#E5B842]/25 items-center">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`reveal-on-scroll reveal-pop-up reveal-delay-${index + 1} group flex flex-col items-center text-center px-2 sm:px-6 hover:-translate-y-1`}
              >
                {/* Biểu tượng ánh kim viền hoa văn tròn */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-[#FFE8A3] shadow-[0_4px_18px_rgba(0,0,0,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_26px_rgba(229,184,66,0.6)]"
                  style={{
                    background: "radial-gradient(circle, rgba(229,184,66,0.3) 0%, rgba(133,15,23,0.7) 100%)",
                    border: "1.8px solid rgba(255,232,163,0.55)",
                  }}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
                </div>

                {/* Con số / Ký hiệu ánh vàng kim (Dùng font-serif Playfair Display số lining đều tăm tắp, sang trọng) */}
                <div
                  className="mt-3.5 sm:mt-4 font-serif font-bold tracking-[0.02em] leading-none"
                  style={{
                    fontSize: "clamp(26px, 3.2vw, 42px)",
                    fontVariantNumeric: "lining-nums tabular-nums",
                    background: "linear-gradient(135deg, #FFF9E6 0%, #F5CE68 45%, #C2932B 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.7)) drop-shadow(0 0 14px rgba(229,184,66,0.35))",
                  }}
                >
                  {item.number}
                </div>

                {/* Nhãn mô tả phụ 2 dòng chuẩn mẫu */}
                <div className="mt-2 text-[12px] sm:text-[13px] text-[#FDE8B5]/95 font-medium leading-tight max-w-[210px] drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  <div>{item.labelLine1}</div>
                  {item.labelLine2 && <div className="mt-0.5">{item.labelLine2}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ============================================================== */}
      {/* ĐƯỜNG LƯỢN SÓNG CHỮ S LỤA NGHỆ THUẬT & VIỀN VÀNG KIM NỐI DỰ ÁN */}
      {/* ============================================================== */}
      <div className="absolute bottom-0 inset-x-0 pointer-events-none z-30">
        <svg
          viewBox="0 0 1440 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12 sm:h-16 lg:h-20 block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="statsBottomGoldTrim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9E6D14" stopOpacity="0.85" />
              <stop offset="18%" stopColor="#FFF7DA" stopOpacity="1" />
              <stop offset="45%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="75%" stopColor="#FFEAA7" stopOpacity="1" />
              <stop offset="100%" stopColor="#7E520A" stopOpacity="0.95" />
            </linearGradient>

            <filter id="bottomWaveGlow" x="-10%" y="-40%" width="120%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#D4AF37" floodOpacity="0.75" />
            </filter>

            {/* Pattern tranh thủy mặc ăn khớp tuyệt đối với Dự án bên dưới */}
            <pattern id="statsWaveInkWash" patternUnits="userSpaceOnUse" width="1440" height="900" x="0" y="0">
              <image
                href="/images/generated/projects_ink_wash_bg.jpg"
                width="1440"
                height="900"
                preserveAspectRatio="xMidYMid slice"
                opacity="0.45"
              />
            </pattern>
          </defs>

          {/* Dải giấy kem cuộn lên tạo đường lượn sóng chữ S tự nhiên chuyển vào Dự Án */}
          <path
            d="M 0 90 L 0 40 C 220 58, 420 82, 680 82 C 1000 82, 1260 44, 1440 22 L 1440 90 Z"
            fill="#FAF7F0"
          />

          {/* Lớp vân tranh thủy mặc đồng điệu liền mạch vào Dự Án */}
          <path
            d="M 0 90 L 0 40 C 220 58, 420 82, 680 82 C 1000 82, 1260 44, 1440 22 L 1440 90 Z"
            fill="url(#statsWaveInkWash)"
          />

          {/* Lớp bóng đổ mềm mại dưới viền dải lụa */}
          <path
            d="M 0 42 C 220 60, 420 84, 680 84 C 1000 84, 1260 46, 1440 24"
            stroke="rgba(0,0,0,0.32)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Sợi ruy băng chỉ vàng kim loại uốn lượn sắc sảo */}
          <path
            d="M 0 39 C 220 57, 420 81, 680 81 C 1000 81, 1260 43, 1440 21"
            stroke="url(#statsBottomGoldTrim)"
            strokeWidth="3.4"
            strokeLinecap="round"
            filter="url(#bottomWaveGlow)"
          />

          {/* Điểm sáng kim cương trên sống viền vàng */}
          <path
            d="M 0 38 C 220 56, 420 80, 680 80 C 1000 80, 1260 42, 1440 20"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>
    </section>
  );
}
