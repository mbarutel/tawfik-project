import Image from "next/image";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { IoSchoolSharp } from "react-icons/io5";
import HomeCta from "./home-cta";

export default function ProfileContent() {
  return (
    <>
      <TitleBanner />
      <section className="bg-light ">
        <div className="container flex flex-col 2xl:flex-row items-center justify-center relative">
          <ExperienceAndPracticeColoumn />
          <EducationColumn />
        </div>
      </section>
      <ContactSection />
      <HomeCta />
    </>
  );
}

function TitleBanner() {
  const accreditation = [
    "org-coaching-badge-cert-one.png",
    "org-coaching-badge-cert-two.png",
  ];

  return (
    <section id="profile">
      <div className="relative container bg-primary p-10 lg:p-20 grid grid-cols-1 2xl:grid-cols-3 items-center justify-center gap-10">
        <div className="relative w-[250px] h-[400px] lg:w-[420px] lg:h-[550px] mb-4 translate-x-1.5 translate-y-1.5 bg-secondary mx-auto 2xl ml-auto rounded-sm">
          <Image
            src="/marcus-profile.webp"
            alt="Marcus Tawfik - Executive Coach"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover -translate-x-3 -translate-y-3 shadow-sm rounded-sm"
            priority
          />
        </div>
        <div className="flex flex-col col-span-2 text-center 2xl:text-left">
          <h1 className="section_header decoration-primary text-secondary text-center">
            MARCUS TAWFIK
          </h1>
          <h2 className="italic lg:text-lg mt-2 mb-4 text-center">
            EXECUTIVE COACH SPECIALISING IN EARLY-STAGE LEADERSHIP DEVELOPMENT
          </h2>
          <p className="text-center">
            More than 15 years of Executive & Senior Leadership experience,
            supported by established coaching practice.
          </p>
          <div className="bg-light text-primary text-sm p-8 rounded-sm text-center">
            <p>
              As a Senior Leader and Executive Coach, I focus on{" "}
              <span className="font-bold">enhancing leadership</span>{" "}
              capabilities in their early stages. I collaborate with
              organisations to cultivate{" "}
              <span className="font-bold">confident and capable leaders</span>{" "}
              during transitional periods, before performance, personnel, or
              cultural challenges arise.
            </p>
            <p>
              My approach emphasises early intervention, practical leadership
              development, and equipping leaders with the necessary skills to
              effectively guide their teams in complex environments.
            </p>

            <div className="mt-6">
              <div className="grid md:grid-cols-4 text-center justify-center">
                <div className="pt-2 border-r-2 border-secondary/80 hidden md:block">
                  <h4 className="font-bold text-4xl">15+</h4>
                  <p className="font-semibold">YEARS</p>
                  <p>
                    of executive & senior
                    <br />
                    leadership experience
                  </p>
                </div>
                <div className="pt-2 border-r-2 border-secondary/80 hidden md:block">
                  <IoSchoolSharp className="text-4xl mx-auto" />
                  <p className="font-semibold">BACHELOR</p>
                  <p>{">"} Community Welfare & Counselling</p>
                </div>
                <div className="pt-2 border-r-2 border-secondary/80 hidden md:block">
                  <IoSchoolSharp className="text-4xl mx-auto" />
                  <p className="font-semibold">BACHELOR</p>
                  <p>{">"} Psychology</p>
                </div>
                <div>
                  <div className="flex gap-3 justify-center">
                    {accreditation.map((item, index) => (
                      <div key={index} className="relative w-[60px] h-[60px]">
                        <Image
                          src={`/${item}`}
                          alt="accreditation"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="font-semibold mt-1">COACHING CERTIFICATES</p>
                  <p>
                    {">"} Organisation Coaching
                    <br />
                    Level 1 & 2
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section>
      <div className="container text-primary text-center">
        <div className="bg-light p-6 xl:p-20 flex flex-col items-center montserrat ">
          <ImQuotesLeft className="mb-6 text-2xl" />
          <p className="!mb-8 last:mb-0 max-w-4xl">
            As a Senior Leader and Executive Coach,
            <br />I focus on{" "}
            <span className="font-bold">enhancing leadership</span> capabilities
            in their early stages. I collaborate with organisations to cultivate{" "}
            <span className="font-bold">confident and capable leaders</span>{" "}
            during transitional periods, before performance, personnel, or
            cultural challenges arise.
          </p>
          <p className="max-w-4xl">
            My approach emphasises early intervention, practical leadership
            development, and equipping leaders with the necessary skills to
            effectively guide their teams in complex environments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Banners() {
  const accreditation = [
    "org-coaching-badge-cert-one.png",
    "org-coaching-badge-cert-two.png",
  ];

  return (
    <section>
      <div>
        <div className="grid grid-cols-4 text-center justify-center text-white py-16 px-10">
          <div>
            <h4 className="font-bold text-6xl">15+</h4>
            <p className="font-semibold">YEARS</p>
            <p>
              of executive & senior
              <br />
              leadership experience
            </p>
          </div>
          <div>
            <IoSchoolSharp className="text-6xl mx-auto" />
            <p className="font-semibold">BACHELOR</p>
            <p>{">"} Community Welfare & Counselling</p>
          </div>
          <div>
            <IoSchoolSharp className="text-6xl mx-auto" />
            <p className="font-semibold">BACHELOR</p>
            <p>{">"} Psychology</p>
          </div>
          <div>
            <div className="flex gap-3 justify-center">
              {accreditation.map((item, index) => (
                <div key={index} className="relative w-[60px] h-[60px]">
                  <Image
                    src={`/${item}`}
                    alt="accreditation"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="font-semibold">COACHING CERTIFICATES</p>
            <p>
              {">"} Organisation Coaching
              <br />
              Level 1 & 2
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationColumn() {
  const educations = [
    {
      label: "Bachelor",
      text: "Community Welfare and Counselling",
    },
    {
      label: "Bachelor",
      text: "Psychology",
    },
    {
      label: "Institute of Organisation Coaching and Leadership",
      text: "Organisation Coaching Certification Level 1 & 2",
    },
  ];

  const skills = [
    "Leadership Confidence",
    "People Leadership",
    "Decision-Making",
    "Executive Presence",
    "Communication & Influence",
    "Role Transition",
    "Leading Under Pressure",
    "Accountability & Boundaries",
    "Self Awareness & Insight",
  ];

  return (
    <div className="bg-primary p-6 flex flex-col rounded-sm">
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold text-secondary underline decoration-3">
          EDUCATION
        </h2>
        <ul className="max-w-lg">
          {educations.map((education, index) => (
            <li key={index}>
              <span className="font-bold text-secondary">
                {education.label}
              </span>{" "}
              - {education.text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold text-secondary underline decoration-3">
          SKILLS
        </h2>{" "}
        <ul className="list-disc pl-4">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function ExperienceAndPracticeColoumn() {
  const workingWith = [
    "Strengthen confidence and presence",
    "Expand self-understanding and judgement",
    "Uncover capability through reflection and accountability",
    "Turn new insight into everyday leadership behaviours",
  ];

  return (
    <div className="text-primary p-6 flex flex-col max-w-4xl">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
        EXPERIENCE & PRACTICE
      </h2>
      <p>
        I bring more than 15 years of executive and senior leadership
        experience, supported by established coaching practice. My career has
        involved leading large, multi‑disciplinary teams in demanding settings
        where leaders must stay calm, make thoughtful choices, and guide others
        with clarity.
      </p>
      <p>
        My career has involved leading large, multidisciplinary teams in
        demanding settings where leaders must stay calm, make thoughtful
        choices, and guide others with clarity.
      </p>
      <p>
        My coaching approach draws on trusted frameworks and the belief that
        leaders already possess significant strengths. My role is to support
        clearer thinking, deeper insight, and behaviour change that lasts.
      </p>
      <p>I work with growing and high potential leaders to:</p>
      <ul className="pl-4 list-disc">
        {workingWith.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>
        This combination of hands-on leadership experience and proven coaching
        helps leaders act with purpose and align their work with what matters
        most.
      </p>
    </div>
  );
}

function ContactSection() {
  const contact = {
    phone: "+61 435 867 387",
    email: "info@tawfikecc.com.au",
    website: "www.tawfikecc.com.au",
  };

  return (
    <section className="bg-secondary/80">
      <div className="container text-white">
        <div className="text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mb-3 font-bold">
            CONTACT INFORMATION
          </h2>
          <p>
            Ready to invest in your leadership development? Get in touch to
            discuss how executive coaching can support your growth.
          </p>
        </div>
        <div className="flex items-center mt-6">
          <div className="flex justify-center flex-col lg:flex-row gap-4 montserrat w-full">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 hover:text-primary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-primary group-hover:text-white transition">
                <FaPhoneAlt className="text-lg flex-shrink-0" />
              </div>
              <span className="text-lg">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 hover:text-primary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-primary group-hover:text-white transition">
                <FaEnvelope className="text-lg flex-shrink-0" />
              </div>
              <span className="text-lg break-all">{contact.email}</span>
            </a>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-primary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-primary group-hover:text-white transition">
                <FaGlobe className="text-lg flex-shrink-0" />
              </div>
              <span className="text-lg break-all">{contact.website}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
