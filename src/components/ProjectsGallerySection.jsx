"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsGallerySection({ onOpenProjectLightbox, onOpenConsultation }) {
  const [scrollIndex, setScrollIndex] = useState(0);

  const projects = [
    {
      id: "p1",
      title: "Khối xe nghi trượng A80",
      subtitle: "Đại lễ Quốc gia",
      category: "xe-nghi-truong",
      desc: "Chế tác hoàn thiện mô hình khối xe biểu tượng Quốc huy và đoàn xe diễu hành cấp quốc gia A80.",
      image: "/images/generated/card_xe_nghi_truong_a80.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(7deg)_rotateZ(-1.2deg)_translateY(4px)]",
    },
    {
      id: "p2",
      title: "Tượng Chủ tịch Hồ Chí Minh",
      subtitle: "Hội trường - Cơ quan - Di tích",
      category: "tuong-chan-dung",
      desc: "Tượng đồng toàn thân Bác Hồ trang nghiêm, chuẩn thần thái phục vụ quảng trường, hội trường lớn.",
      image: "/images/generated/card_bac_ho_statue.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(2deg)_translateY(-8px)_scale(1.02)] z-10",
    },
    {
      id: "p3",
      title: "Khối xe nghi trượng",
      subtitle: "A50, A70, A80",
      category: "xe-nghi-truong",
      desc: "Khối xe nghi trượng biểu tượng 60 Năm và các đại lễ trọng thể của đất nước được cơ quan tin tưởng.",
      image: "/images/generated/card_xe_nghi_truong_60nam.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(-2deg)_translateY(-6px)_scale(1.01)] z-10",
    },
    {
      id: "p4",
      title: "Công trình tượng đài",
      subtitle: "Phù điêu nghệ thuật",
      category: "my-thuat",
      desc: "Tượng đài chiến thắng và cụm phù điêu nghệ thuật đúc đồng nguyên khối trường tồn cùng năm tháng.",
      image: "/images/generated/tuong_dai_chienthang.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(-7deg)_rotateZ(1.2deg)_translateY(4px)]",
    },
    {
      id: "p5",
      title: "Khối xe 70 Năm Điện Biên Phủ",
      subtitle: "Đại lễ Quốc gia",
      category: "xe-nghi-truong",
      desc: "Tác phẩm xe nghi trượng tái hiện hào khí Điện Biên Phủ lừng lẫy năm châu chấn động địa cầu.",
      image: "/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(2deg)]",
    },
    {
      id: "p6",
      title: "Tượng chân dung thờ dòng họ",
      subtitle: "Tượng truyền thần",
      category: "tuong-tho",
      desc: "Đúc đồng truyền thần chân dung ông bà, tổ tiên với độ chân thực, ấm cúng và tôn nghiêm cao nhất.",
      image: "/images/generated/tuong_tho_ong_ba.jpg",
      transformClass: "lg:[transform:perspective(1200px)_rotateY(-2deg)]",
    },
  ];

  const handlePrev = () => {
    setScrollIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setScrollIndex((prev) => Math.min(projects.length - 4, prev + 1));
  };

  const visibleProjects = projects.slice(scrollIndex, scrollIndex + 4);

  return (
    <section
      id="du-an-noi-bat"
      className="relative w-full bg-[#FAF7F0] text-zinc-900 pt-2 sm:pt-4 lg:pt-6 pb-0 overflow-hidden select-none z-10 -mt-[1px]"
    >
      {/* NỀN TRANH THỦY MẶC NON NƯỚC HỮU TÌNH TRÊN GIẤY KEM CỔ ĐIỂN */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 mix-blend-multiply">
        <img
          src="/images/generated/projects_ink_wash_bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center filter saturate-90 contrast-95"
        />
      </div>

      {/* Ánh sáng dịu nhẹ lan tỏa trung tâm */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 95% 75% at 50% 35%, rgba(255,255,255,0.75) 0%, transparent 85%)",
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 pb-6 sm:pb-8">
        {/* ============================================================== */}
        {/* HÀNG TIÊU ĐỀ: BÊN TRÁI TIÊU ĐỀ, BÊN PHẢI MÔ TẢ & NÚT CHUYỂN SLIDE (CĂN NGANG NHAU) */}
        {/* ============================================================== */}
        <div className="reveal-on-scroll reveal-fade-down flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8 mb-6 sm:mb-10">
          {/* Cánh tả: Tag & Tiêu đề hai dòng sang trọng */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Tag nhãn đỏ thắm */}
            <span className="text-[#B5181C] text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase mb-1.5 sm:mb-2">
              DỰ ÁN TIÊU BIỂU
            </span>

            {/* Tiêu đề chính hai dòng */}
            <h2 className="font-serif text-[#22130F] font-bold tracking-tight leading-[1.12] text-[28px] sm:text-[34px] lg:text-[40px]">
              <span className="block">Những công trình</span>
              <span className="block mt-0.5 sm:mt-1">để lại dấu ấn.</span>
            </h2>
          </div>

          {/* Cánh hữu: Đoạn văn mô tả & Cặp nút tròn điều hướng (Căn ngang hàng với tiêu đề) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between lg:justify-end gap-5 lg:gap-8 max-w-2xl">
            <p className="text-[13px] sm:text-[14px] text-zinc-700 leading-[1.75] font-normal max-w-[475px] text-pretty">
              Các khối xe nghi trượng, tượng đài và công trình mỹ thuật quy mô lớn đã được tin tưởng lựa chọn trong nhiều sự kiện trọng&nbsp;đại.
            </p>

            {/* 2 nút tròn bấm chuyển slide [ < ] [ > ] */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={handlePrev}
                disabled={scrollIndex === 0}
                aria-label="Dự án trước"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  scrollIndex === 0
                    ? "border-zinc-300 text-zinc-400 opacity-40 cursor-not-allowed"
                    : "border-[#C59B3F]/70 text-[#78541A] hover:border-[#B58623] hover:text-[#850E12] hover:bg-[#D4AF37]/15 shadow-sm active:scale-95"
                }`}
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </button>
              <button
                onClick={handleNext}
                disabled={scrollIndex >= projects.length - 4}
                aria-label="Dự án kế tiếp"
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  scrollIndex >= projects.length - 4
                    ? "border-zinc-300 text-zinc-400 opacity-40 cursor-not-allowed"
                    : "border-[#C59B3F]/70 text-[#78541A] hover:border-[#B58623] hover:text-[#850E12] hover:bg-[#D4AF37]/15 shadow-sm active:scale-95"
                }`}
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2]" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LƯỚI 4 THẺ DỰ ÁN 3D PERSPECTIVE VÒNG CUNG SÂN KHẤU (GIỐNG MẪU 100%) */}
        {/* ============================================================== */}
        <div className="relative pb-2 sm:pb-3">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4.5 lg:gap-5 xl:gap-6 relative z-10">
            {visibleProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => onOpenProjectLightbox?.(project, scrollIndex + idx, projects)}
                className={`reveal-on-scroll reveal-3d-tilt reveal-delay-${(idx % 4) + 1} group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(212,175,55,0.45)] ${project.transformClass}`}
                style={{
                  aspectRatio: "3/4",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.22), 0 3px 10px rgba(212,175,55,0.18)",
                }}
              >
                {/* Ảnh công trình */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />

                {/* Lớp phủ chuyển sắc bóng tối phía dưới để chữ nổi bật 100% */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300 group-hover:from-black/98" />

                {/* Viền kim loại mảnh xung quanh thẻ */}
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-white/15 group-hover:border-[#E5B842]/70 transition-colors pointer-events-none" />

                {/* Ánh vàng phản chiếu ở đáy thẻ đúng theo mẫu mockup */}
                <div
                  className="absolute bottom-0 inset-x-0 h-1 sm:h-1.5 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #D4AF37 35%, #FFF6D8 50%, #D4AF37 65%, transparent 100%)",
                    filter: "drop-shadow(0 0 6px rgba(212,175,55,0.85))",
                  }}
                />

                {/* Nội dung thông tin góc đáy thẻ */}
                <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 lg:p-5 flex items-end justify-between gap-1.5 sm:gap-3 z-10">
                  <div className="flex flex-col text-left min-w-0 pr-1">
                    {/* Tên dự án */}
                    <h3 className="font-sans font-bold text-white text-[13px] sm:text-[15px] lg:text-[17px] leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] line-clamp-2">
                      {project.title}
                    </h3>

                    {/* Phụ đề loại công trình (Vàng kem thanh nhã) */}
                    <span className="text-[10px] sm:text-[11.5px] lg:text-[12px] text-[#FDE8B5] font-normal mt-0.5 sm:mt-1 leading-snug drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)] line-clamp-1">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Nút mũi tên tròn vàng kim góc phải */}
                  <div
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center shrink-0 text-[#FDE8B5] transition-all duration-300 group-hover:scale-115 group-hover:bg-[#B5181C] group-hover:text-white"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(229,184,66,0.55)",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                    }}
                  >
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Kết thúc khối thẻ dự án sạch sẽ */}
        </div>
      </div>

      {/* ============================================================== */}
      {/* VÒNG CUNG NGHỆ THUẬT NỐI TIẾP SANG DỊCH VỤ                    */}
      {/* Trong suốt phía trên đường cong để nền thủy mặc trải dài tự nhiên */}
      {/* ============================================================== */}
      <div className="w-full pointer-events-none leading-none z-30 relative -mb-[1px]">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[52px] sm:h-[68px] lg:h-[80px] block"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="projectsBottomGoldBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8A5E10" stopOpacity="0.55" />
              <stop offset="22%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FFF4D0" stopOpacity="1" />
              <stop offset="78%" stopColor="#D4AF37" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#8A5E10" stopOpacity="0.55" />
            </linearGradient>

            <filter id="projectsBottomBeamGlow" x="-10%" y="-60%" width="120%" height="220%">
              <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#C9A227" floodOpacity="0.55" />
            </filter>

            {/* Dải chuyển sắc đồng đúc hoàng kim ấm áp hòa quyện tuyệt đối vào đỉnh Dịch Vụ (#1F0E07) */}
            <linearGradient id="servicesTopBronzeBlend" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4A2615" />
              <stop offset="35%" stopColor="#35190C" />
              <stop offset="70%" stopColor="#261208" />
              <stop offset="100%" stopColor="#1F0E07" />
            </linearGradient>

            {/* Quầng sáng hổ phách ấm lan tỏa từ dưới sống dải vàng kim */}
            <radialGradient id="topCurveWarmGlow" cx="50%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.28" />
              <stop offset="45%" stopColor="#B57B28" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#1F0E07" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Vùng dưới đường cong chuyển tiếp mượt mà vào dải đồng sang trọng của Dịch Vụ */}
          <path
            d="M 0 34 C 300 58, 620 62, 920 44 C 1120 31, 1300 26, 1440 34 L 1440 80 L 0 80 Z"
            fill="url(#servicesTopBronzeBlend)"
          />

          {/* Lớp ánh kim hổ phách tỏa nhẹ ngay dưới dải uốn lượn */}
          <path
            d="M 0 34 C 300 58, 620 62, 920 44 C 1120 31, 1300 26, 1440 34 L 1440 80 L 0 80 Z"
            fill="url(#topCurveWarmGlow)"
          />

          {/* Sợi chỉ vàng kim uốn lượn sắc nét */}
          <path
            d="M 0 34 C 300 58, 620 62, 920 44 C 1120 31, 1300 26, 1440 34"
            stroke="url(#projectsBottomGoldBeam)"
            strokeWidth="3.2"
            strokeLinecap="round"
            filter="url(#projectsBottomBeamGlow)"
          />

          {/* Sống sáng kim cương trắng mảnh trên viền vàng */}
          <path
            d="M 0 35 C 300 59, 620 63, 920 45 C 1120 32, 1300 27, 1440 35"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.45"
          />
        </svg>
      </div>
    </section>
  );
}
