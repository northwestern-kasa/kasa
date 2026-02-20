import { Link, useParams } from "react-router-dom";
import { FAMILY_DATA, type FamilyId } from "./familyData";

export default function FamilyDetail() {
  const { familyId } = useParams<{ familyId: string }>();
  const family = familyId ? FAMILY_DATA[familyId as FamilyId] : undefined;

  if (!family) {
    return (
      <main className="px-6 pb-20 pt-32">
        <section className="kasa-surface mx-auto max-w-3xl p-8 text-center">
          <h1 className="text-3xl font-black text-blue">Family Not Found</h1>
          <p className="mt-4 text-slate-700">
            This family page does not exist.
          </p>
          <Link to="/family" className="mt-6 inline-block font-semibold text-blue hover:underline">
            Back to Families
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="px-6 pb-20 pt-32">
      <section className="mx-auto max-w-6xl">
        <Link to="/family" className="font-semibold text-blue hover:underline">
          &larr; Back to Families
        </Link>

        <div className="kasa-surface mt-4 grid gap-8 p-6 md:grid-cols-2 md:p-10">
          <div className="flex flex-col justify-center">
            <h1 className={`text-5xl font-black ${family.accentClass}`}>{family.name}</h1>
            <p className="mt-2 text-xl font-semibold text-blue">{family.koreanName}</p>
            <p className="mt-2 inline-flex w-fit rounded-full bg-rose-50 px-3 py-1 text-sm font-semibold text-rose-700">
              {family.period}
            </p>
            <p className="mt-6 leading-relaxed text-slate-700">{family.summary}</p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={family.image}
              alt={family.name}
              className="h-[340px] w-[340px] drop-shadow-2xl md:h-[420px] md:w-[420px]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="kasa-surface mt-7 p-6 md:p-8">
          <h2 className="text-2xl font-black text-blue">Historical Highlights</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            {family.highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="kasa-surface mt-7 p-6 md:p-8">
          <h2 className="text-2xl font-black text-blue">Legacy</h2>
          <p className="mt-4 leading-relaxed text-slate-700">{family.legacy}</p>
        </div>
      </section>
    </main>
  );
}
