import { services } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function HomeServices() {
  return (
    <section className="bg-light">
      <div className="container text-primary">
        <h2 className="section_header decoration-secondary mb-16 text-center">
          Services
        </h2>
        <div className="grid xl:grid-cols-3 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              <ImageFrame src={service.image} alt={service.title} />
              <h3 className="text-4xl mt-3 xl:mt-6">{service.title}</h3>
              <h4 className="italic text-3xl mb-3 xl:mb-6">
                {service.subTitle}
              </h4>
              <Link href={service.link} className="button border-primary">
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="bg-primary absolute inset-0 -translate-x-2 translate-y-2" />
      <div className="relative h-[450px] w-[300px] sm:w-[550px] md:w-[650px] xl:w-[450px] translate-x-2 -translate-y-2">
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>
    </div>
  );
}
