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
    hash: "/services",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
  {
    name: "Resources",
    hash: "/resources",
  },
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
    longText: [
      "We offer personalised one-on-one coaching that supports leaders to grow in confidence, clarity, and capability. Whether you’re stepping into a new role, navigating complexity, or seeking to elevate your leadership, our coaching provides a space to reflect, challenge assumptions, and move forward with purpose. Each coaching journey is tailored to the individual, with a focus on building self-awareness, improving decision-making, and strengthening relationships. We equip leaders with practical tools and frameworks they can use day-to-day—helping them lead more effectively not just during coaching, but well beyond.",
      "Our coaching is built on trust, confidentiality, and meaningful connection.",
    ],
    link: "#",
  },
  {
    image: {
      src: "/services-two.webp",
      alt: "People and culture consulting to improve organisational strategy and workplace dynamics",
    },
    title: "Workshops",
    subTitle: "Leadership Development Programs",
    text: "Engaging, practical leadership development programs designed to build capability, foster growth, and equip teams with tools that last.",
    longText:
      "Engaging, practical leadership development programs designed to build capability, foster growth, and equip teams with tools that last.",
    link: "#",
  },
  {
    image: {
      src: "/services-three.webp",
      alt: "Psychology-based coaching using behavioural insights for leadership and team success",
    },
    title: "Consulting",
    subTitle: "Strategic Advisory Services",
    text: "Tailored strategic advisory services to help organisations align leadership, culture, and strategy for long-term impact.",
    longText:
      "Tailored strategic advisory services to help organisations align leadership, culture, and strategy for long-term impact.",
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
