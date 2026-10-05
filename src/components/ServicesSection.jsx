"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

export default function ServicesSection({ onOpenConsultation, onSelectService }) {
  const services = SERVICES_DATA;

  // Helper renderer for a single service card
  const renderCard = (service, originalIndex, delayClass = "") => (
    <div
      key={service.num}
      onClick={() => onSelectService?.(service, originalIndex, services)}
      className={`reveal-on-scroll reveal-float-up ${delayClass} group cursor-pointer select-none flex flex-col`}
    >
      {/* Khung ảnh tỷ lệ 4:3 chuẩn thiết kế kiến trúc, hiển thị trọn vẹn khuôn mặt & thần thái tác phẩm */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-none border border-black/10 group-hover:border-[#B5181C]/50 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.06)] group-hover:shadow-[0_16px_38px_rgba(0,0,0,0.14)] bg-[#EFECE6]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        {/* Lớp ánh sáng bóng bẩy khi hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Khối chữ bên dưới ảnh: Tiêu đề in hoa đậm nét & Mô tả chi tiết */}
      <div className="mt-4 sm:mt-5 flex flex-col text-left">
        {/* Nhãn phân loại nhỏ trang nhã */}
        <span className="text-[11px] sm:text-[11.5px] font-bold text-[#8C6D23] uppercase tracking-[0.16em] mb-1.5">
          {service.category}
        </span>

        {/* Tiêu đề chính in hoa đậm nét chuẩn theo mẫu tham khảo */}
        <h3 className="font-sans font-bold text-[#1C1917] group-hover:text-[#B5181C] text-[16px] sm:text-[18px] lg:text-[19.5px] leading-snug uppercase tracking-tight transition-colors duration-300">
          {service.title}
        </h3>

        {/* Đoạn văn mô tả rõ ràng, trang nhã, dễ đọc */}
        <p className="mt-2.5 text-[#52453E] text-[13px] sm:text-[14px] leading-[1.75] font-normal text-pretty">
          {service.summary || service.desc}
        </p>

        {/* Link chuyển tiếp trực tiếp vào trang chi tiết dịch vụ */}
        <div className="mt-4 pt-3 border-t border-black/8 flex items-center justify-between">
          <Link
            href={`/dich-vu/${service.slug}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-[#B5181C] hover:text-[#800C10] uppercase tracking-wider group/link transition-colors"
          >
            <span>Chi tiết dịch vụ</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <span className="text-[11px] font-mono text-zinc-400">
            Mục {service.num}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="dich-vu"
      className="relative w-full text-zinc-900 pt-10 sm:pt-14 lg:pt-18 pb-12 sm:pb-16 lg:pb-20 overflow-hidden select-none z-10 -mt-[1px] bg-[#FAF7F0]"
    >
      {/* LỚP NỀN GIẤY KEM CỔ ĐIỂN VỚI HỌA TIẾT TRỐNG ĐỒNG ĐÔNG SƠN MỜ NHẸ NHÀNG, ĐỒNG BỘ VỚI HỆ THỐNG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #FAF7F0 0%, rgba(250,247,240,0.95) 25%, rgba(250,247,240,0.92) 75%, #FAF7F0 100%)",
        }}
      />

      {/* Vân hoa văn mờ nhung ấm cúng */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-multiply bg-[radial-gradient(#C2932B_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20">
        {/* ============================================================== */}
        {/* HÀNG TIÊU ĐỀ SECTION: RÕ RÀNG, ĐẲNG CẤP THEO STYLE THAM KHẢO  */}
        {/* ============================================================== */}
        <div className="reveal-on-scroll reveal-slide-right flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14 lg:mb-18">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <span className="w-6 h-[2px] bg-[#B5181C]" />
              <span className="text-[#B5181C] text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase">
                LĨNH VỰC HOẠT ĐỘNG
              </span>
            </div>

            <h2 className="font-serif sm:font-sans text-[#1C1917] font-bold tracking-tight text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.14]">
              Các dịch vụ của chúng tôi
            </h2>

            <p className="mt-3 text-[#5A4D46] text-[13.5px] sm:text-[15px] leading-[1.75]">
              Cung cấp giải pháp cơ khí mỹ thuật toàn diện từ phác thảo ý tưởng, đúc đồng nguyên khối truyền thống đến hoàn thiện công trình quy mô quốc gia.
            </p>
          </div>

          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-black/5 hover:bg-[#B5181C] text-[#1C1917] hover:text-white border border-black/10 hover:border-[#B5181C] transition-all text-xs font-semibold uppercase tracking-wider rounded-none shrink-0 w-fit"
          >
            <span>Trang tổng hợp dịch vụ</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ============================================================== */}
        {/* BỐ CỤC 2 CỘT SO-LE (STAGGERED MASONRY) TRÊN DESKTOP (>= md)    */}
        {/* Cột phải trễ xuống rõ rệt đúng chuẩn thiết kế tham khảo         */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-10 lg:gap-x-16 xl:gap-x-20">
          {/* CỘT TẢ (Dịch vụ 1 & Dịch vụ 3) */}
          <div className="flex flex-col space-y-14 lg:space-y-20">
            {renderCard(services[0], 0, "reveal-delay-1")}
            {renderCard(services[2], 2, "reveal-delay-3")}
          </div>

          {/* CỘT HỮU: BẮT ĐẦU TRỄ XUỐNG DƯỚI (Dịch vụ 2 & Dịch vụ 4) */}
          <div className="flex flex-col space-y-14 lg:space-y-20 pt-24 lg:pt-36">
            {renderCard(services[1], 1, "reveal-delay-2")}
            {renderCard(services[3], 3, "reveal-delay-4")}
          </div>
        </div>

        {/* ============================================================== */}
        {/* GIAO DIỆN MOBILE (< md): 1 CỘT XẾP THẲNG TỰ NHIÊN DỄ ĐỌC       */}
        {/* ============================================================== */}
        <div className="flex flex-col space-y-10 md:hidden">
          {services.map((service, idx) =>
            renderCard(service, idx, `reveal-delay-${idx + 1}`)
          )}
        </div>
      </div>

      {/* ============================================================== */}
      {/* CHUYỂN TIẾP ÊM DỊU HÒA QUYỆN SANG KHÁCH HÀNG (#111217)       */}
      {/* ============================================================== */}
      <div
        className="w-full h-16 sm:h-24 pointer-events-none z-20 relative -mb-[1px]"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(17,18,23,0.35) 40%, rgba(17,18,23,0.85) 75%, #111217 100%)",
        }}
      />
    </section>
  );
}
