const links = [
  { href: "#hizmetler", label: "Hizmetler", counter: "01" },
  { href: "#paketler", label: "Paketler", counter: "02" },
  { href: "#surec", label: "Süreç", counter: "03" },
  { href: "#neden", label: "Neden Apian", counter: "04" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-void border-b border-hairline">
      <nav className="awe-container flex items-center justify-between h-[76px] px-6">
        <a href="#top" aria-label="Apian Studio ana sayfa" className="flex items-center gap-2.5 font-mono text-utility-nav uppercase text-porcelain">
          <svg width="26" height="26" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" fill="none" stroke="#e0e0e0" strokeWidth="8" />
          </svg>
          Apian&nbsp;Studio
        </a>
        <ul className="hidden md:flex items-center gap-2 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-flex items-center gap-1 rounded-pills bg-charcoal px-4 py-2 font-mono text-utility-nav uppercase text-porcelain"
              >
                {link.label}
                <span className="text-faint text-[13px] font-light">({link.counter})</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#iletisim"
          className="inline-flex items-center gap-1 rounded-pills bg-charcoal px-5 py-2.5 font-mono text-utility-nav uppercase text-porcelain"
        >
          Ücretsiz Keşif
          <span className="text-faint text-[13px] font-light">(05)</span>
        </a>
      </nav>
    </header>
  );
}
