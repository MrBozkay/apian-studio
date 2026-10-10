import { packages } from "@/data/packages";

export default function PackagesSection() {
  return (
    <section id="paketler" className="py-10 px-6 bg-void">
      <div className="awe-container">
        <div className="text-center mb-10" data-reveal>
          <span className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint mb-4">
            Paketler
          </span>
          <h2 className="font-display text-feature-heading text-porcelain mb-4">
            Üç paket, sabit kapsam, sabit fiyat
          </h2>
          <p className="text-body text-muted-steel max-w-2xl mx-auto">
            Her paket sözleşmeye bağlı net kapsamla teslim edilir. Sürpriz fatura yok; aylık işletim bedeli ilk günden bellidir.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              data-reveal
              className="awe-media-card relative"
            >
              <div className="awe-media-well p-4 flex flex-col h-full">
                {pkg.featured && (
                  <span className="absolute -top-3 right-6 bg-charcoal text-porcelain font-mono text-utility-nav-tight uppercase px-3 py-1 rounded-pills border border-hairline">
                    En Çok Tercih Edilen
                  </span>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-compact-cards bg-charcoal border border-hairline flex justify-center items-center">
                    <span className="text-2xl" aria-hidden="true">{pkg.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-sans text-module-heading text-porcelain">{pkg.title}</h3>
                    <p className="text-muted-steel text-xs">{pkg.tag}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-porcelain text-sm">
                      <span className="text-faint mt-0.5 text-xs" aria-hidden="true">◆</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6 border-t border-hairline">
                  <p className="font-sans text-module-heading text-porcelain">{pkg.price}</p>
                  <p className="text-muted-steel text-xs mt-1">{pkg.subtext}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
