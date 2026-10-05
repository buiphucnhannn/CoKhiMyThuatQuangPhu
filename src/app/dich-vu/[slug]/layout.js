import { SERVICES_DATA } from "@/data/servicesData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Dịch Vụ | Cơ Khí Mỹ Thuật Quảng Phú",
    };
  }

  return {
    title: `${service.title} | Cơ Khí Mỹ Thuật Quảng Phú`,
    description: service.summary,
  };
}

export default function ServiceDetailLayout({ children }) {
  return children;
}
