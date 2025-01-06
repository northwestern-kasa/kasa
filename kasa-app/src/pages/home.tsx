import SplashPage from "../components/SplashPage";
import Footer from "../components/Footer";
import HomeInfoCard from "../components/HomeInfoCard";

import community from "../../assets/etc/community.svg"
import cultural from "../../assets/etc/cultural.svg"
import impact from "../../assets/etc/impact.svg"

import underlineBlue from "../../assets/etc/blueunderline.svg"
import underlineRed from "../../assets/etc/redunderline.svg"
import blob1 from "../../assets/blobs/mission-blob1.svg";
import blob2 from "../../assets/blobs/mission-blob2.svg";

export default function Home() {

  const infoCards = [
    {
      img: community,
      header: "Community",
      text: "KASA holds a welcoming community of a widely diverse number of students at Northwestern University"
    },
    {
      img: cultural,
      header: "Cultural",
      text: "KASA holds a welcoming community of a widely diverse number of students at Northwestern University"
    },
    {
      img: impact,
      header: "Impact",
      text: "KASA holds a welcoming community of a widely diverse number of students at Northwestern University"
    }
  ]


    return (
    <div
      className={""}
    >
      <main className="">
          <SplashPage />
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

        <div id="mission" className="my-[300px] relative">
          <h1 className="text-[44px] font-bold text-center">Our Mission</h1>
          <div id="underlinered" className="flex items-center justify-center -mt-[16px]">
            <img src={underlineRed} alt="underline" className="w-[380px] h-[28px]"/>
          </div>
          <div className="flex items-center justify-center mt-8">
            <div className="text-center w-[760px]">
              Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </div>
          </div>
          <img src={blob1} alt="blob1" className="absolute left-0 top-0 -translate-y-1/3"/>
          <img src={blob2} alt="blob2" className="absolute right-0 top-0 -translate-y-1/3"/>
        </div>

        <div id="execs" className="mt-[128px]">
          <div id="execText" className="text-center font-bold text-[24px]">
            Meet the 24'-25' Executives
          </div>
          <div id="execImage" className="flex items-center justify-center">
            <div className="w-[120px] h-[120px] border-2">
              <img src={blob1} alt="blob1" className="w-[50px]"/> {/* change to exec image later when we take it */}
            </div>
            
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}