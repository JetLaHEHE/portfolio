import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  metadataBase: new URL("https://your-domain.vercel.app"),
  title: "John Jethro Agatep | Portfolio",
  description:
    "Full-stack developer portfolio showcasing projects and skills.",
  openGraph: {
    title: "John Jethro Agatep | Portfolio",
    description:
      "Full-stack developer building modern web applications with Next.js, TypeScript, and Node.js.",
    url: "https://your-domain.vercel.app",
    siteName: "John Jethro Agatep",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-100">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
