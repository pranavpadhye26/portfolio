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
  title: "Pranav Padhye - Full Stack Developer/AI Engineer",
  description:
    "Welcome to my portfolio! I am a passionate full-stack/AI developer specializing in building scalable server architectures, robust APIs, and high-performance distributed systems. With expertise in cloud infrastructure and database optimization, I create efficient and reliable backend solutions.",
  keywords: [
    "Backend Developer",
    "Software Engineer",
    "System Architecture",
    "API Development",
    "Database Design",
    "Cloud Computing",
    "Microservices",
    "DevOps",
    "Pranav Padhye",
    "Node.js",
    "Python",
    "Java",
    "Distributed Systems",
    "System Design",
    "Backend Architecture",
  ],
  authors: [{ name: "Pranav Padhye" }],
  creator: "Pranav Padhye",
  openGraph: {
    title: "Pranav Padhye - Full Stack Developer/AI Engineer Portfolio",
    description:
      "Passionate full-stack/AI developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.",
    url: "https://your-domain.com",
    siteName: "Pranav Padhye - Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pranav Padhye - Full Stack Developer/AI Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranav Padhye - Full Stack Developer/AI Engineer",
    description:
      "Passionate full-stack/AI developer crafting scalable and efficient server architectures. Explore my projects and technical expertise.",
    creator: "@yourusername",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
