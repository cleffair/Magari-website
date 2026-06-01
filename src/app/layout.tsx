import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryCTA from "@/components/InquiryCTA";

export const metadata: Metadata = {
  title: "Magari Studio | Premium Contemporary Indian Fashion Label",
  description: "Magari Studio is a contemporary Indian fashion brand based in Indore. Handcrafted textiles, slow fashion, timeless silhouettes, and quiet luxury. Explore our artisanal sarees, kurtis, and studio experiences.",
  keywords: ["Magari Studio", "Contemporary Indian Fashion", "Slow Fashion India", "Handcrafted Sarees", "Luxury Artisanal Couture", "Linen Kurtis", "Indore Boutique", "Quiet Luxury Indian Wear"],
  openGraph: {
    title: "Magari Studio | Premium Contemporary Indian Fashion Label",
    description: "Handcrafted textiles, slow fashion, timeless silhouettes, and quiet luxury based in Indore, India.",
    type: "website",
    locale: "en_IN",
    siteName: "Magari Studio",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bone-white text-terrene-charcoal font-sans selection:bg-raw-clay selection:text-bone-white min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <InquiryCTA />
        <Footer />
      </body>
    </html>
  );
}
