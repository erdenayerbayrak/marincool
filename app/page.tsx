"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function SplashPage() {
  const router = useRouter();

  const handleLanguageSelect = (lang: "tr" | "en") => {
    router.push(`/${lang}`);
  };

  return (
    <div className="relative h-screen" style={{ width: '100vw', maxWidth: '100vw', overflowX: 'hidden', overflowY: 'hidden' }}>
      {/* Background Video */}
      <div className="absolute inset-0" style={{ width: '100vw', maxWidth: '100vw' }}>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ width: '100vw', maxWidth: '100vw', height: '100vh' }}
        >
          <source src="/images/karşılamavideo.mp4" type="video/mp4" />
          {/* Mobil için optimize edilmiş video */}
          <source src="/images/karşılamavideo-mobile.mp4" type="video/mp4" media="(max-width: 768px)" />
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Language Selection Buttons */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 z-10 px-6 sm:px-8">
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleLanguageSelect("tr")}
          className="w-80 max-w-[calc(100vw-3rem)] py-6 bg-primary-navy text-white text-xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-primary-navy/90 shadow-xl text-center min-h-[44px]"
          style={{ touchAction: 'manipulation' }}
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
          className="w-80 max-w-[calc(100vw-3rem)] py-6 bg-white text-primary-navy text-xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:bg-white/90 shadow-xl text-center min-h-[44px]"
          style={{ touchAction: 'manipulation' }}
        >
          ENGLISH
        </motion.button>
      </div>
    </div>
  );
}