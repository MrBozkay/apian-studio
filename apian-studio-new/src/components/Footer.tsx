const cluster = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#surec", label: "Süreç" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="px-6 py-24 bg-void">
      <div className="dala-container flex items-end justify-between flex-wrap gap-6">
        <p className="text-caption text-ash max-w-xs">
          © 2026 Apian Studio — Mustafa Bozkaya. Yapay zekâ çözümleri atölyesi.
        </p>
        <ul className="flex gap-8 list-none">
          {cluster.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="dala-ghost text-nav-label uppercase">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
