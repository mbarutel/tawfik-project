import { Header } from "@/components";
import { services } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Services | Tawfik Executive Coaching",
  description:
    "Explore executive coaching, emerging leader coaching and team workshops for practical, evidence-based leadership development.",
  openGraph: {
    title: "Our Services | Tawfik Executive Coaching",
    description:
      "Executive coaching, emerging leader coaching and team workshops across Melbourne, Gippsland and Australia.",
    url: "https://tawfikecc.com.au/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <section id="services" className="bg-light text-primary">
        <div className="container flex flex-col items-center">
          <h1 className="section_header decoration-secondary text-center">
            Three Ways to Work Together
          </h1>
          <p className="max-w-3xl text-center text-lg mt-6 mb-12">
            One-on-one coaching, coaching for leaders early in the journey, and
            workshops that lift a whole team. All of it practical, all of it
            built around your context, and all of it grounded in evidence-based
            coaching practice.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.link} className="flex flex-col border border-primary/20 p-5">
                <div className="relative h-64">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-3xl mt-6">{service.title}</h2>
                <h3 className="italic text-xl mt-1">{service.subTitle}</h3>
                <p className="mt-3">{service.text}</p>
                <Link href={service.link} className="mt-auto pt-5 text-secondary underline text-lg">
                  Learn more
                </Link>
              </article>
            ))}
          </div>
          <Link href="/#contact" className="button border-primary mt-12">
            Book a free 30-minute chat
          </Link>
        </div>
      </section>
    </>
  );
}
