import { Link } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import profile from "../../assets/profile.png";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 z-10">
      {/* Logo only visible on desktop */}
      <Link to="/" className="hidden md:block w-10">
        <img src={logo} alt="Kasa's logo" />
      </Link>
      
      {/* Mobile Navbar: Visible only on mobile devices */}
      <div className="block md:hidden">
        <NavBar />
      </div>
      
      {/* Profile icon always visible */}
      <Link to="/login" className="w-10">
        <img src={profile} alt="Default profile picture" />
      </Link>
    </header>
  );
}
