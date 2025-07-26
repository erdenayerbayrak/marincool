"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheckCircle, FaUsers, FaTools, FaClock } from "react-icons/fa";

// Components
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import YachtGallery from "@/components/home/YachtGallery";
import WhyMarincool from "@/components/home/WhyMarincool";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection lang="en" />

      {/* About Section */}
      <AboutSection lang="en" />

      {/* Products Section */}
      <ProductsSection lang="en" />

      {/* Yacht Gallery */}
      <YachtGallery lang="en" />

      {/* Why Marincool */}
      <WhyMarincool lang="en" />
    </>
  );
}