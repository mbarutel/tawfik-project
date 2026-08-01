import {
  PiBlueprintLight,
  PiCertificateLight,
  PiCheckCircleFill,
  PiCompassLight,
  PiToolboxLight,
} from "react-icons/pi";

const foundations = [
  {
    icon: PiCertificateLight,
    title: "Accredited Practice",
    text: "Certified in Organisation Coaching (Levels 1 and 2) through the Institute of Executive Coaching and Leadership, with undergraduate study in psychology and community welfare behind it.",
  },
  {
    icon: PiCompassLight,
    title: "Tested Frameworks, Chosen on Purpose",
    text: "The work draws on established models of team effectiveness, psychological safety, strengths-based practice and adult development. Frameworks are matched to the problem in front of you, never applied by default.",
  },
  {
    icon: PiBlueprintLight,
    title: "Designed, Not Improvised",
    text: "Every coaching series and workshop is built to a clear structure: agreed goals, checkpoints along the way, and an honest look at whether it worked.",
  },
  {
    icon: PiToolboxLight,
    title: "Tools You Keep",
    text: "Workbooks, conversation guides and one-page frameworks that go home with you and keep earning their place long after the session ends.",
  },
] as const;

const audiences = [
  "Newly promoted and finding your feet in the role",
  "An emerging leader being prepared for something bigger",
  "An experienced leader navigating change, complexity or a step up",
  "Leading a team that isn't quite pulling in the same direction",
  "An organisation that would rather grow leaders early than manage problems later",
] as const;

export default function HomeGroundedAudience() {
  return (
    <section className="bg-primary py-20 md:py-24">
      <div className="container flex flex-col items-center">
        <p className="text-sm uppercase tracking-[0.24em] text-secondary mb-4">
          The Foundation
        </p>
        <h2 className="section_header decoration-secondary text-secondary mb-8 text-center">
          How the Work Is Grounded
        </h2>
        <p className="text-center max-w-4xl">
          Coaching should stand up to scrutiny. Here&apos;s what sits underneath
          it.
        </p>
        <div className="grid gap-5 md:grid-cols-2 mt-8 w-full max-w-5xl">
          {foundations.map((foundation) => (
            <article
              key={foundation.title}
              className="border-l-5 border-secondary p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-light/5"
            >
              <foundation.icon className="text-3xl text-secondary mb-3" />
              <h3 className="text-2xl text-secondary mb-3">
                {foundation.title}
              </h3>
              <p className="text-base leading-7">{foundation.text}</p>
            </article>
          ))}
        </div>

        <div className="w-16 h-px bg-secondary/40 my-16" />

        <p className="text-sm uppercase tracking-[0.24em] text-secondary mb-4">
          The Fit
        </p>
        <h2 className="section_header decoration-secondary text-secondary mb-8 text-center">
          Who This Is For
        </h2>
        <p className="text-center max-w-2xl mx-auto">
          The work fits well if you&apos;re:
        </p>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5 mt-8 w-full max-w-5xl">
          {audiences.map((audience, index) => (
            <li
              key={audience}
              className={`flex items-start gap-4 border-l-5 border-secondary px-6 py-6 text-lg leading-7 transition-all duration-300 hover:-translate-y-1 hover:bg-light/5 ${
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
