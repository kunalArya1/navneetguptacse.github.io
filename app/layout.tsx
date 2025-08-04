import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Navneet Gupta - Frontend Developer & Open Source Contributor",
  description: "Welcome to Navneet Gupta's portfolio. Frontend developer specializing in Next.js, React, and modern web technologies. Building stunning web experiences.",
  keywords: ["Navneet Gupta", "Frontend Developer", "Next.js", "React", "TypeScript", "Web Developer", "Portfolio"],
  authors: [{ name: "Navneet Gupta" }],
  creator: "Navneet Gupta",
  openGraph: {
    title: "Navneet Gupta - Frontend Developer",
    description: "Building modern web experiences with Next.js and React",
    url: "https://navneetguptacse.github.io",
    siteName: "Navneet Gupta Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Navneet Gupta - Frontend Developer",
    description: "Building modern web experiences with Next.js and React",
    creator: "@navneetguptacse",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
