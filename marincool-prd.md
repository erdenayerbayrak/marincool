# Marincool Yeni Web Sitesi (Next.js) PRD

### TL;DR

Marincool, denizcilik sektörüne özel klima çözümleri üreten bir lider olarak, Next.js tabanlı, modern ve çift dilli (Türkçe/İngilizce), %100 SEO odaklı yeni bir web sitesiyle marka etkisini artıracak. Hedef, kullanıcıyı etkileyen, yüksek dönüşüm odaklı tasarım ve güçlü iletişim araçlarıyla daha fazla müşteri çekmek ve iş fırsatlarını büyütmek.

---

## Goals

### Business Goals

* Site ziyaretçi trafiğini %30 artırmak ve arama motorlarından gelen organik hitleri büyütmek

* İletişim ve WhatsApp başvurularının aylık oranını iki katına çıkarmak

* Yeni müşteri kazancında ölçülebilir bir ivme sağlamak

* Sektörel otorite ve marka bilinirliğini güçlendirmek

### User Goals

* Bilgiye hızlı ve sade erişim sağlamak

* Dile göre özelleşmiş, profesyonel ve güvenilir marka algısı yaşamak

* Mobil ve masaüstünde mükemmel bir deneyim almak

* Sadece tek tıkla WhatsApp veya iletişim formuyla kolay irtibata geçmek

### Non-Goals

* Üçüncü parti ödeme veya alışveriş işlevleri eklemek

* Çoklu admin ve karmaşık back-office modülleri sunmak

* Saha operasyonları veya harici ERP entegrasyonlarını kapsamak

---

## User Stories

**Persona 1: Yat Sahibi**

* Bir yat sahibi olarak, klima sistemlerini hızlıca incelemek istiyorum, böylece ihtiyaçlarıma uygun ürünü hemen bulayım ve vakit kaybetmeyeyim.

* Bir kullanıcı olarak, siteden kolayca WhatsApp üzerinden iletişime geçmek istiyorum ki vakit kaybı yaşamadan sorularımı uzmanına sorabileyim.

**Persona 2: Armatör**

* Bir armatör olarak, Marincool’un sektör deneyimini ve referanslarını kolayca görebilmek istiyorum, güvenle çalışma kararı vereyim.

* Hizmetler ve uygulamalar sayfasında açık, şeffaf bilgiyle, hızlı teklif ve çözüm isteyebilmek istiyorum.

**Persona 3: Potansiyel Bayi/Yeni Müşteri**

* Bayi adayı olarak, firmanın vizyonunu, ürün gamını ve teknik desteğini hızlıca anlayabilmek istiyorum, iş ortaklığı için uygunluğuna karar vermek istiyorum.

**Ortak Kullanıcı Senaryoları**

* Tüm kullanıcılar olarak, girişte kolay bir dil seçimiyle ihtiyacıma uygun içeriğe yönlenmek istiyorum, anında bilgiye ulaşmak ve iletişim kanallarına tek tıkla erişmek istiyorum.

---

## Functional Requirements

* **Karşılama Sayfası** (Priority: Highest)

  * İlk girişte ekran ortadan ikiye bölünmüş: Sol “TR”, Sağ “EN” buton – sade arka plan. (İleride arkada video, başlangıçta statik panel)

  * Tıklama ile seçilen dilde siteye tam yönlendirme

* **Anasayfa** (Priority: Highest)

  * Kısa şirket tanıtımı, avantajlar, referanslar ve CTA (form/WhatsApp)

  * WhatsApp iletişim ikonu veya chat butonu belirgin şekilde ana ekranda

  * Güçlü görseller ve sektörel vurgu

* **Hakkımızda** (Priority: High)

  * Sektör uzmanlığı, vizyon, misyon, ekip ve firma anlatımı

  * Kurumsal güven ve deneyim vurgusu

* **Ürünlerimiz** (Priority: High)

  * Marine klima sistemleri ve çözümlerinin detaylı açıklamaları

  * Her ürün için özellik, avantaj ve uygulama alanı bilgisi

