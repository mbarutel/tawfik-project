import Link from "next/link";
import Button from "./button";
import { Variant } from "@/lib/enums";

export default function Header() {
  const texts = ["Executive Coaching", "Emerging Leaders", "Team Workshops"];

  return (
    <header className="relative bg-[url('/header-bg.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-dark/50 z-0" />

      {/* Content - Ensure it's above the overlay */}
      <div className="container relative h-screen md:h-[900px] flex flex-col z-10">
        <div className="flex flex-wrap justify-center opacity-80 gap-x-5 sm:gap-x-7 md:gap-x-12 lg:gap-x-18 xl:gap-x-24 2xl:gap-x-28 mt-8">
          {texts.map((text, index) => (
            <h5
              key={index}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center font-thin italic opacity-80"
            >
              {text}
            </h5>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center my-auto">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl text-center font-bold text-secondary my-2 md:my-3 lg:my-4">
            Putting strengths already there to work.
          </h1>
          <h4 className="sm:text-xl md:text-2xl text-center max-w-5xl mx-auto mb-8">
            Executive coaching and team workshops for people stepping up — new
            leaders, emerging leaders, and the ones already carrying the load.
          </h4>
          <Link href="#contact" className="button mb-auto mx-auto border-light">
            Book a free 30-minute chat
          </Link>{" "}
        </div>
      </div>
    </header>
  );
}
