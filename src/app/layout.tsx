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
  description: "Guidance and support for first-time homebuyers navigating the homeownership process with clarity and confidence.",
  openGraph: {
    title: "Alicia Carter Realty",
    description: "Guidance and support for first-time homebuyers navigating the homeownership process with clarity and confidence.",
    type: "website",
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
