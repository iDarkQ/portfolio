import "@/assets/styles/global.css";

import type { Metadata } from "next";
import { AOSInit } from "@/app/components/aos";
import { LayoutHeader, LayoutFooter } from "@/app/components/layout";
import { Analytics } from "@vercel/analytics/next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "iDarkQ",
  description:
    "Hi, I'm iDarkQ. Here you'll find my portfolio, projects, and resume ~ a mix of code and design.",
};

const googleFont = localFont({
  src: [
    {
      path: "../assets/fonts/google-sans.woff2",
      weight: "475",
      style: "normal",
    },
    {
      path: "../assets/fonts/google-sans-bold.woff2",
      weight: "500",
      style: "bold",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <Analytics />
      <body className={`relative ${googleFont.className}`}>
        <LayoutHeader />
        <main>{children}</main>
        <LayoutFooter />
      </body>
    </html>
  );
}
