// Tiện ích cuộn trang mượt mà phong cách hoàng gia (chậm rãi, êm ái, định vị chuẩn xác và sạch URL)
export function scrollToSection(targetId, customOffset) {
  if (typeof window === "undefined") return;

  const id = (targetId || "").replace(/^#/, "");

  // Xóa dấu # trên thanh URL để URL luôn sạch và đẹp mắt
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", window.location.pathname);
  }

  // Nếu là về đầu trang hoặc hero
  if (!id || id === "hero") {
    smoothScrollToPosition(0, 950);
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  // Tính toán độ bù (offset) tối ưu để section hiển thị ở góc nhìn đẹp nhất
  const isMobile = window.innerWidth < 1024;
  const headerHeight = isMobile ? 56 : 64;

  // Tùy chỉnh vị trí dừng đẹp mắt theo từng section
  let framingOffset = 18;
  if (id === "ve-quang-phu") framingOffset = 28;
  if (id === "con-so") framingOffset = 16;
  if (id === "du-an-noi-bat") framingOffset = 24;
  if (id === "dich-vu") framingOffset = 22;
  if (id === "quy-trinh") framingOffset = 22;
  if (id === "khach-hang") framingOffset = 24;
  if (id === "lien-he") framingOffset = 20;

  const finalOffset = customOffset !== undefined ? customOffset : (headerHeight + framingOffset);
  const elementTop = el.getBoundingClientRect().top + window.pageYOffset;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const targetY = Math.max(0, Math.min(elementTop - finalOffset, maxScroll));

  smoothScrollToPosition(targetY, 1000);
}

// Hàm cuộn với thuật toán gia tốc & giảm tốc tự nhiên (easeInOutCubic)
function smoothScrollToPosition(targetY, duration = 1000) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;

  if (Math.abs(distance) < 5) return;

  const startTime = performance.now();

  // Đường cong chuyển động êm ái như xe lướt
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      // Đảm bảo không bị lưu hash trên URL sau khi cuộn xong
      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  }

  requestAnimationFrame(step);
}
