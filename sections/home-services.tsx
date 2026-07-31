import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function HomeServices() {
  return (
    <section id="services" className="bg-light">
      <div className="container flex flex-col items-center">
        <h2 className="section_header decoration-secondary mb-8 xl:mb-16 text-center text-primary">
          Three Ways to Work Together
        </h2>
        <p className="text-primary text-center max-w-4xl mb-8 xl:mb-16">
          One-on-one coaching, coaching for leaders early in the journey, and
          workshops that lift a whole team. All of it practical, all of it
          built around your context, and all of it grounded in evidence-based
          coaching practice.
        </p>
        <p className="text-primary text-center max-w-4xl -mt-4 mb-8 xl:mb-16">
          Not sure which one fits? Book a free 30-minute chat and we&apos;ll work
          it out together.
        </p>
        <div className="grid xl:grid-cols-3 gap-y-4 gap-x-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex gap-6 xl:gap-0 xl:flex-col p-4 mx-auto"
            >
              <ImageFrame
                src={service.image.src}
                alt={service.image.alt}
                link={service.link}
              />
              <div className="flex flex-col justify-center group-even:text-left xl:group-even:text-center xl:text-center text-primary">
                <h3 className="text-4xl mt-6 xl:mt-10">{service.title}</h3>
                <h4 className="italic text-xl 2xl:text-2xl mb-3">
                  {service.subTitle}
                </h4>
                <p>{service.text}</p>
                <Link
                  href={service.link}
                  className="italic underline group text-2xl mt-2 text-secondary w-fit"
                >
                  Learn more
                  <BsArrowRight className="hidden lg:inline-flex ml-3 group-hover:translate-x-2 transition" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/services"
          className="button text-primary border-primary mt-6"
        >
          Our Services
        </Link>
      </div>
    </section>
  );
}

function ImageFrame({
  src,
  alt,
  link,
}: {
  src: string;
  alt: string;
  link: string;
}) {
  return (
    <div className="hidden md:block group-even:order-1 xl:group-even:order-0 relative w-full">
      <div className="absolute bg-primary inset-0 -translate-x-2 translate-y-2" />
      <div className="relative h-[450px] w-full xl:translate-x-2 xl:-translate-y-2">
        <Link href={link}>
          <Image src={src} alt={alt} fill className="object-cover" />
        </Link>
      </div>
    </div>
  );
}

// <Link
//   href={service.link}
//   className="button border-secondary text-secondary 2xl:border-primary 2xl:text-primary"
// >
//   Learn More
// </Link>
