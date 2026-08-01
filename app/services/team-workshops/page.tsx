import { ServiceImageFrame, ServicePageHero } from "@/components";
import { services } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Leadership Team Workshops Melbourne | Tawfik Executive Coaching",
  description:
    "Practical leadership team workshops for trust, alignment and psychological safety across Melbourne, Victoria and Australia.",
  keywords: [
    "leadership team workshops",
    "team building facilitator Melbourne",
    "psychological safety workshop",
  ],
};

const workshopSteps = [
  "Scoping conversation with you. What's happening, what's already been tried, and what a good outcome would actually look like.",
  "Pre-work with the team. A short confidential survey so the design is built on what's really in the room rather than what leadership assumes is in the room.",
  "Design, agreed with you. You see and agree on the summary of work.",
  "The workshop itself. Facilitated, structured, and paced so the hard conversation has somewhere to go.",
  "Facilitation and reflection. The session is facilitated, with space to reflect on what surfaced.",
  "A follow-up session eight to twelve weeks later. Optional, strongly recommended, and the single biggest factor in whether anything actually changes.",
] as const;

const formats = [
  "Half day: one focused theme, best for a team that's largely working well",
  "Full day: the standard, and enough room for a genuine conversation plus decisions",
  "A series of shorter sessions: spread across a few months, good for teams that can't lose a whole day",
  "Offsite or planning day: where the team work sits alongside your strategy or planning agenda",
] as const;

export default function TeamWorkshopsPage() {
  return (
    <>
      <ServicePageHero
        title="Team Workshops"
        subtitle="Structured conversations that help teams build trust, alignment and a shared way of working."
      />
      <main className="bg-light text-primary">
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <div className="group lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
              <div className="max-w-3xl text-lg leading-8">
                <h2 className="text-3xl font-semibold mb-4">The Workshop Conversation</h2>
                <p>
                  Most teams already know what&apos;s wrong. They just haven&apos;t
                  said it in the same room, at the same time, with someone there
                  to keep it safe.
                </p>
                <p>
                  A workshop is a structured version of that conversation.
                  Depending on what your team needs, it might focus on trust,
                  whether people can disagree, admit a mistake or raise a risk
                  without first working out what it&apos;ll cost them. It might be
                  about how the team makes decisions, and whether anything
                  actually happens once the meeting ends. It might be taking
                  values off the wall and turning them into behaviours people can
                  hold each other to on a Tuesday when someone&apos;s dropped the
                  ball. Often, it&apos;s simpler than any of that: building a shared
                  language, so &quot;urgent&quot;, &quot;done&quot; and &quot;I&apos;ll take that on&quot; mean
                  the same thing to everyone in the room.
                </p>
                <p>
                  What it isn&apos;t is a day out with butcher&apos;s paper. Each
                  session is designed around your team specifically, built on what
                  surfaces in confidential pre-work rather than what leadership
                  assumes is going on. The day is paced so the harder conversation
                  has somewhere to go.
                </p>
                <p>
                  Half day, full day, or a series of shorter sessions. Works best
                  with teams of six to fifteen.
                </p>
              </div>
              <ServiceImageFrame
                src={services[2].image.src}
                alt={services[2].image.alt}
              />
            </div>
          </div>
        </section>
        <section className="bg-primary text-light">
          <div className="container max-w-5xl">
            <h2 className="section_header decoration-secondary text-secondary">
              How a Workshop Is Built
            </h2>
            <p className="mt-6 text-lg">
              This is where &quot;designed around your team&quot; gets proven
              rather than claimed.
            </p>
            <ol className="mt-8 grid gap-5 md:grid-cols-2">
              {workshopSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-l-2 border-secondary pl-5">
                  <span className="text-2xl font-bold text-secondary">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl">
            <h2 className="section_header decoration-secondary">Formats</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 text-lg">
              {formats.map((format) => (
                <li key={format} className="border-l-5 border-secondary px-6 py-5">
                  {format}
                </li>
              ))}
            </ul>
            <p className="mt-6 italic">
              Works best with teams of six to fifteen. Larger groups are
              possible with a co-facilitator or a different design.
            </p>
          </div>
        </section>
        <section className="bg-secondary/20">
          <div className="container max-w-5xl text-lg">
            <h2 className="section_header decoration-primary">When a Workshop Isn&apos;t the Answer</h2>
            <p className="mt-8">
              A workshop won&apos;t fix a team that&apos;s under-resourced, a
              structure that doesn&apos;t work, or a leader who isn&apos;t
              genuinely willing to hear what comes back. It also isn&apos;t the
              right tool for an active grievance or a serious interpersonal
              breakdown; those need a different process first.
            </p>
            <p>
              If that&apos;s the situation, I&apos;ll tell you in the scoping call
              rather than take the booking. A workshop run over the top of an
              unaddressed problem does more damage than doing nothing.
            </p>
            <p>If your team has a conversation that&apos;s overdue, let&apos;s talk about how to have it well.</p>
            <Link href="/#contact" className="button border-primary mt-6">
              Book a free 30-minute chat
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
