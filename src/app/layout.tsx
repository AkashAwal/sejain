import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {
  CONTACT_EMAIL,
  CONTACT_PHONES,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/constants";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | New Delhi`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "art studio New Delhi",
    "art academy Malviya Nagar",
    "commissioned paintings India",
    "art classes New Delhi",
    "Seema Jabin Husain artist",
    "Sejain Art Studio",
    "resin art classes Delhi",
    "fine arts academy Delhi",
  ],
  authors: [{ name: "Seema Jabin Husain" }],
  creator: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [{ url: "/sejain-logo.png", width: 1436, height: 484, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/sejain-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ArtGallery",
  name: SITE_NAME,
  alternateName: "Sejain Creations",
  description: SITE_TAGLINE,
  url: SITE_URL,
  image: `${SITE_URL}/sejain-logo.png`,
  logo: `${SITE_URL}/sejain-logo.png`,
  telephone: CONTACT_PHONES,
  email: CONTACT_EMAIL,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "N Block, M73-B, opp. Sant Nirankari School, Block N, Malviya Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110017",
    addressCountry: "IN",
  },
  sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin],
  founder: {
    "@type": "Person",
    name: "Seema Jabin Husain",
    jobTitle: "Artist & Mentor",
    alumniOf: "Lucknow College of Arts",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "10:00",
    closes: "18:00",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${oswald.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
