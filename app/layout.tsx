import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Flux - Extension Officer Dashboard",
  description: "AI-powered agricultural advisory system for extension officers",
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
        <div className="px-6 md:pl-80">{children}</div>
      </body>
    </html>
  );
}
