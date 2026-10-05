"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HomeServicesSection from "@/components/HomeServicesSection";
import ClientsSection from "@/components/ClientsSection";
import Footer from "@/components/Footer";
import VideoModal from "@/components/VideoModal";
import ProjectLightboxModal from "@/components/ProjectLightboxModal";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import { scrollToSection } from "@/lib/smoothScroll";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxData((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  // Đón hash (#section) khi từ trang khác điều hướng về: lướt mượt tới đúng vị trí rồi xóa hash
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (hash) {
      const t = setTimeout(() => scrollToSection(hash), 220);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0B0E] text-zinc-100 flex flex-col font-sans overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Landing Flow - Tinh gọn, đẳng cấp, không gom nội dung trang riêng ra trang chủ */}
      <ScrollRevealProvider>
        <main className="flex-1 w-full">
          {/* Section 1: Hero */}
          <HeroSection onOpenVideo={handleOpenVideo} />

          {/* Section 2: Về Quảng Phú - Make Difference & Trượt ảnh thật 4s */}
          <AboutSection />

          {/* Section 3: Dịch vụ của chúng tôi - Nền trắng & Staggered layout theo mẫu */}
          <HomeServicesSection />

          {/* Section 4: Khách Hàng Tiêu Biểu & Đại Lễ */}
          <ClientsSection />
        </main>

        {/* Footer */}
        <Footer />
      </ScrollRevealProvider>

      {/* Interactive Modals */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
      />

      <ProjectLightboxModal
        items={lightboxData.isOpen ? lightboxData.items : []}
        currentIndex={lightboxData.currentIndex}
        onNavigate={handleNavigateLightbox}
        onClose={handleCloseLightbox}
      />
    </div>
  );
}
