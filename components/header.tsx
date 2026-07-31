import Link from "next/link";

export default function Header() {
  const texts = [
    "Executive Coaching",
    "Emerging Leaders",
    "Team Workshops",
  ];

  return (
    <header className="relative bg-[url('/header-bg.webp')] bg-cover bg-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-dark/50 z-0" />

      {/* Content - Ensure it's above the overlay */}
      <div className="container relative h-screen md:h-[800px] flex flex-col z-10">
        <div className="flex flex-wrap justify-center opacity-80 gap-x-5 sm:gap-x-7 md:gap-x-12 lg:gap-x-18 xl:gap-x-24 2xl:gap-x-28 mt-8">
          {texts.map((text, index) => (
            <h3
              key={index}
              className="text-2xl lg:text-3xl text-center font-thin italic opacity-80"
            >
              {text}
            </h3>
          ))}
        </div>
        <h1 className="text-5xl sm:text-6xl xl:text-7xl text-center font-bold text-secondary my-2 md:my-3 lg:my-4">
          Putting strengths already there to work.
        </h1>
        <p className="text-xl sm:text-2xl xl:text-4xl text-center max-w-5xl mx-auto">
          Executive coaching and team workshops for people stepping up — new
          leaders, emerging leaders, and the ones already carrying the load.
        </p>
        <Link
          href="#contact"
          className="button mb-auto mx-auto border-light mt-8"
        >
          Book a free 30-minute chat
        </Link>
      </div>
    </header>
  );
}
