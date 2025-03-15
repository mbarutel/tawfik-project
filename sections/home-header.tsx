import Link from "next/link";

export default function HomeHeader() {
  const texts = ["Executive Coaching", "People & Culture", "Psychology-based"];

  return (
    <section className="bg-[url('/header-bg.webp')] bg-cover bg-center">
      <div className="h-[1200px] container mx-auto flex flex-col">
        <div className="flex justify-center opacity-90 gap-22 mt-8">
          {texts.map((text, index) => (
            <h3 key={index} className="text-4xl font-thin italic">
              {text}
            </h3>
          ))}
        </div>
        <h2 className="text-4xl text-center mt-auto">
          There is no one who loves pain itself, who seeks after it
        </h2>
        <h1 className="text-7xl text-center font-bold text-secondary my-4">
          Executive Coaching & Consulting
        </h1>
        <h2 className="text-4xl text-center">No one who loves pain itself</h2>
        <Link href="#" className="button mb-auto mx-auto border-light mt-8">
          Learn More
        </Link>
      </div>
    </section>
  );
}
