import type { Metadata } from "next";
import { Rethink_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

// Load Rethink Sans dynamically
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  variable: "--font-rethink",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Load Geist Mono for code/monospaced segments
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

// Configure full SEO Metadata
export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.teacher.name }],
  creator: siteConfig.teacher.name,
  metadataBase: new URL(siteConfig.seo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteConfig.seo.siteUrl,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.teacher.name,
    images: [
      {
        url: siteConfig.seo.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.teacher.name} - English Medium Mathematics Specialist`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    images: [siteConfig.seo.ogImage],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Define JSON-LD structured data for SEO rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": siteConfig.teacher.name,
    "jobTitle": siteConfig.teacher.role,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": siteConfig.teacher.qualifications[0].institution,
    },
    "description": siteConfig.seo.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Colombo",
      "addressCountry": "LK",
    },
    "telephone": siteConfig.contact.phone,
    "email": siteConfig.contact.email,
    "url": siteConfig.seo.siteUrl,
    "sameAs": [
      siteConfig.contact.whatsapp,
    ],
  };

  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        rethinkSans.variable,
        geistMono.variable,
        "font-sans"
      )}
    >
      <head>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        {children}
      </body>
    </html>
  );
}
