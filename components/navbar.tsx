import { links } from "@/lib/data";

export default function Navbar() {
  return (
    <nav className="bg-primary">
      <div className="container mx-auto py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-white text-2xl font-bold">LOGO</div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-lg font-(family-name:--font-montserrat)">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.hash} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
