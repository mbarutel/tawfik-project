"use client";
import { InlineWidget } from "react-calendly";
import { BiSolidChevronRightSquare } from "react-icons/bi";
import Link from "next/link";

export default function HomeCta() {
  return (
    <section id="contact" className="bg-light">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6 md:px-12">
        <div className="text-center lg:text-left text-primary">
          <h2 className="section_header decoration-light">
            Start Your Journey
          </h2>
          <h3 className="text-4xl text-secondary mt-2">
            Book a 30-min Consultation
          </h3>
          <p className="my-4 leading-relaxed w-full mx-auto">
            Lorem Ipsum is not simply random text. It has roots in a piece of
            classical Latin literature from 45 BC, making it over 2000 years
            old.
          </p>
          <p className="flex items-center gap-1 justify-center lg:justify-start">
            <BiSolidChevronRightSquare className="inline-flex text-secondary" />
            Mobile:
            <Link
              href="tel:0435867387"
              className="hover:underline hover:text-secondary transition"
            >
              0435867387
            </Link>
          </p>
          <p className="flex items-center gap-1 justify-center lg:justify-start">
            <BiSolidChevronRightSquare className="inline-flex text-secondary" />
            Email:
            <Link
              href="mailto:info@tawfikecc.com.au"
              className="hover:underline hover:text-secondary transition"
            >
              info@tawfikecc.com.au
            </Link>
          </p>
        </div>
        <div className="relative lex px-4 sm:px-12">
          <div className="h-[600px] relative w-full z-10">
            <InlineWidget
              url="https://calendly.com/tawfikecc-info/30min"
              styles={{ height: "600px", width: "100%" }}
            />
          </div>
          <div className="bg-secondary absolute -bottom-5 -right-1 sm:right-7 w-3/4 h-[80%] z-0" />
        </div>
      </div>
    </section>
  );
}

// <p className="montserrat text-base lg:text-xl">
//   Book Now
//   <BsArrowRight className="hidden lg:inline-flex ml-2" />
//   <BsArrowDown className="lg:hidden inline-flex ml-2" />
// </p>
