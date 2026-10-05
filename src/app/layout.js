import { Cormorant_Upright, Playfair_Display, Be_Vietnam_Pro, Dancing_Script } from "next/font/google";
import "./globals.css";

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-monument",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-serif",
  display: "swap",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin", "vietnamese"],
  weight: ["500", "600", "700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata = {
  title: "Cơ Khí Mỹ Thuật Quảng Phú | Chế Tác Những Giá Trị Trường Tồn",
  description: "Từ những khối xe nghi trượng quy mô quốc gia (A05 - A80) đến các tác phẩm tượng đài, tượng chân dung Chủ tịch Hồ Chí Minh, tượng thờ dòng họ giàu giá trị nghệ thuật.",
  keywords: "Cơ khí mỹ thuật Quảng Phú, xe nghi trượng, A80, tượng Bác Hồ, tượng chân dung thờ, tượng đài",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      className={`${cormorantUpright.variable} ${playfair.variable} ${beVietnam.variable} ${dancingScript.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#0D0E11] text-[#E0E2EC] font-sans selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
