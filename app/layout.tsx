import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ShiroCursor } from "@/components/ShiroCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dongze He | Data Scientist II",
  description:
    "Data Scientist II building single-cell foundation models and multi-agent LLM systems for biological discovery at Altos Labs.",
  openGraph: {
    title: "Dongze He | Data Scientist II",
    description:
      "Single-cell foundation models, proteomics agents, and computational biology at Altos Labs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ShiroCursor />
        {children}
      </body>
    </html>
  );
}
