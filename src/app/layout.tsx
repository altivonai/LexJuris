import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/Chatbot/ChatbotWidget";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  title: {
    default: "LexJuris Advokatfirma – Erfaren advokat i Viborg",
    template: "%s | LexJuris Advokatfirma",
  },
  description:
    "LexJuris er et dansk advokatfirma i Viborg med specialer inden for boligkøb, testamente, ægtepagt, fremtidsfuldmagt, skilsmisse og dødsbobehandling. Gratis indledende samtale.",
  keywords: [
    "advokat",
    "Viborg",
    "boligadvokat",
    "testamente",
    "ægtepagt",
    "fremtidsfuldmagt",
    "skilsmisse",
    "dødsbo",
    "køberrådgivning",
    "LexJuris",
  ],
  openGraph: {
    title: "LexJuris Advokatfirma – Erfaren advokat i Viborg",
    description:
      "Juridisk rådgivning til private i hele landet. Boligkøb, testamente, skilsmisse og mere. Book en gratis samtale.",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-inter)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
