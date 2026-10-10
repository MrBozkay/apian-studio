import { processSteps } from "@/data/processSteps";

export default function ProcessSection() {
  return (
    <section id="surec" className="py-10 px-6 bg-void border-t border-hairline">
      <div className="awe-container">
        {/* Monumental marker — izole, kart dışında */}
        <p aria-hidden="true" className="awe-monumental select-none py-10">
          04
        </p>
        <div className="text-center mb-10" data-reveal>
          <span className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint mb-4">
            Süreç
          </span>
          <h2 className="font-display text-feature-heading text-porcelain mb-4">
            İlk görüşmeden canlıya dört adım
          </h2>
          <p className="text-body text-muted-steel max-w-2xl mx-auto">
            Kısa satış döngüsü, net kilometre taşları. Her adımın çıktısı yazılıdır.
          </p>
        </div>
        <div className="flex flex-col">
          {processSteps.map((step, index) => (
            <div key={step.title} data-reveal>
              <div className="flex items-baseline justify-between gap-4 py-4">
                <h3 className="font-sans text-body text-porcelain">{step.title}</h3>
                <p className="font-mono text-utility-nav-tight uppercase">
                  <span className="text-porcelain">0{step.number}</span>
                  <span className="text-dormant"> / 04</span>
                </p>
              </div>
              <hr className="awe-rule" />
              <p className="text-body text-muted-steel py-4 max-w-2xl">{step.description}</p>
              {index < processSteps.length - 1 && <hr className="awe-rule opacity-60" />}
            </div>
          ))}
        </div>
        {/* Büyük rounded media panel */}
        <div className="awe-media-card mt-10" data-reveal>
          <div className="awe-media-well rounded-images p-10 text-center">
            <p className="font-mono text-utility-nav uppercase text-faint mb-3">Teslim bandı</p>
            <p className="font-sans text-module-heading text-porcelain">
              2–4 haftada canlıya alma
            </p>
            <p className="text-body text-muted-steel mt-2">
              Ara gösterimler, yazılı kapsam, izlenebilir bakım.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
