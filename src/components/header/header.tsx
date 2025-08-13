import clsx from "clsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { id: "home", label: t("navigation.home", "Startseite") },
    { id: "about", label: t("navigation.about", "Über mich") },
    { id: "projects", label: t("navigation.projects", "Projekte") },
    { id: "contact", label: t("navigation.contact", "Kontakte") },
  ];

  return (
    <header
      className={clsx(
        "font-syne w-full shadow-md fixed top-0 left-0 z-50 text-stone-900 bg-white p-4",
        menuOpen && "h-full"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center h-14">
        {/* Logo / Name */}
        <div className=" text-xl font-bold">Marco Scherf</div>

        {/* Desktop-Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map((text) => (
            <a
              key={text.label}
              href={`#${text.id}`}
              className="relative group font-medium"
            >
              {text.label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-heighlight transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Hamburger Button (nur mobil sichtbar) */}
        <button
          className="md:hidden flex flex-col justify-between w-7 h-7 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <IoIosMenu className="h-7 w-7" />
          ) : (
            <IoCloseSharp className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Menü mit Animation */}
      <nav
        className={`md:hidden px-4 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 py-2">
          {links.map((text) => (
            <li key={text.label} className="w-full">
              <a
                href={`#${text.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-center block font-medium border-b border-gray-200 pb-2 transition-all duration-200 hover:text-heighlight hover:pl-2"
              >
                {text.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
