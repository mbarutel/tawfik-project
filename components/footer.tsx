import { links } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-dark relative py-14">
      <div className="container flex justify-between">
        <div>
          <small>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </small>
        </div>
        <div>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.hash} className="montserrat">
                  {link.name}
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
