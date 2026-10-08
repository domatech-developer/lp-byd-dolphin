import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type TitleLine = {
  text: string;
  opacity?: number;
};

type TechFeatureCard = {
  title: string;
  description: string;
  image: { url: string; alt: string };
};

type TechFeaturesContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  background: { url: string; alt: string };
  titleLines: TitleLine[];
  paragraph: string;
  cards: TechFeatureCard[];
};

export const techFeaturesContent: TechFeaturesContent = {
  section_check: true,
  seo_headings: [
    { tag: "h2", text: "Tecnologia elétrica da linha BYD Dolphin" },
    { tag: "h3", text: "e-Platform 3.0 para veículos 100% elétricos" },
    { tag: "h3", text: "Bateria Blade com segurança e eficiência" },
    { tag: "h3", text: "Linha Ocean com design inspirado no oceano" },
    { tag: "h3", text: "Condução elétrica silenciosa e eficiente" },
    { tag: "h3", text: "Tecnologia BYD para uma experiência inteligente" }
  ],
  background: { url: "/images/tech-features/hero-bg.webp", alt: "BYD Dolphin em movimento" },
  titleLines: [
    { text: "Mais silêncio. ", opacity: 0.6 },
    { text: "Mais eficiência. ", opacity: 0.8 },
    { text: "Mais tecnologia" },
    { text: "em movimento." }
  ],
  paragraph:
    "Mais do que carros elétricos, os modelos Dolphin carregam soluções desenvolvidas para oferecer eficiência, segurança e uma condução inteligente em todos os trajetos.",
  cards: [
    {
      title: "e-Platform 3.0",
      description: "Plataforma desenvolvida para veículos 100% elétricos, com foco em eficiência, segurança e melhor aproveitamento de espaço.",
      image: { url: "/images/tech-features/card-eplatform.webp", alt: "e-Platform 3.0" }
    },
    {
      title: "Bateria Blade",
      description: "Tecnologia exclusiva da BYD, reconhecida por sua segurança, durabilidade e eficiência.",
      image: { url: "/images/tech-features/card-bateria-blade.webp", alt: "Bateria Blade" }
    },
    {
      title: "Linha Ocean",
      description: "Design inspirado no movimento do oceano, com formas fluidas, luzes marcantes e uma identidade visual moderna.",
      image: { url: "/images/tech-features/card-linha-ocean.webp", alt: "Linha Ocean" }
    },
    {
      title: "Condução elétrica",
      description: "Silenciosa, eficiente e com torque imediato para transformar a experiência ao volante.",
      image: { url: "/images/tech-features/card-conducao-eletrica.webp", alt: "Condução elétrica" }
    },
    {
      title: "Tecnologia BYD",
      description: "Soluções desenvolvidas para elevar a experiência elétrica em todos os modelos, combinando eficiência, segurança, conforto e inovação.",
      image: { url: "/images/tech-features/card-tecnologia-byd.webp", alt: "Tecnologia BYD" }
    }
  ]
};
