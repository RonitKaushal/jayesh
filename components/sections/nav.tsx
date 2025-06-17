"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

export const SECTIONS = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "experience", title: "Experience" },
  { id: "awards", title: "Awards" },
  { id: "contact", title: "Contact" },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Scroll Tracking ---
  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentId = SECTIONS[0].id;

      for (const section of SECTIONS) {
        const el = document.getElementById(section.id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentId = section.id;
            break;
          }
        }
      }

      setActiveSection(currentId);
    };

    window.addEventListener("scroll", onScroll);
    onScroll(); // initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const activeIndex = SECTIONS.findIndex((sec) => sec.id === activeSection);
  const itemHeight = 1.8; // h-9
  const containerHeight = 5; // h-20

  const getStyle = (index: number) => {
    const distance = Math.abs(index - activeIndex);
    if (distance === 0) return "text-lg text-white font-medium opacity-100";
    if (distance === 1) return "text-xs text-white/50 opacity-100";
    return "text-xs text-transparent opacity-0";
  };

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className={clsx(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out right-0 flex items-center justify-between h-16 px-1 md:px-8',
          scrolled ? 'bg-gradient-to-b from-black to-transparent' : 'bg-transparent'
        )}
      >
        <div className="flex-shrink-0">
          <Image
            src="/sonu logo.png"
            alt="Logo"
            width={150}
            height={40}
            className="cursor-pointer"
            onClick={() => handleLinkClick("home")}
          />
        </div>

        <div
          className="flex items-center justify-center w-32 cursor-pointer"
          onClick={handleMenuToggle}
          style={{ height: `${containerHeight}rem` }}
        >
          <div className="relative w-full h-full overflow-hidden">
            <div
              className="absolute w-full transition-transform duration-500 m-0 ease-in-out"
              style={{
                transform: `translateY(${
                  -activeIndex * itemHeight +
                  containerHeight / 2 -
                  itemHeight / 2
                }rem)`,
              }}
            >
              {SECTIONS.map((section, index) => (
                <div
                  key={section.id}
                  className={`flex items-center justify-end w-full transition-all duration-500 text-center ${getStyle(
                    index
                  )}`}
                  style={{ height: `${itemHeight}rem` }}
                >
                  {section.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-sm z-40 transition-opacity duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <ul className="text-center">
            {SECTIONS.map((section) => (
              <li key={section.id} className="my-4">
                <button
                  onClick={() => handleLinkClick(section.id)}
                  className={`text-4xl md:text-5xl font-light transition-colors duration-300 ${
                    activeSection === section.id
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
      </div>
    </>
  );
};

export default Nav;
