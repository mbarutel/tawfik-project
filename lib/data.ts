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
    name: "Services",
    hash: "/#services",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const services = [
  {
    image: {
      src: "/services-one.webp",
      alt: "Executive coaching session in Melbourne helping leaders enhance leadership skills",
    },
    title: "Executive",
    subTitle: "Coaching & Leadership",
    text: "Mi lectus fermentum id platea nullam velit elementum porttitor vestibulum. A, porta.",
    link: "#",
  },
  {
    image: {
      src: "/services-two.webp",
      alt: "People and culture consulting to improve organisational strategy and workplace dynamics",
    },
    title: "People & Culture",
    subTitle: "Consulting",
    text: "Pretium, est nibh, est nisl maximus morbi habitasse ac consectetur. Neque vitae eget.",
    link: "#",
  },
  {
    image: {
      src: "/services-three.webp",
      alt: "Psychology-based coaching using behavioural insights for leadership and team success",
    },
    title: "Psychology-based",
    subTitle: "Coaching",
    text: "Et ac imperdiet, purus pellentesque eget rutrum, in sem hac. Consequat dignissim.",
    link: "#",
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
