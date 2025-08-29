import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  weight: ["400", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "ManziHomes - Architectural Design & Construction",
    template: "%s | ManziHomes",
  },
  description:
    "Elegant architectural designs for apartments, bungalows, and villas, coupled with professional construction and surveying services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfairDisplay.variable} ${lato.variable} font-sans bg-brand-off-white text-brand-dark`}
      >
        <Navbar />
        <main className="pt-20">
          {" "}
          {/* Add padding to offset fixed navbar */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
