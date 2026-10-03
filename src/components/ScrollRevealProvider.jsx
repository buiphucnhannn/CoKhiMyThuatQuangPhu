"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    // Bi-directional observer: Kích hoạt khi lướt tới, reset khi ra khỏi màn hình
    // Đảm bảo dù mới load hay load lâu, lướt lên hay lướt xuống đều hiển thị hiệu ứng mượt mà
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            // Khi phần tử cuộn ra ngoài màn hình: gỡ bỏ class để sẵn sàng kích hoạt lại khi lướt ngược lại
            entry.target.classList.remove("is-revealed");
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "10px 0px -30px 0px",
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Hỗ trợ đồng bộ bi-directional khi người dùng cuộn chuột hoặc bấm phím điều hướng:
    let scrollRaf = null;
    const checkVisibility = () => {
      const windowHeight = window.innerHeight;
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // Khi phần tử đi vào khung nhìn (từ trên xuống hoặc từ dưới lên):
        if (rect.top < windowHeight - 30 && rect.bottom > 30) {
          if (!el.classList.contains("is-revealed")) {
            el.classList.add("is-revealed");
          }
        } else if (rect.top > windowHeight + 60 || rect.bottom < -60) {
          // Khi phần tử cuộn ra ngoài tầm mắt: reset để lướt lại có hiệu ứng ngay
          if (el.classList.contains("is-revealed")) {
            el.classList.remove("is-revealed");
          }
        }
      });
    };

    const handleScroll = () => {
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      scrollRaf = requestAnimationFrame(checkVisibility);
    };

    // Chạy kiểm tra vị trí ban đầu
    checkVisibility();

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Quét bổ sung theo thời gian
    const t1 = setTimeout(() => { observeAll(); checkVisibility(); }, 80);
    const t2 = setTimeout(() => { observeAll(); checkVisibility(); }, 350);
    const t3 = setTimeout(() => { observeAll(); checkVisibility(); }, 900);

    // Lắng nghe thay đổi DOM
    let mutationObserver = null;
    if (typeof MutationObserver !== "undefined") {
      mutationObserver = new MutationObserver(() => {
        observeAll();
        checkVisibility();
      });

      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener("scroll", handleScroll);
      if (mutationObserver) mutationObserver.disconnect();
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
