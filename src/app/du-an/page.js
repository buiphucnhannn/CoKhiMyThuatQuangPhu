"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 2;

export default function DuAnPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const listRef = useRef(null);

  const categories = [
    { id: "all", label: "Tất cả dự án" },
    { id: "Dự án Bộ Ban Ngành", label: "Dự án Bộ Ban Ngành" },
    { id: "Dự án Brand", label: "Dự án Brand" },
    { id: "Dự án Sáng tạo", label: "Dự án Sáng tạo" },
  ];

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentPage(1);
  };

  // Nhận bộ lọc từ query ?cat= (breadcrumb trang chi tiết link sang)
  useEffect(() => {
    const cat = new URLSearchParams(window.location.search).get("cat");
    if (cat && categories.some((c) => c.id === cat)) {
      setSelectedCategory(cat);
      setCurrentPage(1);
    }
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    if (listRef.current) {
      listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => {
          if (selectedCategory === "Dự án Bộ Ban Ngành") {
            return p.category === "Dự án Bộ Ban Ngành" || p.category === "Dự án Quốc gia";
          }
          if (selectedCategory === "Dự án Brand") {
            return p.category === "Dự án Brand" || p.category === "Dự án Văn hóa";
          }
          if (selectedCategory === "Dự án Sáng tạo") {
            return p.category === "Dự án Sáng tạo" || p.category === "Dự án Phát triển";
          }
          return p.category === selectedCategory;
        });

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / ITEMS_PER_PAGE));
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-32 relative">
        {/* Quầng sáng đỏ mờ phía sau */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C1121F]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Title & Filter */}
          <div className="mb-12 sm:mb-16">
            <span className="text-[#C1121F] text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] block mb-3">
              CÔNG TRÌNH & ĐẠI LỄ TIÊU BIỂU
            </span>
            <h1 className="text-white font-sans font-bold text-[28px] sm:text-[50px] lg:text-[60px] leading-[1.08] tracking-tight">
              Dự án Tiêu biểu
            </h1>

            {/* Bộ lọc căn giữa ngang + giữa dọc trong dải */}
            <div className="mt-8 border-y border-white/10 py-3 sm:py-4 flex items-center justify-center flex-wrap gap-y-2 sm:gap-y-3">
              {categories.map((cat, idx) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <div key={cat.id} className="flex items-center">
                    <button
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`relative px-2.5 sm:px-4 py-1.5 text-xs sm:text-[14px] transition-all cursor-pointer select-none font-medium ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      {/* Vòng tròn phác thảo màu đỏ bao quanh khi active */}
                      {isActive && (
                        <svg
                          className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] pointer-events-none text-[#C1121F] stroke-current fill-none z-0"
                          viewBox="0 0 160 50"
                          preserveAspectRatio="none"
                        >
                          <path
                            d="M10 25 C 22 8, 138 6, 150 24 C 156 36, 128 45, 75 45 C 24 45, 6 37, 10 24 C 13 15, 38 9, 65 9"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      <span className="relative z-10">{cat.label}</span>
                    </button>

                    {/* Dấu gạch đứng phân cách giữa các mục */}
                    {idx < categories.length - 1 && (
                      <span className="text-zinc-600 font-light select-none px-1 sm:px-2">
                        |
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ============================================================== */}
          {/* DANH SÁCH DỰ ÁN (STYLE CHUẨN SUNBRIGHT ẢNH 2)                 */}
          {/* 3 Cột: Ngày tháng | Thumbnail ảnh | Tiêu đề, Mô tả, Link      */}
          {/* ============================================================== */}
          <div
            ref={listRef}
            className="flex flex-col divide-y divide-white/10 border-b border-white/10 scroll-mt-28"
          >
            {paginatedProjects.length === 0 ? (
              <div className="py-20 text-center text-zinc-400">
                Chưa có dự án nào trong danh mục này.
              </div>
            ) : (
              paginatedProjects.map((project) => (
                <article
                  key={project.id}
                  className="group/row py-10 sm:py-14"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start">
                    {/* Cột 1: Khối ngày tháng lớn bên trái (Chuẩn Ảnh 2) */}
                    <div className="md:col-span-2 lg:col-span-2 flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-0 pt-1">
                      <span className="font-sans font-bold text-white text-[38px] sm:text-[48px] lg:text-[52px] leading-none tracking-tight">
                        {project.date.day}
                      </span>
                      <span className="text-zinc-400 text-xs sm:text-[13px] font-medium uppercase tracking-wider md:mt-1 font-mono">
                        {project.date.month}
                      </span>
                    </div>

                    {/* Cột 2: Thumbnail ảnh công trình */}
                    <div className="md:col-span-4 lg:col-span-4">
                      <Link
                        href={`/du-an/${project.slug}`}
                        className="block group/thumb relative aspect-[16/10] overflow-hidden rounded-none border border-white/15 bg-zinc-900 shadow-xl cursor-pointer"
                      >
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover object-center group-hover/thumb:scale-106 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/15 group-hover/thumb:bg-transparent transition-colors duration-300" />
                      </Link>
                    </div>

                    {/* Cột 3: Tiêu đề in hoa, Mô tả chi tiết & Link Xem Chi Tiết */}
                    <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-start text-left pt-1">
                      <span className="text-[#C1121F] text-[11px] font-bold uppercase tracking-widest font-mono mb-2">
                        {project.category}
                      </span>

                      <h2 className="font-sans font-bold text-white group-hover/row:text-red-400 text-[18px] sm:text-[21px] lg:text-[23px] leading-snug tracking-tight transition-colors duration-200 uppercase">
                        <Link href={`/du-an/${project.slug}`}>
                          {project.title}
                        </Link>
                      </h2>

                      <p className="mt-3 sm:mt-4 text-zinc-300 text-[13.5px] sm:text-[14.5px] leading-[1.8] font-normal text-justify sm:text-left">
                        {project.excerpt}
                      </p>

                      <div className="mt-5 pt-3">
                        <Link
                          href={`/du-an/${project.slug}`}
                          className="inline-flex items-center gap-2 text-[13.5px] font-medium text-white group-hover/row:text-red-400 group/link transition-colors cursor-pointer"
                        >
                          <span className="underline underline-offset-4 decoration-white/40 group-hover/row:decoration-red-400 group-hover/link:decoration-red-400">
                            Xem Chi Tiết
                          </span>
                          <ArrowRight className="w-4 h-4 group-hover/row:translate-x-1.5 group-hover/link:translate-x-1.5 group-hover/row:text-red-400 transition-all duration-200" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>

          {/* ============================================================== */}
          {/* PHÂN TRANG (PAGINATION) PHÍA DƯỚI                              */}
          {/* ============================================================== */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-10 sm:pt-14 pb-4 text-center sm:text-left">
              {/* Thống kê số lượng */}
              <p className="text-xs sm:text-[13px] text-zinc-400 font-mono">
                Hiển thị trang <span className="text-white font-semibold">{currentPage}</span> / {totalPages} (Tổng {filteredProjects.length} dự án)
              </p>

              {/* Cụm nút chuyển trang */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-zinc-400 transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1.5 text-xs sm:text-[13px]"
                  aria-label="Trang trước"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Trước</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    const isCurrent = currentPage === pageNum;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 text-xs sm:text-[13px] font-medium transition-all cursor-pointer flex items-center justify-center ${
                          isCurrent
                            ? "bg-[#C1121F] text-white font-bold border border-[#C1121F] shadow-lg shadow-[#C1121F]/25"
                            : "bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-white/30 hover:bg-white/10"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-zinc-400 transition-all cursor-pointer disabled:cursor-not-allowed flex items-center gap-1.5 text-xs sm:text-[13px]"
                  aria-label="Trang sau"
                >
                  <span className="hidden sm:inline">Sau</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
