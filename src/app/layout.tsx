import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds is a Licensed Clinical Psychologist in Santa Monica, CA, offering in-person and secure telehealth therapy for adults navigating anxiety, trauma, and professional burnout.",
  icons: {
    icon: "/favicon.ico", // Or whatever default is good, keeping simple
  },
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
      "Dr. Maya Reynolds is a Licensed Clinical Psychologist in Santa Monica, CA, offering in-person and secure telehealth therapy for adults navigating anxiety, trauma, and professional burnout.",
    url: "https://www.mayareynoldspsyd.com", // Example URL
    siteName: "Dr. Maya Reynolds, PsyD",
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
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-main-bg text-primary-text font-sans selection:bg-secondary-bg selection:text-primary-text">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
