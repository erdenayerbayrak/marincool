"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface QuoteFormProps {
  lang: "tr" | "en";
}

const content = {
  tr: {
    title: "24 Saat İçinde Size Dönelim",
    subtitle: "Formu doldurun, uzmanlarımız size özel teklif hazırlasın",
    form: {
      name: "Ad Soyad *",
      phone: "Telefon *",
      email: "E-posta *",
      yachtLength: "Yat Boyu (metre)",
      systemType: "Sistem Tercihi Seçiniz",
      systems: {
        vrf: "VRF Sistem",
        chiller: "Chiller Sistem",
        monoblock: "Monoblok Sistem",
        multi: "Multi Sistem",
        split: "Split Sistem",
      },
      message: "Mesajınız",
      submit: "Teklif İste",
      success: "Teşekkürler! En kısa sürede size dönüş yapacağız.",
      error: "Lütfen tüm zorunlu alanları doldurun.",
    },
  },
  en: {
    title: "We'll Get Back to You Within 24 Hours",
    subtitle: "Fill out the form and our experts will prepare a special offer for you",
    form: {
      name: "Full Name *",
      phone: "Phone *",
      email: "Email *",
      yachtLength: "Yacht Length (meters)",
      systemType: "Select System Preference",
      systems: {
        vrf: "VRF System",
        chiller: "Chiller System",
        monoblock: "Monoblock System",
        multi: "Multi System",
        split: "Split System",
      },
      message: "Your Message",
      submit: "Request Quote",
      success: "Thank you! We will get back to you as soon as possible.",
      error: "Please fill in all required fields.",
    },
  },
};

export default function QuoteForm({ lang }: QuoteFormProps) {
  const t = content[lang];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    yachtLength: "",
    systemType: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.phone || !formData.email) {
      setStatus("error");
      return;
    }

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    setStatus("success");
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: "",
        phone: "",
        email: "",
        yachtLength: "",
        systemType: "",
        message: "",
      });
      setStatus("idle");
    }, 3000);
  };

  return (
    <section id="teklif-form" className="section-padding bg-primary-navy">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-white mb-4">{t.title}</h2>
          <p className="text-lg text-gray-300">{t.subtitle}</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                placeholder={t.form.name}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent-green transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder={t.form.phone}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent-green transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t.form.email}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent-green transition-colors"
                required
              />
            </div>
            <div>
              <input
                type="text"
                placeholder={t.form.yachtLength}
                value={formData.yachtLength}
                onChange={(e) => setFormData({ ...formData, yachtLength: e.target.value })}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent-green transition-colors"
              />
            </div>
          </div>

          <div>
            <select
              value={formData.systemType}
              onChange={(e) => setFormData({ ...formData, systemType: e.target.value })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white focus:outline-none focus:border-accent-green transition-colors"
            >
              <option value="" className="bg-primary-navy">{t.form.systemType}</option>
              <option value="vrf" className="bg-primary-navy">{t.form.systems.vrf}</option>
              <option value="chiller" className="bg-primary-navy">{t.form.systems.chiller}</option>
              <option value="monoblock" className="bg-primary-navy">{t.form.systems.monoblock}</option>
              <option value="multi" className="bg-primary-navy">{t.form.systems.multi}</option>
              <option value="split" className="bg-primary-navy">{t.form.systems.split}</option>
            </select>
          </div>

          <div>
            <textarea
              placeholder={t.form.message}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-accent-green transition-colors resize-none"
            />
          </div>

          {status === "success" && (
            <div className="p-4 bg-green-500/20 border border-green-500 rounded-md text-green-400">
              {t.form.success}
            </div>
          )}

          {status === "error" && (
            <div className="p-4 bg-red-500/20 border border-red-500 rounded-md text-red-400">
              {t.form.error}
            </div>
          )}

          <button
            type="submit"
            className="w-full btn btn-primary text-lg py-4"
          >
            {t.form.submit}
          </button>
        </motion.form>
      </div>
    </section>
  );
}