import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function HomeServices() {
  return (
    <section id="services" className="bg-light">
      <div className="container flex flex-col items-center">
        <h2 className="section_header decoration-secondary mb-8 xl:mb-16 text-center text-primary">
          SERVICES
        </h2>
        <div className="grid xl:grid-cols-3 gap-y-4 gap-x-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex gap-6 xl:gap-0 xl:flex-col p-4 mx-auto"
            >
              <ImageFrame src={service.image.src} alt={service.image.alt} />
              <div className="flex flex-col justify-center group-even:text-left xl:group-even:text-center xl:text-center text-primary">
                <h3 className="text-4xl mt-6 xl:mt-10">{service.title}</h3>
                <h4 className="italic text-3xl mb-3">{service.subTitle}</h4>
                <p className="xl:text-justify">{service.text}</p>
                <Link
                  href="/services"
                  className="xl:hidden italic underline group text-2xl mt-2 text-secondary w-fit"
                >
                  Learn More
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

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="group-even:order-1 xl:group-even:order-0 relative w-full">
      <div className="absolute bg-primary inset-0 -translate-x-2 translate-y-2" />
      <div className="relative h-[450px] w-full xl:translate-x-2 xl:-translate-y-2">
        <Link href="/services" target="_blank" rel="noreferrer">
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
