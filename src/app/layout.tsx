import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";

// Cinzel — ancient/mystical Roman engraving feel, perfect for crystal/astrology
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--nf-heading",
});

// Cinzel Decorative — ornate display font for hero titles & section headers
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--nf-display",
});

// Cormorant Garamond — elegant spiritual serif, kept for sub-headings
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--nf-sub",
});

// Raleway — refined geometric sans, softer & more intentional than Inter
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--nf-body",
});

export const metadata: Metadata = {
  title: {
    default: "KrissMaagiic Crystals | Authentic Healing Crystals & Spiritual Services",
    template: "%s | KrissMaagiic Crystals"
  },
  description: "Authentic, energised & intuitively selected premium crystals. Book personalised tarot readings, custom spells, and numerology charts with Kriss in Hyderabad.",
  keywords: ["KrissMaagiic Crystals", "Healing Crystals", "Tarot Reading", "Spell Casting", "Numerology", "Crystal Bracelets", "Hyderabad Crystals"],
  openGraph: {
    title: "KrissMaagiic Crystals | Authentic Healing Crystals & Spiritual Services",
    description: "Authentic, energised & intuitively selected premium crystals and spiritual services.",
    url: "https://krissmaagiiccrystals.com",
    siteName: "KrissMaagiic Crystals",
    locale: "en_IN",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Bootstrap 5 CSS */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        {/* Font Awesome 6 Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${cinzel.variable} ${cinzelDecorative.variable} ${cormorant.variable} ${raleway.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
