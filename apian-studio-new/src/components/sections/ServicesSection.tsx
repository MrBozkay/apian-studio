"use client";

import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="px-6 py-24 lg:py-32 bg-void">
      <div className="dala-container grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="lg:sticky lg:top-32 self-start" data-reveal>
          <span className="dala-eyebrow mb-6">Hizmetlerimiz</span>
          <h2 className="text-heading-sm text-bone mb-6">
            İşinizin yükünü alan altı hizmet
          </h2>
          <p className="text-body text-mist max-w-[520px]">
            Paketler bu hizmetlerin sabit fiyatlı kombinasyonlarıdır — tek tek
            de talep edebilirsiniz.
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {services.map((service, i) => (
            <article key={service.title} data-reveal>
              <p className="text-caption text-iris mb-3">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-heading-2xs text-bone mb-3">{service.title}</h3>
              <p className="text-body text-mist mb-6">{service.description}</p>
              <ul className="flex flex-wrap gap-3 list-none">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="rounded-tags text-caption text-ash"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
