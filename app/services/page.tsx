import { ServicePageHero } from "@/components";
import { services } from "@/lib/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

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
      <ServicePageHero
        title="Three Ways to Work Together"
        subtitle="One-on-one coaching, coaching for leaders early in the journey, and workshops that lift a whole team — practical, tailored, and grounded in evidence-based practice."
      />
      <main className="bg-light text-primary">
        <section id="services" className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
              {services.map((service) => (
                <article key={service.link} className="group flex flex-col">
                  <Link
                    href={service.link}
                    className="relative block h-64 overflow-hidden"
                  >
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </Link>
                  <div className="h-1 w-10 bg-secondary mt-6" />
                  <h2 className="text-2xl font-semibold mt-4">
                    {service.title}
                  </h2>
                  <h3 className="italic text-secondary mt-1">
                    {service.subTitle}
                  </h3>
                  <p className="mt-3 leading-7">{service.text}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center gap-2 mt-4 text-secondary underline underline-offset-4 w-fit"
                  >
                    Learn more
                    <BsArrowRight className="transition group-hover:translate-x-1" />
                  </Link>
                </article>
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/#contact" className="button border-primary mt-16">
                Book a free 30-minute chat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
