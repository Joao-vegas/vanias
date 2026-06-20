"use client";

import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#resultados", label: "Resultados" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_4px_24px_-12px_rgba(116,36,66,0.4)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#topo" className="flex flex-col leading-none">
          <span className="font-serif text-2xl font-semibold text-plum-800">
            Vânia Amaral
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-blush-500">
            Fisioterapia & Estética
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-plum-800/80 transition-colors hover:text-blush-600"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blush-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blush-600/30 transition-all hover:bg-blush-700 hover:shadow-blush-600/40"
          >
            Agendar
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-plum-800 transition-all ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-plum-800 transition-all ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-6 bg-plum-800 transition-all ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden bg-cream/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-blush-100" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-plum-800 transition-colors hover:bg-blush-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-blush-600 px-5 py-3 text-center text-base font-semibold text-white"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
