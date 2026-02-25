import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL! ?? "http://localhost:3000";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
})


export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Alicia Carter Realty",
    template: "%s | Alicia Carter Realty",
  },
  description: "Real estate guidance for buyers and homeowners in Dallas–Fort Worth and Houston, Texas. Credit readiness, down payment assistance, home selling strategy, and foreclosure options support.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Alicia Carter Realty",
    description: "Real estate guidance for buyers and homeowners in Dallas–Fort Worth and Houston, Texas. Credit readiness, down payment assistance, home selling strategy, and foreclosure options support.",
    url: "/",
    siteName: "Alicia Carter Realty",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Alicia Carter Realty",
      },
    ],
    type: "website",
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Alicia Carter Realty",
    description: "Real estate guidance for buyers and homeowners in Dallas–Fort Worth and Houston, Texas. Credit readiness, down payment assistance, home selling strategy, and foreclosure options support.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`} suppressHydrationWarning>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
