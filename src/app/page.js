"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import ProjectsGallerySection from "@/components/ProjectsGallerySection";
import ClientsSection from "@/components/ClientsSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import VideoModal from "@/components/VideoModal";
import ProjectLightboxModal from "@/components/ProjectLightboxModal";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export default function Home() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const handleOpenConsultation = () => setIsConsultationOpen(true);
  const handleCloseConsultation = () => setIsConsultationOpen(false);

  const handleOpenVideo = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  const handleOpenGalleryLightbox = (project, index, items) => {
    setLightboxData({
      isOpen: true,
      items: items || [project],
      currentIndex: index ?? 0,
    });
  };

  const handleOpenServicesLightbox = (service, index, services) => {
    const formattedServices = (services || [service]).map((s) => ({
      title: s.title,
      subtitle: `Dịch vụ ${s.num}`,
      desc: s.desc,
      image: s.image,
    }));
    setLightboxData({
      isOpen: true,
      items: formattedServices,
      currentIndex: index ?? 0,
    });
  };

  const handleCloseLightbox = () => {
    setLightboxData((prev) => ({ ...prev, isOpen: false }));
  };

  const handleNavigateLightbox = (newIndex) => {
    setLightboxData((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  return (
    <div className="min-h-screen bg-[#0C0D10] text-zinc-100 flex flex-col font-sans overflow-x-hidden">
      {/* Sticky Header Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Landing Flow - Seamless 100% full-width sections */}
      <ScrollRevealProvider>
        <main className="flex-1 w-full">
          {/* Section 1: Hero */}
          <HeroSection
            onOpenConsultation={handleOpenConsultation}
            onOpenVideo={handleOpenVideo}
          />

          {/* Section 2: Về Quảng Phú - Nơi Kỹ Thuật Gặp Nghệ Thuật */}
          <AboutSection onOpenConsultation={handleOpenConsultation} />

          {/* Section 3: Con Số Biết Nói (Stats) */}
          <StatsSection />

          {/* Section 4: Dự Án Tiêu Biểu - Những Công Trình Để Lại Dấu Ấn */}
          <ProjectsGallerySection
            onOpenProjectLightbox={handleOpenGalleryLightbox}
            onOpenConsultation={handleOpenConsultation}
          />

          {/* Section 5: Dịch Vụ Của Chúng Tôi (Services) */}
          <ServicesSection
            onOpenConsultation={handleOpenConsultation}
            onSelectService={handleOpenServicesLightbox}
          />

          {/* Section 6: Từ Ý Tưởng Đến Hiện Thực (Process) */}
          <ProcessSection onOpenConsultation={handleOpenConsultation} />

          {/* Section 7: Khách Hàng Của Chúng Tôi */}
          <ClientsSection />

          {/* Section 9: CTA Banner - Bạn Đang Có Một Ý Tưởng Đặc Biệt? */}
          <CtaBanner onOpenConsultation={handleOpenConsultation} />
        </main>

        {/* Section 10: Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />
      </ScrollRevealProvider>

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={handleCloseConsultation}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={handleCloseVideo}
      />

      <ProjectLightboxModal
        items={lightboxData.isOpen ? lightboxData.items : []}
        currentIndex={lightboxData.currentIndex}
        onNavigate={handleNavigateLightbox}
        onClose={handleCloseLightbox}
        onOpenConsultation={handleOpenConsultation}
      />
    </div>
  );
}
