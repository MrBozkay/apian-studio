# Apian Studio

> Küçük işletmeler için yapay zekâ çözümleri: siteye gömülü AI asistanlar, n8n süreç otomasyonları ve AI destekli web siteleri.

[![CI](https://github.com/MrBozkay/apian-studio/actions/workflows/ci.yml/badge.svg)](https://github.com/MrBozkay/apian-studio/actions/workflows/ci.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ee4b7abf-17a9-4585-a46e-32e3bc23e482/deploy-status)](https://app.netlify.com/projects/apian-studio)

🌐 **Canlı site:** https://apian-studio.netlify.app

## İçindekiler

- [Bölümler](#bölümler)
- [Teknolojiler](#teknolojiler)
- [Tasarım (AWE)](#tasarım-awe)
- [Hızlı başlangıç](#hızlı-başlangıç)
- [Komutlar](#komutlar)
- [Proje yapısı](#proje-yapısı)
- [Fiyatlandırma ve ROI hesaplayıcı](#fiyatlandırma-ve-roi-hesaplayıcı)
- [CI/CD](#cicd)
- [Yol haritası](#yol-haritası)

## Bölümler

Tek sayfalık landing; her bölüm `src/components/sections/` altında ayrı bileşen:

| Bölüm | İçerik |
|---|---|
| Hero | WebGL petek animasyonu (three.js), serif display başlık, charcoal pill CTA'lar, mini istatistik kartları |
| Hizmetler | 6 hizmet kartı (`src/data/services.ts`) |
| Paketler | 3 paket: AI Asistan, Süreç Otomasyonu (öne çıkan), AI Website |
| Süreç | 4 adımlı çalışma modeli + monumental bölüm işareti |
| Neden Apian | 4 farklılaşma noktası |
| İletişim | Teklif CTA'sı + sosyal bağlantılar |
| Footer | Mono utility link kümesi |

Tüm metin ve fiyatlar `src/data/*.ts` dosyalarında yaşar — bileşenlere gömülü değildir. Metin değişecekse data dosyaları düzenlenir.

## Teknolojiler

| Katman | Seçim |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript |
| Stil | Tailwind CSS 3.4 + AWE tasarım token'ları |
| Font | Cormorant Garamond (display) · Inter (metin) · IBM Plex Mono (navigasyon) — `next/font` |
| 3D / Hareket | three.js + @react-three/fiber/drei · framer-motion · Lenis smooth scroll |
| Test | Vitest (17 test) + `tsc --noEmit` |
| Deploy | Netlify (Essential Next.js plugin v5) + GitHub Actions CI |

## Tasarım (AWE)

"Robot observatory after midnight": neredeyse siyah zemin (`#010101`) üzerinde porselen (`#e0e0e0`) editoryal serif başlıklar, charcoal (`#1f1f23`) hap navigasyon, 1px hairline (`#252525`) çizgiler. Gölge yok, parlak vurgu rengi yok, dolgulu birincil buton yok.

- Kaynak: [`DESIGN.md`](./DESIGN.md) (renk/tipografi/ölçek/bileşen kuralları)
- Uygulama: `tailwind.config.ts` + `src/app/globals.css` (`awe-*` yardımcı sınıfları)
- İçerik kolonu: 940px, kart yarıçapı 16px, haplar 100px

## Hızlı başlangıç

Gereken: Node.js 20+.

```bash
cd apian-site/apian-studio-new
npm ci
npm run dev      # http://localhost:3000
```

## Komutlar

`apian-studio-new/` dizininde:

```bash
npm run dev      # geliştirme sunucusu
npm run build    # production build
npm run start    # build çıktısını çalıştır
npm run test     # vitest (3 dosya, 17 test)
npx tsc --noEmit # tip kontrolü (lint yerine bu kullanılır)
```

> Not: `npm run lint` güvenilir değildir (`eslint-config-next` 14 vs Next 15 uyumsuzluğu). Doğrulama kapısı `tsc + vitest + build` üçlüsüdür.

## Proje yapısı

```
apian-site/
├── README.md                  # bu dosya
├── DESIGN.md                  # AWE stil referansı
├── index.html                 # eski statik tek-dosya site (arşiv)
├── netlify.toml               # (taşındı: apian-studio-new/ içine)
├── .github/workflows/ci.yml   # CI: tsc + test + build
└── apian-studio-new/          # Next.js uygulaması ( canonical )
    ├── netlify.toml           # Netlify: Node 20 + Essential Next.js
    ├── src/
    │   ├── app/               # layout, page, globals.css
    │   ├── components/
    │   │   ├── 3d/            # HoneycombScene (ssr:false, "use client")
    │   │   └── sections/      # Hero, Services, Packages, Process, Why, Contact
    │   ├── data/              # copy + fiyat (tek doğruluk kaynağı)
    │   └── lib/
    │       ├── pricing/       # ROI hesaplayıcı + testleri
    │       └── validations/   # iletişim formu doğrulama + testleri
    └── package.json
```

> `index.html` ile Next.js uygulaması senkron tutulmaz; canonical olan `apian-studio-new/`'dur.

## Fiyatlandırma ve ROI hesaplayıcı

Paket aralıkları (`src/data/packages.ts`): AI Asistan 25–45 bin ₺ · Süreç Otomasyonu 40–90 bin ₺ · AI Website 30–50 bin ₺.

`src/lib/pricing/calculator.ts`, müşterinin haftalık manuel iş yükünden aylık tasarruf ve amorti süresi hesaplar (`calculateAutomationROI` + `getRecommendedPackage`). Kurulum bedelleri aralık ortalarıdır (35K / 65K / 40K). Testleri `calculator.test.ts`'tedir.

## CI/CD

- **CI (GitHub Actions):** `main`'e push/PR'de `tsc --noEmit` → `vitest` → `next build` koşar. Bkz. `.github/workflows/ci.yml`.
- **CD (Netlify Git CD):** `main` push'unda otomatik production deploy; PR'larda Deploy Preview linki. Base directory: `apian-studio-new`. Canlı: https://apian-studio.netlify.app
- Başarısız deploy asla yayınlanmaz; kötü yayın düzeltilmez, commit geri alınarak ileri taşınır (fix-forward).

Yerel `npm install` ile Netlify/CI kurulumunun aynı ağacı kurması için `legacy-peer-deps` `.npmrc` ile sabitlidir.

## Yol haritası

- [ ] Marka/domain kararı (`mustafabozkaya.dev` vs `apian.studio`) + gerçek gönderici mailbox'ı (şu an sitedeki mailto'lar ölü)
- [ ] Hero'ya high-key robot görsel bandı (şu an wireframe petek placeholder)
- [ ] Paketler bölümüne interaktif ROI widget'ı (hesaplayıcı modül hazır, arayüz bekleniyor)
- [ ] Özel domain + form → e-posta akışı

---

© Apian Studio — [Canlı site](https://apian-studio.netlify.app) · [Tasarım referansı](./DESIGN.md)
