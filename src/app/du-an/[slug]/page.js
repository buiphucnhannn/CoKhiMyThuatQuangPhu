"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectLightboxModal from "@/components/ProjectLightboxModal";
import { PROJECTS_DATA } from "@/data/projectsData";
import { ArrowRight, ChevronRight, Maximize2, Share2, ArrowLeft } from "lucide-react";

export default function ProjectDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const project = PROJECTS_DATA.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }

  // Other 3 projects for cross-navigation
  const otherProjects = PROJECTS_DATA.filter((p) => p.slug !== slug);

  const handleOpenLightbox = (index) => {
    const formattedItems = project.gallery.map((g) => ({
      title: g.caption,
      subtitle: project.title,
      desc: project.category,
      image: g.url,
    }));
    setLightboxData({
      isOpen: true,
      items: formattedItems,
      currentIndex: index,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxData((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full pt-28 sm:pt-36">
        {/* ============================================================== */}
        {/* PHẦN 1: TEXT NẰM Ở TRÊN CÙNG (TIÊU ĐỀ, NGÀY THÁNG, NỘI DUNG)   */}
        {/* (Theo đúng GHI CHÚ GIAO DIỆN & MẪU SUNBRIGHT ẢNH 3)             */}
        {/* ============================================================== */}
        <section className="relative w-full pb-14 sm:pb-20 border-b border-white/10">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb: Dự án / [Category] / [Tên dự án] */}
            <div className="flex items-center flex-wrap gap-2 text-zinc-400 text-[12.5px] sm:text-[13px] mb-8 sm:mb-12 font-medium">
              <Link
                href="/du-an"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Dự án
              </Link>
              <span className="text-zinc-600">/</span>
              <Link
                href={`/du-an?cat=${encodeURIComponent(project.category)}`}
                className="hover:text-white transition-colors cursor-pointer"
              >
                {project.category}
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-200 line-clamp-1">{project.title}</span>
            </div>

            {/* Bố cục Text: Cột ngày tháng bên trái | Cột Tiêu đề & Nội dung bên phải */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Khối Ngày tháng lớn (Chuẩn Sunbright Ảnh 3) */}
              <div className="lg:col-span-2 flex flex-row lg:flex-col items-baseline lg:items-start gap-2 lg:gap-0 pt-1">
                <span className="font-sans font-bold text-white text-[48px] sm:text-[60px] lg:text-[68px] leading-none tracking-tight">
                  {project.date.day}
                </span>
                <span className="text-zinc-400 text-sm sm:text-base font-semibold uppercase tracking-wider lg:mt-1 font-mono">
                  {project.date.shortMonth}
                </span>
                <span className="text-zinc-500 text-xs font-mono hidden lg:block mt-1">
                  Năm {project.date.year}
                </span>
              </div>

              {/* Tiêu đề lớn & Các đoạn văn nội dung bài viết */}
              <div className="lg:col-span-10 flex flex-col text-left">
                {/* Tiêu đề in hoa đậm nét, sắc sảo */}
                <h1 className="font-sans font-bold text-white text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.12] tracking-tight uppercase">
                  {project.title}
                </h1>

                {/* Các đoạn văn chi tiết (BÀI VIẾT NGUYÊN BẢN CỦA DỰ ÁN) */}
                <div className="mt-8 sm:mt-10 space-y-6 text-zinc-300 text-[15px] sm:text-[16px] lg:text-[16.5px] leading-[1.85] font-normal text-justify">
                  {project.paragraphs.map((p, idx) => (
                    <p key={idx}>
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PHẦN 2: THƯ VIỆN ẢNH (IMAGE GALLERY) DẠNG LƯỚI (GRID) BÊN DƯỚI */}
        {/* (Theo đúng GHI CHÚ GIAO DIỆN & MẪU SUNBRIGHT ẢNH 4 & ẢNH 5)     */}
        {/* ============================================================== */}
        <section className="relative w-full py-14 sm:py-20 bg-[#07080A]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 pb-4 border-b border-white/10">
              <div>
                <span className="text-[#C1121F] text-xs font-mono uppercase tracking-[0.24em] block mb-1">
                  THƯ VIỆN ẢNH HIỆN VẬT
                </span>
                <h2 className="text-white font-bold text-[24px] sm:text-[30px] tracking-tight">
                  Hình ảnh thực tế công trình
                </h2>
              </div>
              <span className="text-zinc-400 text-xs sm:text-sm italic">
                * Nhấp vào ảnh bất kỳ để phóng to toàn màn hình
              </span>
            </div>

            {/* Lưới hình ảnh (Grid) - Chuẩn Ảnh mẫu 4 & 5 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {project.gallery.map((imageItem, idx) => (
                <div
                  key={idx}
                  onClick={() => handleOpenLightbox(idx)}
                  className="group relative aspect-[16/10] overflow-hidden rounded-none border border-white/15 bg-zinc-900 shadow-xl cursor-pointer select-none"
                >
                  <img
                    src={imageItem.url}
                    alt={imageItem.caption}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />
                  {/* Lớp phủ mờ khi hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4" />

                  {/* Nút phóng to ở góc */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Chú thích ảnh ở đáy */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 sm:p-4 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs sm:text-[13px] font-medium leading-snug drop-shadow-md">
                      {imageItem.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PHẦN 3: CÁC DỰ ÁN TIÊU BIỂU KHÁC (ĐIỀU HƯỚNG MƯỢT MÀ)          */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-24 border-t border-white/10">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
              <div>
                <span className="text-[#C1121F] text-xs font-mono uppercase tracking-[0.2em] block mb-1">
                  TIẾP TỤC KHÁM PHÁ
                </span>
                <h3 className="font-bold text-white text-[24px] sm:text-[28px] tracking-tight">
                  Các dự án tiêu biểu khác
                </h3>
              </div>
              <Link
                href="/du-an"
                className="inline-flex items-center gap-2 text-sm text-[#C1121F] hover:text-red-400 transition-colors cursor-pointer"
              >
                <span>Xem tất cả dự án</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {otherProjects.map((p) => (
                <Link
                  key={p.id}
                  href={`/du-an/${p.slug}`}
                  className="group bg-[#111319] border border-white/10 hover:border-[#C1121F]/60 p-5 rounded-none transition-all duration-300 flex flex-col text-left cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden mb-4 bg-black/60 relative">
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-bold text-white bg-black/70 px-2 py-0.5 font-mono">
                      {p.date.fullDate}
                    </span>
                  </div>
                  <span className="text-[#C1121F] text-[11px] font-bold uppercase tracking-wider font-mono">
                    {p.category}
                  </span>
                  <h4 className="text-white group-hover:text-red-400 font-bold text-[15px] sm:text-[16px] mt-1 line-clamp-2 leading-snug transition-colors uppercase">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-zinc-400 text-[13px] line-clamp-2 leading-relaxed">
                    {p.excerpt}
                  </p>
                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400 group-hover:text-white">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Lightbox for zooming photos */}
      <ProjectLightboxModal
        items={lightboxData.isOpen ? lightboxData.items : []}
        currentIndex={lightboxData.currentIndex}
        onNavigate={handleNavigateLightbox}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
