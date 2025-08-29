"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Designs", href: "/designs" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      // Fix 1: Directly use the cubic-bezier function in the transition
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  const linkContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      // Fix 2: Keep 'ease' as a string, but if the error persists,
      // ensure the correct type definition is being used.
      // This is the correct way to write it in Framer Motion.
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-off-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="ManziHomes Logo"
              width={150} // Adjust width to your image's size
              height={50} // Adjust height to your image's size
              className="h-20 w-auto" // Optional: Use Tailwind for responsive sizing and aspect ratio
            />
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative group text-brand-dark transition-colors duration-300"
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${
                    pathname === link.href ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-5 py-2 bg-brand-gold text-white font-sans font-bold text-sm hover:bg-yellow-600 transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Open menu">
              <Menu className="h-7 w-7 text-brand-dark" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-brand-green text-brand-off-white p-8 md:hidden"
          >
            <div className="flex justify-end mb-16">
              <button onClick={toggleMenu} aria-label="Close menu">
                <X className="h-7 w-7" />
              </button>
            </div>
            <motion.nav
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col space-y-8"
            >
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className={`text-3xl font-serif ${
                      pathname === link.href ? "text-brand-gold" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
