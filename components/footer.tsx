import { links, socials } from "@/lib/data";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-dark relative py-14 lg:py-20 2xl:py-28">
      <div className="container flex justify-center md:justify-between">
        <div className="hidden md:flex flex-col justify-between">
          <div className="text-secondary flex items-center">
            <Logo />
          </div>
          <p className="!text-[20px] text-sm leading-tight max-w-[60ch]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div>
          <ul className="text-center md:text-right">
            {links.map((link, index) => (
              <li
                key={index}
                className="mb-0.5 hover:text-secondary transition active:scale-95"
              >
                <Link href={link.hash} className="montserrat">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-1 mt-4">
            {socials.map((social, index) => (
              <li
                key={index}
                className="text-secondary hover:text-light transition active:scale-95"
              >
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl"
                >
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <p className="absolute text-sm md:text-base font-light opacity-80 text-center bottom-2 left-1/2 -translate-x-1/2">
          All rights reserved. 2025
        </p>
      </div>
    </footer>
  );
}
