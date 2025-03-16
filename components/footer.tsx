import { links, socials } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark relative py-14">
      <div className="container flex justify-between">
        <div>
          <div className="text-secondary flex items-center">
            <div className="relative h-14 w-14">
              <Image
                src="/logo.svg"
                alt="Executive Couching & Consultation Logo"
                fill
              />
            </div>
            <div className="ml-2">
              <h5 className="text-3xl">TAWFIK</h5>
              <h4 className="text-xl font-light -mt-1">EXECUTIVE COACHING</h4>
            </div>
          </div>
          <p className="mt-4 leading-tight max-w-[60ch]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div>
          <ul className="text-right">
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
        <small className="absolute bottom-2 left-1/2 -translate-x-1/2">
          All rights reserved. 2025
        </small>
      </div>
    </footer>
  );
}
