import type { Metadata, Viewport } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishnu Karanth — AI/ML Student · Full Stack Developer · Builder",
  description:
    "Production-level personal scrollytelling portfolio of Vishnu Karanth. AI/ML student at BMSIT&M, Full Stack Developer Intern at Elevance Skills, Google Student Ambassador 2026.",
  keywords: [
    "Vishnu Karanth",
    "AI",
    "Machine Learning",
    "Full Stack Developer",
    "Generative AI",
    "SkillSync AI",
    "ORCA",
    "Portfolio",
    "Creative Developer",
  ],
  authors: [{ name: "Vishnu Karanth" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#080c16",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-[#080c16] text-[#f1f5f9] min-h-screen selection:bg-electric-400/30 selection:text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
