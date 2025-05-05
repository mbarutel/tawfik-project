"use client";

import { TestimonialType } from "@/contentful/utils/types";
import { usePrevNextButtons } from "@/lib/carousel-utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaChevronRight,
} from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="overflow-hidden relative" ref={emblaRef}>
      <div className="flex">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-grow-0 flex-shrink-0 w-1/3 cursor-grab active:cursor-grabbing px-5 relative"
          >
            <div className="h-full relative flex">
              <div className="bg-white/40 absolute inset-0 z-0 translate-4" />
              <div className="bg-primary/90 z-10 p-4 text-center h-full flex flex-col">
                <p className="mb-4">"{testimonial.testimony}"</p>
                <h3 className="text-2xl mt-auto">{testimonial.name}</h3>
                <h3 className="text-xl italic font-light">
                  {testimonial.position}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <PrevButton
        onClick={() => onPrevButtonClick()}
        disabled={prevBtnDisabled}
      />
      <NextButton
        onClick={() => onNextButtonClick()}
        disabled={nextBtnDisabled}
      />
    </div>
  );
}

type PropType = {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
};

function PrevButton({ onClick, disabled }: PropType) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="absolute text-6xl top-1/2 left-5"
    >
      <GoChevronLeft />
    </button>
  );
}

function NextButton({ onClick, disabled }: PropType) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="absolute text-6xl top-1/2 right-5"
    >
      <GoChevronRight />
    </button>
  );
}
