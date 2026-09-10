import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type HeroModel = {
  id: string;
  name: string;
  description: string;
  ctaLabel: string;
  railLabel: string;
  railCrop?: { top: string; left: string; width: string; height: string };
  railImage: { transparentUrl: string; alt: string; bgUrl?: string };
  backgroundVideo?: string;
  backgroundImage?: { url: string; mobileUrl?: string; alt: string };
};

type HeroContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  eyebrow: string;
  arrowAriaLabel: string;
  prevArrowAriaLabel: string;
  nextLabel: string;
  models: HeroModel[];
};

export const heroContent: HeroContent = {
  section_check: true,
  seo_headings: [{ tag: "h1", text: "Linha Dolphin BYD Servopa" }],
  eyebrow: "Linha Dolphin BYD Servopa",
  arrowAriaLabel: "Próximo modelo",
  prevArrowAriaLabel: "Modelo anterior",
  nextLabel: "PRÓXIMO",
  models: [
    {
      id: "dolphin",
      name: "Dolphin",
      description: "Tecnologia, conforto e autonomia para viver o elétrico todos os dias",
      ctaLabel: "Solicitar cotação",
      railLabel: "DOLPHIN",
      railImage: {
        transparentUrl: "/images/hero/rail/dolphin-transparent.webp",
        bgUrl: "/images/hero/rail/dolphin-with-bg.webp",
        alt: "BYD Dolphin"
      },
      backgroundVideo: "/videos/hero/dolphin.mp4"
    },
    {
      id: "dolphin-mini",
      name: "Dolphin Mini",
      description: "Compacto, eficiente e perfeito para transformar sua rotina urbana",
      ctaLabel: "Solicitar cotação",
      railLabel: "DOLPHIN MINI",
      railCrop: { top: "-18.33%", left: "-12.57%", width: "125.14%", height: "136.67%" },
      railImage: {
        transparentUrl: "/images/hero/rail/dolphin-mini-transparent.webp",
        bgUrl: "/images/hero/rail/dolphin-mini-with-bg.webp",
        alt: "BYD Dolphin Mini"
      },
      backgroundVideo: "/videos/hero/dolphin-mini.mp4"
    },
    {
      id: "dolphin-plus",
      name: "Dolphin Plus",
      description: "Mais potência, mais alcance e uma experiência elétrica superior",
      ctaLabel: "Solicitar cotação",
      railLabel: "DOLPHIN PLUS",
      railImage: {
        transparentUrl: "/images/hero/rail/dolphin-plus-transparent.webp",
        bgUrl: "/images/hero/rail/dolphin-plus-with-bg.webp",
        alt: "BYD Dolphin Plus"
      },
      backgroundVideo: "/videos/hero/dolphin-plus.mp4"
    },
    {
      id: "dolphin-se",
      name: "Dolphin SE",
      description: "Design renovado, tecnologia avançada e performance para ir além",
      ctaLabel: "Solicitar cotação",
      railLabel: "DOLPHIN SE",
      railImage: {
        transparentUrl: "/images/hero/rail/dolphin-se-transparent.webp",
        alt: "BYD Dolphin SE"
      },
      backgroundImage: {
        url: "/images/hero/dolphin-se.webp",
        mobileUrl: "/images/hero/dolphin-se-mobile.webp",
        alt: "BYD Dolphin SE"
      }
    }
  ]
};
