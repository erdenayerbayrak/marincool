"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaProjectDiagram, FaTools, FaWrench, FaUserTie, FaTruck, FaPhoneAlt } from "react-icons/fa";

const services = [
  {
    id: "kesif",
    title: "Keşif ve Projelendirme",
    icon: FaProjectDiagram,
    shortDesc: "Yatınıza özel klima sistemi tasarımı",
    description: "Yatınızın teknik özelliklerini ve kullanım alanlarını detaylı analiz ederek, optimum klima projelendirme hizmeti sunuyoruz. Uzman mühendislerimiz, VRF marin klima veya Chiller marin klima sistemlerinden hangisinin yatınız için ideal olduğunu belirler ve enerji verimliliğini maksimize edecek çözümler üretir.",
    process: [
      "Yat teknik analizi ve ölçüm",
      "Isı yükü hesaplaması",
      "Sistem tasarımı ve projelendirme",
      "3D görselleştirme ve sunum",
      "Maliyet analizi ve teklif hazırlama",
    ],
    duration: "3-5 iş günü",
    cost: "Ücretsiz ön keşif",
  },
  {
    id: "danismanlik",
    title: "Uzman Danışmanlık",
    icon: FaUserTie,
    shortDesc: "15 yıllık deneyimle profesyonel rehberlik",
    description: "Denizcilik sektöründeki tecrübemizle, yat sahiplerine marin klima sistemleri konusunda profesyonel danışmanlık hizmeti veriyoruz. Monoblok klima, multi sistem veya split klima alternatifleri arasından, yatınızın özelliklerine ve bütçenize en uygun çözümü belirlemenize yardımcı oluyoruz.",
    process: [
      "İhtiyaç analizi ve değerlendirme",
      "Sistem alternatifleri sunumu",
      "Maliyet-fayda analizi",
      "Enerji verimliliği optimizasyonu",
      "Bakım planlaması önerileri",
    ],
    duration: "Anında",
    cost: "Ücretsiz danışmanlık",
  },
  {
    id: "montaj",
    title: "Profesyonel Montaj",
    icon: FaTools,
    shortDesc: "Sertifikalı ekip ile garantili kurulum",
    description: "Sertifikalı teknik ekibimiz, klima montajı işlemlerini uluslararası standartlarda gerçekleştiriyor. Yatınızın elektrik ve mekanik altyapısına zarar vermeden, minimum müdahaleyle maksimum verim sağlayacak şekilde kurulum yapıyoruz. Muğla bölgesinde marin klima montajında tercih edilen firma olarak, işçilik garantisi veriyoruz.",
    process: [
      "Montaj öncesi hazırlık ve planlama",
      "Elektrik ve mekanik altyapı hazırlığı",
      "Sistem kurulumu ve bağlantılar",
      "Test çalıştırma ve kalibrasyon",
      "Teslim ve kullanım eğitimi",
    ],
    duration: "1-5 gün (sisteme göre)",
    cost: "Proje bazlı fiyatlandırma",
  },
  {
    id: "cihaz-temini",
    title: "Orijinal Cihaz Temini",
    icon: FaTruck,
    shortDesc: "Dünya markalarının yetkili distribütörü",
    description: "Dünya lideri markaların yetkili distribütörü olarak, orijinal ve garantili marin klima sistemleri temin ediyoruz. Stokumuzda bulunan VRF, Chiller ve Monoblok klima sistemleriyle, siparişlerinizi hızla karşılıyor ve rekabetçi fiyat avantajı sunuyoruz.",
    process: [
      "İhtiyaç belirleme ve ürün seçimi",
      "Stok kontrolü ve tedarik planlaması",
      "Sipariş onayı ve üretim takibi",
      "Lojistik ve nakliye organizasyonu",
      "Teslim ve kontrol işlemleri",
    ],
    duration: "7-21 gün",
    cost: "Rekabetçi fiyat garantisi",
  },
  {
    id: "bakim",
    title: "7/24 Teknik Destek ve Bakım",
    icon: FaWrench,
    shortDesc: "Kesintisiz hizmet garantisi",
    description: "Tekne klima servisi hizmetimizle denizde geçirdiğiniz her anın konforlu olmasını sağlıyoruz. Periyodik bakım programlarımız ve 7/24 acil müdahale ekibimizle, Muğla, Bodrum, Göcek ve çevre bölgelerde kesintisiz destek sunuyoruz. Arıza durumlarında hızlı müdahale, yedek parça temini ve uzman onarım hizmetleriyle yanınızdayız.",
    process: [
      "Periyodik bakım programları",
      "Önleyici bakım uygulamaları",
      "7/24 acil müdahale hizmeti",
      "Arıza teşhisi ve onarım",
      "Yedek parça temini ve değişimi",
    ],
    duration: "7/24 kesintisiz",
    cost: "Bakım paketi seçenekleri",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-navy to-primary-blue">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="heading-1 mb-6">360° Hizmet Anlayışı</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Marincool olarak sunduğumuz 360 derece hizmet anlayışıyla, yatınızın marin klima sistemleri 
              ihtiyacını baştan sona yönetiyoruz. Keşiften montaja, bakımdan desteğe kadar her aşamada yanınızdayız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-primary-navy mb-4">Neden Marincool Hizmetleri?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              15 yıllık sektör deneyimimiz ve uzman ekibimizle, yat sahiplerine en yüksek kalitede hizmet sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 mb-4 bg-primary-blue/10 rounded-full flex items-center justify-center">
                  <service.icon className="text-2xl text-primary-blue" />
                </div>
                <h3 className="text-xl font-semibold text-primary-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                <Link 
                  href={`#${service.id}`}
                  className="text-primary-blue hover:text-primary-navy font-medium transition-colors"
                >
                  Detayları İncele →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="section-padding">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`mb-20 ${index !== services.length - 1 ? "pb-20 border-b border-gray-200" : ""}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Content */}
                <div>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-blue/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="text-xl text-primary-blue" />
                    </div>
                    <h2 className="heading-3 text-primary-navy">{service.title}</h2>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  {/* Process */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-primary-navy mb-4">Süreç Adımları</h3>
                    <ul className="space-y-2">
                      {service.process.map((step, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-accent-green text-white text-sm rounded-full flex items-center justify-center font-medium">
                            {i + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Info Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-light rounded-lg">
                      <p className="text-sm text-gray-600">Süre</p>
                      <p className="font-semibold text-primary-navy">{service.duration}</p>
                    </div>
                    <div className="p-4 bg-gray-light rounded-lg">
                      <p className="text-sm text-gray-600">Maliyet</p>
                      <p className="font-semibold text-primary-navy">{service.cost}</p>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src={`/images/service-${service.id}.jpg`}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-navy">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Yatınız İçin Profesyonel Hizmet Alın
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Uzman ekibimizle iletişime geçin ve yatınızın klima sistemleri için kapsamlı hizmet paketimizden yararlanın.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/905555555555" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary text-lg"
              >
                <FaPhoneAlt className="mr-2" />
                Hemen Ara
              </a>
              <Link href="/tr/iletisim" className="btn btn-secondary text-lg">
                Teklif İste
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}