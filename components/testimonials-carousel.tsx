"use client";

import { TestimonialType } from "@/contentful/utils/types";
import { usePrevNextButtons } from "@/lib/carousel-utils";
import useEmblaCarousel from "embla-carousel-react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { IoIosBriefcase } from "react-icons/io";
import { IoPerson } from "react-icons/io5";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="bg-primary py-24 px-8">
      <div className="flex justify-between mb-6">
        <h2 className="section_header !no-underline">Testimonials</h2>
        <div className="flex gap-3">
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
      <div className="overflow-hidden relative" ref={emblaRef}>
        <div className="flex -ml-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-grow-0 flex-shrink-0 w-1/3 cursor-grab active:cursor-grabbing pl-3"
            >
              <div className="bg-light rounded-md h-full text-primary px-6 py-8 flex flex-col shadow-2xl">
                <p className="mb-4 !text-xl">"{testimonial.testimony}"</p>
                <h3 className="text-2xl mt-auto font-bold flex items-center gap-1">
                  <IoPerson className="inline-flex" />
                  {testimonial.name}
                </h3>
                <h3 className="text-xl italic font-light flex items-center gap-1">
                  <IoIosBriefcase className="inline-flex" />
                  {testimonial.position}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
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
      className="text-4xl"
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
      className="text-4xl"
    >
      <FaCircleChevronRight />
    </button>
  );
}
