import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-hanken",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://quintileadvisory.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Boutique Supply Chain & Operations Recruitment | Quintile Advisory | Chicago",
    template: "%s | Quintile Advisory",
  },
  description:
    "Quintile Advisory is a Chicago-based boutique recruitment firm specializing in Supply Chain, Manufacturing, Operations, Engineering, Technology, and AI talent — across industries, nationally.",
  keywords: [
    "supply chain recruitment",
    "executive search",
    "manufacturing recruitment",
    "operations recruiter",
    "AI talent",
    "Chicago recruitment firm",
    "retained search",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Quintile Advisory — We Find The Exceptional",
    description:
      "Boutique recruitment for Supply Chain, Manufacturing, Operations, Engineering, Technology & AI. Chicago-based, recruiting nationally.",
    siteName: "Quintile Advisory",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quintile Advisory — We Find The Exceptional",
    description:
      "Boutique recruitment for Supply Chain, Manufacturing, Operations, Engineering, Technology & AI.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${hanken.variable} ${mono.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
