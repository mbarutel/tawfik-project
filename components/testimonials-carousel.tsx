"use client";

import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { TestimonialType } from "@/contentful/utils/types";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => embla && embla.scrollTo(index),
    [embla],
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className="relative mx-auto my-auto bg-primary/80 rounded-md">
        <RiDoubleQuotesL className="absolute text-4xl xl:text-6xl top-10 left-10 opacity-70" />
        <RiDoubleQuotesR className="absolute text-4xl xl:text-6xl bottom-10 right-10 opacity-70" />
        <div className="overflow-hidden" ref={viewportRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => {
              const initials = getInitials(testimonial.name);
              return (
                <div
                  key={index}
                  className="relative flex-[0_0_100%] min-w-0 p-4 md:p-14 h-[350px] flex flex-col justify-center rounded-md cursor-grab active:cursor-grabbing"
                >
                  <h3 className="md:text-xl lg:text-3xl text-center">
                    {testimonial.testimony}
                  </h3>
                  <p className="text-sm md:text-lg mt-2 lg:mt-4 text-center italic">
                    — {initials}, {testimonial.position}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === selectedIndex ? "bg-secondary" : "bg-light"
            } mx-1.5 cursor-pointer`}
            type="button"
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  );
}

function getInitials(name: string): string {
  const parts = name.split(" ");
  return `${parts[0][0]}.${parts[parts.length - 1][0]}.`;
}
