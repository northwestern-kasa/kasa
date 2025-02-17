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

  // Filter for president(s) and choose the first one
  const presidents = execs.filter(
    (exec) => exec.fields.role.toLowerCase() === "president"
  );
  const culturalHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() == "cultural"
  );

  const publicityHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() == "Publicity"
  );

  const fundraisingHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() == "Fundraising"
  );
  const comDevHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() == "Community Development"
  );
  const outReachHeads = execs.filter(
    (exec) => exec.fields.role.toLowerCase() == "Publicity"
  );



  const otherExecs = execs.filter(
    (exec) => exec.fields.role.toLowerCase() !== "president"
  );


  console.log(otherExecs);

  return (
    <div>
      <main>
        {/* Hero/Splash section */}
        <SplashPage />

        {/* Info Cards Section */}
        <div id="whatIs" className="mt-[32px] lg:mt-[160px]">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center mb-24">
                <ExecCard
                  images={culturalHeads.map((exec) => ({
                    src: exec.fields.photo.fields.file.url,
                    alt: exec.fields.name,
                  }))}
                  role="Cultural Chairs"
                />
                {/* <ExecCard
                  images={publicityHeads.map((exec) => ({
                    src: exec.fields.photo.fields.file.url,
                    alt: exec.fields.name,
                  }))}
                />
                <ExecCard
                  images={otherExecs.map((exec) => ({
                    src: exec.fields.photo.fields.file.url,
                    alt: exec.fields.name,
                  }))}
                />
                <ExecCard
                  images={otherExecs.map((exec) => ({
                    src: exec.fields.photo.fields.file.url,
                    alt: exec.fields.name,
                  }))}
                />
                <ExecCard
                  images={otherExecs.map((exec) => ({
                    src: exec.fields.photo.fields.file.url,
                    alt: exec.fields.name,
                  }))}
                /> */}
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
