"use client";

import { useState } from "react";
import { links } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 left-0 z-[999]">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo Placeholder */}
        <Link href="#" className="text-secondary flex items-center">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14">
            <Image
              src="/logo.svg"
              alt="Executive Couching & Consultation Logo"
              fill
            />
          </div>
          <div className="ml-2 hidden sm:block">
            <h5 className="text-xl sm:text-2xl lg:text-3xl">TAWFIK</h5>
            <h4 className="text-base sm:text-lg lg:text-xl font-light -mt-2 lg:-mt-1">
              EXECUTIVE COACHING
            </h4>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6 text-white text-lg montserrat">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.hash} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white z-[1000]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-dark/40 flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="w-64 bg-primary h-full p-6 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-4 text-white text-lg montserrat">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.hash}
                      className="block hover:underline"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
