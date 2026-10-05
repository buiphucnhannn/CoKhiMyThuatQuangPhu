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
      {/* LỚP MỜ CHUYỂN TIẾP ÊM ÁI ĐỈNH STATS VỚI SECTION PHÍA TRÊN      */}
      {/* ============================================================== */}
      <div
        className="absolute top-0 inset-x-0 h-10 sm:h-14 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to bottom, #0A0B0E 0%, rgba(10,11,14,0.6) 40%, transparent 100%)",
        }}
      />

      {/* ============================================================== */}
      {/* HOA VĂN TRỐNG ĐỒNG ĐÔNG SƠN CHÌM DÁT VÀNG HOÀNG GIA             */}
      {/* ============================================================== */}
      {/* Trống đồng cánh tả */}
      <div className="absolute -left-12 sm:left-4 top-1/2 -translate-y-1/2 w-64 h-64 sm:w-88 sm:h-88 rounded-full overflow-hidden pointer-events-none opacity-20 mix-blend-screen filter saturate-150">
        <img
          src="/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Trống đồng cánh hữu */}
      <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden pointer-events-none opacity-15 mix-blend-screen filter saturate-150">
        <img
          src="/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg"
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
      {/* CHUYỂN TIẾP MỀM MẠI TỰ NHIÊN ĐÁY STATS VÀO DỰ ÁN NỔI BẬT         */}
      {/* ============================================================== */}
      <div
        className="absolute bottom-0 inset-x-0 h-12 sm:h-16 lg:h-20 pointer-events-none z-30"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(88,8,12,0.3) 25%, rgba(250,247,240,0.6) 75%, #FAF7F0 100%)",
        }}
      />
    </section>
  );
}
