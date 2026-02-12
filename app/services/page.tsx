import { Header } from "@/components";
import { services } from "@/lib/data";
import {
  ServicesCoaching,
  ServicesConsulting,
  ServicesWorkshops,
} from "@/sections";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

export const metadata: Metadata = {
  title:
    "Executive Coaching & Leadership Development Services | Tawfik Executive Coaching & Consulting",
  description:
    "Discover our executive coaching, leadership development workshops, and strategic consulting services designed to empower leaders and teams across Melbourne and Australia.",
  openGraph: {
    title: "Our Services | Tawfik Executive Coaching & Consulting",
    description:
      "Executive coaching, leadership workshops, and strategic consulting for Melbourne businesses.",
    url: "https://tawfikecc.com.au/services",
  },
};

export default async function page() {
  return (
    <>
      <Header />
      <section id="services">
        <div className="container flex flex-col">
          <h2 className="section_header decoration-primary text-center">
            OUR SERVICES
          </h2>
          <div className="flex flex-col gap-12 lg:gap-24 my-12 lg:my-24">
            <ServicesCoaching />
            <ServicesWorkshops />
            <ServicesConsulting />
          </div>
          <p className="text-center italic my-6 !text-3xl">
            Book your time for a free consultation
          </p>
          <Link
            href="/#contact"
            className="button border-secondary text-secondary mx-auto"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  );
}
