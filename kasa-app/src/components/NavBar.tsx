import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Cheeseburger from "./CheeseBurger";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = useLocation().pathname;

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/family", label: "Families" },
    { path: "/events", label: "Events" },
    { path: "/apply", label: "Apply" },
    { path: "/directory", label: "Directory" },
    { path: "/contact", label: "Contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 relative z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:flex navBarShadow space-x-20 rounded-full py-4 px-24 text-2xl font-sans">
        {menuItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <h3 className={currentPath === item.path ? "font-bold" : ""}>
              {item.label}
            </h3>
          </Link>
        ))}
      </div>

      {/* Mobile Navbar: Hamburger Menu */}
      <div className="fixed md:hidden flex items-center left-1 top-1">
        <Cheeseburger
          isToggled={isOpen}
          onClick={toggleMenu}
          rounded={true}
          color="gray"
          width={50}
          height={50}
        />
        
      </div>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed md:hidden inset-0 bg-black bg-opacity-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-40`}
      >
        {/* Slide-Out Panel from the Left */}
        <div
          className={`absolute left-0 top-0 h-full w-3/4 sm:w-1/2 bg-white shadow-lg transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-start p-4">
            <button
              onClick={toggleMenu}
              aria-label="Close mobile menu"
              className="text-gray-800 text-2xl focus:outline-none"
            >
              ✕
            </button>
          </div>
          {/* Menu List */}
          <ul className="mt-8 space-y-6 text-center">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-xl px-4 py-2 ${
                    currentPath === item.path ? "font-bold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}