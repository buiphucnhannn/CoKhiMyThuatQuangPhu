"use client";

export default function ClientsSection() {
  const clients = [
    {
      num: "01",
      tag: "Cơ quan Nhà nước",
      title: "Cơ quan Nhà nước",
      subtitle: "Trụ sở & cơ quan công quyền",
      image: "/images/generated/client_card_1_state.jpg",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path
            d="M 12 28 C 8 24, 7 16, 12 10 C 13 13, 14 17, 16 20 C 12 24, 12 27, 12 28 Z"
            fill="url(#goldIconGrad)"
          />
          <path
            d="M 28 28 C 32 24, 33 16, 28 10 C 27 13, 26 17, 24 20 C 28 24, 28 27, 28 28 Z"
            fill="url(#goldIconGrad)"
          />
          <path
            d="M 20 8 L 26 13 V 22 C 26 27, 20 31, 20 31 C 20 31, 14 27, 14 22 V 13 L 20 8 Z"
            stroke="url(#goldIconGrad)"
            strokeWidth="1.8"
            fill="rgba(212,175,55,0.2)"
          />
          <polygon
            points="20,13 21.5,17.5 26,17.5 22.5,20.2 24,24.5 20,22 16,24.5 17.5,20.2 14,17.5 18.5,17.5"
            fill="url(#goldIconGrad)"
          />
        </svg>
      ),
    },
    {
      num: "02",
      tag: "Di tích lịch sử",
      title: "Ban quản lý di tích",
      subtitle: "Đền chùa, nhà thờ họ",
      image: "/images/generated/client_card_2_heritage.jpg",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <path
            d="M 6 16 C 12 14, 18 10, 20 8 C 22 10, 28 14, 34 16 L 33 19 C 27 17, 23 14, 20 13 C 17 14, 13 17, 7 19 L 6 16 Z"
            fill="url(#goldIconGrad)"
          />
          <rect x="9" y="19" width="22" height="2" fill="url(#goldIconGrad)" rx="1" />
          <rect x="11" y="21" width="2.5" height="11" fill="url(#goldIconGrad)" rx="0.5" />
          <rect x="16.5" y="21" width="2.5" height="11" fill="url(#goldIconGrad)" rx="0.5" />
          <rect x="21" y="21" width="2.5" height="11" fill="url(#goldIconGrad)" rx="0.5" />
          <rect x="26.5" y="21" width="2.5" height="11" fill="url(#goldIconGrad)" rx="0.5" />
          <rect x="8" y="32" width="24" height="2.2" fill="url(#goldIconGrad)" rx="1" />
        </svg>
      ),
    },
    {
      num: "03",
      tag: "Gia đình - Dòng họ",
      title: "Gia đình, dòng họ",
      subtitle: "Tượng chân dung thờ gia tiên",
      image: "/images/generated/client_card_3_ancestor.jpg",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <circle cx="20" cy="13" r="5" fill="url(#goldIconGrad)" />
          <path
            d="M 12 28 C 12 22, 15 20, 20 20 C 25 20, 28 22, 28 28 Z"
            fill="url(#goldIconGrad)"
          />
          <rect x="10" y="29" width="20" height="2.5" fill="url(#goldIconGrad)" rx="1" />
          <rect x="8" y="32" width="24" height="3" fill="url(#goldIconGrad)" rx="1" />
        </svg>
      ),
    },
    {
      num: "04",
      tag: "Doanh nghiệp",
      title: "Doanh nghiệp, tập đoàn",
      subtitle: "Quà tặng mỹ thuật cao cấp",
      image: "/images/generated/client_card_4_corporate.jpg",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
          <rect x="8" y="18" width="6" height="16" fill="url(#goldIconGrad)" rx="1" />
          <rect x="17" y="10" width="6" height="24" fill="url(#goldIconGrad)" rx="1" />
          <rect x="26" y="15" width="6" height="19" fill="url(#goldIconGrad)" rx="1" />
          <rect x="6" y="34" width="28" height="2" fill="url(#goldIconGrad)" rx="1" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="khach-hang"
      className="relative w-full text-white overflow-hidden select-none -mt-[1px] bg-[#111217]"
    >
      {/* Gradients dùng chung cho Icons vàng kim */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <linearGradient id="goldIconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2B2" />
            <stop offset="40%" stopColor="#E5C158" />
            <stop offset="85%" stopColor="#B8860B" />
            <stop offset="100%" stopColor="#8C6218" />
          </linearGradient>
        </defs>
      </svg>



      {/* ============================================================== */}
      {/* ẢNH TOÀN CẢNH ĐẠI LỄ & DÒNG NGƯỜI PHÍA HỮU SECTION (GIỐNG MẪU) */}
      {/* ============================================================== */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[62%] pointer-events-none overflow-hidden z-10">
        <img
          src="/images/generated/clients_parade_clean.jpg"
          alt="Đại lễ Quốc gia Khối xe nghi trượng"
          className="w-full h-full object-cover object-[center_top] filter saturate-105 brightness-95 opacity-90"
        />
        {/* Lớp phủ chuyển sắc đa chiều: từ trên xuống, từ trái sang và từ dưới lên để hòa quyện 100% vào nền than đen #111217 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111217] via-[#111217]/85 to-transparent w-full lg:w-[50%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111217] via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-[#111217] via-[#111217]/60 to-transparent" />
      </div>

      {/* ============================================================== */}
      {/* KHỐI NỘI DUNG CHÍNH: TIÊU ĐỀ, 4 CARD & SLOGAN BẢN QUYỀN       */}
      {/* ============================================================== */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-18 lg:pb-20 relative z-20">
        {/* HÀNG TIÊU ĐỀ: BÊN TRÁI TIÊU ĐỀ CHÍNH, BÊN PHẢI KHẨU HIỆU & CHỮ KÝ */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 sm:mb-10">
          {/* Cánh tả: Tag & Tiêu đề lớn 2 dòng sang trọng */}
          <div className="reveal-on-scroll reveal-slide-right flex flex-col items-start max-w-xl">
            {/* Tag nhãn vàng ánh kim */}
            <span className="text-[#D4AF37] text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase mb-1.5 sm:mb-2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
              KHÁCH HÀNG CỦA CHÚNG TÔI
            </span>

            {/* Tiêu đề chính 2 dòng thanh lịch */}
            <h2 className="font-serif text-white font-bold tracking-tight leading-[1.12] text-[28px] sm:text-[34px] lg:text-[40px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span className="block">Đồng hành cùng</span>
              <span className="block mt-0.5 sm:mt-1">những giá trị bền vững.</span>
            </h2>
          </div>

          {/* Cánh hữu: Khẩu hiệu & Chữ ký vàng nghệ thuật nằm trực tiếp trên nền cực kỳ nổi bật, thanh thoát */}
          <div className="reveal-on-scroll reveal-slide-left relative flex flex-col items-start lg:items-end text-left lg:text-right pt-1 lg:pt-1.5">
            {/* Quầng tối khuếch tán tự nhiên phía sau giúp chữ luôn nổi bật 100% không cần khung viền */}
            <div
              className="absolute -inset-x-10 -inset-y-8 pointer-events-none -z-10 rounded-full blur-2xl opacity-75"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 55%, transparent 80%)",
              }}
            />

            <span
              className="font-sans font-bold text-white text-[12px] sm:text-[13px] lg:text-[14px] tracking-[0.22em] uppercase"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.9)",
              }}
            >
              KẾT NỐI QUÁ KHỨ
            </span>
            <span
              className="font-sans font-bold text-white text-[12px] sm:text-[13px] lg:text-[14px] tracking-[0.22em] uppercase mt-1"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.98), 0 4px 16px rgba(0,0,0,0.9)",
              }}
            >
              KIẾN TẠO TƯƠNG LAI
            </span>

            {/* Chữ ký thư pháp mạ vàng 24K Quảng Phú nổi bật rực rỡ */}
            <div
              className="mt-2 font-serif italic font-bold text-3xl sm:text-4xl lg:text-[46px] tracking-wide select-none bg-gradient-to-r from-[#FFF6D4] via-[#F5D061] to-[#D4AF37] bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 4px 16px rgba(0,0,0,0.98)) drop-shadow(0 2px 6px rgba(0,0,0,1))",
              }}
            >
              Quảng Phú
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* LƯỚI 4 CARD CÓ HÌNH ẢNH MINH HỌA SẮC NÉT & BỐ CỤC CHUYÊN NGHIỆP */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6">
          {clients.map((item, idx) => (
            <div
              key={idx}
              className={`reveal-on-scroll reveal-card-shimmer reveal-delay-${idx + 1} group relative rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 border border-white/15 hover:border-[#D4AF37]/80 shadow-[0_12px_32px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_24px_rgba(212,175,55,0.3)] flex flex-col justify-between h-[260px] sm:h-[300px] lg:h-[320px]`}
            >
              {/* Ảnh nền trực quan độ nét cao */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Lớp phủ gradient tối dần từ giữa xuống đáy để chữ luôn nổi bật 100% */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25 group-hover:from-black/98 group-hover:via-black/60 transition-colors duration-300" />

              {/* Hàng trên cùng của thẻ: Badge phân nhóm và icon vàng */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/40 text-[#FDE8B5] text-[11px] font-semibold tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span>{item.num}</span>
                </div>

                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#E5C158] group-hover:scale-110 group-hover:border-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.5)] transition-all">
                  {item.icon}
                </div>
              </div>

              {/* Nội dung thông tin phía dưới thẻ */}
              <div className="relative z-10 p-4 sm:p-5 flex flex-col justify-end text-left">
                {/* Chỉ vàng kim trang trí */}
                <div className="w-8 h-0.5 bg-[#D4AF37] mb-2 rounded-full group-hover:w-16 transition-all duration-300 shadow-[0_0_6px_rgba(212,175,55,0.8)]" />

                {/* Tên nhóm khách hàng */}
                <h3 className="font-sans font-bold text-white text-[16px] sm:text-[17px] leading-snug group-hover:text-[#FDE8B5] transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                  {item.title}
                </h3>

                {/* Mô tả phụ đề chi tiết */}
                <p className="text-zinc-300 group-hover:text-white text-[12px] sm:text-[12.5px] leading-snug mt-1 font-light transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
