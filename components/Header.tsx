"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { Home, Package, Users, Phone } from "lucide-react";
import { ModernNavBar } from "./ModernNavBar";

interface HeaderProps {
  lang: "tr" | "en";
}

const navigation = {
  tr: [
    { name: "Anasayfa", href: "/tr" },
    { name: "Ürünlerimiz", href: "/tr/urunlerimiz" },
    { name: "Hakkımızda", href: "/tr/hakkimizda" },
    { name: "İletişim", href: "/tr/iletisim" },
  ],
  en: [
    { name: "Home", href: "/en" },
    { name: "Products", href: "/en/products" },
    { name: "About", href: "/en/about" },
    { name: "Contact", href: "/en/contact" },
  ],
};

const modernNavItems = {
  tr: [
    { name: "Anasayfa", url: "/tr", icon: Home },
    { name: "Ürünlerimiz", url: "/tr/urunlerimiz", icon: Package },
    { name: "Hakkımızda", url: "/tr/hakkimizda", icon: Users },
    { name: "İletişim", url: "/tr/iletisim", icon: Phone },
  ],
  en: [
    { name: "Home", url: "/en", icon: Home },
    { name: "Products", url: "/en/products", icon: Package },
    { name: "About", url: "/en/about", icon: Users },
    { name: "Contact", url: "/en/contact", icon: Phone },
  ],
};

export default function Header({ lang }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Modern Navigation Bar */}
      <ModernNavBar items={modernNavItems[lang]} />
      
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/images/logo1.png"
                alt="Marincool Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation[lang].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-blue font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
              <Link
                href="/tr"
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  lang === "tr"
                    ? "text-primary-navy"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                TR
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/en"
                className={`px-2 py-1 text-sm font-medium transition-colors ${
                  lang === "en"
                    ? "text-primary-navy"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </Link>
            </div>

            {/* WhatsApp Button - Desktop */}
            <a
              href="https://wa.me/905515085085"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 bg-accent-green text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navigation[lang].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-blue font-medium py-2 px-4 hover:bg-gray-50 rounded-md transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/905515085085"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-accent-green text-white px-4 py-3 rounded-full hover:bg-green-600 transition-colors mt-3"
              >
                <FaWhatsapp className="text-xl" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
}