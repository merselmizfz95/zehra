import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/lib/i18n/context";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zehra Glam | Beauty & Aesthetics Studio",
  description:
    "Premium aesthetic treatments crafted to enhance your natural beauty with expert care and luxurious results. Facial treatments, laser epilation, eyelash extensions, and curated skincare products.",
  keywords: [
    "beauty",
    "aesthetics",
    "facial treatment",
    "laser epilation",
    "eyelash extensions",
    "skincare",
    "Brussels",
    "Ixelles",
  ],
  openGraph: {
    title: "Zehra Glam | Beauty & Aesthetics Studio",
    description:
      "Premium aesthetic treatments crafted to enhance your natural beauty.",
    url: "https://www.zehra-glam.com",
    siteName: "Zehra Glam",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <I18nProvider>
          {children}
          <Toaster position="top-right" />
        </I18nProvider>
      </body>
    </html>
  );
}
