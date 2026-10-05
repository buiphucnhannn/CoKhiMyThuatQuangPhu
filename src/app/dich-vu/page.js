"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SERVICES_DATA } from "@/data/servicesData";
import { ArrowUpRight } from "lucide-react";

export default function DichVuPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-32 relative">
        {/* Ambient red backlight */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C1121F]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header text / Section subtitle */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
            <span className="text-[#C1121F] text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] block mb-3">
              DANH MỤC LĨNH VỰC HOẠT ĐỘNG
            </span>
            <h1 className="text-white font-sans font-bold text-[28px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight">
              Dịch vụ của chúng tôi
            </h1>
            <p className="mt-4 text-zinc-400 text-[14px] sm:text-[16px] leading-relaxed font-normal text-justify sm:text-center px-1 sm:px-0">
              Kết hợp tinh hoa thủ công truyền đời và kỹ thuật số hiện đại, kiến tạo nên các công trình mang giá trị biểu tượng quốc gia.
            </p>
          </div>

          {/* ============================================================== */}
          {/* LƯỚI 4 DỊCH VỤ VỚI STYLE CARD NGHỆ THUẬT CHUẨN SUNBRIGHT (ẢNH 1) */}
          {/* ============================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-8 items-stretch pt-4">
            {SERVICES_DATA.map((service, idx) => {
              // Custom rotation angles for authentic Sunbright look:
              // Card 1 tilts left, Card 2 is upright, Card 3 tilts right, Card 4 tilts slightly left
              const tiltClasses = [
                "-rotate-2 hover:rotate-0",
                "rotate-0 hover:-rotate-1",
                "rotate-2 hover:rotate-0",
                "-rotate-1 hover:rotate-0",
              ];
              const currentTilt = tiltClasses[idx % tiltClasses.length];

              return (
                <Link
                  key={service.id}
                  href={`/dich-vu/${service.slug}`}
                  className="group flex flex-col items-center cursor-pointer select-none text-center"
                >
                  {/* Outer Card with Red Spotlight background */}
                  <div
                    className={`relative w-full aspect-[4/5] max-w-[320px] mx-auto overflow-hidden rounded-none p-4 sm:p-5 flex items-center justify-center transition-all duration-500 ease-out transform ${currentTilt} group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(193,18,31,0.35)]`}
                    style={{
                      background: `radial-gradient(circle at 50% 40%, #B3131B 0%, #4A0508 65%, #180203 100%)`,
                      boxShadow: "0 12px 36px rgba(0,0,0,0.6)",
                    }}
                  >
                    {/* Subtle red spotlight glow inside */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10 pointer-events-none" />

                    {/* Service Feature Image */}
                    <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-none">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover object-center filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)] transition-transform duration-700 group-hover:scale-108"
                      />
                    </div>

                    {/* Corner badge / index */}
                    <span className="absolute top-3 left-3 text-[11px] font-mono font-bold tracking-wider text-white/70 bg-black/40 px-2 py-0.5 backdrop-blur-sm">
                      {service.num}
                    </span>

                    {/* Hover icon indicator */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#C1121F] text-white shadow-lg shadow-[#C1121F]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title underneath the card */}
                  <div className="mt-6 flex flex-col items-center">
                    <h2 className="text-white group-hover:text-[#C1121F] font-sans font-bold text-[18px] sm:text-[20px] leading-tight tracking-tight underline decoration-white/30 group-hover:decoration-[#C1121F] underline-offset-8 transition-colors duration-300 max-w-[260px]">
                      {service.shortTitle}
                    </h2>
                    <span className="mt-3 text-zinc-400 text-[12px] uppercase tracking-widest font-mono">
                      {service.category}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
