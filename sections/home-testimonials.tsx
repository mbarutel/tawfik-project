import { TestimonialsCarousel } from "@/components";
import { Testimonial } from "@/contentful/controllers/testimonial";
import parserTestimonialEntry from "@/contentful/utils/parser-testimonial-entry";
import { draftMode } from "next/headers";

export async function generateStaticParams() {
  const testimonialInstance = new Testimonial({
    preview: false,
    parser: parserTestimonialEntry,
  });

  return await testimonialInstance.getTestimonials();
}

export default async function HomeTestimonials() {
  const draft = await draftMode();

  const testimonialInstance = new Testimonial({
    preview: draft.isEnabled,
    parser: parserTestimonialEntry,
  });

  const testimonials = await testimonialInstance.getTestimonials();

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="bg-[url('/testimonials-bg.webp')] bg-cover">
      <div className="container mx-auto">
        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
