import type { Metadata } from "next";

import "./globals.css";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Sukhsimran Singh — AI/ML Engineer",
  description:
    "AI/ML Engineer building intelligent systems across machine learning, generative AI, retrieval, and backend engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>{children}</main>

        
      </body>
    </html>
  );
}