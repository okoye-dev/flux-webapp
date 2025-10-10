import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "AgroSense - Smart Farming Platform",
  description: "AI-powered agricultural advisory system for farmers",
  openGraph: {
    title: "AgroSense - Smart Farming Platform",
    description: "AI-powered agricultural advisory system for farmers",
    images: ["/opengraph-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgroSense - Smart Farming Platform",
    description: "AI-powered agricultural advisory system for farmers",
    images: ["/opengraph-image.jpg"],
  },
};

const generalSans = localFont({
  src: [
    {
      path: "./fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/GeneralSans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/GeneralSans-Bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-general-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${generalSans.variable}`}>
      <body className="relative overflow-x-hidden font-generalSans leading-[1.25rem] tracking-tight text-black">
        <Navbar />
        <div className="mx-auto max-w-[1440px] px-6">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
