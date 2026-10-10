# apian-studio-new

Apian Studio landing sitesinin Next.js 15 uygulaması. Proje genel bakışı için kök [`README.md`](../README.md) dosyasına bakın.

```bash
npm ci
npm run dev      # http://localhost:3000
npm run test     # vitest
npx tsc --noEmit # tip kontrolü
npm run build    # production build
```

- Metin ve fiyatlar `src/data/*.ts` içindedir.
- Tasarım token'ları: `tailwind.config.ts` + `src/app/globals.css` (kaynak: [`DESIGN.md`](../DESIGN.md)).
- Deploy: Netlify (`netlify.toml`, base dizin bu klasördür).
