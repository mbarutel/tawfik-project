"use client";

import { TestimonialType } from "@/contentful/utils/types";
import { usePrevNextButtons } from "@/lib/carousel-utils";
import { clsx } from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

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
    <div className="bg-primary/90 rounded-sm py-18 px-8">
      <h2 className="section_header text-center !no-underline">Testimonials</h2>
      <div className="overflow-hidden relative my-6" ref={emblaRef}>
        <div className="flex -ml-3">
          {testimonials.map((testimonial, index) => {
            const initials = GetInitials(testimonial.name);

            return (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 w-full lg:w-1/2 cursor-grab active:cursor-grabbing pl-3"
              >
                <div className="bg-light/80 rounded-sm h-full text-primary px-6 py-8 flex flex-col shadow-2xl">
                  <p className="mb-4 !text-xl">"{testimonial.testimony}"</p>
                  <p className="italic !text-xl">
                    - {initials}, {testimonial.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-3 justify-center">
        <PrevButton
          onClick={() => onPrevButtonClick()}
          disabled={prevBtnDisabled}
        />
        <NextButton
          onClick={() => onNextButtonClick()}
          disabled={nextBtnDisabled}
        />
      </div>
    </div>
  );
}

function GetInitials(name: string): string {
  const nameSplit = name.split(" ");
  return `${nameSplit[0][0]}.${nameSplit[nameSplit.length - 1][0]}.`;
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
      className={clsx("text-4xl transition", {
        "opacity-80 cursor-not-allowed": disabled,
      })}
    >
      <FaCircleChevronLeft />
    </button>
  );
}

function NextButton({ onClick, disabled }: PropType) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx("text-4xl transition", {
        "opacity-80 cursor-not-allowed": disabled,
      })}
    >
      <FaCircleChevronRight />
    </button>
  );
}
