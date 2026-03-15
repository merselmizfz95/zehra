import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export default function ServiceNotFound() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-lg px-4 text-center py-24">
          <Sparkles className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
          <h1 className="text-3xl font-bold mb-3">Service Not Found</h1>
          <p className="text-muted-foreground font-[family-name:var(--font-inter)] mb-8">
            This service doesn&apos;t exist. Explore our full range of treatments below.
          </p>
          <Button render={<Link href="/#services" />} className="font-[family-name:var(--font-inter)]">
            View All Services
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
