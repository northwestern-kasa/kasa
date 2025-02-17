import SplashPage from "../components/SplashPage";
import Footer from "../components/Footer";
import HomeInfoCard from "../components/HomeInfoCard";

import community from "../../assets/etc/community.svg";
import cultural from "../../assets/etc/cultural.svg";
import impact from "../../assets/etc/impact.svg";

import underlineBlue from "../../assets/etc/blueunderline.svg";
// import underlineRed from "../../assets/etc/redunderline.svg";
import blob1 from "../../assets/blobs/mission-blob1.svg";
import blob2 from "../../assets/blobs/mission-blob2.svg";

// Sample data
const infoCards = [
  {
    img: community,
    header: "Community",
    text: "As a club dedicated to community building, we unite Korean-American students through cultural events, social gatherings, and community service."
  },
  {
    img: cultural,
    header: "Cultural",
    text: "From KASA Show to various cultural events, we strive to foster a supportive environment where members can celebrate their diverse heritage."
  },
  {
    img: impact,
    header: "Impact",
    text: "Through outreach events and volunteer initiatives, we aim to help members grow personally and academically, and contribute positively to our community."
  }
];

const president = {
  role: "President",
  name: "Esther Tang",
  image: "https://via.placeholder.com/200x200?text=Esther+Tang"
};

const executives = [
  {
    role: "Wellness",
    name: "Lucas Kim",
    image: "https://via.placeholder.com/200x200?text=Lucas+Kim"
  },
  {
    role: "Fundraising",
    name: "Henry Im",
    image: "https://via.placeholder.com/200x200?text=Henry+Im"
  },
  {
    role: "Secretary",
    name: "Toby Zheng",
    image: "https://via.placeholder.com/200x200?text=Toby+Zheng"
  },
  {
    role: "Publicity",
    name: "Taewon Yoon",
    image: "https://via.placeholder.com/200x200?text=Taewon+Yoon"
  },
  {
    role: "Social Media",
    name: "Jenna Jeon",
    image: "https://via.placeholder.com/200x200?text=Jenna+Jeon"
  },
  {
    role: "Outreach",
    name: "Rie Kim",
    image: "https://via.placeholder.com/200x200?text=Rie+Kim"
  },
  {
    role: "Community Dev",
    name: "Leslie Kim",
    image: "https://via.placeholder.com/200x200?text=Leslie+Kim"
  },
  {
    role: "Cultural",
    name: "Anthony Chung",
    image: "https://via.placeholder.com/200x200?text=Anthony+Chung"
  },
  {
    role: "Family Heads",
    name: "Kevin Rha",
    image: "https://via.placeholder.com/200x200?text=Kevin+Rha"
  }
];

export default function Home() {
  return (
    <div>
      <main>
        {/* Hero/Splash section */}
        <SplashPage />

        {/* Info Cards Section */}
        <div id="whatIs" className="mt-[32px] lg:mt-[160px]">
          <h1 className="text-[44px] font-bold text-center"> What is KASA? </h1>
          <div id="underlineblue" className="flex items-center justify-center -mt-[16px]">
            <img src={underlineBlue} alt="underline" className="w-[380px] h-[28px]"/>
          </div>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-8 xl:gap-[100px]">
            {infoCards.map(function (card, i) {
              return <HomeInfoCard img={card.img} header={card.header} text={card.text} key={i}/>
            })}
          </div>
        </div>

        {/* Meet the Execs Section */}
        <div id="execs" className="mt-32 flex flex-col items-center">
          <h2 className="text-center font-bold text-2xl mb-8">
            Meet the 24&apos;-25&apos; Executives
          </h2>

          {/* President Card */}
          <div className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-xs flex flex-col items-center text-center">
              <h3 className="font-semibold text-lg mb-2">{president.role}</h3>
              <div className="w-28 h-28 rounded-full overflow-hidden shadow-md">
                <img
                  src={president.image}
                  alt={president.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-4 font-medium">{president.name}</p>
            </div>
          </div>

          {/* Other Exec Cards in a responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center mb-24">
            {executives.map((exec) => (
              <div
                key={exec.role}
                className="bg-white rounded-xl shadow-md p-6 w-full max-w-xs flex flex-col items-center text-center"
              >
                <h4 className="font-semibold">{exec.role}</h4>
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-md mt-3">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="mt-4">{exec.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
