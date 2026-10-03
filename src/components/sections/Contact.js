"use client";

// Form liên hệ — JS thuần, dùng state để báo đã gửi
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_INFO } from "@/lib/constants";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: picks — ở đây bạn gọi API / Zalo / Google Sheet
    // Hiện tại chỉ demo chuyển trạng thái đã gửi
    setSent(true);
  }

  return (
    <section id="lien-he" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHeading
          eyebrow="Liên hệ"
          title="Nhận khảo sát & báo giá miễn phí"
          desc="Gọi trực tiếp nhanh nhất — hoặc để lại thông tin, xưởng liên hệ lại trong 30 phút."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Info */}
          <div className="space-y-4">
            <a
              href={SITE_INFO.phoneHref}
              className="block rounded-2xl bg-amber-500 p-6 text-zinc-950 transition hover:bg-amber-400"
            >
              <p className="text-sm font-medium">📞 Gọi ngay (7h30 – 17h30)</p>
              <p className="mt-1 text-3xl font-black">{SITE_INFO.phone}</p>
            </a>
            <a
              href={SITE_INFO.zalo}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-zinc-200 p-6 transition hover:border-amber-500 hover:bg-amber-50 dark:border-zinc-800 dark:hover:bg-zinc-800"
            >
              <p className="font-bold text-zinc-900 dark:text-white">
                💬 Nhắn Zalo gửi ảnh / bản vẽ
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Gửi mẫu cổng, lan can bạn thích để được báo giá chính xác nhất.
              </p>
            </a>
            <div className="rounded-2xl border border-zinc-200 p-6 text-sm leading-7 text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
              <p>📍 Địa chỉ: {SITE_INFO.address}</p>
              <p>⏰ Giờ làm: {SITE_INFO.workingHours}</p>
              <p>🛡️ Bảo hành 12–36 tháng + hỗ trợ sau bán hàng</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8 dark:border-zinc-800 dark:bg-zinc-950">
            {sent ? (
              <div className="flex h-full min-h-64 flex-col items-center justify-center text-center">
                <p className="text-5xl">✅</p>
                <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-white">
                  Đã nhận thông tin!
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  Xưởng sẽ gọi lại cho bạn sớm nhất. Cảm ơn bạn đã tin tưởng
                  Quang Phú.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-amber-600 hover:underline"
                >
                  Gửi thêm yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      Họ tên *
                    </label>
                    <input
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      SĐT *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="09xx xxx xxx"
                      className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Hạng mục cần làm
                  </label>
                  <select className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
                    <option>Cổng / hàng rào sắt mỹ thuật</option>
                    <option>Lan can / cầu thang</option>
                    <option>Mái tôn / mái poly / nhà xưởng</option>
                    <option>Cửa sắt / cửa cuốn</option>
                    <option>Nội thất sắt / decor</option>
                    <option>Sửa chữa / khác</option>
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Mô tả thêm
                  </label>
                  <textarea
                    rows={4}
                    placeholder="VD: Nhà mặt tiền 5m, muốn làm cổng 4 cánh CNC, khoảng giá bao nhiêu?"
                    className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-zinc-950 transition hover:bg-amber-400"
                >
                  Gửi yêu cầu báo giá →
                </button>
                <p className="text-center text-xs text-zinc-500">
                  Thông tin của bạn được bảo mật tuyệt đối.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
