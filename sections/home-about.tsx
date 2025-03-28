import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section id="about">
      <div className="container lg:grid lg:grid-cols-2 gap-x-12">
        <AboutText />
        <AboutImage />
      </div>
    </section>
  );
}

function AboutText() {
  return (
    <div className="my-auto">
      <h2 className="section_header decoration-secondary">ABOUT</h2>
      <p className="mt-4 md:mt-6 text-justify">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of.Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old. Richard McClintock, a Latin
        professor at Hampden-Sydney College.
      </p>
      <br />
      <p className="text-justify mb-6 md:mb-8">
        Book your time for a free kick-off session to learn more.
      </p>
      <Link href="#contact" className="button border-secondary text-secondary">
        Book Now
      </Link>
    </div>
  );
}

function AboutImage() {
  return (
    <div className="px-12 2xl:px-22 hidden lg:block">
      <div className="relative">
        <div className="bg-secondary absolute bottom-0 right-0 translate-x-3 translate-y-3 w-[80%] h-[90%]" />
        <div className="relative h-[650px] lg:h-[550px] xl:h-[600px]">
          <Image
            src="/about.webp"
            alt="Executive coaching session in Melbourne fostering leadership growth and business success"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
