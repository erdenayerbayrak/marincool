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
      <ModernNavBar items={modernNavItems[lang]} lang={lang} />
    </>
  );
}