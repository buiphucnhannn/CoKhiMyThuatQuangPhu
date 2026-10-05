"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, Calendar, Tag, ChevronRight, X } from "lucide-react";
import { newsArticles } from "@/data/newsData";

export default function NewsSection() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="w-full text-white select-none">
      {!selectedArticle ? (
        /* ============================================================== */
        /* 1. DANH SÁCH TIN TỨC — STYLE CHUẨN SUNBRIGHT                  */
        /* ============================================================== */
        <div className="flex flex-col">
          {/* Header Tiêu đề */}
          <div className="mb-10 sm:mb-14">
            <span className="text-[#C1121F] text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] block mb-3">
              TIN TỨC & BẢN TIN NGHỀ
            </span>
            <div className="flex items-baseline justify-between flex-wrap gap-4">
              <h1 className="text-white font-sans font-bold text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.08] tracking-tight">
                Tin tức & Sự kiện
              </h1>
            </div>
          </div>

          {/* Danh sách các bài viết theo layout 3 cột: Ngày | Ảnh | Nội dung */}
          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {newsArticles.map((item) => (
              <div
                key={item.id}
                onClick={() => handleSelectArticle(item)}
                className="group cursor-pointer py-9 sm:py-12"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
                  {/* CỘT 1: NGÀY & THÁNG LỚN (BÊN TRÁI) */}
                  <div className="md:col-span-2 lg:col-span-2 flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-0 pt-1">
                    <span className="block text-[38px] sm:text-[48px] lg:text-[52px] font-bold text-white leading-none font-sans tracking-tight">
                      {item.day}
                    </span>
                    <span className="block text-zinc-400 text-xs sm:text-[13px] font-medium uppercase tracking-wider md:mt-1 font-mono">
                      {item.month}
                    </span>
                  </div>

                  {/* CỘT 2: ẢNH THUMBNAIL (Ở GIỮA) */}
                  <div className="md:col-span-4 lg:col-span-4">
                    <div className="aspect-[16/10] overflow-hidden rounded-none border border-white/15 bg-zinc-900 group-hover:border-[#C1121F]/60 transition-colors duration-300 shadow-xl relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                    </div>
                  </div>

                  {/* CỘT 3: TIÊU ĐỀ IN HOA, MÔ TẢ & XEM CHI TIẾT → (BÊN PHẢI) */}
                  <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start text-left pt-1">
                    <span className="text-[#C1121F] text-[11px] font-bold uppercase tracking-widest font-mono mb-2 block">
                      {item.category}
                    </span>

                    <h2 className="font-sans font-bold text-white group-hover:text-red-400 text-[18px] sm:text-[21px] lg:text-[23px] uppercase leading-snug tracking-tight transition-colors duration-300">
                      {item.title}
                    </h2>

                    <p className="mt-3 sm:mt-4 text-zinc-300 text-[13.5px] sm:text-[14.5px] leading-[1.8] line-clamp-3 font-normal text-pretty">
                      {item.summary}
                    </p>

                    <div className="mt-5 pt-2 flex items-center">
                      <span className="inline-flex items-center gap-2 text-white group-hover:text-red-400 text-[13.5px] font-medium tracking-wide transition-colors">
                        <span className="underline underline-offset-4 decoration-white/40 group-hover:decoration-red-400">
                          Xem Chi Tiết
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300 text-[#C1121F] group-hover:text-red-400" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* ============================================================== */
        /* 2. CHI TIẾT BÀI VIẾT — STYLE CHUẨN SUNBRIGHT DETAIL            */
        /* ============================================================== */
        <div className="animate-fadeIn flex flex-col">
          {/* Breadcrumb & Nút quay lại */}
          <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-white/10">
            <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] text-zinc-400">
              <button
                onClick={handleBackToList}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Trang chủ
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              <button
                onClick={handleBackToList}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Tin tức
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
              <span className="text-zinc-200 font-medium line-clamp-1 max-w-[280px] sm:max-w-md">
                {selectedArticle.title}
              </span>
            </nav>

            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white text-[12.5px] font-medium transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Quay lại tin tức</span>
            </button>
          </div>

          {/* Khối Header bài viết: Ngày bên trái | Tiêu đề in hoa lớn bên phải */}
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-10 pt-8 sm:pt-12 pb-8 sm:pb-10 border-b border-white/10">
            {/* Ngày lớn bên trái */}
            <div className="flex sm:flex-col items-baseline sm:items-start gap-2 sm:gap-0 shrink-0 w-24 sm:w-32 pt-1 border-b sm:border-b-0 sm:border-r border-white/15 pb-3 sm:pb-0">
              <span className="text-[44px] sm:text-[56px] font-bold text-white leading-none font-sans tracking-tight">
                {selectedArticle.day}
              </span>
              <span className="text-[14px] sm:text-[15px] text-zinc-400 font-semibold mt-1 uppercase tracking-wider font-mono">
                {selectedArticle.monthShort || selectedArticle.month}
              </span>
            </div>

            {/* Tiêu đề chính in hoa lớn */}
            <div className="flex-1">
              <span className="text-[#C1121F] text-[11px] sm:text-xs font-bold uppercase tracking-widest font-mono block mb-2">
                {selectedArticle.category}
              </span>
              <h1 className="font-sans font-bold text-white text-[22px] sm:text-[28px] lg:text-[34px] uppercase leading-snug tracking-tight">
                {selectedArticle.title}
              </h1>
            </div>
          </div>

          {/* Nội dung bài viết chi tiết */}
          <div className="space-y-6 text-zinc-300 text-[14.5px] sm:text-[16px] leading-[1.85] font-normal text-justify pt-8">
            {selectedArticle.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Khối ảnh minh họa bài viết chất lượng cao */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 mt-10 sm:mt-14 pt-8 border-t border-white/10">
            <div className="aspect-[16/10] overflow-hidden rounded-none border border-white/15 bg-black shadow-2xl">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {selectedArticle.secondaryImage && (
              <div className="aspect-[16/10] overflow-hidden rounded-none border border-white/15 bg-black shadow-2xl">
                <img
                  src={selectedArticle.secondaryImage}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
          </div>

          {/* Chân bài viết: Nút quay lại */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={handleBackToList}
              className="inline-flex items-center gap-2 text-zinc-300 hover:text-white font-medium text-[14px] cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#C1121F]" />
              <span>Xem các bài viết khác</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
