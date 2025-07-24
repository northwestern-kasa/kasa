// Import SVGs as URLs for production builds
// ...existing image imports for textLogo
import facebookIcon from "/socials/facebook.svg";
import instagramIcon from "/socials/instagram.svg";
import youtubeIcon from "/socials/youtube.svg";
// import tiktokIcon from "/socials/tiktok.svg";

// Import text logo
import textLogo from "../../assets/text-logo.png";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const currentPath = useLocation().pathname;
  return (
    <div
      id="container"
      className="w-full flex flex-col items-center pt-8 border-t border-gray-400"
    >
      <img
        id="logo"
        className="w-32 mb-6 sm:mb-7 select-none"
        src={textLogo}
        alt="Kasa's text logo"
      />
      <div
        id="nav"
        className="flex flex-col items-center space-between mb-4 gap-8 sm:flex-row sm:gap-12 sm:mb-10"
      >
        <Link to="/">
          <h6 className={currentPath == "/" ? "font-bold" : ""}>Home</h6>
        </Link>
        <Link to="/family">
          <h6 className={currentPath == "/family" ? "font-bold" : ""}>
            Family
          </h6>
        </Link>
        <Link to="/events">
          <h6 className={currentPath == "/events" ? "font-bold" : ""}>
            Events
          </h6>
        </Link>
        {/* <Link to="/apply">
          <h6 className={currentPath == "/application" ? "font-bold" : ""}>
            Application
          </h6>
        </Link> */}
        {/* <Link to="/directory">
          <h6 className={currentPath == "/directory" ? "font-bold" : ""}>
            Directory
          </h6>
        </Link> */}
        <Link to="/contact">
          <h6 className={currentPath == "/contact" ? "font-bold" : ""}>
            Contact Us
          </h6>
        </Link>
      </div>
      {/* <h6 id="cta" className="font-bold mb-4 hidden sm:block">
        Stay in touch
      </h6> */}
      <div id="socials" className="flex flex-row mb-8 space-x-8">
        <a
          target="_blank"
          rel="noopener"
          href="https://www.instagram.com/northwesternkasa/"
        >
          <img src={instagramIcon} alt="Instagram logo" />
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.facebook.com/northwesternkasa/"
        >
          <img src={facebookIcon} alt="Facebook logo" />
        </a>

        <a
          target="_blank"
          rel="noopener"
          href="https://www.youtube.com/channel/UCDkuIQbMa9IqMhe6HBA6OHQ"
        >
          <img src={youtubeIcon} alt="Youtube logo" />
        </a>
        {/* <a
          target="_blank"
          rel="noopener"
          href="https://www.tiktok.com/northwesternkasa"
        >
          <img src={tiktokIcon} alt="Tiktok logo" />
        </a> */}

        
      </div>
      <div id="copyright" className="text-gray-400 mb-4">
        ©northwesternkasa
      </div>
    </div>
  );
}
