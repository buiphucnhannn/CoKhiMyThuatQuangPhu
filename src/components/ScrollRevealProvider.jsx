"use client";

import { useEffect } from "react";

export default function ScrollRevealProvider({ children }) {
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    // Bi-directional observer: Kích hoạt khi lướt tới, reset khi ra ngoài màn hình
    // Đảm bảo dù mới load hay load lâu, lướt lên hay lướt xuống đều hiển thị mượt mà
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
          } else {
            // Khi phần tử cuộn ra ngoài tầm mắt (vượt lên trên hoặc trôi xuống dưới)
            const rect = entry.boundingClientRect;
            if (rect.top > window.innerHeight || rect.bottom < 0) {
              entry.target.classList.remove("is-revealed");
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Quét bổ sung để đảm bảo bắt trọn toàn bộ các section sau khi render hoàn tất
    const t1 = setTimeout(observeAll, 100);
    const t2 = setTimeout(observeAll, 400);
    const t3 = setTimeout(observeAll, 1000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
