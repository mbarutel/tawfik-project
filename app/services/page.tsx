import { services } from "@/lib/data";
import Image from "next/image";
import { Fragment } from "react";

export default async function page() {
  return (
    <section>
      <div className="container">
        <h2 className="section_header decoration-primary text-center">
          ALL SERVICES
        </h2>
        <div>
          {services.map((service, index) => (
            <Fragment key={index}>
              <ServiceCard service={service} />
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

type ServiceType = (typeof services)[number];

function ServiceCard({ service }: { service: ServiceType }) {
  return (
    <div className="grid grid-cols-3 mt-5">
      <div className="relative h-[450px] col-span-1">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          className="object-cover object-center"
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-3 hover:underline">
          {service.title}
        </h2>
        <p className="text-justify">{service.text}</p>
      </div>
    </div>
  );
}
