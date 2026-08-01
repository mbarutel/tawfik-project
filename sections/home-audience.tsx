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
      <div className="container max-w-5xl">
        <h2 className="section_header decoration-secondary text-center">
          Who This Is For
        </h2>
        <p className="text-center mt-6 mb-8">
          The work fits well if you&apos;re:
        </p>
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {audiences.map((audience) => (
            <li
              key={audience}
              className="border-l-4 border-secondary px-5 py-5 text-lg leading-7"
            >
              {audience}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
