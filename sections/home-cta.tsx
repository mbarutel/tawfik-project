"use client";
import Link from "next/link";
import { InlineWidget } from "react-calendly";

export default function HomeCta() {
  return (
    <section className="bg-light">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12">
        <div className="text-center md:text-left">
          <h2 className="section_header text-primary decoration-light">
            Start Your Journey
          </h2>
          <h3 className="text-4xl text-secondary mt-2">
            Book a 30-min Consultation
          </h3>
          <p className="my-4 text-primary leading-relaxed max-w-[60ch]">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
          <Link href="#" className="button border-secondary text-secondary">
            Book Now
          </Link>
        </div>
        <div className="py-8">
          <InlineWidget url="https://calendly.com/edubas128" />
        </div>
      </div>
    </section>
  );
}
