"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function SplashPage() {
  const router = useRouter();

  const handleLanguageSelect = (lang: "tr" | "en") => {
    router.push(`/${lang}`);
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/images/karsilamavideo.mp4" type="video/mp4" />
        <source src="/videos/karsilamavideo3.mp4" type="video/mp4" />
        {/* Mobil için optimize edilmiş video - fallback */}
        <source src="/videos/herovideo.mp4" type="video/mp4" media="(max-width: 768px)" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-20 px-4 sm:px-8">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mb-8 -mt-16"
        >
          <Image
            src="/images/logo.png"
            alt="Marincool Logo"
            width={1100}
            height={275}
            className="w-auto h-72 lg:h-96 filter brightness-125"
            priority
          />
        </motion.div>
        
        {/* Language Selection Buttons - Desktop: Side by Side, Mobile: Stacked */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 -mt-8">
          <motion.button
            initial={{ opacity: 0, y: 50, x: -30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect("tr")}
            className="w-60 max-w-[80vw] lg:w-56 py-3 bg-primary-navy text-white text-base font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-primary-navy/90 shadow-xl text-center"
            style={{ touchAction: 'manipulation' }}
          >
            TÜRKÇE
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0, y: 50, x: 30 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleLanguageSelect("en")}
            className="w-60 max-w-[80vw] lg:w-56 py-3 bg-white text-primary-navy text-base font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 shadow-xl text-center"
            style={{ touchAction: 'manipulation' }}
          >
            ENGLISH
          </motion.button>
        </div>

        {/* Social Media Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <a
            href="https://wa.me/905515085085"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-accent-green text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaWhatsapp className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/marincool.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.facebook.com/marincoolmarinehvac/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/marincool/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="https://x.com/MarincoolS"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/@marincool"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-all duration-300 hover:scale-110 shadow-lg"
          >
            <FaYoutube className="text-xl" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}