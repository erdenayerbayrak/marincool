import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

interface FooterProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    about: "Türkiye'nin lider marin klima sistemleri uzmanı. Yat sahiplerine özel klima çözümleri.",
    quickLinks: "Hızlı Linkler",
    contact: "İletişim",
    followUs: "Bizi Takip Edin",
    rights: "Tüm hakları saklıdır.",
    links: [
      { name: "Ürünlerimiz", href: "/tr/urunlerimiz" },
      { name: "Hizmetlerimiz", href: "/tr/hizmetlerimiz" },
      { name: "Hakkımızda", href: "/tr/hakkimizda" },
      { name: "İletişim", href: "/tr/iletisim" },
    ],
  },
  en: {
    about: "Turkey's leading marine air conditioning systems expert. Special air conditioning solutions for yacht owners.",
    quickLinks: "Quick Links",
    contact: "Contact",
    followUs: "Follow Us",
    rights: "All rights reserved.",
    links: [
      { name: "Products", href: "/en/products" },
      { name: "Services", href: "/en/services" },
      { name: "About", href: "/en/about" },
      { name: "Contact", href: "/en/contact" },
    ],
  },
};

export default function Footer({ lang }: FooterProps) {
  const t = content[lang];

  return (
    <footer className="relative bg-primary-navy text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/yat5.jpg"
          alt="Yacht Background"
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-primary-navy/85" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="relative w-64 h-16 mb-4">
              <Image
                src="/images/logo.png"
                alt="Marincool Logo"
                fill
                sizes="256px"
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm">{t.about}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.quickLinks}</h4>
            <ul className="space-y-2">
              {t.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.contact}</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📍 Merkez, Cengiz Topel Cd. No:82/A, 48770 Dalaman/Muğla</p>
              <p>📞 +90 551 508 50 85</p>
              <p>✉️ info@marincool.com</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href="https://x.com/MarincoolS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/marincool/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/marincoolmarinehvac/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/marincool.com.tr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com/@marincool"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>&copy; 2024 Marincool. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}