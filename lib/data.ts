import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "/",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Profile",
    hash: "/profile",
  },
  {
    name: "Services",
    hash: "/services",
  },
  {
    name: "Book Now",
    hash: "/#contact",
  },
  // {
  //   name: "Resources",
  //   hash: "/resources",
  // },
] as const;

export const services = [
  {
    image: {
      src: "/services-one.webp",
      alt: "Executive coaching session in Melbourne helping leaders enhance leadership skills",
    },
    title: "Executive Coaching",
    subTitle: "Leading with Clarity",
    text: "One-on-one coaching for leaders carrying real weight. A confidential space to think clearly, test decisions, and lead with more presence and less second-guessing.",
    link: "/services/executive-coaching",
  },
  {
    image: {
      src: "/services-two.webp",
      alt: "Leadership workshop building team trust, alignment and capability",
    },
    title: "Emerging & New Leaders",
    subTitle: "Making the Step-up Stick",

    text: "Structured coaching for people early in their leadership. Build the habits, language and confidence the role asks for before the pressure finds the gaps.",
    link: "/services/emerging-leaders",
  },
  {
    image: {
      src: "/services-three.webp",
      alt: "Coaching for new and emerging leaders in Melbourne and regional Victoria",
    },
    title: "Team Workshops",
    subTitle: "Teams That Work Well Together",
    text: "Practical sessions on trust, values, alignment and how a team actually performs. Designed around your team and what's really going on in it, not pulled off a shelf.",
    link: "/services/team-workshops",
  },
] as const;

export const quotes = [
  {
    quote:
      "The good life is a process, not a state of being. It is a direction, not a destination.",
    author: "Carl Rogers",
    title: "Humanistic Psychologist",
  },
  {
    quote: "Happiness is the only thing that multiplies when you share it.",
    author: "Albert Schweitzer",
    title: "Physician and Psychologist",
  },
  {
    quote:
      "Everything that irritates us about others can lead us to an understanding of ourselves.",
    author: "Carl Jung",
    title: "Psychoanalyst and Psychiatrist",
  },
  {
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    title: "Philosopher and Early Psychologist",
  },
  {
    quote:
      "The curious paradox is that when I accept myself just as I am, then I can change.",
    author: "Carl Rogers",
    title: "Humanistic Psychologist",
  },
] as const;

export const socials = [
  {
    icon: React.createElement(FaInstagram),
    href: "https://www.instagram.com/",
  },
  {
    icon: React.createElement(FaFacebook),
    href: "https://www.facebook.com/",
  },
  {
    icon: React.createElement(FaLinkedin),
    href: "https://www.linkedin.com/",
  },
] as const;

// export const profileData = {
//
//
//   experience: {
//     intro: "I bring more than 15 years of executive and senior leadership experience, supported by established coaching practice. My career has involved leading large, multidisciplinary teams in demanding settings where leaders must stay calm, make thoughtful choices, and guide others with clarity.",
//     approach: "My coaching approach draws on trusted frameworks and the belief that leaders already possess significant strengths. My role is to support clearer thinking, deeper insight, and behaviour change that lasts.",
//   },
//
//   workingWith: [
//     "Strengthen confidence and presence",
//     "Expand self-understanding and judgement",
//     "Uncover capability through reflection and accountability",
//     "Turn new insight into everyday leadership behaviours",
//   ],
//
//   closingStatement: "This combination of hands-on leadership experience and proven coaching helps leaders act with purpose and align their work with what matters most.",
//
//   education: [
//     {
//       degree: "Bachelor",
//       field: "Community Welfare and Counselling",
//     },
//     {
//       degree: "Bachelor",
//       field: "Psychology",
//     },
//     {
//       degree: "Institute of Executive Coaching and Leadership",
//       field: "Organisation Coaching Certification Level 1 & 2",
//     },
//   ],
//
//   skills: [
//     "Leadership Confidence",
//     "People Leadership",
//     "Decision-Making",
//     "Executive Presence",
//     "Communication & Influence",
//     "Role Transition",
//     "Leading Under Pressure",
//     "Accountability & Boundaries",
//     "Self Awareness & Insight",
//   ],
//
//   accreditation: [
//     "org-coaching-badge-cert-one.png",
//     "org-coaching-badge-cert-two.png",
//   ],
//
//   contact: {
//     phone: "+61 435 867 387",
//     email: "info@tawfikecc.com.au",
//     website: "www.tawfikecc.com.au",
//   },
// } as const;
