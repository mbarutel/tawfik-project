import Image from "next/image";
import { FaEnvelope, FaGlobe, FaPhoneAlt } from "react-icons/fa";
import { ImQuotesLeft } from "react-icons/im";
import { IoSchoolSharp } from "react-icons/io5";

export default function ProfileContent() {
  return (
    <>
      <TitleBanner />
      <Quote />
      <Banners />
      <section className="bg-light ">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-x-10 relative">
          <EducationColumn />
          <ExperienceAndPracticeColoumn />
        </div>
      </section>
      <ContactSection />
    </>
  );
}

function TitleBanner() {
  return (
    <section id="profile">
      <div className="relative container bg-primary p-10 lg:p-20 grid grid-cols-1 2xl:grid-cols-3 items-center justify-center gap-10">
        <div className="relative w-[250px] h-[400px] lg:w-[420px] lg:h-[550px] mb-4 translate-x-1.5 translate-y-1.5 bg-secondary mx-auto 2xl ml-auto">
          <Image
            src="/marcus-profile.webp"
            alt="Marcus Tawfik - Executive Coach"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover -translate-x-3 -translate-y-3 shadow-sm"
            priority
          />
        </div>
        <div className="flex flex-col col-span-2 text-center 2xl:text-left">
          <h1 className="section_header decoration-primary text-secondary">
            MARCUS TAWFIK
          </h1>
          <h2 className="italic mb-6 mt-3 md:mt-5 lg:text-lg">
            EXECUTIVE COACH SPECIALISING IN EARLY-STAGE LEADERSHIP DEVELOPMENT
          </h2>
          <p className="!text-2xl">
            More than 15 years of Executive & Senior Leadership experience,
            supported by established coaching practice.
          </p>
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
  const workingWith = [
    "Strengthen confidence and presence",
    "Expand self-understanding and judgement",
    "Uncover capability through reflection and accountability",
    "Turn new insight into everyday leadership behaviours",
  ];
  return (
    <div className="bg-primary text-white p-6 flex flex-col justify-center">
      <p>I work with growing and high potential leaders to:</p>
      <ul className="ml-3">
        {workingWith.map((item, index) => (
          <li key={index}>
            <span className="mr-1 font-bold">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function ExperienceAndPracticeColoumn() {
  return (
    <div className="text-primary p-6 flex flex-col text-justify">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-4 font-semibold">
        EXPERIENCE & PRACTICE
      </h2>
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
      <div className="container text-white grid grid-cols-1 md:grid-cols-2 gap-x-10">
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl mb-6 font-semibold">
            CONTACT INFORMATION
          </h2>
          <p className="mb-0">
            Ready to invest in your leadership development? Get in touch to
            discuss how executive coaching can support your growth.
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col gap-4 montserrat w-full">
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-4 hover:text-secondary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-secondary group-hover:text-primary transition">
                <FaPhoneAlt className="text-lg flex-shrink-0" />
              </div>
              <span className="text-lg">{contact.phone}</span>
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 hover:text-secondary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-secondary group-hover:text-primary transition">
                <FaEnvelope className="text-lg flex-shrink-0" />
              </div>
              <span className="text-lg break-all">{contact.email}</span>
            </a>
            <a
              href={`https://${contact.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-secondary transition group"
            >
              <div className="bg-white text-secondary p-3 rounded-full group-hover:bg-secondary group-hover:text-primary transition">
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
