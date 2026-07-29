import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ImageZoomContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  background: { url: string; alt: string };
  backgroundMobile: { url: string; alt: string };
  title: string;
  paragraph: string;
};

export const imageZoomContent: ImageZoomContent = {
  section_check: true,
  seo_headings: [{ tag: "h2", text: "Linha BYD Dolphin na Servopa Curitiba" }],
  background: { url: "/images/image-zoom/background.png", alt: "BYD Dolphin preto e BYD Dolphin azul lado a lado" },
  backgroundMobile: {
    url: "/images/image-zoom/background-mobile.png",
    alt: "BYD Dolphin preto e BYD Dolphin azul lado a lado"
  },
  title: "Linha BYD Dolphin Servopa",
  paragraph:
    "Conheça os modelos Dolphin Mini, Dolphin, Dolphin Plus e o novo Dolphin SE. Escolha o elétrico que mais combina com sua rotina e fale com a BYD Servopa para saber mais."
};
