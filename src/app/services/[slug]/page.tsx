import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getServiceBySlug } from "@/lib/data";
import { SERVICE_CONTENT } from "@/lib/serviceContent";
import { ServiceDetail } from "./ServiceDetail";

// Always render dynamically so cookies() is available for the Supabase client
export const dynamic = "force-dynamic";

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
