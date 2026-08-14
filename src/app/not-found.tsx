import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { notFound } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-6xl font-bold text-accent">{notFound.code}</p>
      <h1 className="mt-6 text-2xl font-bold uppercase tracking-tight text-ink">
        {notFound.heading}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-body">
        {notFound.body}
      </p>
      <div className="mt-9 flex justify-center">
        <Button href={notFound.cta.href} variant={notFound.cta.variant}>
          {notFound.cta.label}
        </Button>
      </div>
    </Container>
  );
}
