import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const currentPath = useLocation().pathname

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/family", label: "Families" },
    { path: "/events", label: "Events" },
    { path: "/apply", label: "Apply" },
    { path: "/directory", label: "Directory" },
    { path: "/contact", label: "Contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="relative p-4">
      {/* Desktop Navbar */}
      <div className="hidden md:flex navBarShadow space-x-20 rounded-full py-4 px-24 text-2xl font-sans">
        {menuItems.map(item => (
          <Link key={item.path} to={item.path}>
            <h3 className={currentPath === item.path ? "font-bold" : ""}>
              {item.label}
            </h3>
          </Link>
        ))}
      </div>

      {/* Mobile Navbar */}
      <div className="absolute top-0 left-0 md:hidden flex items-center justify-between">
        {/* You could also place a logo or title here */}
        <button onClick={toggleMenu} className="focus:outline-none">
          {/* Simple Hamburger Icon using SVG */}
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-4 bg-white shadow-md rounded-md py-2 w-40 z-50">
          {menuItems.map(item => (
            <Link key={item.path} to={item.path} onClick={() => setIsOpen(false)}>
              <div className={`px-4 py-2 ${currentPath === item.path ? "font-bold" : ""}`}>
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
