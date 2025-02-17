import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";

import ggr from '../../assets/ggr.svg'
import silla from '../../assets/silla.svg'
import baekjae from '../../assets/baekjae.svg'

export default function Family() {
  return (
    <div
      className={""}
    >
      <main className="">
        <SplashPage />
        <div id="familyContent" className="-mt-16">
          <div id="familyMain">
            <h1 className="text-center font-bold text-[72px]">What are Families?</h1>
            <div className="flex items-center justify-center">
              <p className="text-center justify-center mt-4 w-[1238px]">Within KASA are three families — <span className="text-[#F59597] font-bold">Goguryeo</span>, <span className="text-[#76D3FF] font-bold">Silla</span>  and <span className="text-[#FFE845] font-bold">Baekje</span>, — which have proven increasingly essential as the organization continues to grow. Every member is placed into a family, their choice influenced by many factors: a potential sunbae (선배), the family’s character, and the friends they meet. The families symbolize the various kingdoms of Korea before Korea became one nation. Family within family. </p>
            </div>
            <div className="mb-16">
              <div className="flex items-center justify-center md:relative md:items-start md:justify-start">
                <img src={ggr} alt="family" className="w-[400px] h-[400px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]"/>
              </div>
              <div className="flex items-center justify-center md:reltive md:-mt-[192px] lg:-mt-[272px] 2xl:-mt-[372px]">
                <img src={silla} alt="family" className="w-[400px] h-[400px] -mt-32 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]" />
              </div>
              <div className="flex items-center justify-center md:relative md:items-end md:justify-end md:-mt-[225px] lg:-mt-[304px] 2xl:-mt-[404px]">
                <img src={baekjae} alt="family" className="w-[400px] h-[400px] -mt-24 md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]"/>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
