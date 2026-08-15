import Link from "next/link";
import Container from "@/components/ui/Container";
import { footer, marc, nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-crux-navy text-white">
      <Container className="py-14">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold uppercase tracking-[0.2em]">
              {site.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              {site.description}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-white/70 transition-colors hover:text-crux-blue-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="text-sm text-white/70">
            <p className="font-semibold text-white">{marc.name}</p>
            <p className="mt-1">{marc.title}</p>
            <a
              href={`tel:${marc.phone.replace(/[^\d+]/g, "")}`}
              className="mt-3 block transition-colors hover:text-crux-blue-light"
            >
              {marc.phone}
            </a>
            <a
              href={`mailto:${marc.email}`}
              className="block transition-colors hover:text-crux-blue-light"
            >
              {marc.email}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/15 pt-6 text-xs text-white/50">
          © {new Date().getFullYear()} • {footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
