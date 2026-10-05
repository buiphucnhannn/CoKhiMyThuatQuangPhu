"use client";

import Navbar from "@/components/Navbar";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

export default function TinTucPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full pt-28 sm:pt-36 pb-20 sm:pb-32 relative">
        {/* Quầng sáng đỏ mờ phía sau */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#C1121F]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <NewsSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
