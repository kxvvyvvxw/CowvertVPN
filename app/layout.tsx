import type { Metadata } from "next";
import { Varela_Round, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

const varelaRound = Varela_Round({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-varela-round",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cowvert VPN — A lightweight, open‑source VPN",
  description:
    "A lightweight, open‑source VPN that shields your data—no unnecessary overhead, just privacy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${varelaRound.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />

          {/* Grass SVG fixed to bottom */}
          <div className="fixed bottom-0 left-0 right-0 w-full pointer-events-none z-0">
            <Image
              src="/images/grass.svg"
              alt=""
              width={1920}
              height={200}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </body>
    </html>
  );
}
