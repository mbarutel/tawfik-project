"use client";

import { quotes } from "@/lib/data";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useCallback, useEffect, useState } from "react";

export default function HomeQuotes() {
  return (
    <section className="bg-[url('/quotes-bg.jpg')] bg-cover">
      <div className="container mx-auto py-16">
        <Carousel quotes={quotes} />
      </div>
    </section>
  );
}

type QuoteType = (typeof quotes)[number];

function Carousel({ quotes }: { quotes: readonly QuoteType[] }) {
  const [viewportRef, embla] = useEmblaCarousel({ loop: false }, [
    Autoplay({ stopOnLastSnap: true, stopOnMouseEnter: true }),
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
      <div className="mx-auto my-auto bg-primary/80 rounded-md">
        <div className="overflow-hidden" ref={viewportRef}>
          <div className="flex">
            {quotes.map((_, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 p-14 h-[350px] lg:h-[450px] flex flex-col justify-center rounded-md cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-wrap gap-2 justify-center">
                  <h3 className="text-xl md:text-3xl text-center">
                    <RiDoubleQuotesL className="inline-flex mr-1" />
                    {quotes[index].quote}
                    <RiDoubleQuotesR className="inline-flex ml-1" />
                  </h3>
                </div>
                <p className="text-base md:text-lg text-right mt-4">
                  {quotes[index].author}, {quotes[index].title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        {quotes.map((_, index) => (
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
