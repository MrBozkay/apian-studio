export default function ContactSection() {
  return (
    <section id="iletisim" className="px-6 py-24 lg:py-32 bg-void" data-reveal>
      <div className="dala-container text-center flex flex-col items-center">
        <span className="dala-eyebrow mb-6">İletişim</span>
        <h2 className="dala-heading-lg mb-6 max-w-[900px]">
          Birlikte çalışmaya hazır mısınız?
        </h2>
        <p className="text-body text-bone mb-12 max-w-[480px]">
          30 dakikalık ücretsiz keşif görüşmesinde ihtiyacınızı netleştirip 48
          saat içinde sabit fiyatlı teklifle dönüyoruz.
        </p>
        <a href="mailto:info.genairobotix@gmail.com" className="dala-pill mb-10">
          Ücretsiz Keşif
        </a>
        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/mustafabozkaya"
            target="_blank"
            rel="noopener noreferrer"
            className="dala-ghost"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MrBozkay"
            target="_blank"
            rel="noopener noreferrer"
            className="dala-ghost"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
