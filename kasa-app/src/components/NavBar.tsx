import { Link, useLocation } from "react-router-dom";
import Join from "./Join";
import { useState } from "react";
import Cheeseburger from "./CheeseBurger";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = useLocation().pathname;

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/family", label: "Families" },
    { path: "/events", label: "Events" },
    // { path: "/apply", label: "Apply" },
    // { path: "/directory", label: "Directory" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative z-50">
      {/* Desktop Navbar */}
      <div className="navBarShadow kasa-glass hidden items-center rounded-full p-2 md:flex md:gap-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            prefetch="intent"
            className={`rounded-full px-5 py-2 text-base font-semibold tracking-wide transition-colors ${
              currentPath === item.path
                ? "bg-blue text-white shadow"
                : "text-blue hover:bg-rose-50"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navbar: Hamburger Menu */}
      <button
        type="button"
        className="flex items-center rounded-lg px-1 md:hidden"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
      >
        <h3 className="text-sm font-black tracking-[0.16em] text-blue">
          MENU
        </h3>
        <Cheeseburger
          isToggled={isOpen}
          rounded={true}
          color="#2b3467"
          width={42}
          height={42}
        />
      </button>

      {/* Full-Screen Mobile Menu Overlay (slides from right) */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 md:hidden ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {/* Slide-Out Panel from the Right */}
        <div
          className={`absolute right-0 top-0 h-full w-4/5 border-l border-white/45 bg-gradient-to-b from-[#fff7ef] to-white p-2 shadow-2xl transition-transform duration-300 sm:w-1/2 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              aria-label="Close mobile menu"
              className="rounded-md px-2 text-2xl text-gray-800 transition-colors hover:bg-black/5 focus:outline-none"
            >
              ✕
            </button>
          </div>
          {/* Menu List */}
          <ul className="mt-10 space-y-4 text-center">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  prefetch="viewport"
                  className={`mx-4 block rounded-xl px-4 py-3 text-xl font-semibold transition-colors ${
                    currentPath === item.path
                      ? "bg-blue text-white shadow"
                      : "text-blue hover:bg-rose-50"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <div
                className="mt-24 flex justify-center px-6"
                onClick={() => setIsOpen(false)}
              >
                <Join />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
