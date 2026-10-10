import { packages } from "@/data/packages";

export default function PackagesSection() {
  return (
    <section id="paketler" className="px-6 py-24 lg:py-32 bg-void">
      <div className="dala-container">
        <div className="max-w-[640px] mb-24" data-reveal>
          <span className="dala-eyebrow mb-6">Paketler</span>
          <h2 className="text-heading-sm text-bone mb-6">
            Üç paket, sabit kapsam, sabit fiyat
          </h2>
          <p className="text-body text-mist max-w-[520px]">
            Her paket sözleşmeye bağlı net kapsamla teslim edilir. Sürpriz
            fatura yok; aylık işletim bedeli ilk günden bellidir.
          </p>
        </div>
        <div className="flex flex-col gap-24">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              data-reveal
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div>
                {pkg.featured && (
                  <p className="dala-eyebrow mb-4">En çok tercih edilen</p>
                )}
                <h3 className="text-heading text-bone mb-3">{pkg.title}</h3>
                <p className="text-body text-mist max-w-[520px]">{pkg.tag}</p>
              </div>
              <div>
                <ul className="flex flex-col gap-3 mb-10 list-none">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="text-body text-bone">
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-subheading text-bone mb-2">{pkg.price}</p>
                <p className="text-caption text-ash mb-8">{pkg.subtext}</p>
                <a href="#iletisim" className="dala-ghost text-body font-light">
                  Bu paket için teklif al
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
