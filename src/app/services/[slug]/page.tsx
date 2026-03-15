import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getServiceBySlug, getServices } from "@/lib/data";
import { SERVICE_CONTENT, toServiceSlug } from "@/lib/serviceContent";
import { ServiceDetail } from "./ServiceDetail";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };
  const content = SERVICE_CONTENT[service.icon];
  return {
    title: `${service.name_en} | Zehra Glam`,
    description: content?.tagline.en ?? service.description_en,
  };
}

export async function generateStaticParams() {
  try {
    const services = await getServices();
    return services.map((s) => ({ slug: toServiceSlug(s.name_en) }));
  } catch {
    return [];
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[service.icon] ?? SERVICE_CONTENT["Sparkles"];

  return (
    <>
      <Navbar />
      <main>
        <ServiceDetail service={service} content={content} />
      </main>
      <Footer />
    </>
  );
}