* **İletişim** (Priority: High)

  * Kolay doldurulan iletişim formu

  * WhatsApp butonu, doğrudan iletişim için belirgin

  * Lokasyon ve firma iletişim bilgileri

* **Blog/İçerik Modülü** (Priority: Medium)

  * Gömülü blog alanı, içerik güncellenebilir

  * Navbarda görünmez, footer veya içerik içi gizli bir link yeterli

* **Global Fonksiyonlar**

  * Tüm sayfalar TR/EN (i18n), hızlı dil geçiş imkanı

  * Tam responsif (mobil/tablet/masaüstü)

  * %100 SEO uyumluluk, sayfa başlıkları/description/tag geregeldirilmiş

  * Hızlı yüklenme, düşük boyutlu asset, CDN veya optimize medya kullanımı

  * Sade, net ve erişilebilir kullanıcı arayüzü

---

## User Experience

**Entry Point & First-Time User Experience**

* Kullanıcı marincool.com adresine girer, ekranın ortasında ikiye bölünmüş sade karşılama ekranı görüntülenir.

* Sol taraf “Türkçe”, sağ taraf “English”. Kullanıcı tıkladığında, tüm içerik seçilen dile lokalize olur ve asıl ana sayfa yüklenir.

* Dile uygun SEO meta bilgileri, başlık ve description tetiklenir (SSR veya SSG ile).

**Core Experience**

* **Ana Sayfa:**

  * Şirketin öne çıkan yönleri, avantajları ve referansları ilk ekranda görünecek.

  * WhatsApp chat simgesi veya CTA buton ana ekranda belirgin ve tek tıkla hızlı iletişime imkan tanır.

  * Kullanıcı istiyorsa menüden “Ürünlerimiz”, “Hakkımızda”, “İletişim” sayfalarına anında ulaşır.

* **Hakkımızda / Ürünlerimiz / İletişim:**

  * Kullanıcı, sade ve açıklayıcı içeriklerle kolayca navigasyon yapar.

  * “İletişim” sayfasında hem form, hem doğrudan WhatsApp hattı seçenekleri belirgindir; harita ve adres de eklenir.

* **Blog Modülü:**

  * Sadece ilgili içerikte ya da footer’dan ulaşılır, navbarda gizlidir.

  * Blog yazıları SEO odaklı, sektör eğitimi/arama trafiği için optimize dir.

**Advanced Features & Edge Cases**

* Gelişmiş sayfa başlıkları ve metadata yönetimi (her dilde)

* Responsive bozulmalarda hata yönetimi ve fallback içerik

* Blog yazılarına spam yorum engeli (isteğe bağlı)

**UI/UX Highlights**

* Renkler ve kontrast: Denizcilik sektörüne uygun mavi-beyaz tonlar, çağdaş tasarım

* Net okunabilir fontlar, erişilebilirlik için uygun kontrast

* Mobil öncelikli responsive grid, büyük CTA butonları

* Dil geçişi ve iletişim kanalları zorunlu minimum tıklama ile erişilebilir olacak

---

## Narrative

Bir yat sahibi, yaz sezonunda kliması arızalanınca Google’da “marine klima sistemleri” arayışıyla Marincool’un web sitesini buluyor. Sitenin domainine girdiğinde, karşısına sade ve net bir dil seçimi ekranı çıkıyor: Türkçe mi, İngilizce mi istiyorsun? Kolayca istediği dili seçiyor; birkaç saniyede yeni ana sayfa yükleniyor ve firmanın uzmanlığı, avantajları ile karşılaşıyor. Ürünlerini detaylıca inceleyen kullanıcı, anasayfadaki WhatsApp ikonu sayesinde tek tuşla Marincool ekibine ulaşıyor ve hem hızlı bilgi hem de ön teklif alabiliyor. Erişimin kolaylığı ve profesyonel site güvenini pekiştiriyor; kullanıcı iletişim formunu doldurarak detay taleplerini paylaşıyor. Sonuç: Kullanıcı daha ferah bir yolculuk için çözüm buluyor, Marincool ise iş hacmini artırıyor.

