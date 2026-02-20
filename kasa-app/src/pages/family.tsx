// import Footer from "../components/Footer";
import SplashPage from "../components/SplashPage";
import { Link } from "react-router-dom";

import { FAMILY_DATA, FAMILY_ORDER } from "./familyData";

export default function Family() {
  const familyAvatarClass =
    "kasa-floating-card h-[340px] w-[340px] cursor-pointer object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-[1.01] sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]";

  const families = FAMILY_ORDER.map((id) => FAMILY_DATA[id]);

  return (
    <div className={""}>
      <main>
        <SplashPage />
        <div
          id="familyContent"
          className="mt-12 mb-24 flex flex-col items-center px-6"
        >
          <div id="familyMain" className="w-full max-w-6xl">
            <h1 className="kasa-reveal text-center text-4xl font-black text-blue px-10">
              What are Families?
            </h1>
            <div className="flex items-center justify-center">
              <p className="kasa-surface mt-6 w-full max-w-4xl px-7 py-8 text-center leading-relaxed text-slate-700 sm:px-10">
                Within KASA are three families —{" "}
                <span className="text-[#F59597] font-bold">Goguryeo</span>,{" "}
                <span className="text-[#76D3FF] font-bold">Silla</span> and{" "}
                <span className="text-[#FFE845] font-bold">Baekje</span> —
                which have proven increasingly essential as the organization
                continues to grow. Every member is placed into a family, their
                choice influenced by many factors: a potential sunbae (선배),
                the family’s character, and the friends they meet. The families
                symbolize the various kingdoms of Korea before Korea became one
                nation. Family within family.{" "}
              </p>
            </div>
            <div className="mb-16 mt-14 grid w-full grid-cols-1 place-items-center gap-8 md:grid-cols-3 md:gap-6">
              {families.map((family) => (
                <Link
                  key={family.id}
                  to={`/family/${family.id}`}
                  className="group flex w-full flex-col items-center"
                  prefetch="intent"
                >
                  <img
                    src={family.image}
                    alt={family.name}
                    loading="lazy"
                    decoding="async"
                    className={familyAvatarClass}
                  />
                  <h3 className={`mt-3 text-2xl font-black ${family.accentClass}`}>
                    {family.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue">View history</p>
                </Link>
              ))}
            </div>
            <div className="mb-8 text-center text-sm text-slate-600">
              Click a family avatar to learn the Korean history behind it.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
