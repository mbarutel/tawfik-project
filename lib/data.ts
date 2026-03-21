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
    subTitle: "Leadership & Performance Coaching",
    text: "One-on-one coaching to support leaders in strengthening their leadership, enhancing performance, and navigating complex challenges with confidence.",
  },
  {
    image: {
      src: "/services-two.webp",
      alt: "People and culture consulting to improve organisational strategy and workplace dynamics",
    },
    title: "Workshops",
    subTitle: "Leadership Development Programs",

    text: "Engaging, practical leadership development programs designed to build capability, foster growth, and equip teams with tools that last.",
  },
  {
    image: {
      src: "/services-three.webp",
      alt: "Psychology-based coaching using behavioural insights for leadership and team success",
    },
    title: "Consulting",
    subTitle: "Strategic Advisory Services",
    text: "Tailored strategic advisory services to help organisations align leadership, culture, and strategy for long-term impact.",
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
//       degree: "Institute of Organisation Coaching and Leadership",
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
