"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { nav, navCta, site } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <Container>
        <div
          className={`flex items-center justify-between transition-all duration-200 ${
            scrolled ? "h-16" : "h-20"
          }`}
        >
          <Link
            href="/"
            className="text-lg font-bold uppercase tracking-[0.2em] text-ink"
          >
            {site.name}
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wider text-ink-soft transition-colors hover:text-accent"
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
            className="md:hidden p-2 text-ink"
          >
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-slate-200 py-4 flex flex-col gap-4">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-ink-soft"
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
