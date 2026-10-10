"use client";

import { useState } from "react";

const links = [
  { href: "#hizmetler", label: "Hizmetler" },
  { href: "#paketler", label: "Paketler" },
  { href: "#surec", label: "Süreç" },
  { href: "#neden", label: "Neden Apian" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="dala-container flex items-center justify-between px-6 py-6">
        <a href="#top" aria-label="Apian Studio ana sayfa" className="flex items-center gap-2 text-bone text-nav-label uppercase">
          <svg width="22" height="22" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M50 8 L88 78 L12 78 Z" fill="#8052ff" />
            <path d="M50 8 L88 78 L50 62 L12 78 Z" fill="#15846e" opacity="0.85" />
          </svg>
          Apian&nbsp;Studio
        </a>
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="dala-ghost text-nav-label uppercase">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#iletisim" className="dala-pill">
            Ücretsiz Keşif
          </a>
        </div>
        <button
          type="button"
          className="md:hidden text-bone text-nav-label uppercase"
          aria-expanded={open}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </nav>
      {open && (
        <div className="md:hidden px-6 pb-8">
          <ul className="flex flex-col gap-6 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="dala-ghost text-heading-2xs"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#iletisim" className="dala-pill" onClick={() => setOpen(false)}>
                Ücretsiz Keşif
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
