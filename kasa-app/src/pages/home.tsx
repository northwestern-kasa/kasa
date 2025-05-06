"use client";
import { useEffect, useState } from "react";
import SplashPage from "../components/SplashPage";
import Footer from "../components/Footer";
import HomeInfoCard from "../components/HomeInfoCard";
import ExecCard from "../components/ExecCard/ExecCard"; // Import your ExecCard component
import { fetchExecutives } from "../contentful";

import community from "../../assets/etc/community.svg";
import cultural from "../../assets/etc/cultural.svg";
import impact from "../../assets/etc/impact.svg";

import underlineBlue from "../../assets/etc/blueunderline.svg";
// import underlineRed from "../../assets/etc/redunderline.svg";
import blob1 from "../../assets/blobs/mission-blob1.svg";
import blob2 from "../../assets/blobs/mission-blob2.svg";

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

  useEffect(() => {
    async function getExecs() {
      try {
        const data = await fetchExecutives();
        setExecs(data);
      } catch (error) {
        console.error("Error loading executive members", error);
      } finally {
        setLoading(false);
      }
    }
    getExecs();
  }, []);

  // Filter for various roles
  const presidents = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "president"
  );
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
  const recreationHead = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "recreational"
  );


  return (
    <div>
      <main>
        {/* Hero/Splash section */}
        <SplashPage />

        {/* Info Cards Section */}
        <div id="whatIs" className="-mt-44 lg:mt-24">
          <h1 className="text-[44px] font-bold text-center"> What is KASA? </h1>
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
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-8 xl:gap-[100px]">
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
        <div id="execs" className="mt-32 flex flex-col items-center">
          <h2 className="text-center font-bold text-2xl mb-8">
            Meet the 24&apos;-25&apos; Executives
          </h2>

          {loading ? (
            <div>Loading executives…</div>
          ) : (
            <>
              {/* President ExecCard */}
              <ExecCard
                images={presidents.map((president) => ({
                  src: president.fields.photo.fields.file.url,
                  alt: president.fields.name,
                }))}
                role="Presidents"
              />

              {/* Other ExecCards in a responsive grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10 place-items-center mb-24 m-10 max-w-2/3 min-w-2/3">
                <ExecCard
                  images={culturalHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Cultural"
                />
                <ExecCard
                  images={publicityHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Publicity"
                />
                <ExecCard
                  images={fundraisingHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Fundraising"
                />
                <ExecCard
                  images={outReachHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Outreach"
                />
                <ExecCard
                  images={comDevHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Community Development"
                />
                <ExecCard
                  images={wellnessHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Wellness"
                />
                <ExecCard
                  images={FamilyHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Family Heads"
                />
                <ExecCard
                  images={socialMediaHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Social Media"
                />
                <ExecCard
                  images={secretaryHeads.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Secretary"
                /> 
                <ExecCard
                  images={financeHead.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Finance"
                /> 
                <ExecCard
                  images={recreationHead.map((exec) => ({
                    src: exec.fields.photo
                      ? exec.fields.photo.fields.file.url
                      : "/Logo.svg",
                    alt: exec.fields.name,
                  }))}
                  role="Recreational"
                /> 
              </div>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
