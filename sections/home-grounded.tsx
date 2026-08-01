const foundations = [
  {
    title: "Accredited Practice",
    text: "Certified in Organisation Coaching (Levels 1 and 2) through the Institute of Executive Coaching and Leadership, with undergraduate study in psychology and community welfare behind it.",
  },
  {
    title: "Tested Frameworks, Chosen on Purpose",
    text: "The work draws on established models of team effectiveness, psychological safety, strengths-based practice and adult development. Frameworks are matched to the problem in front of you, never applied by default.",
  },
  {
    title: "Designed, Not Improvised",
    text: "Every coaching series and workshop is built to a clear structure: agreed goals, checkpoints along the way, and an honest look at whether it worked.",
  },
  {
    title: "Tools You Keep",
    text: "Workbooks, conversation guides and one-page frameworks that go home with you and keep earning their place long after the session ends.",
  },
] as const;

export default function HomeGrounded() {
  return (
    <section className="bg-primary py-20 md:py-24">
      <div className="container flex flex-col items-center">
        <h2 className="section_header decoration-secondary text-secondary mb-8 text-center">
          How the Work Is Grounded
        </h2>
        <p className="text-center max-w-4xl">
          Coaching should stand up to scrutiny. Here&apos;s what sits underneath
          it.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 mt-8">
          {foundations.map((foundation) => (
            <article
              key={foundation.title}
              className="border-l-5 border-secondary p-7"
            >
              <h3 className="text-2xl text-secondary mb-4">
                {foundation.title}
              </h3>
              <p className="text-base leading-7">{foundation.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
