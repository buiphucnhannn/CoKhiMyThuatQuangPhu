import { PROJECTS_DATA } from "@/data/projectsData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Dự Án | Cơ Khí Mỹ Thuật Quảng Phú",
    };
  }

  return {
    title: `${project.title} | Cơ Khí Mỹ Thuật Quảng Phú`,
    description: project.excerpt,
  };
}

export default function ProjectDetailLayout({ children }) {
  return children;
}
