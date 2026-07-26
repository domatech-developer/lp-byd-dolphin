import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ModelsLineupContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  title: string;
  paragraph: string;
  image: { url: string; alt: string };
  badges: string[];
};

export const modelsLineupContent: ModelsLineupContent = {
  section_check: true,
  seo_headings: [
    { tag: "h3", text: "BYD Dolphin Mini" },
    { tag: "h3", text: "BYD Dolphin" },
    { tag: "h3", text: "BYD Dolphin Plus" },
    { tag: "h3", text: "Novo BYD Dolphin SE" }
  ],
  title: "Uma linha, diferentes formas de viver a eletricidade.",
  paragraph:
    "A linha Dolphin reúne compactos 100% elétricos pensados para quem busca economia, tecnologia, conforto e uma experiência de condução mais inteligente.",
  image: { url: "/images/models-lineup/lineup.png", alt: "Linha completa BYD Dolphin: Dolphin Mini, Dolphin, Dolphin Plus e Dolphin SE" },
  badges: ["DOLPHIN", "DOLPHIN MINI", "DOLPHIN PLUS", "DOLPHIN SE"]
};
