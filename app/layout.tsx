import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/context/LanguageContext";
import { Toaster } from "@/components/ui/sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.drvioletavladimirov.rs'),
  title: "Dr Violeta Vladimirov - Stomatološka ordinacija Subotica | Dental Clinic",
  description: "Stomatološka ordinacija Dr Violeta Vladimirov u Subotici - Preko 20 godina iskustva u svim oblastima stomatologije. Preventivna, estetska i restaurativna stomatologija. Dental clinic with over 20 years of experience.",
  keywords: [
    "stomatolog Subotica",
    "zubар Subotica",
    "stomatološka ordinacija Subotica",
    "Dr Violeta Vladimirov",
    "dental clinic Subotica",
    "dentist Subotica",
    "estetska stomatologija",
    "implantologija",
    "izbeljivanje zuba",
    "protetika",
    "preventivna stomatologija",
    "dečja stomatologija",
    "teeth whitening",
    "dental implants",
  ],
  authors: [{ name: "Dr Violeta Vladimirov" }],
  openGraph: {
    type: "website",
    locale: "sr_RS",
    alternateLocale: "en_US",
    url: "https://www.drvioletavladimirov.rs/",
    siteName: "Dr Violeta Vladimirov Dental Clinic",
    title: "Dr Violeta Vladimirov - Stomatološka ordinacija Subotica",
    description: "Vrhunska stomatološka nega sa preko 20 godina iskustva u Subotici. Top-quality dental care with over 20 years of experience.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr Violeta Vladimirov Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr Violeta Vladimirov - Stomatološka ordinacija Subotica",
    description: "Vrhunska stomatološka nega sa preko 20 godina iskustva.",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.drvioletavladimirov.rs/",
    languages: {
      "sr-RS": "https://www.drvioletavladimirov.rs/",
      "en-US": "https://www.drvioletavladimirov.rs/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              "name": "Dr Violeta Vladimirov",
              "description": "Stomatološka ordinacija sa preko 20 godina iskustva",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Subotica",
                "addressCountry": "RS"
              },
              "telephone": "+381628561867",
              "email": "dr.milan.vladimirov@gmail.com",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "medicalSpecialty": "Dentistry"
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        <LanguageProvider>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <ButtonToTop />
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