---

## Success Metrics

* Google Analytics üzerinden site ziyaretçi artış oranı (%30+ hedef)

* Aylık toplanan iletişim formu & WhatsApp başvurusu (hedef: mevcut başvurunun 2 katı)

* Ortalama oturum süresi ve sayfa/tıklama oranı (hedef: ortalama %20 artış)

* Bounce rate’in azaltılması (%10 ve altına inmesi)

* Google PageSpeed skorlarında 90+ değer

* SEO anahtar kelimelerinde “marine klima”, “deniz klima sistemleri” gibi kritik anahtar kelimelerde ilk 3’te konumlanma

### Tracking Plan

* Ana sayfa ziyaretleri

* Karşılama ekranı dil seçimi tıklamaları

* WhatsApp butonu tıklamaları

* İletişim formu gönderimleri

* Ürün sayfası gezintileri

* Blog sayfası görüntülemeleri

* Bounce rate, oturum süresi ve scroll derinliği

---

## Technical Considerations

### Technical Needs

* Next.js odaklı SSR/SSG veya hibrit yaklaşım

* TR/EN dil desteği (i18n altyapısı)

* SEO için dinamik metadata ve yapılandırılmış veri markup

* WhatsApp API ile kolay yönlendirme

* Gömülü blog içerik yapısı (markdown ya da CMS destekli)

* Hızlı, düşük boyutlu ve optimize medya/asset kullanımı

### Integration Points

* WhatsApp iletişim API’si

* Statik/dinamik içerik sağlayıcı (gerektiğinde headless CMS tercih edilebilir)

* Google Analytics ve/veya Tag Manager entegrasyonu

### Data Storage & Privacy

* Ziyaretçi verilerinin gizliliği; formlar için mail yönlendirme, veri tabanı gerekirse

* KVKK/GDPR uyumlu iletişim yönetimi (çift dilli aydınlatma/bilgilendirme)

* Sadece iletişim ve başvuru verileri toplanacak

### Scalability & Performance

* Gündelik yüzlerce aktif kullanıcıyı rahatlıkla karşılayacak performans

* Yüksek trafikte yavaşlama, asset hatalarına karşı CDN ve fallback çözümler

### Potential Challenges

* İleri seviye SEO entegrasyonu (her dilde ayrı meta, dinamik url mapping)

* Mobilde WhatsApp ve diğer iletişim araçlarının stabil çalışması

* Blog modülünün yönetilebilir/simple script veya dışa kapalı CMS ile entegre edilmesi

---

## Milestones & Sequencing

### Project Estimate

* Faz 1: 1-3 gün (Karşılama Ekranı + Ana Sayfa)

* Faz 2: 1 hafta (Hakkımızda, Ürünlerimiz, İletişim, Blog Modülü, SEO metinlerinin tamamlanması)

### Team Size & Composition

* 1 Frontend Developer (Next.js, UI/UX, responsive)

* 1 İçerik/SEO Uzmanı (TR/EN metin, SEO rewrite, test)

* 2 kişiyle hızlı, etkin ve sürekli iterasyonla geliştirme

### Suggested Phases

**Faz 1: Minimum Canlı Ürün – Karşılama Ekranı & Ana Sayfa (1-3 gün)**

* Frontend: Next.js landing ve ana sayfa tasarımı

* İçerik: Kısa metinler ve TR-EN lokalizasyon

* SEO: Ana sayfa ve domain optimize

**Faz 2: Tamamlayıcı Sayfalar ve Blog (1 hafta)**

* Hakkımızda, Ürünlerimiz ve İletişim sayfaları entegrasyonu

* WhatsApp + iletişim formu uygulaması

* Blog modülünün gömülmesi

* Tam SEO ve içerik finalize, test ve yayın

**Hazırlık & Destek**

* Claude, Bolt, Gemini gibi AI platformlarına prompt ve gerekli teknik döküman sağlanması

* Domain/dev/prod kurulumları

---