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
        At Tawfik Executive Coaching and Consulting, we believe that the best
        solutions come from within. Our role is to support leaders to uncover
        those solutions—by creating the space, guidance and tools to help them
        grow with confidence. We work alongside leaders to build a toolkit of
        practical, adaptable skills they can utilise throughout their leadership
        journey. Whether it's navigating change, leading with purpose, or
        building stronger relationships, our focus is on helping leaders become
        more effective, grounded, and capable in real-world situations. We also
        work closely with teams and organisations—helping them lead their people
        with clarity, connection and resilience.
      </p>
      <br />
      <p className="text-justify mb-6 md:mb-8">
        Above all, we’re here to support growth—of people, leadership and
        culture. Book your time for a free consultation to learn more about how
        we can support your growth.
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
