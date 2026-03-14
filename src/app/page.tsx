import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import {
  getHeroContent,
  getServices,
  getAboutContent,
  getTestimonials,
  getContactInfo,
} from "@/lib/data";

export default async function HomePage() {
  const [hero, services, about, testimonials, contact] = await Promise.all([
    getHeroContent(),
    getServices(),
    getAboutContent(),
    getTestimonials(),
    getContactInfo(),
  ]);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection hero={hero} />
        <ServicesSection services={services} />
        <AboutSection about={about} />
        <TestimonialsSection testimonials={testimonials} />
        <ContactSection contact={contact} services={services} />
      </main>
      <Footer />
    </>
  );
}
