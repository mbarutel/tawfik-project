import { ServicePageHero } from "@/components";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coaching for New Managers | Tawfik Executive Coaching",
  description:
    "Emerging leader coaching and first-time manager development for organisations across Melbourne, Australia and Victoria.",
  keywords: [
    "coaching for new managers",
    "emerging leader coaching Australia",
    "first-time manager coaching",
  ],
};

const outcomes = [
  "A practical leadership toolkit: frameworks and conversation guides for the situations that come up weekly",
  "Language for delegation, feedback and expectation-setting that you can use straight away",
  "A clearer sense of your own strengths, and how to lead from them rather than borrowing someone else's style",
  "Habits that survive contact with a busy week",
  "For group programs: a peer network you keep, and a shared language across your leadership layer",
] as const;

export default function EmergingLeadersPage() {
  return (
    <>
      <ServicePageHero
        title="Coaching for Emerging & New Leaders"
        subtitle="Making the step up stick with practical tools, honest reflection and habits that hold up in a busy week."
      />
      <main className="bg-light text-primary">
        <section className="py-20 md:py-24">
          <div className="container max-w-5xl">
            <div className="max-w-3xl text-lg leading-8">
              <h2 className="text-3xl font-semibold mb-4">The Honest Bit</h2>
              <p>
                The step from doing the work to leading the people doing the
                work is the biggest one in most careers, and it&apos;s the one
                organisations most often leave to chance. You get a title, a
                calendar full of meetings, and a quiet expectation that you&apos;ll
                work out the rest.
              </p>
              <p>
                This coaching is about shortening that. We work on what the role
                actually asks for and nobody trains you in - renegotiating
                relationships with people who were your peers last month,
                handing over real work without hovering or disappearing, giving
                feedback that lands, setting expectations and then holding them
                when someone doesn&apos;t meet them.
              </p>
              <p>
                Underneath all of it sits confidence. The real kind, not the
                performed kind. There&apos;s a difference between being settled
                and being very good at looking settled, and the second one is
                exhausting. Most new leaders are carrying more doubt than they
                let on, and naming it out loud with someone tends to take a
                surprising amount of weight off.
              </p>
              <p>
                We&apos;ll also spend time on what kind of leader you&apos;re going
                to be. Not a values poster - a specific, honest answer to what
                people can count on from you, and whether your behaviour on a
                bad day matches it.
              </p>
              <p>
                Available one-on-one, or as a group program for a cohort of
                leaders inside the same organisation.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-primary text-light">
          <div className="container max-w-5xl">
            <h2 className="section_header decoration-secondary text-secondary">
              For Organisations: Why Early
            </h2>
            <div className="mt-8 max-w-4xl text-lg">
              <p className="text-2xl italic">It&apos;s cheaper to build a leader than to repair one.</p>
              <p>
                Leadership problems in the first years rarely stay contained.
                They surface later as turnover in the team below, as grievances
                and complaints, as a culture that quietly drifts, and eventually
                as a performance process for someone who was, not long ago, one
                of your best people.
              </p>
              <p>
                Coaching early costs a fraction of any of those. It&apos;s also
                the clearest signal you can send a high-potential person that
                you&apos;re serious about them, which matters, because those are
                exactly the people with options.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="container max-w-5xl">
            <h2 className="section_header decoration-secondary">
              What You Walk Away With
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 text-lg">
              {outcomes.map((outcome) => (
                <li key={outcome} className="border-l-4 border-secondary px-5 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-lg">
              Whether it&apos;s for you or for the leaders coming up behind
              you, start with a conversation.
            </p>
            <Link href="/#contact" className="button border-secondary mt-6">
              Book a free 30-minute chat
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
