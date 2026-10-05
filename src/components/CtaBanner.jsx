"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      id="cta"
      className="relative w-full text-white overflow-hidden bg-[#2D0407] -mt-[1px]"
    >
      {/* Chuyển tiếp êm ái từ section trước sang CTA */}
      <div
        className="w-full h-12 sm:h-16 pointer-events-none z-30 relative -mb-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, #111217 0%, rgba(17,18,23,0.6) 40%, rgba(45,4,7,0.85) 75%, #2D0407 100%)",
        }}
      />

      {/* Ảnh nền xưởng sản xuất Quảng Phú tại Bắc Ninh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <img
          src="/images/1790914284663_3763498134712611457_3763498134712611457_5b4c1d51ed154240eeca8113c1ec2f4b.jpg"
          alt="Xưởng cơ khí mỹ thuật Quảng Phú tại Bắc Ninh"
          className="w-full h-full object-cover object-[center_40%]"
        />
        {/* Lớp phủ gradient làm mờ nền để chữ nổi bật sắc nét */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/70 backdrop-blur-[1px]" />
      </div>

      {/* Nội dung chính căn giữa sang trọng */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 sm:py-16 lg:py-20 relative z-20 text-center flex flex-col items-center">
        <span className="text-[#E5B842] text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase mb-3">
          KẾT NỐI TRỰC TIẾP VỚI NGHỆ NHÂN & KỸ SƯ
        </span>

        <h2 className="font-serif text-white font-bold tracking-tight leading-[1.15] text-[26px] xs:text-[30px] sm:text-[38px] lg:text-[44px] drop-shadow-[0_4px_16px_rgba(0,0,0,0.98)] max-w-3xl">
          <span className="block">Bạn đang có một công trình, dự án</span>
          <span className="block mt-1 text-[#FFFBF0]">cần được hiện thực hóa?</span>
        </h2>

        <p className="mt-4 text-zinc-200 text-[14px] sm:text-[16px] leading-relaxed max-w-xl font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
          Hãy liên hệ trực tiếp với chúng tôi. Đội ngũ nghệ nhân và kỹ sư Quảng Phú luôn sẵn sàng khảo sát thực địa, lên bản vẽ kỹ thuật 3D và báo giá tối ưu.
        </p>

        {/* Nút liên hệ trực tiếp: Hotline & Zalo */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          <a
            href="tel:0961031318"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C1121F] hover:bg-[#A30F1A] text-white font-bold text-sm tracking-wide rounded-none shadow-[0_8px_25px_rgba(193,18,31,0.5)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Phone className="w-4 h-4 fill-current text-[#FFF6D4]" />
            <span>Gọi ngay Hotline: 0961 031 318</span>
          </a>

          <a
            href="https://zalo.me/0961031318"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#0068FF] hover:bg-[#0055D4] text-white font-bold text-sm tracking-wide rounded-none shadow-[0_8px_25px_rgba(0,104,255,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Nhắn tin qua Zalo</span>
          </a>
        </div>
      </div>
    </section>
  );
}
