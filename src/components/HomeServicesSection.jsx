"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";

export default function HomeServicesSection() {
  const leftServices = [SERVICES_DATA[0], SERVICES_DATA[2]];
  const rightServices = [SERVICES_DATA[1], SERVICES_DATA[3]];

  return (
    <section
      id="dich-vu-quang-phu"
      className="relative w-full bg-white text-zinc-900 pt-8 sm:pt-10 lg:pt-12 pb-16 sm:pb-24 lg:pb-28 select-none z-20"
    >
      <div className="max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Tiêu đề & Nút Xem tất cả dịch vụ ngang hàng, nằm bên phải */}
        <div className="reveal-on-scroll reveal-slide-right flex items-end justify-between flex-wrap gap-4 mb-12 sm:mb-16 lg:mb-20 pb-4">
          <h2 className="text-[34px] sm:text-[46px] lg:text-[54px] font-bold text-zinc-900 tracking-tight font-sans leading-tight">
            Dịch vụ của chúng tôi
          </h2>

          <Link
            href="/dich-vu"
            className="inline-flex items-center gap-2.5 text-sm sm:text-base font-semibold text-zinc-900 hover:text-[#C1121F] transition-colors group cursor-pointer pb-2"
          >
            <span className="tracking-wide">Xem tất cả dịch vụ</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5 text-[#C1121F]" />
          </Link>
        </div>

        {/* Bố cục 2 cột so le nhẹ nhàng, nhịp điệu đều đặn và hài hòa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
          {/* CỘT TRÁI (Bắt đầu ngay từ trên) */}
          <div className="flex flex-col">
            {/* Mục 1: Khối xe nghi trượng */}
            {leftServices[0] && (
              <Link
                href={`/dich-vu/${leftServices[0].slug}`}
                className="reveal-on-scroll reveal-3d-tilt reveal-delay-1 group block mb-14 sm:mb-18 lg:mb-20 cursor-pointer"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 mb-4 sm:mb-5 rounded-none shadow-sm">
                  <img
                    src={leftServices[0].image}
                    alt={leftServices[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-zinc-900 text-[16px] sm:text-[18px] lg:text-[19px] uppercase tracking-wide group-hover:text-[#C1121F] transition-colors duration-300 mb-2 leading-snug">
                  {leftServices[0].title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 font-normal">
                  {leftServices[0].summary}
                </p>
              </Link>
            )}

            {/* Mục 3: Tượng chân dung thờ gia tiên */}
            {leftServices[1] && (
              <Link
                href={`/dich-vu/${leftServices[1].slug}`}
                className="reveal-on-scroll reveal-3d-tilt reveal-delay-2 group block cursor-pointer"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 mb-4 sm:mb-5 rounded-none shadow-sm">
                  <img
                    src={leftServices[1].image}
                    alt={leftServices[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-zinc-900 text-[16px] sm:text-[18px] lg:text-[19px] uppercase tracking-wide group-hover:text-[#C1121F] transition-colors duration-300 mb-2 leading-snug">
                  {leftServices[1].title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 font-normal">
                  {leftServices[1].summary}
                </p>
              </Link>
            )}
          </div>

          {/* CỘT PHẢI (Lệch đều vừa phải ~64-96px tạo cảm giác so le tinh tế, không quá lớn) */}
          <div className="flex flex-col md:pt-16 lg:pt-20 xl:pt-24">
            {/* Mục 2: Tượng đồng Chủ tịch Hồ Chí Minh */}
            {rightServices[0] && (
              <Link
                href={`/dich-vu/${rightServices[0].slug}`}
                className="reveal-on-scroll reveal-3d-tilt reveal-delay-3 group block mb-14 sm:mb-18 lg:mb-20 cursor-pointer"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 mb-4 sm:mb-5 rounded-none shadow-sm">
                  <img
                    src={rightServices[0].image}
                    alt={rightServices[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-zinc-900 text-[16px] sm:text-[18px] lg:text-[19px] uppercase tracking-wide group-hover:text-[#C1121F] transition-colors duration-300 mb-2 leading-snug">
                  {rightServices[0].title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 font-normal">
                  {rightServices[0].summary}
                </p>
              </Link>
            )}

            {/* Mục 4: Tượng đài mỹ thuật & Quà tặng đối ngoại */}
            {rightServices[1] && (
              <Link
                href={`/dich-vu/${rightServices[1].slug}`}
                className="reveal-on-scroll reveal-3d-tilt reveal-delay-4 group block cursor-pointer"
              >
                <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100 mb-4 sm:mb-5 rounded-none shadow-sm">
                  <img
                    src={rightServices[1].image}
                    alt={rightServices[1].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <h3 className="font-sans font-bold text-zinc-900 text-[16px] sm:text-[18px] lg:text-[19px] uppercase tracking-wide group-hover:text-[#C1121F] transition-colors duration-300 mb-2 leading-snug">
                  {rightServices[1].title}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-[13.5px] leading-relaxed line-clamp-3 font-normal">
                  {rightServices[1].summary}
                </p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
