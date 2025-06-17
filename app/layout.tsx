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

export const metadata = {
  title: "Jayesh Adiwal | Football Player Portfolio",
  description: "Official portfolio of Jayesh Adiwal – professional footballer with national achievements and awards in India.",
  keywords: [
    "Jayesh Adiwal",
    "football player",
    "Indian footballer",
    "midfielder",
    "CDM CAM LW",
    "sports portfolio",
    "football awards",
    "Rajasthan football"
  ],
  authors: [{ name: "Jayesh Adiwal" }],
  creator: "Jayesh Adiwal",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    title: "Jayesh Adiwal | Football Player",
    description: "National footballer with multiple championships and awards. View full career highlights and contact details.",
    url: "https://your-domain.com",
    siteName: "Jayesh Adiwal Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Jayesh Adiwal Football Player"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jayesh Adiwal | Football Player",
    description: "Official football portfolio of Jayesh Adiwal – check out experience, awards, and contact info.",
    creator: "@yourhandle"
  }
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
