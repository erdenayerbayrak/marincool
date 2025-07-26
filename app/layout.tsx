import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marincool - Marin Klima Sistemleri",
  description: "Marincool olarak VRF, Chiller ve Monoblok marin klima sistemleri ile yat sahiplerine profesyonel klima çözümleri sunuyoruz.",
  keywords: "marin klima sistemleri, yat kliması, tekne klima servisi, Marincool",
  authors: [{ name: "Marincool" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}