"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaTools, FaClock } from "react-icons/fa";

// Components
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import WhyMarincool from "@/components/home/WhyMarincool";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection lang="tr" />

      {/* About Section */}
      <AboutSection lang="tr" />

      {/* Products Section */}
      <ProductsSection lang="tr" />

      {/* Why Marincool */}
      <WhyMarincool lang="tr" />
    </>
  );
}