import topLeftBlob from "../../assets/blobs/top-left.svg";
import topMidLeftBlob from "../../assets/blobs/top-mid-left.svg";
import topMidRightBlob from "../../assets/blobs/top-mid-right.svg";
import topRightBlob from "../../assets/blobs/top-right.svg";
import midLeftBlob from "../../assets/blobs/mid-left.svg";
import midRightBlob from "../../assets/blobs/mid-right.svg";
import textLogo from "../../assets/text-logo.svg";
import downArrow from "../../assets/down-arrow.svg";

import homeBg from "../../assets/HomePage.png"
import familyBg from "../../assets/FamilyPage.png"
import eventsBg from "../../assets/EventPage.JPG"
// import applyBg from "../../assets/ApplyPage.png"

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const pageHeaders: any = {
  "/": "home",
  "/family": "Families!",
  "/events": "Events",
  "/apply": "Application",
  "/directory": "Directory",
  "/contact": "Contact Us",
};

const bgMap: Record<string,string> = {
    "home":        homeBg,
    "Families!":  familyBg,
    "Events":  eventsBg,
    // "Application":   applyBg,
    // …any others
  }

export default function SplashPage() {
  const currentPath = useLocation().pathname;
  const header = pageHeaders[currentPath];
  const bgImage = bgMap[header] || homeBg


  return (
    <section id="splash" className="relative h-[100vh] overflow-hidden z-0 select-none">
      {(header !== "Contact Us" && header !== "Application") && (
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${bgImage})`,
            filter: "blur(1.9px) grayscale(100%)",
          }}
        />
      )}
      {/* ...other blob images (commented out) */}
      <div id="content" className="h-full flex items-center justify-center">
        <div
          id="relative-container"
          className="flex flex-col items-center justify-center relative"
        >
          <div
            id="header"
            className="flex flex-col items-center justify-center space-y-8"
          >
            <img
              width="320"
              src={textLogo}
              alt="KASA's text logo"
              className={header == "home" ? "invert-[100%]" : "hidden"}
            />
            <h1
              className={
                header == "home" ? "text-2xl font-bold text-white" : "hidden"
              }
            >
              Work Hard Play Hard
            </h1>
            <h1
              id="page-name"
              className={`
                ${header === "home" ? "hidden" : ""} 
                ${((header === "Contact Us" || header === "Application") ? 'text-black' : 'text-white')}
                text-5xl font-bold 
                md:text-8xl lg:text-9xl text-center
              `}
            >
              {header}
            </h1>
            <div className="scale-75 hidden md:block relative z-50">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
