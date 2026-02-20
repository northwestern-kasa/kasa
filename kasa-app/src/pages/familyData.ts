import baekjae from "../../assets/baekjae.svg";
import ggr from "../../assets/ggr.svg";
import silla from "../../assets/silla.svg";

export type FamilyId = "goguryeo" | "silla" | "baekje";

export interface FamilyHistory {
  id: FamilyId;
  name: string;
  koreanName: string;
  period: string;
  image: string;
  accentClass: string;
  summary: string;
  legacy: string;
  highlights: string[];
}

export const FAMILY_ORDER: FamilyId[] = ["goguryeo", "silla", "baekje"];

export const FAMILY_DATA: Record<FamilyId, FamilyHistory> = {
  goguryeo: {
    id: "goguryeo",
    name: "Goguryeo",
    koreanName: "고구려",
    period: "37 BCE - 668 CE",
    image: ggr,
    accentClass: "text-[#F59597]",
    summary:
      "Goguryeo was the northernmost of the Three Kingdoms and became known for its military strength, mountain fortresses, and large territorial reach across northern Korea and parts of Manchuria.",
    legacy:
      "Its identity is often associated with resilience and bold leadership. Goguryeo's wall paintings and fortress architecture remain major parts of early Korean historical memory.",
    highlights: [
      "Expanded significantly under King Gwanggaeto in the late 4th and early 5th centuries.",
      "Developed strong defensive cities and fortress networks in mountainous terrain.",
      "Maintained a powerful cultural and political presence until its fall in 668 CE."
    ]
  },
  silla: {
    id: "silla",
    name: "Silla",
    koreanName: "신라",
    period: "57 BCE - 935 CE",
    image: silla,
    accentClass: "text-[#76D3FF]",
    summary:
      "Silla began in southeastern Korea and eventually led the first major political unification of much of the Korean Peninsula, especially during the 7th century.",
    legacy:
      "Silla is remembered for institution building, court culture, and Buddhist heritage. Sites connected to Silla, including temple architecture and royal tombs, are central to Korean cultural history.",
    highlights: [
      "Formed a key alliance with Tang China and defeated rival kingdoms during unification.",
      "Developed the Hwarang tradition, often associated with youth leadership and civic duty.",
      "Left major Buddhist artistic legacies such as Bulguksa and Seokguram."
    ]
  },
  baekje: {
    id: "baekje",
    name: "Baekje",
    koreanName: "백제",
    period: "18 BCE - 660 CE",
    image: baekjae,
    accentClass: "text-[#FFE845]",
    summary:
      "Baekje, centered in southwestern Korea, became a major maritime and cultural power known for refined art, diplomacy, and active exchange with neighboring regions.",
    legacy:
      "Baekje's influence on Buddhist transmission, craftsmanship, and design is widely recognized in Korean and East Asian history.",
    highlights: [
      "Built strong sea routes and diplomatic ties with China and the Japanese archipelago.",
      "Played a major role in transmitting Buddhist culture and scholarship across East Asia.",
      "Known for elegant craftsmanship in sculpture, architecture, and metalwork."
    ]
  }
};
