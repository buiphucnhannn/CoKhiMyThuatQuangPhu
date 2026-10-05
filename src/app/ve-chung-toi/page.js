"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VeChungToiPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-white flex flex-col font-sans overflow-x-hidden selection:bg-[#C1121F] selection:text-white">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full pt-16 sm:pt-20">
        {/* ============================================================== */}
        {/* PHẦN 1: WE ARE QUẢNG PHÚ (STYLE CHUẨN SUNBRIGHT GIOITHIEU)     */}
        {/* ============================================================== */}
        <section className="relative w-full pt-2 sm:pt-3 lg:pt-4 pb-10 sm:pb-14 lg:pb-16 border-b border-white/10 overflow-hidden">
          {/* Quầng sáng đỏ mờ tinh tế phía sau */}
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#C1121F]/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* CÁNH TẢ: TIÊU ĐỀ LỚN "WE ARE QUẢNG PHÚ" & BIỂU TRƯỢNG THƯƠNG HIỆU (CĂN GIỮA TRÊN MOBILE) */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                <span className="text-[#C1121F] text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] mb-4 block">
                  VỀ CHÚNG TÔI
                </span>

                <h1 className="font-sans font-bold text-white text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.05] tracking-tight">
                  We are <br />
                  <span className="text-[#C1121F]">Quảng Phú</span>
                </h1>

                {/* Biểu trưng lớn thương hiệu dạng hoa văn đỏ rực rỡ */}
                <div className="mt-8 sm:mt-12 lg:mt-14 relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center mx-auto lg:mx-0">
                  <div className="absolute inset-0 bg-[#C1121F]/20 rounded-full blur-2xl animate-pulse" />
                  <img
                    src="/images/logo_brand.png"
                    alt="Cơ khí mỹ thuật Quảng Phú"
                    className="w-full h-full object-contain filter drop-shadow-[0_10px_30px_rgba(193,18,31,0.6)] transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* CÁNH HỮU: ĐOẠN GIỚI THIỆU, SLOGAN, KHÁC BIỆT CỐT LÕI (CĂN ĐỀU BÊN DƯỚI) */}
              <div className="lg:col-span-7 flex flex-col pt-2 lg:pt-4 text-left">
                {/* Đoạn giới thiệu tổng quan - Căn đều */}
                <p className="text-zinc-300 text-[14.5px] sm:text-[16px] leading-[1.85] font-normal text-justify">
                  Là một đơn vị cơ khí mỹ thuật hàng đầu tại Việt Nam, với định hướng trọng tâm cùng là thế mạnh – thiết kế, sản xuất mô hình khối xe nghi trượng phục vụ các đại lễ Quốc gia, đúc tượng đồng Chủ tịch Hồ Chí Minh, tượng đài chiến thắng và tượng thờ truyền thần... <strong className="text-white font-semibold">CƠ KHÍ MỸ THUẬT QUẢNG PHÚ</strong> tự hào kiến tạo những công trình nghệ thuật mang dấu ấn văn hóa lịch sử đặc sắc, trường tồn cùng đất nước qua sự kết hợp giữa kỹ thuật cơ khí chính xác và tinh hoa thủ công độc bản.
                </p>

                {/* Slogan tôn chỉ nổi bật */}
                <div className="my-8 sm:my-10 pl-5 border-l-2 border-[#C1121F]">
                  <h3 className="text-white font-sans font-bold text-[18px] sm:text-[22px] lg:text-[24px] leading-snug tracking-tight">
                    Chế tác những giá trị vượt thời gian, đó luôn là tiêu chí hàng đầu của chúng tôi.
                  </h3>
                </div>

                {/* 3 luận điểm về sự khác biệt - Căn đều */}
                <div className="space-y-4 text-zinc-300 text-[13.5px] sm:text-[15px] leading-relaxed text-justify">
                  <p>
                    <strong className="text-red-500">Sự khác biệt</strong> nằm ở cảm quan <span className="text-white font-semibold">THẤU HIỂU</span> văn hóa và lịch sử dân tộc, mang lại không chỉ sự chính xác kỹ thuật mà còn tôn vinh chiều sâu tinh thần của mỗi công trình.
                  </p>
                  <p>
                    <strong className="text-red-500">Sự khác biệt</strong> nằm ở năng lực <span className="text-white font-semibold">CÔNG NGHỆ SỐ</span> kết hợp thủ công bậc thầy, ứng dụng dựng hình 3D chuẩn xác trước khi những nghệ nhân lão luyện trực tiếp chạm trổ từng chi tiết.
                  </p>
                  <p>
                    <strong className="text-red-500">Sự khác biệt</strong> nằm ở <span className="text-white font-semibold">TÂM HUYẾT</span> của đội ngũ nghệ nhân truyền đời, cam kết bền vững với vật liệu hợp kim tinh khiết chống chọi mọi điều kiện thời tiết khắc nghiệt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PHẦN 2: BAN LÃNH ĐẠO (STYLE CHUẨN SUNBRIGHT HÌNH 2)            */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-24 lg:py-28 border-b border-white/10 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Tiêu đề 2 dòng: "Ban \n Lãnh đạo" */}
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="font-sans font-bold text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.08] tracking-tight">
                Ban Lãnh đạo
              </h2>
            </div>

            {/* Chi tiết lãnh đạo: Ảnh chân dung studio bên trái | Thông tin & danh ngôn bên phải */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
              {/* Cột trái: Ảnh chân dung chất lượng studio (Căn giữa trên mobile) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="aspect-[3/4] max-w-md w-full overflow-hidden rounded-none border border-white/15 bg-zinc-900 shadow-2xl relative group mx-auto lg:mx-0">
                  <img
                    src="/images/1790914174295_3763498134712611457_3763498134712611457_65c9531735dc897b8ae5cb25e453adec.jpg"
                    alt="Nghệ nhân Đặng Quang Phú"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Cột phải: Họ tên, Chức danh đỏ (Căn giữa trên mobile), Hồ sơ năng lực & Phát biểu (Căn đều) */}
              <div className="lg:col-span-7 flex flex-col justify-start text-left pt-2">
                <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-2 pb-4 border-b border-white/10 text-center sm:text-left">
                  <h3 className="font-sans font-bold text-white text-[24px] sm:text-[28px] uppercase tracking-tight">
                    NGHỆ NHÂN ĐẶNG QUANG PHÚ
                  </h3>
                  <span className="text-[#C1121F] font-bold text-[12px] sm:text-[13px] uppercase tracking-widest font-mono">
                    CHỦ TỊCH HỘI ĐỒNG THÀNH VIÊN
                  </span>
                </div>

                {/* Các tiêu chí và kinh nghiệm - Căn đều */}
                <div className="space-y-3.5 mt-6 text-zinc-300 text-[14px] sm:text-[15px] leading-relaxed text-justify">
                  <p className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-2 shrink-0" />
                    <span>Nghệ nhân cơ khí mỹ thuật & đúc đồng truyền thống trên 30 năm kinh nghiệm trong ngành.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-2 shrink-0" />
                    <span>Tốt nghiệp chuyên ngành Điêu khắc & Mỹ thuật Ứng dụng, kế thừa tinh hoa làng nghề đúc đồng lâu đời Bắc Ninh.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-2 shrink-0" />
                    <span>Tổng đạo diễn kỹ thuật và trực tiếp chỉ đạo chế tác các khối xe nghi trượng cấp Quốc gia (A05 – A80), các cụm tượng đài chiến thắng và tượng Chủ tịch Hồ Chí Minh tại các tỉnh thành.</span>
                  </p>
                  <p className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1121F] mt-2 shrink-0" />
                    <span>Cố vấn nghệ thuật tạo hình tượng chân dung truyền thần cho các dòng họ và gia đình trên toàn quốc.</span>
                  </p>
                </div>

                {/* Phát biểu tâm huyết - Căn đều */}
                <div className="mt-8 pt-6 border-t border-white/10 text-zinc-300 text-[14px] sm:text-[15px] leading-[1.8] italic text-justify">
                  <p>
                    &ldquo;Tôi luôn khát khao, nhiệt huyết đam mê công việc và sáng tạo. Tôi vươn mình không ngừng nghỉ để tạo ra những tác phẩm hoàn mỹ nhất cho khách hàng và cho đất nước. Tôi luôn cháy hết mình để truyền lửa nhiệt huyết, lòng tin cậy đến mỗi nghệ nhân, kỹ sư sát cánh bên tôi làm việc cùng tôi trên con đường gìn giữ và nâng tầm cơ khí mỹ thuật Việt Nam.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* PHẦN 3: ĐỘI NGŨ SÁNG TẠO (STYLE CHUẨN SUNBRIGHT HÌNH 3)         */}
        {/* ============================================================== */}
        <section className="relative w-full py-16 sm:py-24 lg:py-28 overflow-hidden">
          <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Tiêu đề */}
            <div className="mb-12 sm:mb-16 text-center lg:text-left">
              <h2 className="font-sans font-bold text-white text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.08] tracking-tight">
                Đội ngũ Sáng tạo & Kỹ thuật
              </h2>
            </div>

            {/* Danh sách các nhân sự chủ chốt dạng danh sách đứng có ảnh & tiểu sử */}
            <div className="space-y-12 sm:space-y-16">
              {/* Nhân sự 1: Giám đốc thiết kế 3D */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pb-12 sm:pb-16 border-b border-white/10">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
                  <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-none border border-white/15 bg-zinc-900 shadow-xl group mx-auto md:mx-0">
                    <img
                      src="/images/1790914174319_3763498134712611457_3763498134712611457_86cca0ea55744505a15cf676c523fb04.jpg"
                      alt="Kỹ sư Trần Mạnh Hùng"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-col text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-1 pb-3 border-b border-white/10 text-center sm:text-left">
                    <h3 className="font-sans font-bold text-white text-[20px] sm:text-[22px] uppercase tracking-tight">
                      KỸ SƯ TRẦN MẠNH HÙNG
                    </h3>
                    <span className="text-[#C1121F] font-bold text-[11.5px] sm:text-[12px] uppercase tracking-widest font-mono">
                      GIÁM ĐỐC THIẾT KẾ 3D & KỸ THUẬT SỐ
                    </span>
                  </div>

                  <p className="mt-4 text-zinc-300 text-[14px] sm:text-[14.5px] leading-[1.8] font-normal text-justify">
                    Thạc sĩ Kỹ thuật Cơ điện tử, hơn 12 năm kinh nghiệm trong lĩnh vực mô phỏng 3D vi tính, tính toán kết cấu chịu tải cho các khối xe nghi trượng và công trình tượng đài siêu trọng. Chuyên gia tiên phong kết hợp scan 3D phục hồi ảnh tư liệu cũ thành mô hình điêu khắc chính xác đến từng milimet trước khi tiến hành đúc phôi đồng.
                  </p>
                </div>
              </div>

              {/* Nhân sự 2: Nghệ nhân điêu khắc truyền thần */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start pb-6">
                <div className="md:col-span-4 lg:col-span-3 flex justify-center md:justify-start">
                  <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden rounded-none border border-white/15 bg-zinc-900 shadow-xl group mx-auto md:mx-0">
                    <img
                      src="/images/1790914174375_3763498134712611457_3763498134712611457_e54ab99a13033bf058f6a1c62b99828e.jpg"
                      alt="Nghệ nhân Nguyễn Văn Bình"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-8 lg:col-span-9 flex flex-col text-left">
                  <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between gap-1 pb-3 border-b border-white/10 text-center sm:text-left">
                    <h3 className="font-sans font-bold text-white text-[20px] sm:text-[22px] uppercase tracking-tight">
                      NGHỆ NHÂN NGUYỄN VĂN BÌNH
                    </h3>
                    <span className="text-[#C1121F] font-bold text-[11.5px] sm:text-[12px] uppercase tracking-widest font-mono">
                      NGHỆ NHÂN ĐIÊU KHẮC & CHẾ TÁC TRUYỀN THẦN
                    </span>
                  </div>

                  <p className="mt-4 text-zinc-300 text-[14px] sm:text-[14.5px] leading-[1.8] font-normal text-justify">
                    Hơn 25 năm gắn bó với nghề đục chạm kim loại truyền thống. Bằng sự am hiểu nhân trắc học và đôi bàn tay tài hoa, nghệ nhân đã đích thân thổi hồn cho hàng trăm pho tượng Chủ tịch Hồ Chí Minh và tượng thờ truyền thần của các dòng họ, tái hiện nụ cười, nếp nhăn và thần thái sinh động vượt thời gian.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
