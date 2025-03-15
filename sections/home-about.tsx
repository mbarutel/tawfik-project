import Image from "next/image";
import Link from "next/link";

export default function HomeAbout() {
  return (
    <section>
      <div className="container mx-auto py-16 grid grid-cols-2 gap-x-12">
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
      <p className="my-6">
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
      <Link href="#" className="button border-secondary text-secondary">
        Learn more
      </Link>
    </div>
  );
}

function AboutImage() {
  return (
    <div className="px-12">
      <div className="relative">
        <div className="bg-secondary absolute inset-0 translate-x-3 translate-y-3" />
        <div className="relative h-[650px]">
          <Image
            src="/about.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
