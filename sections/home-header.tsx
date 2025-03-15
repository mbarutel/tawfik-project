import Link from "next/link";

export default function HomeHeader() {
  const texts = ["Executive Coaching", "People & Culture", "Psychology-based"];

  return (
    <header className="relative bg-[url('/header-bg.webp')] bg-cover bg-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-dark/50 z-0" />

      {/* Content - Ensure it's above the overlay */}
      <div className="container relative h-screen md:h-[1000px] flex flex-col z-10">
        <div className="flex justify-center opacity-80 gap-5 sm:gap-7 md:gap-12 lg:gap-16 xl:gap-22 2xl:gap-24 mt-8">
          {texts.map((text, index) => (
            <h3
              key={index}
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center font-thin italic"
            >
              {text}
            </h3>
          ))}
        </div>
        <h2 className="text-xl sm:text-2xl xl:text-4xl text-center mt-auto">
          There is no one who loves pain itself, who seeks after it
        </h2>
        <h1 className="text-5xl sm:text-6xl xl:text-7xl text-center font-bold uppercase text-secondary my-2 md:my-3 lg:my-4">
          Executive Coaching & Consulting
        </h1>
        <h2 className="text-xl sm:text-2xl xl:text-4xl text-center">
          No one who loves pain itself
        </h2>
        <Link href="#" className="button mb-auto mx-auto border-light mt-8">
          Learn More
        </Link>
      </div>
    </header>
  );
}
