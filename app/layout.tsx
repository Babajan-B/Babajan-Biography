import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr Babajan Banaganapalli – Bioinformatics Lead & AI Developer",
  description:
    "Dark, minimal personal site for Dr Babajan Banaganapalli – bioinformatics lead and AI-focused developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-[#0a0a0a] text-[#ededed]`}>
        {children}
      </body>
    </html>
  );
}
