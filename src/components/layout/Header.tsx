"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nav, navCta, site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Hysteresis: the header goes solid at 80px but only reverts below 20px.
    // A single threshold oscillates, because shrinking the header shifts the
    // page up and can drop scrollY back under the same value.
    const onScroll = () =>
      setScrolled((wasScrolled) =>
        wasScrolled ? window.scrollY > 20 : window.scrollY > 80,
      );
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // The header overlays the hero photo until the user scrolls past it. An open
  // mobile menu also forces the solid state, since its links need a backdrop.
  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200 ${
        solid
          ? `shadow-md backdrop-blur-md backdrop-saturate-150 ${
              // An open menu is a lot of text over moving content — it needs a
              // denser backdrop than the nav row alone.
              menuOpen ? "bg-crux-slate/95" : "bg-crux-slate/72"
            }`
          : "bg-transparent"
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-[height] duration-200 ease-crux motion-reduce:transition-none ${
            solid ? "h-16" : "h-24"
          }`}
        >
          <Link href="/" aria-label={`${site.name} — home`}>
            <Image
              src="/Crux-Consulting-Logo_WHITE.png"
              alt={site.name}
              width={1200}
              height={992}
              priority
              className={`w-auto transition-[height] duration-200 ease-crux motion-reduce:transition-none ${
                solid ? "h-11" : "h-14"
              }`}
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-white transition-colors hover:text-crux-blue-light"
              >
                {link.label}
              </Link>
            ))}
            <Button href={navCta.href} variant={navCta.variant}>
              {navCta.label}
            </Button>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden rounded-md p-2 text-white transition-colors duration-150 ease-crux hover:bg-white/10 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-white/60"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-white/15 py-4 flex flex-col gap-4">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={navCta.href}
              variant={navCta.variant}
              className="self-start"
            >
              {navCta.label}
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
