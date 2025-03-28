import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomeServices() {
  return (
    <section id="services" className="bg-light">
      <div className="container">
        <h2 className="section_header decoration-secondary mb-8 xl:mb-16 text-center text-primary">
          SERVICES
        </h2>
        <div className="grid xl:grid-cols-3 gap-y-8 gap-x-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-primary 2xl:bg-primary/0 rounded-md w-[min(100%,40rem)] mx-auto"
            >
              <ImageFrame src={service.image.src} alt={service.image.alt} />
              <h3 className="text-4xl mt-3 xl:mt-6 text-light 2xl:text-primary">
                {service.title}
              </h3>
              <h4 className="italic text-3xl mb-3 xl:mb-6 text-light 2xl:text-primary">
                {service.subTitle}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full">
      <div className="hidden 2xl:block absolute bg-primary inset-0 -translate-x-2 translate-y-2" />
      <div className="relative h-[450px] w-full 2xl:translate-x-2 2xl:-translate-y-2">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover rounded-md 2xl:rounded-none"
        />
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
