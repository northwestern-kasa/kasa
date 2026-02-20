import { Link } from "react-router-dom";
import logo from "/Logo.webp";
// import profile from "../../assets/profile.svg";
import NavBar from "./NavBar";
import Join from "./Join";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 py-2 md:px-4 md:py-3 select-none">
      <div className="kasa-glass mx-auto flex max-w-[1400px] items-center justify-between rounded-2xl px-3 py-2 md:px-6">
        <Link to="/" className="group flex items-center space-x-3">
          <img
            src={logo}
            alt="Kasa's logo"
            className="block h-auto w-10 transition-transform duration-300 group-hover:scale-105"
          />
          <h1 className="text-xl font-black uppercase tracking-normal text-blue md:text-3xl">
            KASA
          </h1>
        </Link>

        <div className="block md:hidden">
          <NavBar />
        </div>

        <div className="hidden md:block w-2/12 min-w-[170px]">
          <Join />
        </div>
      </div>
    </header>
  );
}
