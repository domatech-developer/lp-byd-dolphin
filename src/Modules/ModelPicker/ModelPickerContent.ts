import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ModelPickerCard = {
  id: string;
  name: string;
  image: { url: string; alt: string };
  description: string;
  bestForLabel: string;
  bestFor: string;
};

type ModelPickerContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  title: string;
  paragraph: string;
  cards: ModelPickerCard[];
};

export const modelPickerContent: ModelPickerContent = {
  section_check: true,
  seo_headings: [
    { tag: "h2", text: "Escolha o BYD Dolphin ideal para sua rotina" },
    { tag: "h3", text: "Novo BYD Dolphin SE para tecnologia e segurança" },
    { tag: "h3", text: "BYD Dolphin para conforto e uso diário" },
    { tag: "h3", text: "BYD Dolphin Mini para cidade e praticidade" },
    { tag: "h3", text: "BYD Dolphin Plus para performance e autonomia" }
  ],
  title: "Escolha o Dolphin que mais combina com você.",
  paragraph:
    "Cada versão da linha Dolphin foi pensada para um perfil de motorista. Encontre o modelo ideal para sua rotina, seu espaço, seu ritmo e sua forma de viver a mobilidade.",
  cards: [
    {
      id: "dolphin-se",
      name: "Dolphin SE",
      image: { url: "/images/model-picker/dolphin-se.png", alt: "BYD Dolphin SE" },
      description:
        "Com visual renovado, mais equipamentos e performance equilibrada, o Dolphin SE é a opção para quem deseja um elétrico mais sofisticado e atual.",
      bestForLabel: "Melhor para:",
      bestFor: "Tecnologia, design, segurança ativa e experiência premium."
    },
    {
      id: "dolphin",
      name: "Dolphin",
      image: { url: "/images/model-picker/dolphin.png", alt: "BYD Dolphin" },
      description:
        "Equilíbrio entre espaço, conforto e tecnologia no dia a dia, o Dolphin é a escolha certa para quem busca praticidade sem abrir mão do estilo.",
      bestForLabel: "Melhor para:",
      bestFor: "Conforto, praticidade e uso diário na cidade."
    },
    {
      id: "dolphin-mini",
      name: "Dolphin Mini",
      image: { url: "/images/model-picker/dolphin-mini.png", alt: "BYD Dolphin Mini" },
      description:
        "Compacto e ágil, o Dolphin Mini foi pensado para quem vive a rotina urbana e precisa de um elétrico fácil de dirigir e estacionar.",
      bestForLabel: "Melhor para:",
      bestFor: "Cidade, agilidade e praticidade no dia a dia."
    },
    {
      id: "dolphin-plus",
      name: "Dolphin Plus",
      image: { url: "/images/model-picker/dolphin-plus.png", alt: "BYD Dolphin Plus" },
      description:
        "Mais autonomia e desempenho para quem roda mais e busca uma experiência de condução mais potente dentro da linha Dolphin.",
      bestForLabel: "Melhor para:",
      bestFor: "Performance, autonomia e viagens mais longas."
    }
  ]
};
