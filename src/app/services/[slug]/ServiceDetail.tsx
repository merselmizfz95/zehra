"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Clock, Tag, ChevronDown, ChevronUp,
  Droplets, Sun, Shield, Sparkles, Heart, Eye, Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n/context";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";
import type { Service } from "@/types/database";
import type { ServiceContent } from "@/lib/serviceContent";

const ICON_MAP: Record<string, LucideIcon> = {
  Droplets, Sun, Shield, Sparkles, Heart, Eye, Zap, Clock,
};

interface ServiceDetailProps {
  service: Service;
  content: ServiceContent;
}

export function ServiceDetail({ service, content }: ServiceDetailProps) {
  const { locale } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const name = locale === "en" ? service.name_en : service.name_fr;
  const description = locale === "en" ? service.description_en : service.description_fr;
  const tagline = locale === "en" ? content.tagline.en : content.tagline.fr;
  const fullDesc = locale === "en" ? content.fullDescription.en : content.fullDescription.fr;
  const heroImage = service.image_url || content.heroImage;

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pb-16 pt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-sm font-medium text-primary uppercase tracking-[0.25em] mb-3 font-[family-name:var(--font-inter)]">
              {locale === "en" ? "Our Services" : "Nos Services"}
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight max-w-2xl">
              {name}
            </h1>
            <p className="mt-4 text-xl text-white/70 font-[family-name:var(--font-inter)] italic max-w-xl">
              {tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-white/80 font-[family-name:var(--font-inter)] text-sm">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {content.duration}
              </span>
              <span className="flex items-center gap-2">
                <Tag className="h-4 w-4 text-primary" />
                {locale === "en" ? "From" : "À partir de"} {content.priceFrom}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] font-[family-name:var(--font-inter)]">
                {locale === "en" ? "About This Service" : "À Propos de ce Soin"}
              </p>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-[family-name:var(--font-inter)] text-center">
              {fullDesc}
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Button render={<Link href="/booking" />} size="lg" className="font-[family-name:var(--font-inter)] gap-2">
                {locale === "en" ? "Book This Service" : "Réserver ce Soin"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-inter)]">
                {locale === "en" ? "Why Choose This Treatment" : "Pourquoi Choisir ce Soin"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {locale === "en" ? "Key Benefits" : "Avantages Clés"}
              </h2>
            </div>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {content.benefits.map((benefit, i) => {
              const BenefitIcon = ICON_MAP[benefit.icon] ?? Sparkles;
              const title = locale === "en" ? benefit.title.en : benefit.title.fr;
              const desc = locale === "en" ? benefit.desc.en : benefit.desc.fr;
              return (
                <StaggerItem key={i}>
                  <div className="p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                      <BenefitIcon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-inter)]">
                {locale === "en" ? "The Process" : "Le Processus"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                {locale === "en" ? "How It Works" : "Comment Ça Marche"}
              </h2>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-[50%] top-0 bottom-0 w-px bg-border/60 -translate-x-px hidden sm:block" />

            <div className="space-y-8">
              {content.steps.map((step, i) => {
                const isEven = i % 2 === 0;
                const title = locale === "en" ? step.title.en : step.title.fr;
                const desc = locale === "en" ? step.desc.en : step.desc.fr;
                return (
                  <ScrollReveal key={step.step} delay={i * 0.1} variant={isEven ? "slide-left" : "slide-right"}>
                    <div className={`flex items-start gap-6 sm:gap-10 ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                      <div className={`flex-1 ${isEven ? "sm:text-right" : "sm:text-left"}`}>
                        <div className={`p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-colors ${isEven ? "sm:ml-auto" : "sm:mr-auto"} max-w-md`}>
                          <h3 className="font-semibold text-lg mb-2">{title}</h3>
                          <p className="text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      </div>

                      {/* Step number bubble */}
                      <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg z-10 relative shadow-lg shadow-primary/20">
                        {step.step}
                      </div>

                      <div className="flex-1 hidden sm:block" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─────────────────────────────────────────────────────────── */}
      {content.galleryImages.length > 0 && (
        <section className="py-20 bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  {locale === "en" ? "Inside the Studio" : "Dans le Studio"}
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {content.galleryImages.map((img, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${name} ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FAQ ──────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-3 font-[family-name:var(--font-inter)]">
                {locale === "en" ? "Common Questions" : "Questions Fréquentes"}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">FAQ</h2>
            </div>
          </ScrollReveal>

          <div className="space-y-3">
            {content.faq.map((item, i) => {
              const q = locale === "en" ? item.q.en : item.q.fr;
              const a = locale === "en" ? item.a.en : item.a.fr;
              const isOpen = openFaq === i;
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="rounded-xl border border-border/50 bg-card overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left font-medium font-[family-name:var(--font-inter)] hover:bg-muted/30 transition-colors"
                    >
                      <span>{q}</span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4 text-primary shrink-0 ml-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0 ml-4" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-muted-foreground font-[family-name:var(--font-inter)] leading-relaxed border-t border-border/30 pt-4">
                        {a}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BOOKING CTA ─────────────────────────────────────────────────────── */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.08),transparent)]" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] opacity-70 mb-4 font-[family-name:var(--font-inter)]">
              {locale === "en" ? "Ready to Begin?" : "Prête à Commencer ?"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              {locale === "en" ? `Book Your ${name}` : `Réserver Votre ${name}`}
            </h2>
            <p className="opacity-80 font-[family-name:var(--font-inter)] mb-10 text-lg">
              {locale === "en"
                ? "Secure your appointment today with a €25 deposit. Full flexibility to reschedule."
                : "Réservez votre rendez-vous dès aujourd'hui avec un acompte de 25€. Flexibilité totale pour reporter."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                render={<Link href="/booking" />}
                size="lg"
                variant="secondary"
                className="font-[family-name:var(--font-inter)] gap-2 bg-white text-primary hover:bg-white/90"
              >
                {locale === "en" ? "Book Now" : "Réserver Maintenant"}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                render={<Link href="/#services" />}
                size="lg"
                variant="link"
                className="font-[family-name:var(--font-inter)] text-white/80 hover:text-white"
              >
                {locale === "en" ? "View All Services" : "Voir Tous les Services"}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
