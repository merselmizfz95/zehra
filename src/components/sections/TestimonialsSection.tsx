"use client";

import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import type { Testimonial } from "@/types/database";
import { DEFAULT_TESTIMONIALS } from "@/constants/siteConfig";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { t, locale } = useI18n();

  const displayTestimonials =
    testimonials.length > 0
      ? testimonials
      : DEFAULT_TESTIMONIALS.map((t, i) => ({ id: String(i), ...t }));

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3 font-[family-name:var(--font-inter)]">
            {t.testimonials.eyebrow}
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayTestimonials.map((testimonial) => {
            const quote =
              locale === "en"
                ? testimonial.quote_en
                : testimonial.quote_fr;
            const service =
              locale === "en"
                ? testimonial.service_en
                : testimonial.service_fr;

            return (
              <Card
                key={testimonial.id}
                className="border-border/50 hover:shadow-md transition-shadow"
              >
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground italic leading-relaxed font-[family-name:var(--font-inter)]">
                    &ldquo;{quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="font-semibold text-sm">
                      {testimonial.client_name}
                    </p>
                    <p className="text-xs text-muted-foreground font-[family-name:var(--font-inter)]">
                      {service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
