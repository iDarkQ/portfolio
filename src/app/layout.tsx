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
  src: "../assets/fonts/GoogleSansFlex.ttf",
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
