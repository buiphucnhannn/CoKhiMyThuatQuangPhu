"use client";

import { ArrowRight } from "lucide-react";

export default function ServicesSection({ onOpenConsultation, onSelectService }) {
  const services = [
    {
      num: "01",
      title: "Khối xe nghi trượng",
      desc: "Thiết kế, sản xuất mô hình khối xe nghi trượng phục vụ các sự kiện, đại lễ lớn.",
      image: "/images/generated/card_xe_nghi_truong_highres.jpg",
    },
    {
      num: "02",
      title: "Tượng chân dung Chủ tịch Hồ Chí Minh",
      desc: "Chế tác tượng Bác Hồ đa dạng kích thước cho hội trường, cơ quan, di tích, sự kiện.",
      image: "/images/generated/card_bac_ho_highres.jpg",
    },
    {
      num: "03",
      title: "Tượng chân dung thờ (Ông bà, bố mẹ)",
      desc: "Chế tác tượng thờ tâm linh, chuẩn thần thái theo yêu cầu của gia đình, dòng họ.",
      image: "/images/generated/card_tuong_tho_highres.jpg",
    },
    {
      num: "04",
      title: "Tượng quà tặng & Mỹ thuật trang trí",
      desc: "Tượng lưu niệm, quà tặng cao cấp, các sản phẩm cơ khí mỹ thuật ứng dụng.",
      image: "/images/generated/card_qua_tang_highres.jpg",
    },
  ];

  return (
    <section
      id="dich-vu"
      className="relative w-full text-white pt-7 sm:pt-9 lg:pt-11 pb-10 sm:pb-12 lg:pb-14 overflow-hidden select-none z-10 -mt-[1px] bg-[#1F0E07]"
    >
      {/* Lớp nền nghệ thuật lụa đồng đúc & ánh sáng hổ phách hoàng kim rực rỡ, ấm áp — hòa quyện liền mạch với 2 đường cong viền vàng trên dưới */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, #1F0E07 0%, rgba(31,14,7,0.18) 14%, rgba(31,14,7,0.04) 50%, rgba(20,9,4,0.18) 86%, #140904 100%), url('/images/generated/services_luxury_bg.jpg') center/cover no-repeat, #140904",
        }}
      />
      {/* Lớp phủ nhẹ giúp nâng cao độ tương phản chữ mà vẫn giữ trọn màu đồng hổ phách */}
      <div className="absolute inset-0 pointer-events-none bg-black/10 backdrop-blur-[0.5px]" />

      {/* Lớp phủ chuyển sắc dịu nhẹ bên cánh tả giúp chữ luôn nổi bật mà màu đồng hoàng gia vẫn ấm áp rực rỡ */}
      <div
        className="absolute inset-y-0 left-0 w-full lg:w-[48%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(16,7,3,0.65) 0%, rgba(16,7,3,0.3) 65%, transparent 100%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-2 sm:pt-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* ============================================================== */}
          {/* CÁNH TẢ: TIÊU ĐỀ & ĐOẠN GIỚI THIỆU & NÚT HÀNH ĐỘNG             */}
          {/* ============================================================== */}
          <div className="reveal-on-scroll reveal-slide-right relative lg:col-span-4 xl:col-span-4 flex flex-col items-start pr-0 lg:pr-2">
            {/* Quầng tối khuếch tán tự nhiên phía sau giúp khối chữ nổi bật 100% trên nền tranh đồng, hoàn toàn không cần badge */}
            <div
              className="absolute -inset-x-8 -inset-y-10 pointer-events-none -z-10 rounded-full blur-3xl opacity-85"
              style={{
                background:
                  "radial-gradient(ellipse 110% 90% at 30% 40%, rgba(12, 4, 2, 0.92) 0%, rgba(18, 7, 3, 0.65) 55%, transparent 85%)",
              }}
            />

            {/* Tag nhãn vàng ánh kim sáng rực rỡ */}
            <span
              className="text-[#FFE28A] text-[11px] sm:text-xs font-extrabold tracking-[0.24em] uppercase mb-1.5 sm:mb-2"
              style={{
                textShadow: "0 2px 8px rgba(0,0,0,1), 0 1px 3px #000, 0 0 12px rgba(212,175,55,0.4)",
              }}
            >
              DỊCH VỤ CỦA CHÚNG TÔI
            </span>

            {/* Tiêu đề chính 3 dòng sang trọng, nổi bật tuyệt đối */}
            <h2
              className="font-serif text-white font-bold tracking-tight leading-[1.12] text-[28px] sm:text-[34px] lg:text-[40px]"
              style={{
                textShadow:
                  "0 3px 6px rgba(0,0,0,1), 0 8px 24px rgba(0,0,0,0.95), 0 0 35px rgba(0,0,0,0.85)",
              }}
            >
              <span className="block drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">Chế tác</span>
              <span className="block mt-0.5 sm:mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">những giá trị</span>
              <span className="block mt-0.5 sm:mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">vượt thời gian.</span>
            </h2>

            {/* Đoạn văn mô tả rõ nét, sáng trắng ngà */}
            <p
              className="mt-4 sm:mt-5 text-[13px] sm:text-[14px] text-zinc-100 leading-[1.75] font-normal max-w-[390px] text-pretty"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,1), 0 1px 3px #000",
              }}
            >
              Cung cấp giải pháp cơ khí mỹ thuật toàn diện, từ thiết kế, chế tác đến hoàn thiện, đáp ứng đa dạng nhu cầu của khách&nbsp;hàng.
            </p>

            {/* Nút Xem tất cả dịch vụ (Pill đỏ thắm sang trọng) */}
            <button
              onClick={onOpenConsultation}
              className="mt-6 sm:mt-8 group inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-white font-semibold text-[13.5px] sm:text-[14px] transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #B5181C 0%, #850E12 100%)",
                boxShadow: "0 6px 20px rgba(181,24,28,0.45), inset 0 1px 0 rgba(255,255,255,0.25)",
              }}
            >
              <span>Xem tất cả dịch vụ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* ============================================================== */}
          {/* CÁNH HỮU: 4 THẺ DỊCH VỤ RÕ NÉT, KÍCH THƯỚC LỚN CHUẨN MẪU      */}
          {/* ============================================================== */}
          <div className="lg:col-span-8 xl:col-span-8">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4.5">
              {services.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => onSelectService?.(item, idx, services)}
                  className={`reveal-on-scroll reveal-float-up reveal-delay-${idx + 1} group relative rounded-2xl overflow-hidden cursor-pointer bg-[#13141C]/90 backdrop-blur-md border border-white/15 hover:border-[#D4AF37]/80 hover:-translate-y-1.5 shadow-[0_12px_32px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.9),0_0_24px_rgba(212,175,55,0.3)] flex flex-col justify-between h-[350px] sm:h-[425px] lg:h-[445px]`}
                >
                  {/* Con số vàng kim ở góc trên bên trái */}
                  <div className="relative z-10 px-4 pt-3.5 pb-1 flex items-center justify-between">
                    <span className="font-serif font-bold text-[30px] sm:text-[34px] text-[#D4AF37] tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
                      {item.num}
                    </span>
                  </div>

                  {/* Ảnh minh họa tác phẩm dịch vụ (Độ nét cao, không bị vỡ/mờ) */}
                  <div className="relative w-full flex-1 mx-auto my-1 px-3 overflow-hidden">
                    <div className="w-full h-full rounded-xl overflow-hidden bg-black/50 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover object-top group-hover:scale-106 transition-transform duration-500 ease-out"
                      />
                      {/* Chuyển sắc chân ảnh mềm mại vào khối mô tả */}
                      <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-[#13141C] via-[#13141C]/70 to-transparent" />
                    </div>
                  </div>

                  {/* Tiêu đề & mô tả ngắn bên dưới */}
                  <div className="relative z-10 px-4 pb-4 pt-1 flex flex-col justify-start">
                    <h3 className="font-sans font-bold text-white text-[14px] sm:text-[15px] leading-snug group-hover:text-[#FDE8B5] transition-colors drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-zinc-300 text-[11.5px] sm:text-[12px] leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Kết thúc lưới dịch vụ — divider cong nằm ở đầu Quy Trình để phần dưới cong lấy trọn nền giấy + vân thủy mặc, không còn dải trắng mất nền */}

    </section>
  );
}
