import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQSchema } from "@/components/seo/schema";

export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
  bare = false,
}: {
  items: { q: string; a: string }[];
  eyebrow?: string;
  title?: React.ReactNode;
  bare?: boolean;
}) {
  const content = (
    <Accordion type="single" collapsible className="mx-auto mt-14 flex max-w-3xl flex-col gap-4">
      {items.map((f) => (
        <AccordionItem key={f.q} value={f.q}>
          <AccordionTrigger>{f.q}</AccordionTrigger>
          <AccordionContent>{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );

  return (
    <section className="section-screen relative py-24 sm:py-32">
      <FAQSchema faqs={items} />
      <Container>
        {!bare && <SectionHeading eyebrow={eyebrow} title={title} />}
        {content}
      </Container>
    </section>
  );
}
