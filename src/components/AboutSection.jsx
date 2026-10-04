"use client";

import { ArrowRight } from "lucide-react";

/**
 * About Section — "Về Quảng Phú"
 * - Nối tiếp mượt mà từ Hero với lớp mờ chuyển tiếp êm dịu, không vết cắt cứng.
 * - Toàn vẹn bố cục nghệ thuật: cờ đỏ sao vàng, tượng Bác Hồ, các khung ảnh nghệ nhân, nút hành động.
 * - Danh ngôn thư pháp ở góc hữu trang nhã, đúng phong cách truyền thống.
 */
export default function AboutSection({ onOpenConsultation }) {
  return (
    <section
      id="ve-quang-phu"
      className="relative w-full overflow-hidden text-zinc-900 select-none z-10"
      style={{
        background:
          "linear-gradient(to right, #FBF7EE 0%, #FBF7EE 45%, #940E13 54%, #780B0F 100%)",
      }}
    >
      {/* ============================================================== */}
      {/* 1. GIAO DIỆN DESKTOP (>= lg): BANNER WIDESCREEN TỶ LỆ CHUẨN ĐIỆN ẢNH */}
      {/* Giới hạn chiều rộng tối đa và tỷ lệ chiều cao tối ưu, giữ nguyên vẻ đẹp hoàn hảo ở mọi tỷ lệ scale/zoom */}
      {/* ============================================================== */}
      <div className="hidden lg:flex relative w-full justify-center overflow-hidden">
        <div className="relative w-full max-w-[1620px] 2xl:max-w-[1720px] min-h-[550px] lg:h-[clamp(560px,36vw,660px)] flex items-center">
          {/* Nền bức họa mỹ thuật: đường cong chữ S, cờ đỏ và giấy kem */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <img
              src="/images/generated/about_section_artwork.jpg"
              alt="Bác Hồ và tinh hoa cơ khí mỹ thuật Quảng Phú"
              className="w-full h-full object-cover object-[center_center]"
            />
            {/* Lớp phủ chuyển sắc mềm mại ở mép hữu để hòa tan tuyệt đối vào nền cờ đỏ phía ngoài khi zoom nhỏ */}
            <div
              className="absolute inset-y-0 right-0 w-24 pointer-events-none"
              style={{
                background: "linear-gradient(to right, transparent 0%, #780B0F 100%)",
              }}
            />
          </div>

          {/* Lớp mờ chuyển tiếp tiếp giáp êm ái với Hero (theo 2 nửa màu nền tự nhiên) */}
          <div
            className="absolute top-0 inset-x-0 h-9 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(to right, rgba(251, 247, 238, 0.75) 0%, rgba(251, 247, 238, 0.6) 42%, rgba(212, 175, 55, 0.65) 45.5%, rgba(165, 18, 24, 0.75) 50%, rgba(181, 24, 28, 0.85) 100%)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />

          {/* Nội dung chữ trên cánh tả desktop */}
          <div className="reveal-on-scroll reveal-slide-right relative z-30 w-[46%] xl:w-[42%] flex flex-col justify-center h-full my-auto px-12 xl:px-16 pt-16 pb-12">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-7 h-[2px] bg-[#B5181C] rounded-full" />
              <span className="text-[#B5181C] text-xs font-extrabold tracking-[0.24em] uppercase">
                VỀ QUẢNG PHÚ
              </span>
              <span className="w-7 h-[2px] bg-[#B5181C] rounded-full" />
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[#22130F] font-bold tracking-tight leading-[1.12] text-[34px] lg:text-[40px] 2xl:text-[44px]">
              <span className="block">Dấu ấn được tạo nên</span>
              <span className="block mt-1">từ tay nghề.</span>
            </h2>

            {/* Đoạn văn giới thiệu */}
            <p className="mt-3.5 text-[#2B1F19] text-[14.5px] 2xl:text-[15.5px] leading-[1.8] max-w-[440px] text-justify font-medium">
              Hơn cả một đơn vị cơ khí, Quảng Phú là nơi hội tụ của kỹ thuật và mỹ thuật đỉnh cao. Từ các khối xe nghi trượng đại lễ quốc gia đến tượng chân dung truyền thần, chúng tôi luôn đặt sự chính xác, thần thái uy nghiêm và chất lượng trường tồn lên hàng đầu.
            </p>

            {/* Nút Tìm hiểu thêm */}
            <div className="mt-7">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2.5 px-7 py-2.5 rounded-full font-semibold text-sm text-white transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #B5181C 0%, #850E12 100%)",
                  boxShadow:
                    "0 6px 20px rgba(181,24,28,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <span>Tìm hiểu thêm</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Cánh hữu: Không gian cho bức họa */}
          <div className="relative z-10 w-[54%] xl:w-[58%] min-h-full pointer-events-none" />

          {/* Chữ ký thư pháp danh ngôn Bác Hồ góc phải desktop */}
          <div className="reveal-on-scroll reveal-scale-up absolute bottom-8 right-10 lg:right-14 z-30 pointer-events-none text-right">
            <p
              className="text-[#FFE082] text-[21px] lg:text-[23px] leading-snug tracking-wide select-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]"
              style={{
                fontFamily: 'var(--font-script), "Dancing Script", cursive',
                fontWeight: 700,
                textShadow: "0 2px 10px rgba(0,0,0,0.9), 0 0 16px rgba(212,175,55,0.45)",
              }}
            >
              &ldquo;Không có gì quý hơn
              <br />
              &nbsp;Độc lập - Tự do!&rdquo;
            </p>
          </div>

          {/* Lớp mờ chuyển tiếp êm ái chân About với Stats (desktop) */}
          <div
            className="absolute bottom-0 inset-x-0 h-9 pointer-events-none z-30"
            style={{
              background:
                "linear-gradient(to right, rgba(251, 247, 238, 0.75) 0%, rgba(251, 247, 238, 0.6) 44%, rgba(212, 175, 55, 0.65) 47.5%, rgba(110, 13, 19, 0.75) 52%, rgba(133, 15, 23, 0.85) 100%)",
              backdropFilter: "blur(4px)",
              WebkitBackdropFilter: "blur(4px)",
              maskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage: "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. GIAO DIỆN MOBILE & TABLET (< lg): BỐ CỤC ĐỨNG CÂN XỨNG & ĐẸP MẮT */}
      {/* ============================================================== */}
      <div className="block lg:hidden relative w-full pt-8 pb-10">
        {/* Lớp bóng mờ tiếp giáp tự nhiên đỉnh section với Hero */}
        <div
          className="absolute top-0 inset-x-0 h-8 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%)",
          }}
        />

        {/* Phần 1: Nội dung chữ trọn vẹn trên nền giấy kem nguyên bản (#FBF7EE), 100% rõ nét */}
        <div className="reveal-on-scroll reveal-slide-right px-5 sm:px-8 relative z-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-5 h-[2px] bg-[#B5181C] rounded-full" />
            <span className="text-[#B5181C] text-[11px] font-extrabold tracking-[0.24em] uppercase">
              VỀ QUẢNG PHÚ
            </span>
            <span className="w-5 h-[2px] bg-[#B5181C] rounded-full" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-[#22130F] font-bold tracking-tight leading-[1.15] text-[26px] xs:text-[28px] sm:text-[32px]">
            <span className="block">Dấu ấn được tạo nên</span>
            <span className="block mt-0.5">từ tay nghề.</span>
          </h2>

          {/* Paragraph: 100% độ rộng màn hình, không bị đường cong cắt ngang, chữ đậm nét, dễ đọc */}
          <p className="mt-3.5 text-[#2B1F19] text-[13.5px] sm:text-[14.5px] leading-[1.75] font-normal">
            Hơn cả một đơn vị cơ khí, Quảng Phú là nơi hội tụ của kỹ thuật và mỹ thuật đỉnh cao. Từ các khối xe nghi trượng đại lễ quốc gia đến tượng chân dung truyền thần, chúng tôi luôn đặt sự chính xác, thần thái uy nghiêm và chất lượng trường tồn lên hàng đầu.
          </p>

          {/* Nút hành động */}
          <div className="mt-5">
            <button
              onClick={onOpenConsultation}
              className="group inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full font-semibold text-[13px] text-white transition-all transform active:scale-98 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #B5181C 0%, #850E12 100%)",
                boxShadow:
                  "0 6px 20px rgba(181,24,28,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <span>Tìm hiểu thêm</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Phần 2: Thẻ trưng bày tác phẩm nghệ thuật điện ảnh (Cờ đỏ sao vàng toàn phần, Tượng Bác Hồ, Khung ảnh & Danh ngôn) */}
        <div className="reveal-on-scroll reveal-scale-up mt-7 px-4 sm:px-6 relative z-20">
          <div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.28)]"
            style={{
              border: "1.5px solid rgba(212, 175, 55, 0.55)",
            }}
          >
            {/* Bức họa mỹ thuật trọn vẹn 100% lụa đỏ, sao vàng, Bác Hồ, tranh nghệ nhân và trống đồng Đông Sơn */}
            <img
              src="/images/generated/about_section_mobile_art.jpg"
              alt="Bác Hồ và tinh hoa cơ khí mỹ thuật Quảng Phú"
              className="w-full h-full object-cover object-center"
            />

            {/* Quầng sáng mờ tinh tế góc dưới bên trái giúp tôn chữ thư pháp vàng rực rỡ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black/45 to-transparent pointer-events-none" />

            {/* Viền ánh kim bên trong */}
            <div className="absolute inset-0 rounded-2xl border border-white/15 pointer-events-none" />

            {/* Danh ngôn thư pháp Bác Hồ mạ vàng hoàng gia ở góc trái thẻ, cân đối hoàn hảo với tượng Bác bên phải */}
            <div className="absolute bottom-3 xs:bottom-3.5 left-3.5 xs:left-4 sm:left-6 z-10 text-left pointer-events-none">
              <p
                className="text-[#FFE8A3] text-[15px] xs:text-[16.5px] sm:text-[18.5px] leading-snug tracking-wide select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
                style={{
                  fontFamily: 'var(--font-script), "Dancing Script", cursive',
                  fontWeight: 700,
                  textShadow: "0 2px 8px rgba(0,0,0,1), 0 0 14px rgba(229,184,66,0.6)",
                }}
              >
                &ldquo;Không có gì quý hơn
                <br />
                Độc lập - Tự do!&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Lớp bóng mờ tiếp giáp tự nhiên đáy section với Stats */}
        <div
          className="absolute bottom-0 inset-x-0 h-6 pointer-events-none z-20"
          style={{
            background: "linear-gradient(to top, rgba(110,13,19,0.3) 0%, transparent 100%)",
          }}
        />
      </div>
    </section>
  );
}
