// import topLeftBlob from "../../assets/blobs/top-left.svg";
// import topMidLeftBlob from "../../assets/blobs/top-mid-left.svg";
// import topMidRightBlob from "../../assets/blobs/top-mid-right.svg";
// import topRightBlob from "../../assets/blobs/top-right.svg";
// import midLeftBlob from "../../assets/blobs/mid-left.svg";
// import midRightBlob from "../../assets/blobs/mid-right.svg";
import textLogo from "/text-logo.webp";
// import downArrow from "../../assets/down-arrow.svg";

import { fetchBanners } from "@/contentful";
import { useEffect, useState } from "react";
// import homeBg from "../../assets/HomePage.webp"
// import familyBg from "../../assets/FamilyPage.webp"
// import eventsBg from "../../assets/EventPage.webp"


// import applyBg from "../../assets/ApplyPage.png"

import NavBar from "./NavBar";
import { useLocation } from "react-router-dom";

const pageHeaders: any = {
  "/": "home",
  "/family": "Families",
  "/events": "Events",
  "/apply": "Application",
  "/directory": "Directory",
  "/contact": "Contact Us",
};

// const bgMap: Record<string,string> = {
//     "home":        homeBg,
//     "Families":  familyBg,
//     "Events":  eventsBg,
//     // "Application":   applyBg,
//     // …any others
//   }

export default function SplashPage() {
  const [banners, setBanners] = useState<any[]>([]);
  const currentPath = useLocation().pathname;
  const header = pageHeaders[currentPath];
  // const bgImage = bgMap[header] || homeBg;
  // Look for a matching Contentful banner for this page
  const pageBanner = banners.find((b: any) => b.fields.page?.toLowerCase() === header?.toLowerCase());
  // Build URL from Contentful asset if present
  const contentfulBg = pageBanner?.fields.image?.fields?.file?.url
    ? `https:${pageBanner.fields.image.fields.file.url}`
    : '';
  
  useEffect(() => {
      async function getBanners() {
        try {
          const data = await fetchBanners();
          setBanners(data);
        } catch (error) {
          console.error("Error loading banners", error);
        } 
      }
      getBanners();
    }, []);


  return (
    <section id="splash" className="relative h-[85vh] sm:h-[96vh] z-0 select-none">
      {(header !== "Contact Us" && header !== "Application") && (
        <img
          src={`${contentfulBg}?fm=webp&w=1920&q=70`}
          alt=""
          // width={1920}
          // height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover [filter:blur(2px)_brightness(0.6)_contrast(1.1)]"
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
              className={header == "home" ? "invert" : "hidden"}
            />
            <h1
              className={
                header == "home" ? "text-2xl font-bold text-white" : "hidden"
              }
            >
              Community Through Culture
            </h1>
            <h1
              id="page-name"
              className={`
                ${header === "home" ? "hidden" : ""} 
                ${((header === "Contact Us" || header === "Application") ? 'text-black' : 'text-white')}
                text-7xl font-bold 
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
