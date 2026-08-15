import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { notFound } from "@/content/site";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="text-6xl font-bold text-crux-blue">{notFound.code}</p>
      <h1 className="mt-6 text-h2 font-bold text-crux-slate">
        {notFound.heading}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-crux-gray">
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
