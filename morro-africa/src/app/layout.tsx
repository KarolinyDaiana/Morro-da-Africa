import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Morro da África",
  description: "Site informativo sobre o Morro da África",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-branco w-full min-h-screen font-poppins">
      <body className={inter.className}>{children}</body>
      <Footer/>
    </html>
  );
}
