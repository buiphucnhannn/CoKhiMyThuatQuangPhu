"use client";

import { useState, useEffect, useRef } from "react";
import { Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectLightboxModal from "@/components/ProjectLightboxModal";

// 14 ẢNH THỰC TẾ DO NGƯỜI DÙNG CHUẨN BỊ SẴN TRONG THƯ MỤC PUBLIC/IMAGES
// TUYỆT ĐỐI KHÔNG SỬ DỤNG ẢNH AI GENERATED
const USER_PREPARED_IMAGES = [
  {
    url: "/images/1790914174255_3763498134712611457_3763498134712611457_0f99173e49b66b0cdab3a7e22a6b3eba.jpg",
    title: "Khối xe nghi trượng Đại lễ kỷ niệm cấp Quốc gia",
    tilt: "-rotate-5",
  },
  {
    url: "/images/1790914174280_3763498134712611457_3763498134712611457_f4251df77b0e623de3471c6cc5f761b7.jpg",
    title: "Tạo hình khối Quốc huy và biểu tượng mặt tiền xe",
    tilt: "rotate-3",
  },
  {
    url: "/images/1790914174295_3763498134712611457_3763498134712611457_65c9531735dc897b8ae5cb25e453adec.jpg",
    title: "Nghệ nhân trực tiếp chạm tỉa chi tiết phôi đồng",
    tilt: "-rotate-2",
  },
  {
    url: "/images/1790914174307_3763498134712611457_3763498134712611457_ac5b4699dd9463fc0898c16d464020e3.jpg",
    title: "Đoàn xe diễu hành trang trọng qua Quảng trường Ba Đình",
    tilt: "rotate-4",
  },
  {
    url: "/images/1790914174319_3763498134712611457_3763498134712611457_86cca0ea55744505a15cf676c523fb04.jpg",
    title: "Gia công kết cấu thép chịu lực tại xưởng Bắc Ninh",
    tilt: "-rotate-4",
  },
  {
    url: "/images/1790914174331_3763498134712611457_3763498134712611457_7ddc2411d84842ef2995298f982feedb.jpg",
    title: "Khối biểu tượng hoa văn diễu hành rực rỡ cờ hoa",
    tilt: "rotate-2",
  },
  {
    url: "/images/1790914174350_3763498134712611457_3763498134712611457_e0bc90fe367a199a133a997b52380a30.jpg",
    title: "Kiểm tra kỹ thuật xuất xưởng khối xe diễu binh",
    tilt: "-rotate-6",
  },
  {
    url: "/images/1790914174362_3763498134712611457_3763498134712611457_496323da53e09bf68a8fe6497aef4e68.jpg",
    title: "Chạm khắc phù điêu và hoa văn đúc nổi tinh xảo",
    tilt: "rotate-3",
  },
  {
    url: "/images/1790914174375_3763498134712611457_3763498134712611457_e54ab99a13033bf058f6a1c62b99828e.jpg",
    title: "Lắp ráp hoàn thiện các module cơ khí mỹ thuật",
    tilt: "-rotate-1",
  },
  {
    url: "/images/1790914174385_3763498134712611457_3763498134712611457_659d4f59ffc7c4f64e05689299e707d4.jpg",
    title: "Tác phẩm tượng chân dung lãnh tụ và tượng đài",
    tilt: "rotate-5",
  },
  {
    url: "/images/1790914174396_3763498134712611457_3763498134712611457_88465772e0f63b0290fad15019a4f903.jpg",
    title: "Kiểm tra vận hành thực địa trên lộ trình diễu hành",
    tilt: "-rotate-3",
  },
  {
    url: "/images/1790914284640_3763498134712611457_3763498134712611457_9b97be04c8e4495ab8dbf300e3db4602.jpg",
    title: "Bàn giao khối xe nghi trượng phục vụ sự kiện trọng đại",
    tilt: "rotate-4",
  },
  {
    url: "/images/1790914284663_3763498134712611457_3763498134712611457_5b4c1d51ed154240eeca8113c1ec2f4b.jpg",
    title: "Quy mô nhà xưởng cẩu trục tải trọng lớn tại Quảng Phú",
    tilt: "-rotate-4",
  },
  {
    url: "/images/1790914284678_3763498134712611457_3763498134712611457_ba3694066fc6577396aa5602364d4310.jpg",
    title: "Khối xe diễu hành trong niềm hân hoan của nhân dân",
    tilt: "rotate-2",
  },
];

export default function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxData, setLightboxData] = useState({
    isOpen: false,
    items: [],
    currentIndex: 0,
  });

  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  const totalImages = USER_PREPARED_IMAGES.length;

  // Tự động lướt ảnh qua mỗi 4s đúng theo yêu cầu của người dùng
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, totalImages]);

  // Hỗ trợ thao tác vuốt cảm ứng mượt mà trên mobile
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartXRef.current;
    const deltaY = e.changedTouches[0].clientY - touchStartYRef.current;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 35) {
      if (deltaX < 0) {
        // Vuốt sang trái -> Xem ảnh tiếp theo
        setCurrentIndex((prev) => (prev + 1) % totalImages);
      } else {
        // Vuốt sang phải -> Xem ảnh trước
        setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
      }
    }
  };

  const handleOpenLightbox = (index) => {
    const formatted = USER_PREPARED_IMAGES.map((img) => ({
      title: img.title,
      subtitle: "Cơ Khí Mỹ Thuật Quảng Phú",
      desc: "Hình ảnh thực tế công trình sản xuất và thi công",
      image: img.url,
    }));
    setLightboxData({
      isOpen: true,
      items: formatted,
      currentIndex: index,
    });
  };

  // Mảng nhân đôi để tạo hiệu ứng lướt mượt mà liên tục
  const displayedImages = [...USER_PREPARED_IMAGES, ...USER_PREPARED_IMAGES];

  return (
    <section
      id="ve-quang-phu"
      className="relative w-full bg-[#0A0B0E] text-white min-h-0 lg:h-[clamp(650px,100dvh,920px)] xl:h-[clamp(680px,100dvh,960px)] flex flex-col justify-center overflow-hidden select-none z-10 py-14 sm:py-20 lg:py-0"
    >
      {/* Quầng sáng đỏ mờ tinh tế phía sau */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#C1121F]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full my-auto">
        {/* ============================================================== */}
        {/* 1. KHỐI LOGO & TÊN THƯƠNG HIỆU THEO CHUẨN MẪU SUNBRIGHT        */}
        {/* (Quảng Phú \n Make Difference)                                 */}
        {/* ============================================================== */}
        <div className="reveal-on-scroll reveal-scale-up flex flex-col items-center justify-center">
          {/* Logo thương hiệu đỏ */}
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 relative mb-2.5 sm:mb-3">
            <img
              src="/images/logo_brand.png"
              alt="Cơ Khí Mỹ Thuật Quảng Phú"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_18px_rgba(193,18,31,0.65)] hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Tiêu đề 2 dòng đậm nét chuẩn mẫu - Scale to đẹp mắt */}
          <h2 className="font-sans font-bold text-white text-[32px] sm:text-[48px] md:text-[58px] lg:text-[66px] xl:text-[72px] leading-[1.04] tracking-tight">
            Quảng Phú <br />
            Make Difference
          </h2>

          {/* Đoạn văn tôn chỉ & định hướng */}
          <div className="max-w-2xl mx-auto mt-3.5 sm:mt-4">
            <p className="text-zinc-300 text-[14px] sm:text-[15.5px] lg:text-[16.5px] leading-relaxed font-normal text-center px-3 sm:px-0">
              Quảng Phú hướng tới việc trở thành một trong những đơn vị hàng đầu trong lĩnh vực chế tác mô hình khối xe nghi trượng Đại lễ Quốc gia, tượng đài chiến thắng và tượng chân dung mỹ thuật đỉnh cao trong nước và quốc tế.
            </p>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 2. DẢI CARD XÉO XÉO TỰ ĐỘNG LƯỚT ẢNH MỖI 4S - TO & RÕ NÉT      */}
        {/* ============================================================== */}
        <div
          className="reveal-on-scroll reveal-float-up mt-6 sm:mt-7 lg:mt-8 relative w-full"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Khung chứa các card xéo xéo lướt ngang */}
          <div className="overflow-hidden w-full py-4 sm:py-5 px-3 sm:px-4">
            <div
              className="about-carousel-track flex items-center gap-3 sm:gap-4 lg:gap-7 transition-transform duration-700 ease-in-out will-change-transform"
              style={{
                "--about-idx": currentIndex,
              }}
            >
              {displayedImages.map((img, idx) => {
                const originalIndex = idx % totalImages;

                return (
                  <div
                    key={`${img.url}-${idx}`}
                    onClick={() => handleOpenLightbox(originalIndex)}
                    className={`relative shrink-0 w-[calc(50%-6px)] sm:w-[calc(50%-8px)] lg:w-[295px] xl:w-[315px] aspect-[16/10] overflow-hidden rounded-none border border-white/20 bg-zinc-900 shadow-2xl transition-all duration-500 ease-out transform ${img.tilt} hover:rotate-0 hover:scale-108 hover:z-30 hover:border-[#C1121F] hover:shadow-[0_14px_40px_rgba(193,18,31,0.55)] cursor-pointer group select-none`}
                  >
                    {/* Ảnh thực tế của xưởng */}
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                    />

                    {/* Gradient và chú thích khi hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-2.5 sm:p-3 text-left">
                      <div className="self-end w-6 h-6 rounded-full bg-black/60 flex items-center justify-center text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                      <p className="text-[11.5px] sm:text-[13px] text-white font-medium leading-snug line-clamp-2">
                        {img.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Chỉ báo phân trang & nút điều hướng lướt trên Mobile */}
          <div className="flex items-center justify-center gap-3 mt-3 sm:mt-4 lg:hidden">
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages)}
              aria-label="Ảnh trước"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#C1121F] active:scale-95 flex items-center justify-center text-white/80 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {USER_PREPARED_IMAGES.slice(0, 6).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ảnh ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex % 6 === i
                      ? "w-6 bg-[#C1121F]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % totalImages)}
              aria-label="Ảnh kế tiếp"
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#C1121F] active:scale-95 flex items-center justify-center text-white/80 transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal để xem ảnh thực tế phóng to */}
      <ProjectLightboxModal
        items={lightboxData.isOpen ? lightboxData.items : []}
        currentIndex={lightboxData.currentIndex}
        onNavigate={(newIdx) =>
          setLightboxData((prev) => ({ ...prev, currentIndex: newIdx }))
        }
        onClose={() => setLightboxData((prev) => ({ ...prev, isOpen: false }))}
      />
    </section>
  );
}
