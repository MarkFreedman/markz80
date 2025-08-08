import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Mark Z80 | Producer, Composer",
  description: "Cinematic alt pop rock, ambient, and new age by producer and composer Mark Z80.",
  keywords: ["Mark Z80", "MarkZ80", "music", "composer", "producer", "cinematic", "alt pop rock", "ambient", "new age"],
  openGraph: {
    title: "Mark Z80 | Producer, Composer",
    description: "Cinematic alt pop rock, ambient, and new age by producer and composer Mark Z80.",
    url: "https://markz80.vercel.app",
    siteName: "Mark Z80",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Z80 | Producer, Composer",
    description: "Cinematic alt pop rock, ambient, and new age by producer and composer Mark Z80.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${geist.className} antialiased`}>
        <Nav />
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
