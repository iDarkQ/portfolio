import "@/assets/styles/global.css";

import type { Metadata } from "next";
import { AOSInit } from "@/app/components/aos";
import { LayoutHeader, LayoutFooter } from "@/app/components/layout";

export const metadata: Metadata = {
  title: "iDarkQ",
  description:
    "Hi, I'm iDarkQ. Here you'll find my portfolio, projects, and resume ~ a mix of code and design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AOSInit />
      <body className="relative">
        <LayoutHeader />
        <main>{children}</main>
        <LayoutFooter />
      </body>
    </html>
  );
}
