"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

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
  const pathname = usePathname();
  const isSigninPage = pathname === "/signin";
  const isSignupPage = pathname === "/signup";
  const isHomePage = pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en" className={`${generalSans.variable}`}>
      <body 
        className={cn(
          "relative overflow-x-hidden font-generalSans leading-[1.25rem] tracking-tight text-black", 
          (isSigninPage || isSignupPage) ? "pt-0" : "pt-20",
          (isHomePage || isSigninPage || isSignupPage) ? "bg-gradient-to-b from-primary/10 to-background" : ""
        )}
      >
        <Navbar className={(isSigninPage || isSignupPage) ? "hidden" : ""} />
        <div className="max-w-[1440px] mx-auto px-6">
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
