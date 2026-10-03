import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_US } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function WhyUs() {
  return (
    <section id="vi-sao-chon" className="bg-white py-20 dark:bg-zinc-900">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Vì sao chọn Quang Phú"
            title="Làm nghề bằng uy tín, giữ khách bằng bảo hành"
            desc="Không hứa suông — mọi cam kết về vật tư, độ dày sắt, loại sơn và thời gian bảo hành đều ghi rõ trong hợp đồng."
          />
          <div className="mt-8 space-y-5">
            {WHY_US.map((item, i) => (
              <div key={item.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500 font-bold text-zinc-950">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="#quy-trinh">Xem quy trình làm việc</Button>
          </div>
        </div>

        {/* Visual placeholder — thay bằng ảnh xưởng thật */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex h-64 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-600 text-6xl">
            🏭
          </div>
          <div className="mt-8 flex h-64 items-center justify-center rounded-2xl bg-zinc-950 text-6xl dark:bg-zinc-800">
            ⚙️
          </div>
          <div className="flex h-48 items-center justify-center rounded-2xl bg-zinc-100 text-5xl dark:bg-zinc-800">
            🔥
          </div>
          <div className="-mt-8 flex h-48 items-center justify-center rounded-2xl bg-amber-100 text-5xl dark:bg-amber-950">
            ✨
          </div>
        </div>
      </div>
    </section>
  );
}
