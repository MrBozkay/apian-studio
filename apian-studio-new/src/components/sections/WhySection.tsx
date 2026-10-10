import { whyApian } from "@/data/whyApian";

export default function WhySection() {
  return (
    <section id="neden" className="px-6 py-24 lg:py-32 bg-void">
      <div className="dala-container">
        <div className="max-w-[640px] mb-24" data-reveal>
          <span className="dala-eyebrow mb-6">Neden Apian</span>
          <h2 className="text-heading-sm text-bone mb-6">
            Agent&apos;ları PowerPoint&apos;te değil, üretimde 8 yıldır
            çalıştıran ekip
          </h2>
          <p className="text-body text-mist max-w-[520px]">
            Ajans değil, mühendislik atölyesi. Her projeyi sahiplenerek,
            dokümanlayarak teslim ederiz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {whyApian.map((item, i) => (
            <article key={item.title} data-reveal>
              <p className="text-caption text-iris mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-heading-2xs text-bone mb-3">{item.title}</h3>
              <p className="text-body text-mist">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
