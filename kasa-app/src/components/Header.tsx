import { Link } from "react-router-dom";
import logo from "/Logo.webp";
// import profile from "../../assets/profile.svg";
import NavBar from "./NavBar";
import Join from "./Join";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 flex items-center justify-between p-2 z-10 bg-white select-none">
      {/* Logo visible always */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Kasa's logo" className="w-10 h-auto block filter"  />
        <h1 className="text-2xl font-bold text-stone-900">
          KASA
        </h1>
      </Link>
      
      {/* Mobile Navbar: Visible only on mobile devices */}
      <div className="block md:hidden">
        <NavBar />
      </div>
      
      {/* Profile icon commented out for now */}
      {/* <Link to="/login" className="w-8">
        <img src={profile} alt="Default profile picture" />
      </Link> */}
      
    <div className="hidden md:block w-2/12 -mr-8">
      <Join/>
    </div>
    
    </header>
  );
}
