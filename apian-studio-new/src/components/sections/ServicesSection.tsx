"use client";

import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="py-10 px-6 bg-void">
      <div className="awe-container">
        <div className="text-center mb-10" data-reveal>
          <span className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint mb-4">
            Hizmetlerimiz
          </span>
          <h2 className="font-display text-feature-heading text-porcelain mb-4">
            İşinizin yükünü alan altı hizmet
          </h2>
          <p className="text-body text-muted-steel max-w-2xl mx-auto">
            Paketler bu hizmetlerin sabit fiyatlı kombinasyonlarıdır — tek tek de talep edebilirsiniz.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service) => (
            <div
              key={service.title}
              data-reveal
              className="group awe-media-card"
            >
              <div className="awe-media-well p-4">
                <span className="text-3xl mb-4 block" aria-hidden="true">{service.icon}</span>
                <h3 className="font-sans text-module-heading text-porcelain mb-2">{service.title}</h3>
                <p className="text-body text-muted-steel mb-4">{service.description}</p>
                <hr className="awe-rule mb-4" />
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-porcelain text-sm">
                      <span className="text-faint mt-1 text-xs" aria-hidden="true">◆</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
