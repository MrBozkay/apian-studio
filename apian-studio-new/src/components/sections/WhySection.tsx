import { whyApian } from "@/data/whyApian";

export default function WhySection() {
  return (
    <section id="neden" className="py-10 px-6 bg-void">
      <div className="awe-container">
        <div className="text-center mb-10" data-reveal>
          <span className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint mb-4">
            Neden Apian
          </span>
          <h2 className="font-display text-feature-heading text-porcelain mb-4">
            Agent&apos;ları PowerPoint&apos;te değil, üretimde 8 yıldır çalıştıran ekip
          </h2>
          <p className="text-body text-muted-steel max-w-2xl mx-auto">
            Ajans değil, mühendislik atölyesi. Her projeyi sahiplenerek, dokümanlayarak teslim ederiz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {whyApian.map((item) => (
            <div
              key={item.title}
              data-reveal
              className="awe-compact-card p-4 flex gap-4"
            >
              <span className="font-sans text-lg text-faint flex-shrink-0" aria-hidden="true">◆</span>
              <div>
                <h3 className="font-sans text-module-heading text-porcelain mb-1">{item.title}</h3>
                <p className="text-body text-muted-steel">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
