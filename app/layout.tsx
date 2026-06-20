import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Nunito } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Corello — AI-Native Manufacturing Intelligence",
  description:
    "Critical manufacturing still depends on paper, legacy systems, and tribal knowledge. Corello is the AI-native intelligence layer for high-mix, low-volume manufacturers.",
  openGraph: {
    title: "Corello — AI-Native Manufacturing Intelligence",
    description:
      "The intelligence layer for high-mix, low-volume manufacturers.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F1112",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nunito.variable} h-full antialiased`}
      style={{ fontFamily: "var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif" }}
    >
      <body className="min-h-full flex flex-col bg-[#0F1112] text-white">
        {children}
      </body>
    </html>
  );
}
