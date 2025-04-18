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
    text: "Nullam lacus magna amet consectetur aenean duis vitae imperdiet convallis. Lorem maximus imperdiet ipsum varius sed in, metus praesent vel.",
    longText:
      "Tristique, ac massa, semper nisl eget praesent dignissim ac lectus. Ut dignissim leo imperdiet vestibulum, tortor sed euismod enim magna. Tortor malesuada, metus varius, tempor eleifend nullam sapien convallis nulla. At ac in non suspendisse vulputate convallis bibendum efficitur ante. Eu nunc vestibulum at eu sapien elit turpis congue amet.",
    link: "#",
  },
  {
    image: {
      src: "/services-two.webp",
      alt: "People and culture consulting to improve organisational strategy and workplace dynamics",
    },
    title: "Workshops",
    subTitle: "Leadership Development Programs",
    text: "Cras, ultrices pellentesque dignissim lacus nullam vestibulum rhoncus, vitae nunc. Dignissim, ut, efficitur sed metus magna vitae ante varius faucibus.",
    longText:
      "Vel urna leo, consectetur viverra magnis dignissim augue pellentesque, eget. Imperdiet arcu, nulla elementum arcu cras, porta dapibus et quam. Vel dapibus curabitur quam varius tellus ac dui felis amet. Enim, eget dapibus ultricies vivamus, amet vestibulum at eros pretium. Rhoncus, cras sit diam, morbi ipsum pellentesque tellus lectus fermentum.",
    link: "#",
  },
  {
    image: {
      src: "/services-three.webp",
      alt: "Psychology-based coaching using behavioural insights for leadership and team success",
    },
    title: "Consulting",
    subTitle: "Strategic Advisory Services",
    text: "Eleifend proin tristique, sed metus auctor justo aliquam consequat aenean. Arcu tristique in pellentesque, purus, placerat ligula vitae suscipit est.",
    longText:
      "Vestibulum sem nulla blandit ac imperdiet ac gravida pellentesque quisque. Porttitor, pulvinar, curabitur non donec dictumst quam imperdiet laoreet diam. Eleifend, ridiculus, vestibulum non fermentum eleifend et ipsum ac in. Elementum nisl eu sed, eget id pellentesque suscipit efficitur dapibus. Eu dictumst, quisque ipsum porta maximus nec vitae laoreet dui.",
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
