import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ModelTab = {
  id: string;
  tabLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  image: { url: string; alt: string };
  ctaPrimary: string;
  ctaSecondary: { text: string; url: string; target?: string };
};

type ModelTabsContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  title: string;
  tabs: ModelTab[];
};

export const modelTabsContent: ModelTabsContent = {
  section_check: true,
  seo_headings: [
    { tag: "h3", text: "BYD Dolphin SE: nova expressão da família Dolphin" },
    { tag: "h3", text: "BYD Dolphin: tecnologia elétrica com personalidade" },
    { tag: "h3", text: "BYD Dolphin Plus: mais desempenho para ir além" },
    { tag: "h3", text: "BYD Dolphin Mini: compacto no tamanho, gigante na experiência" }
  ],
  title: "Linha Dolphin BYD Servopa",
  tabs: [
    {
      id: "dolphin-se",
      tabLabel: "BYD Dolphin SE",
      eyebrow: "BYD Dolphin SE",
      title: "Uma nova expressão\nda família Dolphin.",
      description:
        "Mais moderno, mais equipado e com presença renovada, o Dolphin SE amplia as possibilidades da linha com uma proposta premium, tecnológica e altamente desejável.",
      image: { url: "/images/model-tabs/hero-dolphin-se.png", alt: "BYD Dolphin SE" },
      ctaPrimary: "Tenho interesse",
      ctaSecondary: { text: "Ver mais", url: "https://bydservopa.com.br/novos/dolphin-se", target: "_blank" }
    },
    {
      id: "dolphin",
      tabLabel: "BYD Dolphin",
      eyebrow: "BYD Dolphin",
      title: "Tecnologia elétrica\ncom personalidade.",
      description:
        "Com design inspirado na Linha Ocean, o BYD Dolphin une eficiência, conforto e conectividade em um hatch 100% elétrico feito para acompanhar todos os momentos da rotina.",
      image: { url: "/images/model-tabs/hero-dolphin.png", alt: "BYD Dolphin" },
      ctaPrimary: "Tenho interesse",
      ctaSecondary: { text: "Ver mais", url: "https://bydservopa.com.br/novos/dolphin", target: "_blank" }
    },
    {
      id: "dolphin-mini",
      tabLabel: "BYD Dolphin Mini",
      eyebrow: "BYD Dolphin Mini",
      title: "Compacto no tamanho,\ngigante na experiência.",
      description:
        "Ideal para a cidade, o Dolphin Mini combina agilidade, eficiência e tecnologia em um elétrico fácil de dirigir, fácil de estacionar e pensado para simplificar sua rotina.",
      image: { url: "/images/model-tabs/hero-dolphin-mini.png", alt: "BYD Dolphin Mini" },
      ctaPrimary: "Tenho interesse",
      ctaSecondary: { text: "Ver mais", url: "https://bydservopa.com.br/novos/dolphin-mini", target: "_blank" }
    },
    {
      id: "dolphin-plus",
      tabLabel: "BYD Dolphin Plus",
      eyebrow: "BYD Dolphin Plus",
      title: "Mais desempenho\npara ir além.",
      description: "Mais esportiva e dinâmica. Imagem em movimento, ângulo 3/4 frontal, luz baixa, sensação de performance sem perder a elegância.",
      image: { url: "/images/model-tabs/hero-dolphin-plus.png", alt: "BYD Dolphin Plus" },
      ctaPrimary: "Tenho interesse",
      ctaSecondary: { text: "Ver mais", url: "https://bydservopa.com.br/novos/dolphin-plus", target: "_blank" }
    }
  ]
};
