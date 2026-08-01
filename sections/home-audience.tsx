import { PiCheckCircleFill } from "react-icons/pi";

const audiences = [
  "Newly promoted and finding your feet in the role",
  "An emerging leader being prepared for something bigger",
  "An experienced leader navigating change, complexity or a step up",
  "Leading a team that isn't quite pulling in the same direction",
  "An organisation that would rather grow leaders early than manage problems later",
] as const;

export default function HomeAudience() {
  return (
    <section className="bg-light text-primary py-20 md:py-24">
      <div className="container max-w-5xl flex flex-col items-center">
        <p className="text-sm uppercase tracking-[0.24em] text-secondary mb-4">
          The Fit
        </p>
        <h2 className="section_header decoration-secondary mb-8 text-center">
          Who This Is For
        </h2>
        <p className="text-center max-w-2xl mx-auto">
          The work fits well if you&apos;re:
        </p>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5 mt-8 w-full">
          {audiences.map((audience, index) => (
            <li
              key={audience}
              className={`flex items-start gap-4 border-l-5 border-secondary px-6 py-6 text-lg leading-7 transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 ${
                index === audiences.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <PiCheckCircleFill className="shrink-0 mt-0.5 text-xl text-secondary" />
              <span>{audience}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
