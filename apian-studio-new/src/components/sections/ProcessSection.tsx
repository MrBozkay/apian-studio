import { processSteps } from "@/data/processSteps";

export default function ProcessSection() {
  return (
    <section id="surec" className="px-6 py-24 lg:py-32 bg-void">
      <div className="dala-container grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:sticky lg:top-32 self-start" data-reveal>
          <span className="dala-eyebrow mb-6">Süreç</span>
          <h2 className="text-heading-sm text-bone mb-6">
            İlk görüşmeden canlıya dört adım
          </h2>
          <p className="text-body text-mist max-w-[520px]">
            Kısa satış döngüsü, net kilometre taşları. Her adımın çıktısı
            yazılıdır.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {processSteps.map((step) => (
            <article key={step.title} data-reveal>
              <p className="text-heading text-bone mb-3">
                0{step.number}
              </p>
              <h3 className="text-heading-2xs text-bone mb-3">{step.title}</h3>
              <p className="text-body text-mist max-w-[520px]">{step.description}</p>
            </article>
          ))}
          <div data-reveal>
            <a href="#iletisim" className="dala-ghost text-body font-light">
              İlk adımı atın — keşif görüşmesi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
