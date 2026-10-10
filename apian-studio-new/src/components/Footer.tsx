const cluster = [
  { href: "#paketler", label: "Paketler", counter: "02" },
  { href: "#surec", label: "Süreç", counter: "03" },
  { href: "#iletisim", label: "İletişim", counter: "05" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6 bg-void border-t border-hairline">
      <div className="awe-container flex items-center justify-between flex-wrap gap-2">
        <p className="font-mono text-utility-nav-tight uppercase text-faint">
          © 2026 Apian Studio — Mustafa Bozkaya. Yapay zekâ çözümleri atölyesi.
        </p>
        <ul className="flex gap-2 list-none">
          {cluster.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-utility-nav-tight uppercase text-porcelain"
              >
                {link.label} <span className="text-faint">({link.counter})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
