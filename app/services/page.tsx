import { Header } from "@/components";
import { services } from "@/lib/data";
import Image from "next/image";
import { Fragment } from "react";

export default async function page() {
  return (
    <>
      <Header />
      <section id="services">
        <div className="container">
          <h2 className="section_header decoration-primary text-center">
            ALL SERVICES
          </h2>
          <div className="flex flex-col gap-12 lg:gap-24 my-12 lg:my-24">
            {services.map((service, index) => (
              <Fragment key={index}>
                <ServiceCard service={service} />
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

type ServiceType = (typeof services)[number];

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 group">
      <ImageFrame src={service.image.src} alt={service.image.alt} />
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl lg:text-6xl font-bold mb-1 lg:mb-3">
          {service.title}
        </h2>
        <p className="text-justify">{service.longText}</p>
      </div>
    </div>
  );
}

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-[90%] 2xl:w-3/4 group-odd:order-2 group-even:mr-auto group-odd:ml-auto hidden lg:block">
      <div className="bg-secondary absolute bottom-0 group-odd:right-0 group-even:left-0 group-odd:translate-x-3 group-even:-translate-x-3 translate-y-3 w-[80%] h-[90%]" />
      <div className="relative h-[450px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
    </div>
  );
}
