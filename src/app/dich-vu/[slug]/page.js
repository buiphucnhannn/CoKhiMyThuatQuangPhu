"use client";

import { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectLightboxModal from "@/components/ProjectLightboxModal";
import { SERVICES_DATA } from "@/data/servicesData";
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, Sparkles, PhoneCall, Phone } from "lucide-react";

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;

  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const currentService = SERVICES_DATA.find((s) => s.slug === slug);
  if (!currentService) {
    notFound();
  }

  // Other 3 services for cross-navigation
  const otherServices = SERVICES_DATA.filter((s) => s.slug !== slug);

  const handleOpenLightbox = (index) => {
    const formattedItems = currentService.gallery.map((g) => ({
      title: g.caption,
      subtitle: currentService.title,
      desc: currentService.category,
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
        {/* PHẦN HERO: BREADCRUMB, TIÊU ĐỀ LỚN & ĐOẠN VĂN CHUẨN ẢNH MẪU 2 */}
        {/* ============================================================== */}
        <section className="relative w-full pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
          {/* Quầng sáng đỏ mờ tinh tế phía sau */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C1121F]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb: Dịch vụ / [Tên dịch vụ] */}
            <div className="flex items-center justify-center gap-2 text-zinc-400 text-[12.5px] sm:text-[13.5px] mb-6 sm:mb-8 font-medium">
              <Link
                href="/dich-vu"
                className="hover:text-white transition-colors cursor-pointer"
              >
                Dịch vụ
              </Link>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-200">{currentService.title}</span>
            </div>

            {/* Tiêu đề lớn rực rỡ chuẩn Sunbright Hình 2 */}
            <h1 className="text-center font-sans font-bold text-white text-[38px] sm:text-[54px] lg:text-[68px] leading-[1.08] tracking-tight max-w-4xl mx-auto">
              {currentService.title}
            </h1>

            {/* Đoạn văn mô tả sâu sắc, tâm huyết giữa trang */}
            <div className="max-w-3xl mx-auto mt-8 sm:mt-10 text-center">
              <p className="text-zinc-300 text-[15px] sm:text-[16.5px] leading-[1.85] font-normal text-pretty">
                {currentService.detailedQuote}
              </p>
            </div>

            {/* ============================================================== */}
            {/* DẢI ẢNH NGHỆ THUẬT VỚI GÓC NGHIÊNG ĐẶC TRƯNG CHUẨN SUNBRIGHT ẢNH 2 */}
            {/* ============================================================== */}
            <div className="mt-14 sm:mt-20 pt-6">
              <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-6 lg:gap-8 px-2">
                {currentService.gallery.slice(0, 5).map((item, idx) => {
                  const tiltClass = currentService.galleryTiltClasses[idx] || "rotate-0";
                  return (
                    <div
                      key={idx}
                      onClick={() => handleOpenLightbox(idx)}
                      className={`relative aspect-[4/3] w-[140px] sm:w-[190px] lg:w-[230px] rounded-none overflow-hidden border border-white/20 bg-zinc-900 shadow-2xl transition-all duration-500 ease-out transform ${tiltClass} hover:rotate-0 hover:scale-110 hover:z-20 hover:border-[#C1121F] cursor-pointer group select-none`}
                    >
                      <img
                        src={item.url}
                        alt={item.caption}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-2.5">
                        <span className="text-[10px] sm:text-[11px] text-zinc-200 line-clamp-2 leading-tight">
                          {item.caption}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-zinc-500 text-[11.5px] mt-6 italic">
                * Nhấp vào từng ảnh để phóng to chi tiết tác phẩm
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PHẦN NỘI DUNG CHI TIẾT: THÔNG SỐ KỸ THUẬT & QUY TRÌNH CHẾ TÁC */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-24 border-b border-white/10 bg-[#0B0C10]">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Cột trái: Giới thiệu chuyên sâu & Cam kết chất lượng (BỎ BULLET, TONE ĐỎ SANG TRỌNG) */}
              <div className="lg:col-span-7 flex flex-col text-left">
                <span className="text-[#C1121F] text-xs font-mono font-bold uppercase tracking-[0.25em] mb-3 block">
                  TIÊU CHUẨN CHẾ TÁC ĐỘC BẢN
                </span>
                <h2 className="text-white font-bold text-[28px] sm:text-[34px] lg:text-[38px] leading-tight tracking-tight mb-6">
                  Tinh hoa cơ khí mỹ thuật & bản sắc trường tồn
                </h2>

                <p className="text-zinc-300 text-[14.5px] sm:text-[15.5px] leading-[1.85] font-normal mb-8 text-justify">
                  {currentService.fullDescription}
                </p>

                {/* Cam kết chất lượng (Không dùng bullet, không dùng màu vàng, phong cách thẻ viền đỏ tinh tế) */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-1.5 h-4 bg-[#C1121F]" />
                    <h3 className="text-white font-bold text-xs sm:text-[13px] uppercase tracking-[0.2em] font-mono">
                      Cam kết chất lượng từ Cơ Khí Mỹ Thuật Quảng Phú:
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {currentService.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-[9px] shrink-0" />
                        <p className="text-zinc-200 text-[14px] sm:text-[14.5px] leading-relaxed font-normal">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Cột phải: Bảng thông số kỹ thuật dạng hộp vuông vức (Tone đỏ chuẩn nhận diện, KHÔNG DÙNG VÀNG) */}
              <div className="lg:col-span-5 bg-[#12141B] border border-white/15 p-6 sm:p-8 rounded-none shadow-xl">
                <div className="flex items-center gap-2.5 pb-4 border-b border-white/10 mb-6">
                  <ShieldCheck className="w-5 h-5 text-[#C1121F]" />
                  <h3 className="font-bold text-white text-[16px] sm:text-[17px] uppercase tracking-wide">
                    Thông số & Tiêu chuẩn kỹ thuật
                  </h3>
                </div>

                <ul className="space-y-4">
                  {currentService.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-[7px] shrink-0" />
                      <div>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-[#C1121F] font-mono font-medium">
                          {spec.label}
                        </span>
                        <p className="text-white text-[14px] sm:text-[14.5px] font-semibold mt-1 leading-snug">
                          {spec.value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* CTA Box nhỏ trong cột */}
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <p className="text-zinc-400 text-xs mb-4">
                    Liên hệ trực tiếp để trao đổi bản vẽ kỹ thuật & khảo sát công trình
                  </p>
                  <a
                    href="tel:0961031318"
                    className="w-full py-3.5 bg-[#C1121F] hover:bg-[#8F0E17] text-white font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#C1121F]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" />
                    <span>Hotline: 0961 031 318</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* CÁC DỊCH VỤ KHÁC (ĐIỀU HƯỚNG MƯỢT MÀ GIỮA CÁC DỊCH VỤ)         */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-24">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-white/10">
              <div>
                <span className="text-[#C1121F] text-xs font-mono uppercase tracking-[0.2em] block mb-1">
                  KHÁM PHÁ THÊM
                </span>
                <h3 className="font-bold text-white text-[24px] sm:text-[28px] tracking-tight">
                  Các dịch vụ khác của chúng tôi
                </h3>
              </div>
              <Link
                href="/dich-vu"
                className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-[#C1121F] transition-colors cursor-pointer"
              >
                <span>Xem tất cả dịch vụ</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {otherServices.map((service) => (
                <Link
                  key={service.id}
                  href={`/dich-vu/${service.slug}`}
                  className="group bg-[#111319] border border-white/10 hover:border-[#C1121F]/60 p-5 rounded-none transition-all duration-300 flex flex-col text-left cursor-pointer hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden mb-4 bg-black/60 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-2 left-2 text-[10px] font-mono font-bold text-white bg-black/60 px-2 py-0.5">
                      {service.num}
                    </span>
                  </div>
                  <span className="text-[#C1121F] text-[11px] font-bold uppercase tracking-wider font-mono">
                    {service.category}
                  </span>
                  <h4 className="text-white group-hover:text-[#C1121F] font-bold text-[16px] sm:text-[17px] mt-1 line-clamp-2 leading-snug transition-colors">
                    {service.title}
                  </h4>
                  <p className="mt-2 text-zinc-400 text-[13px] line-clamp-2 leading-relaxed">
                    {service.summary}
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
