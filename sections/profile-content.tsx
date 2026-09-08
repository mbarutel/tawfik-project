import Image from "next/image";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
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
            Executive coach. Specialising in leaders in their first years of leadership.
          </h2>
          <p className="text-center max-w-2xl mx-auto">
            Grounded in evidence-based coaching practice, with more than 15
            years of executive and senior leadership experience.
          </p>
          <div className="bg-light text-primary text-sm p-8 rounded-sm text-center">
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
      label: "Institute of Executive Coaching and Leadership",
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
  return (
    <div className="text-primary p-6 flex flex-col max-w-4xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
          A BIT ABOUT ME
        </h2>
      <p>
        I&apos;ve been lucky. Early in my career I worked in high-stakes
        environments for leaders who could have just told me what to do and
        didn&apos;t. They stretched me, coached me, and kept handing the question
        back until I found the answer using what I already had. My whole
        trajectory comes from that. This work is my way of passing it on, done
        properly: grounded in evidence-based coaching practice rather than
        instinct and good intentions.
      </p>
      <p>
        It took me a while to understand what leadership actually was. I
        thought it was a title. Then I realised it&apos;s a set of capabilities
        that either show up in everything you do, including the parts of your
        life nobody&apos;s watching, or they don&apos;t.
      </p>
      <p>
        The thing I believe most: healthy organisations outperform smart ones
        over time. And health gets built through trust, confidence and people
        genuinely being happy and passionate about the work they do.
      </p>
      <p>
        If you sat down with me, you&apos;d hear me ask &quot;what&apos;s beneath the
        surface here?&quot; more than once, usually right after you&apos;ve explained
        the problem at length. It&apos;s not a trick. The first version of a
        problem is rarely the real one.
      </p>
      <blockquote className="border-l-4 border-secondary pl-5 my-8 text-2xl italic">
        What&apos;s beneath the surface here?
      </blockquote>
      <p>
        Outside the work: I was born and raised in Gippsland. I&apos;ve travelled
        a fair bit of Australia and the world, and it still feels like home.
        Saturdays start with coffee, always, then go one of two ways - slow
        with the family, or very fast, chasing my kids and the chocolate lab
        around. I make music and hip-hop beats. Right now, I&apos;m reading Inner
        Excellence by Jim Murphy and Strong Ground by Brené Brown.
      </p>
      <p>
        If a client described me to a mate, I&apos;d want them to say I&apos;m
        authentic - and that it&apos;s easy to sit in the grey area with me as
        you&apos;ll feel safe the whole way.
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
