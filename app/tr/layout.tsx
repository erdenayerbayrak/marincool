import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Marincool | Marin Klima Sistemleri ve Yat Kliması Uzmanı | Muğla",
  description: "Marincool olarak VRF, Chiller ve Monoblok marin klima sistemleri ile yat sahiplerine profesyonel klima çözümleri sunuyoruz. Muğla merkezli uzman marin klima servisi.",
  keywords: "marin klima sistemleri, yat kliması, tekne klima servisi, Marincool, VRF marin klima, Chiller marin klima, Monoblok klima, klima projelendirme, klima montajı, Muğla marin klima, Dalaman yat servisi, Bodrum marina, Göcek yat servisi",
  openGraph: {
    title: "Marincool | Marin Klima Sistemleri ve Yat Kliması Uzmanı",
    description: "Profesyonel marin klima çözümleri ile denizde maksimum konfor. VRF, Chiller ve Monoblok sistemler.",
    url: "https://marincool.com/tr",
    siteName: "Marincool",
    locale: "tr_TR",
    type: "website",
  },
};

export default function TurkishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header lang="tr" />
      <main className="min-h-screen pt-16">{children}</main>
      <Footer lang="tr" />
      <WhatsAppButton />
    </>
  );
}