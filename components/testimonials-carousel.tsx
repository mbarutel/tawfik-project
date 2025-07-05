"use client";

import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { TestimonialType } from "@/contentful/utils/types";
import { usePrevNextButtons } from "@/lib/carousel-utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { clsx } from "clsx";
import { useCallback, useEffect, useState } from "react";

export default function TestimonialsCarousel({
  testimonials,
}: {
  testimonials: TestimonialType[];
}) {
  const options = {
    loop: true,
  };
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  );

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  return (
    <div className="bg-primary/90 rounded-sm py-18 px-18">
      <h2 className="section_header text-center !no-underline">Testimonials</h2>
      <div className="overflow-hidden relative my-6" ref={emblaRef}>
        <div className="flex -ml-3">
          {testimonials.map((testimonial, index) => {
            const initials = GetInitials(testimonial.name);

            return (
              <div
                key={index}
                className="flex-grow-0 flex-shrink-0 w-full cursor-grab active:cursor-grabbing pl-3"
              >
                <div className="bg-light/80 rounded-sm h-full text-primary py-8 px-14 flex flex-col shadow-2xl text-center">
                  <p className="mb-4 !text-xl mt-auto">
                    "{testimonial.testimony}"
                  </p>
                  <p className="italic !text-xl mb-auto">
                    - {initials}, {testimonial.position}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* <div className="flex gap-3 justify-center"> */}
      {/*   <PrevButton */}
      {/*     onClick={() => onPrevButtonClick()} */}
      {/*     disabled={prevBtnDisabled} */}
      {/*   /> */}
      {/*   <NextButton */}
      {/*     onClick={() => onNextButtonClick()} */}
      {/*     disabled={nextBtnDisabled} */}
      {/*   /> */}
      {/* </div> */}
      <div className="flex justify-center pt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === selectedIndex ? "bg-secondary" : "bg-light"
              } mx-1.5 cursor-pointer`}
            type="button"
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

function GetInitials(name: string): string {
  const nameSplit = name.split(" ");
  return `${nameSplit[0][0]}.${nameSplit[nameSplit.length - 1][0]}.`;
}

// type PropType = {
//   onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
//   disabled: boolean;
// };

// function PrevButton({ onClick, disabled }: PropType) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       className={clsx("text-4xl transition", {
//         "opacity-80 cursor-not-allowed": disabled,
//       })}
//     >
//       <FaCircleChevronLeft />
//     </button>
//   );
// }
//
// function NextButton({ onClick, disabled }: PropType) {
//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       disabled={disabled}
//       className={clsx("text-4xl transition", {
//         "opacity-80 cursor-not-allowed": disabled,
//       })}
//     >
//       <FaCircleChevronRight />
//     </button>
//   );
// }
