import type { Metadata } from "next";
import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
  icons: {
    icon: "https://images.squarespace-cdn.com/content/v1/670423e106da6c036366fd10/9f1bb212-4047-4ddb-a144-79c1f9704dfe/favicon.ico?format=100w",
  },
  openGraph: {
    title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
    description:
      "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more. In-person & online.",
    url: "https://www.conejovalleycounseling.com",
    siteName: "Conejo Valley Family Counseling",
    images: [
      {
        url: "https://static1.squarespace.com/static/670423e106da6c036366fd10/t/67239b1497e4e117adfdf764/1730386708141/Conejo+Valley+Family+Counseling+SS.png?format=1500w",
        width: 1485,
        height: 1485,
        alt: "Conejo Valley Family Counseling",
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
    <html lang="en" className={`${cormorant.variable} ${mulish.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#2b2b2b] font-sans selection:bg-[#ded6cc] selection:text-[#2b2b2b]">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
