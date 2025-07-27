"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SplashPage() {
  const router = useRouter();

  const handleLanguageSelect = (lang: "tr" | "en") => {
    router.push(`/${lang}`);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/images/karşılamavideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Language Selection Buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-8 z-10">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageSelect("tr")}
          className="px-12 py-6 bg-primary-navy text-white text-2xl md:text-3xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-primary-navy/90 shadow-xl"
        >
          TÜRKÇE
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageSelect("en")}
          className="px-12 py-6 bg-white text-primary-navy text-2xl md:text-3xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 shadow-xl"
        >
          ENGLISH
        </motion.button>
      </div>
    </div>
  );
}