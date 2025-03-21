import { links, socials } from "@/lib/data";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-dark relative py-14">
      <div className="container flex justify-center md:justify-between">
        <div className="hidden md:block">
          <div className="text-secondary flex items-center">
            <Logo />
          </div>
          <p className="mt-4 leading-tight max-w-[60ch]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div>
          <ul className="text-center md:text-right">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.hash} className="montserrat">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-1 mt-2">
            {socials.map((social, index) => (
              <li key={index}>
                <Link href={social.href} className="text-2xl">
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <small className="absolute text-center bottom-2 left-1/2 -translate-x-1/2">
          All rights reserved. 2025
        </small>
      </div>
    </footer>
  );
}
