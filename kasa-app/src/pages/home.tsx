"use client";
import { useEffect, useRef, useState } from "react";
import SplashPage from "../components/SplashPage";
// import Footer from "../components/Footer";
import HomeInfoCard from "../components/HomeInfoCard";
import ExecCard from "../components/ExecCard/ExecCard"; // Import your ExecCard component

import community from "../../assets/etc/community.svg";
import cultural from "../../assets/etc/cultural.svg";
import impact from "../../assets/etc/impact.svg";
// import Join from "@/components/Join";
import {Button} from "@/components/ui/button";
import { Link } from "react-router-dom";

import underlineBlue from "../../assets/etc/blueunderline.svg";
// import underlineRed from "../../assets/etc/redunderline.svg";
// import blob1 from "../../assets/blobs/mission-blob1.svg";
// import blob2 from "../../assets/blobs/mission-blob2.svg";

// Sample data for Home Info Cards (static for now)
const infoCards = [
  {
    img: community,
    header: "Community",
    text: "As a club dedicated to community building, we unite Korean-American students through cultural events, social gatherings, and community service.",
  },
  {
    img: cultural,
    header: "Cultural",
    text: "From KASA Show to various cultural events, we strive to foster a supportive environment where members can celebrate their diverse heritage.",
  },
  {
    img: impact,
    header: "Impact",
    text: "Through outreach events and volunteer initiatives, we aim to help members grow personally and academically, and contribute positively to our community.",
  },
];

