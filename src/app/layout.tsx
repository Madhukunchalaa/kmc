import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Shell from "@/components/Shell";

// Use distinct CSS variable names (--nf-*) to avoid circular self-reference
// in globals.css where --font-heading etc. are defined with proper fallbacks
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--nf-heading",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--nf-sub",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--nf-body",
});

export const metadata: Metadata = {
  title: "KrissMaagiic Crystals",
  description: "Authentic, energised & intuitively selected crystals — bracelets, malas, pendants, towers and healing services curated by Kriss in Hyderabad.",
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
      <body className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
