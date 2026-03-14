"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">Zehra</span>{" "}
              <span className="text-sm font-light tracking-widest uppercase opacity-70">
                Glam
              </span>
            </Link>
            <p className="mt-3 text-sm opacity-70 font-[family-name:var(--font-inter)]">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-inter)]">
              {t.nav.services}
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-inter)]">
              {["Facial Treatments", "Laser Epilation", "Eyelash Extensions", "Skincare Products"].map(
                (service) => (
                  <li key={service}>
                    <span className="text-sm opacity-70 hover:opacity-100 transition-opacity cursor-default">
                      {service}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 font-[family-name:var(--font-inter)]">
              {t.nav.contact}
            </h3>
            <div className="space-y-2 text-sm opacity-70 font-[family-name:var(--font-inter)]">
              <p>Rue d&apos;Arlon 25, Ixelles</p>
              <p>0469 24 49 55</p>
              <p>hello@zehra-glam.com</p>
              <p>Mon&ndash;Sat: 9:00 &ndash; 20:00</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center">
          <p className="text-xs opacity-50 font-[family-name:var(--font-inter)]">
            &copy; {new Date().getFullYear()} Zehra Glam. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
