import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Marincool | Marine Air Conditioning Systems & Yacht Climate Expert | Antalya",
  description: "Marincool offers professional air conditioning solutions for yacht owners with VRF, Chiller and Monoblock marine air conditioning systems. Expert boat climate service in Antalya and Alanya.",
  keywords: "marine air conditioning systems, yacht climate, boat AC service, Marincool, VRF marine AC, Chiller marine AC, Monoblock AC, AC design, AC installation, Antalya marine AC, Alanya yacht service",
  openGraph: {
    title: "Marincool | Marine Air Conditioning Systems & Yacht Climate Expert",
    description: "Professional marine air conditioning solutions for maximum comfort at sea. VRF, Chiller and Monoblock systems.",
    url: "https://marincool.com/en",
    siteName: "Marincool",
    locale: "en_US",
    type: "website",
  },
};

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang="en" />
      <main className="min-h-screen">{children}</main>
      <Footer lang="en" />
      <WhatsAppButton />
    </>
  );
}