export default function ContactSection() {
  return (
    <section id="iletisim" className="py-10 px-6 bg-void border-t border-hairline" data-reveal>
      <div className="awe-container text-center">
        <span className="inline-flex items-center gap-2 font-mono text-utility-nav uppercase text-faint mb-4">
          İletişim
        </span>
        <h2 className="font-display text-feature-heading text-porcelain mb-4">
          Kovanı bir konuşalım
        </h2>
        <p className="text-body text-muted-steel mb-10 max-w-xl mx-auto">
          30 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı netleştirip 48 saat içinde sabit fiyatlı teklifle dönüyoruz.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          <a href="mailto:merhaba@apian.studio" className="awe-pill">
            E-posta Gönder
          </a>
          <a
            href="https://www.linkedin.com/in/mustafabozkaya"
            target="_blank"
            rel="noopener noreferrer"
            className="awe-underline-control"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MrBozkay"
            target="_blank"
            rel="noopener noreferrer"
            className="awe-underline-control"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
