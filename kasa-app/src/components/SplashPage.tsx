// import topLeftBlob from "../../assets/blobs/top-left.svg";
// import topMidLeftBlob from "../../assets/blobs/top-mid-left.svg";
// import topMidRightBlob from "../../assets/blobs/top-mid-right.svg";
// import topRightBlob from "../../assets/blobs/top-right.svg";
// import midLeftBlob from "../../assets/blobs/mid-left.svg";
// import midRightBlob from "../../assets/blobs/mid-right.svg";
import textLogo from "/text-logo.webp";
// import downArrow from "../../assets/down-arrow.svg";
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
    : "";
  
  useEffect(() => {
      let active = true;
      async function getBanners() {
        try {
          const { fetchBanners } = await import("@/contentful");
          const data = await fetchBanners();
          if (active) setBanners(data);
        } catch (error) {
          console.error("Error loading banners", error);
        } 
      }
      getBanners();
      return () => {
        active = false;
      };
    }, []);


  return (
    <section
      id="splash"
      className="relative z-0 h-[85vh] select-none overflow-hidden sm:h-[96vh]"
    >
      {(header !== "Contact Us" && header !== "Application" && contentfulBg) && (
        <img
          src={`${contentfulBg}?fm=webp&w=1920&q=70`}
          srcSet={`${contentfulBg}?fm=webp&w=640&q=65 640w, ${contentfulBg}?fm=webp&w=960&q=70 960w, ${contentfulBg}?fm=webp&w=1440&q=70 1440w, ${contentfulBg}?fm=webp&w=1920&q=70 1920w`}
          sizes="100vw"
          alt=""
          // width={1920}
          // height={1080}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover [filter:blur(1px)_brightness(0.58)_contrast(1.08)]"
        />
      )}
      <div
        className={`absolute inset-0 ${
          header === "Contact Us" || header === "Application"
            ? "bg-[#fffaf3]/88"
            : "bg-black/40"
        }`}
      />
      <div className="absolute -left-16 top-20 h-44 w-44 rounded-full bg-[#ffd56d]/45 blur-3xl" />
      <div className="absolute -right-12 bottom-16 h-56 w-56 rounded-full bg-[#eb455f]/35 blur-3xl" />
      {/* ...other blob images (commented out) */}
      <div
        id="content"
        className="relative z-10 flex h-full items-center justify-center px-6"
      >
        <div
          id="relative-container"
          className="relative flex flex-col items-center justify-center"
        >
          <div
            id="header"
            className="flex flex-col items-center justify-center space-y-8"
          >
            <img
              width="320"
              src={textLogo}
              alt="KASA's text logo"
              className={header == "home" ? "kasa-reveal invert drop-shadow-xl" : "hidden"}
            />
            <h1
              className={
                header == "home"
                  ? "kasa-reveal-delay text-center text-xl font-bold tracking-wide text-white md:text-2xl"
                  : "hidden"
              }
            >
              Community Through Culture
            </h1>
            <h1
              id="page-name"
              className={`
                ${header === "home" ? "hidden" : ""} 
                ${((header === "Contact Us" || header === "Application") ? 'text-black' : 'text-white')}
                kasa-title-glow kasa-reveal text-center text-6xl font-black tracking-tight
                md:text-8xl lg:text-9xl
              `}
            >
              {header}
            </h1>
            <div className="kasa-reveal-delay relative z-50 hidden scale-75 md:block">
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