export default function Home() {
  const [execs, setExecs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const execSectionRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadExecs, setShouldLoadExecs] = useState(false);

  useEffect(() => {
    const target = execSectionRef.current;
    if (!target) return;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoadExecs(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoadExecs(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadExecs) return;
    let active = true;

    async function getExecs() {
      try {
        const { fetchExecutives } = await import("../contentful");
        const data = await fetchExecutives();
        if (active) setExecs(data);
      } catch (error) {
        console.error("Error loading executive members", error);
      } finally {
        if (active) setLoading(false);
      }
    }

    getExecs();
    return () => {
      active = false;
    };
  }, [shouldLoadExecs]);

  // Filter for various roles
  const presidents = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "president"
  );
  
  // pick the first two
  const president1 = presidents[0];
  // console.log(president1)
  const president2 = presidents[1];

  const culturalHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "cultural"
  );
  const publicityHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "publicity"
  );
  const fundraisingHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "fundraising"
  );
  const comDevHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "community development"
  );
  const outReachHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "outreach"
  );
  const wellnessHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "wellness"
  );
  const FamilyHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase().includes("family")
  );
  const socialMediaHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "social media"
  );
  const secretaryHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "secretary"
  );
  const financeHead = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "finance"
  );

  const knownRoleKeywords = [
    "president",
    "cultural",
    "publicity",
    "fundraising",
    "community development",
    "outreach",
    "wellness",
    "family",
    "social media",
    "secretary",
    "finance",
  ];

  const otherExecs = execs.filter((exec) => {
    const role = (exec.fields?.role || "").toString().toLowerCase().trim();
    // treat empty/missing role as "innovation"
    if (!role) return true;
    return !knownRoleKeywords.some((kw) => role.includes(kw));
  });



  return (
    <div>
      <main>
        {/* Hero/Splash section */}
        <SplashPage />

        <section className="mt-12 mb-24 flex flex-col items-center px-6 sm:px-10">
        <div id="whatIs" className="kasa-reveal w-full max-w-6xl">
          <h1 className="text-center text-4xl font-black text-blue sm:text-[44px]"> What is KASA? </h1>
          <div
            id="underlineblue"
            className="flex items-center justify-center -mt-[16px]"
          >
            <img
              src={underlineBlue}
              alt="underline"
              className="w-[380px] h-[28px]"
            />
          </div>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-8 xl:gap-16">
            {infoCards.map((card, i) => (
              <HomeInfoCard
                img={card.img}
                header={card.header}
                text={card.text}
                key={i}
              />
            ))}
          </div>
        </div>

        {/* Meet the Execs Section */}
        <div id="execs" ref={execSectionRef} className="mt-28 flex w-full flex-col items-center">
          <h2 className="text-center text-2xl font-black text-blue mb-8">
            Meet the 24&apos;-25&apos; Executives
          </h2>

          {!shouldLoadExecs || loading ? (
            <div className="kasa-surface rounded-2xl px-6 py-4 font-semibold text-blue">Loading executives…</div>
          ) : (
            <>
              {/* President ExecCard */}
              <div className="flex max-w-5xl flex-col place-items-center justify-center gap-10 sm:flex-row">
                {president1 && (
                  <ExecCard
                    images={[
                      {
                        src: president1.fields?.photo?.fields?.file?.url
                          ? `${president1.fields.photo.fields.file.url}?fm=webp&q=70`
                          : "/Logo.svg",
                        alt: president1.fields?.name ?? "President",
                      },
                    ]}
                    role="President"
                  />
                )}

                {president2 && (
                  <ExecCard
                    images={[
                      {
                        src: president2.fields?.photo?.fields?.file?.url
                          ? `${president2.fields.photo.fields.file.url}?fm=webp&q=70`
                          : "/Logo.svg",
                        alt: president2.fields?.name ?? "President",
                      },
                    ]}
                    role="President"
                  />
                )}
              </div>

              {/* Other ExecCards in a responsive grid */}
              <div className="mt-10 mb-24 grid w-full max-w-[1300px] grid-cols-1 place-items-center gap-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {culturalHeads.length > 0 && (
                  <ExecCard
                    images={culturalHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Cultural"
                  />
                )}

                {publicityHeads.length > 0 && (
                  <ExecCard
                    images={publicityHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Publicity"
                  />
                )}

                {fundraisingHeads.length > 0 && (
                  <ExecCard
                    images={fundraisingHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Fundraising"
                  />
                )}

                {outReachHeads.length > 0 && (
                  <ExecCard
                    images={outReachHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Outreach"
                  />
                )}

                {comDevHeads.length > 0 && (
                  <ExecCard
                    images={comDevHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Community Dev."
                  />
                )}

                {wellnessHeads.length > 0 && (
                  <ExecCard
                    images={wellnessHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Wellness"
                  />
                )}

                {FamilyHeads.length > 0 && (
                  <ExecCard
                    images={FamilyHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Family Heads"
                  />
                )}

                {socialMediaHeads.length > 0 && (
                  <ExecCard
                    images={socialMediaHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Social Media"
                  />
                )}

                {secretaryHeads.length > 0 && (
                  <ExecCard
                    images={secretaryHeads.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Secretary"
                  />
                )}

                {financeHead.length > 0 && (
                  <ExecCard
                    images={financeHead.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Finance"
                  />
                )}
                {otherExecs.length > 0 && (
                  <ExecCard
                    images={otherExecs.map((exec) => ({
                      src: exec.fields?.photo?.fields?.file?.url
                        ? `${exec.fields.photo.fields.file.url}?fm=webp&q=70`
                        : "/Logo.svg",
                      alt: exec.fields?.name ?? "Member",
                    }))}
                    role="Innovation"
                  />
                )}
              </div>
            </>
          )}
        </div>
        <div className="kasa-surface kasa-reveal-delay mb-24 flex w-full max-w-4xl flex-col items-center justify-center rounded-[1.5rem] px-6 py-12 sm:px-12">
          <h2 className="mb-6 text-center text-4xl font-black text-blue">
            Join KASA Today!
          </h2>
          <p className="mb-8 text-center text-slate-700">
            Interested in becoming a member? Click the button below to apply.
          </p>
          {/* <Join /> */}
          <Button asChild className="kasa-btn-primary h-full w-full rounded-xl px-10 py-6 text-3xl font-black text-white sm:w-auto">
            <Link to="/apply" className="w-full inline-block text-center" prefetch="intent">
              Apply Now
            </Link>
          </Button>
        </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
