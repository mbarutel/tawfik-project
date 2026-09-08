import { ServiceImageFrame, ServicePageHero } from "@/components";
import { services } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Executive Coaching Melbourne | Tawfik Executive Coaching",
  description:
    "Confidential, practical executive coaching for leaders in Melbourne, Victoria and Australia.",
  keywords: [
    "executive coaching Melbourne",
    "leadership coaching Victoria",
    "coaching for senior leaders",
  ],
};

const engagementSteps = [
  "A free 30-minute conversation. We talk about what's going on and whether coaching is the right tool. No pitch.",
  "A goal-setting session. We agree what success looks like in plain language. Where your organisation is funding the work, we agree upfront what gets reported back - usually progress against goals, never the content of sessions.",
  "Six coaching sessions, 60 to 75 minutes each, fortnightly or monthly across three to four months.",
  "Work in between. Small, real, tested in your actual job - not homework for its own sake.",
  "A mid-point check. Are we working on the right thing? If not, we change it.",
  "A close-out review against the goals we set, and an honest conversation about what happens next.",
] as const;

export default function ExecutiveCoachingPage() {
  return (
    <>
      <ServicePageHero
        title="Executive Coaching"
        subtitle="A confidential space to think clearly, test decisions and lead with more presence."
      />
      <main className="bg-light text-primary">
        <section className="py-20 md:py-24">
          <div className="container max-w-6xl">
            <div className="group lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
              <div className="max-w-3xl text-lg leading-8">
                <p>
                  Executive coaching is a confidential hour where you don&apos;t
                  have to have the answer yet. Most of what we cover is the stuff
                  that&apos;s hard to raise anywhere else - the decision you keep
                  circling, the conversation you&apos;ve been putting off for a
                  month, the read you&apos;re not quite sure you&apos;re getting right
                  on someone in your team.
                </p>
                <p>
                  Over time the work tends to settle into a few areas. How you
                  land in a room, and whether the leader people experience is the
                  one you intend to be. How you decide when the information is
                  never going to be complete. The patterns that got you here and
                  the ones now quietly costing you - the things you do under
                  pressure that you&apos;ve never really stopped to examine. And,
                  more often than people expect, the honest question of whether
                  the way you&apos;re doing this job is a way you can keep doing it.
                </p>
                <p>
                  None of it is abstract. We work on live situations from your
                  actual week, and you leave each session with something specific
                  to try. Some of it works, some of it doesn&apos;t, and we talk
                  about both.
                </p>
                <p>
                  It&apos;s tailored to you, but it isn&apos;t unstructured. We agree
                  what success looks like at the start, check in halfway, and
                  review it honestly at the end.
                </p>
              </div>
              <ServiceImageFrame
                src={services[0].image.src}
                alt={services[0].image.alt}
              />
            </div>
          </div>
        </section>
        <section className="bg-primary text-light">
          <div className="container max-w-5xl">
            <h2 className="section_header decoration-secondary text-secondary">
              What an Engagement Looks Like
            </h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-2">
              {engagementSteps.map((step, index) => (
                <li key={step} className="flex gap-4 border-l-2 border-secondary pl-5">
                  <span className="text-2xl font-bold text-secondary">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <Link href="/#contact" className="button border-light mt-10">
              Book a free 30-minute chat
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
