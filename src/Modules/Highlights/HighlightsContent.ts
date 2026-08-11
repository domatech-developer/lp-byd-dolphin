type HighlightItem = {
  name: string;
  size: "lg" | "sm";
  image: { url: string; alt: string };
  url: string;
  target?: string;
};

type HighlightsContent = {
  section_check: boolean;
  items: HighlightItem[];
};

export const highlightsContent: HighlightsContent = {
  section_check: true,
  items: [
    {
      name: "BYD Dolphin SE",
      size: "lg",
      image: { url: "/images/highlights/byd-dolphin-se.webp", alt: "BYD Dolphin SE" },
      url: "https://bydservopa.com.br/novos/dolphin-se",
      target: "_blank"
    },
    {
      name: "BYD Dolphin",
      size: "sm",
      image: { url: "/images/highlights/byd-dolphin.webp", alt: "BYD Dolphin" },
      url: "https://bydservopa.com.br/novos/dolphin",
      target: "_blank"
    },
    {
      name: "BYD Dolphin Plus",
      size: "sm",
      image: { url: "/images/highlights/byd-dolphin-plus.webp", alt: "BYD Dolphin Plus" },
      url: "https://bydservopa.com.br/novos/dolphin-plus",
      target: "_blank"
    },
    {
      name: "BYD Dolphin Mini",
      size: "lg",
      image: { url: "/images/highlights/byd-dolphin-mini.webp", alt: "BYD Dolphin Mini" },
      url: "https://bydservopa.com.br/novos/dolphin-mini",
      target: "_blank"
    }
  ]
};
