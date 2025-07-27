"use client";

import { useRouter } from "next/navigation";

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
      >
        <source src="/videos/karşılamavideo3.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Language Selection Buttons */}
      <div className="absolute inset-0 flex items-center justify-center gap-8 z-10">
        <button
          onClick={() => handleLanguageSelect("tr")}
          className="px-12 py-6 bg-primary-navy text-white text-2xl md:text-3xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary-navy/90 shadow-xl"
        >
          TÜRKÇE
        </button>
        
        <button
          onClick={() => handleLanguageSelect("en")}
          className="px-12 py-6 bg-white text-primary-navy text-2xl md:text-3xl font-semibold tracking-wider rounded-lg transition-all duration-300 hover:scale-105 hover:bg-white/90 shadow-xl"
        >
          ENGLISH
        </button>
      </div>
    </div>
  );
}