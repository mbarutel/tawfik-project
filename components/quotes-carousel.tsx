"use client";

import { useState, useEffect, useCallback } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { QuoteType } from "@/contentful/utils/types";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function QuotesCarousel({ quotes }: { quotes: QuoteType[] }) {
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
      <div className="relative mx-auto my-auto bg-primary/80 rounded-md">
        <RiDoubleQuotesL className="absolute text-4xl xl:text-6xl top-10 left-10 opacity-70" />
        <RiDoubleQuotesR className="absolute text-4xl xl:text-6xl bottom-10 right-10 opacity-70" />
        <div className="overflow-hidden" ref={viewportRef}>
          <div className="flex">
            {quotes.map((_, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] min-w-0 p-4 md:p-14 h-[350px] lg:h-[450px] flex flex-col justify-center rounded-md cursor-grab active:cursor-grabbing"
              >
                <h3 className="text-xl md:text-3xl text-center">
                  {quotes[index].quote}
                </h3>
                <p className="text-sm md:text-lg mt-2 lg:mt-4 text-center italic">
                  {quotes[index].author}
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
