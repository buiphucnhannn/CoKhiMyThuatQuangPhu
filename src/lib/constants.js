// Central data cho landing page — sửa ở đây là đổi toàn site
// File JS thuần, không dùng TypeScript

export const SITE_INFO = {
  name: "Cơ Khí Mỹ Thuật Quảng Phú",
  shortName: "Quảng Phú",
  slogan: "Cơ khí mỹ thuật • Đúc đồng • Tượng danh nhân • Xe nghi trượng",
  phone: "0961 031 318",
  phoneHref: "tel:0961031318",
  zalo: "https://zalo.me/0961031318",
  address: "Thôn Quảng Bố, Xã Quảng Phú, Huyện Lương Tài, Tỉnh Bắc Ninh, Việt Nam",
  mapUrl: "https://maps.app.goo.gl/3jSzaGFSzLRdym8LA",
  workingHours: "T2 – CN: 7h30 – 18h00 (Hỗ trợ 24/7)",
};

export const NAV_LINKS = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Giới thiệu", href: "#ve-quang-phu" },
  { label: "Dự án", href: "#du-an-noi-bat" },
  { label: "Dịch vụ", href: "#dich-vu" },
  { label: "Liên hệ", href: "#lien-he" },
];

export const STATS = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Công trình hoàn thành" },
  { value: "98%", label: "Khách hàng hài lòng" },
  { value: "24h", label: "Báo giá nhanh" },
];

export const SERVICES = [
  {
    title: "Cổng & hàng rào sắt mỹ thuật",
    desc: "Thiết kế theo mẫu CNC, uốn mỹ thuật thủ công, sơn tĩnh điện bền màu 5–10 năm.",
    icon: "🚪",
  },
  {
    title: "Lan can, cầu thang, ban công",
    desc: "Lan can sắt, inox, kính cường lực. Cầu thang xoắn, xương cá hiện đại.",
    icon: "🪜",
  },
  {
    title: "Mái tôn, mái poly, nhà xưởng",
    desc: "Thi công mái che, nhà tiền chế, khung kèo thép đúng tải trọng, an toàn.",
    icon: "🏠",
  },
  {
    title: "Cửa sắt, cửa cuốn, vách ngăn",
    desc: "Cửa 4 cánh, cửa lùa, cửa cuốn công nghệ Đức, phụ kiện chính hãng.",
    icon: "🔩",
  },
  {
    title: "Nội thất sắt & decor",
    desc: "Kệ, bàn ghế sắt, giường tầng, decor quán cafe – homestay theo yêu cầu.",
    icon: "🛋️",
  },
  {
    title: "Sửa chữa & bảo trì cơ khí",
    desc: "Hàn, thay bản lề, sơn dặm, chống rỉ, bảo trì định kỳ tận nơi.",
    icon: "🛠️",
  },
];

export const WHY_US = [
  {
    title: "Báo giá rõ ràng",
    desc: "Đo đạc tận nơi, báo giá chi tiết từng hạng mục, không phát sinh mập mờ.",
  },
  {
    title: "Xưởng trực tiếp, không qua trung gian",
    desc: "Chủ động tiến độ, kiểm soát chất lượng mối hàn, sơn và lắp đặt.",
  },
  {
    title: "Bảo hành dài hạn",
    desc: "Bảo hành 12–36 tháng tùy hạng mục, hỗ trợ sửa chữa nhanh.",
  },
  {
    title: "Đúng tiến độ",
    desc: "Cam kết thời gian bàn giao trong hợp đồng, cập nhật tiến độ mỗi ngày.",
  },
];

export const PROJECTS = [
  {
    title: "Cổng biệt thự Tân Phú",
    desc: "Cổng 4 cánh CNC + sơn tĩnh điện",
    tag: "Cổng mỹ thuật",
  },
  {
    title: "Lan can Vinhomes",
    desc: "Lan can sắt + tay vịn gỗ",
    tag: "Lan can",
  },
  {
    title: "Mái poly quán cafe Gò Vấp",
    desc: "Khung sắt + tấm poly đặc 5mm",
    tag: "Mái che",
  },
  {
    title: "Cầu thang xoắn Thủ Đức",
    desc: "Sắt tấm dày 5mm, sơn nhám",
    tag: "Cầu thang",
  },
  {
    title: "Nhà xưởng Bình Tân 300m²",
    desc: "Khung kèo thép hộp mạ kẽm",
    tag: "Nhà xưởng",
  },
  {
    title: "Decor homestay Đà Lạt",
    desc: "Giường tầng + kệ sắt decor",
    tag: "Nội thất",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Tiếp nhận & tư vấn",
    desc: "Gọi / Zalo, tư vấn mẫu mã, vật tư và khoảng giá sơ bộ miễn phí.",
  },
  {
    step: "02",
    title: "Khảo sát & báo giá",
    desc: "Đo đạc tận nơi, lên bản vẽ và báo giá chi tiết trong 24h.",
  },
  {
    step: "03",
    title: "Gia công tại xưởng",
    desc: "Cắt CNC, hàn, mài, sơn lót + sơn tĩnh điện đúng quy trình.",
  },
  {
    step: "04",
    title: "Lắp đặt & bàn giao",
    desc: "Lắp đặt, vệ sinh, nghiệm thu và bàn giao kèm phiếu bảo hành.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Anh Minh – Tân Phú",
    content:
      "Xưởng làm cổng rất kỹ, mối hàn mài nhẵn, sơn đều màu. Giá rõ ràng từ đầu, không phát sinh.",
    project: "Cổng 4 cánh mỹ thuật",
  },
  {
    name: "Chị Lan – Gò Vấp",
    content:
      "Đặt mái poly cho quán cafe, thi công 2 ngày là xong, sạch sẽ, đúng hẹn khai trương.",
    project: "Mái che quán cafe",
  },
  {
    name: "Anh Tuấn – Bình Tân",
    content:
      "Nhà xưởng 300m² làm chắc chắn, báo giá cạnh tranh hơn 2 đơn vị khác mà chất lượng tốt.",
    project: "Nhà xưởng tiền chế",
  },
];
