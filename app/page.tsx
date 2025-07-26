"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SplashPage() {
  const router = useRouter();
  const [isExpanding, setIsExpanding] = useState<"tr" | "en" | null>(null);

  const handleLanguageSelect = (lang: "tr" | "en") => {
    setIsExpanding(lang);
    setTimeout(() => {
      router.push(`/${lang}`);
    }, 300);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Turkish Section */}
      <div
        className={`absolute left-0 top-0 h-full bg-primary-navy flex items-center justify-center cursor-pointer transition-all duration-1000 ease-in-out ${
          isExpanding === "tr"
            ? "w-full z-20"
            : isExpanding === "en"
            ? "w-0"
            : "w-1/2 hover:w-[55%]"
        }`}
        onClick={() => handleLanguageSelect("tr")}
      >
        <div className={`${isExpanding === "tr" ? "scale-110" : ""} transition-transform duration-500`}>
          <h1 className="text-white text-4xl md:text-5xl font-semibold tracking-wider select-none">
            TÜRKÇE
          </h1>
        </div>
      </div>

      {/* English Section */}
      <div
        className={`absolute right-0 top-0 h-full bg-gray-light flex items-center justify-center cursor-pointer transition-all duration-1000 ease-in-out ${
          isExpanding === "en"
            ? "w-full z-20"
            : isExpanding === "tr"
            ? "w-0"
            : "w-1/2 hover:w-[55%]"
        }`}
        onClick={() => handleLanguageSelect("en")}
      >
        <div className={`${isExpanding === "en" ? "scale-110" : ""} transition-transform duration-500`}>
          <h1 className="text-primary-navy text-4xl md:text-5xl font-semibold tracking-wider select-none">
            ENGLISH
          </h1>
        </div>
      </div>

      {/* Center Divider */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3/5 bg-white/50 z-10" />
    </div>
  );
}