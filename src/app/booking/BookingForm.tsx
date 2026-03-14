"use client";

import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/context";
import { createBooking } from "@/actions/booking";
import { toast } from "sonner";
import type { Service } from "@/types/database";

interface BookingFormProps {
  services: Service[];
}

export function BookingForm({ services }: BookingFormProps) {
  const { t, locale } = useI18n();

  const serviceOptions =
    services.length > 0
      ? services.map((s) => (locale === "en" ? s.name_en : s.name_fr))
      : ["Facial Treatments", "Laser Epilation", "Eyelash Extensions", "Skincare Products"];

  async function handleSubmit(formData: FormData) {
    const result = await createBooking(formData);
    if (result.success) {
      toast.success(t.contact.success);
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 font-[family-name:var(--font-inter)]">
          <CalendarDays className="h-4 w-4" />
          {locale === "en" ? "Online Booking" : "Reservation en Ligne"}
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          {t.contact.title}
        </h1>
        <p className="mt-4 text-muted-foreground font-[family-name:var(--font-inter)]">
          {t.contact.subtitle}
        </p>
      </div>

      <Card className="border-border/50">
        <CardContent className="p-8">
          <form action={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="font-[family-name:var(--font-inter)]">
                  {t.contact.name}
                </Label>
                <Input id="name" name="name" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="email" className="font-[family-name:var(--font-inter)]">
                  {t.contact.email}
                </Label>
                <Input id="email" name="email" type="email" required className="mt-1.5" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="font-[family-name:var(--font-inter)]">
                  {t.contact.phone}
                </Label>
                <Input id="phone" name="phone" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="service" className="font-[family-name:var(--font-inter)]">
                  {t.contact.service}
                </Label>
                <select
                  id="service"
                  name="service"
                  required
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-[family-name:var(--font-inter)]"
                >
                  <option value="">{t.contact.service}</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="preferred_date" className="font-[family-name:var(--font-inter)]">
                {t.contact.preferredDate}
              </Label>
              <Input id="preferred_date" name="preferred_date" type="date" className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="message" className="font-[family-name:var(--font-inter)]">
                {t.contact.message}
              </Label>
              <Textarea id="message" name="message" rows={4} className="mt-1.5" />
            </div>

            <Button type="submit" size="lg" className="w-full font-[family-name:var(--font-inter)]">
              {t.contact.send}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
