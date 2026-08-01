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
        Most leaders don&apos;t need fixing. They need room to think, a few
        tools that actually work, and someone who will ask the harder question.
        <br />
        <br />
        That&apos;s the work here.
      </p>
      <p className="text-justify">
        Tawfik Executive Coaching and Consulting supports new and emerging
        leaders and the teams around them to build capability that lasts longer
        than a single conversation. The coaching is practical. You leave with
        something you can use on Monday: a way into the conversation you&apos;ve
        been avoiding, a clearer read on your own patterns, a decision you can
        stand behind.
      </p>
      <p className="text-justify">
        It&apos;s grounded in accredited, evidence-based coaching practice and
        tested frameworks. And it starts from a simple belief: your strengths
        are already there. My job is to help you find them, name them, and use
        them on purpose.
      </p>
      <Link
        href="#contact"
        className="button border-secondary text-secondary mt-3"
      >
        Book a free 30-minute chat
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
            alt="Executive coaching session helping leaders build clarity and confidence"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
