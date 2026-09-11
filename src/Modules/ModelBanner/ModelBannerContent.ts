import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ModelBannerVideoCard = {
  title: string;
  subtitle: string;
  videoUrl: string;
  mimeType: string;
  ariaLabel: string;
  closeAriaLabel: string;
};

type ModelBannerModel = {
  image: { url: string; alt: string };
  badge?: string;
  title: string;
  videoCard?: ModelBannerVideoCard;
};

type ModelBannerContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  statusPill: string;
  models: Record<string, ModelBannerModel>;
};

export const modelBannerContent: ModelBannerContent = {
  section_check: true,
  seo_headings: [{ tag: "h2", text: "Versões do BYD Dolphin na Servopa Curitiba" }],
  statusPill: "SERVOPA EXPLICA",
  models: {
    "dolphin-se": {
      image: { url: "/images/model-banner/dolphin-se.webp", alt: "BYD Dolphin SE" },
      badge: "Novo",
      title: "BYD DOLPHIN SE",
      videoCard: {
        title: "Linha Dolphin BYD Servopa",
        subtitle: "Veja o review de nossa concessionária",
        videoUrl: "/videos/video-servopa-web.mp4",
        mimeType: "video/mp4",
        ariaLabel: "Assistir ao review da concessionária Servopa",
        closeAriaLabel: "Fechar modal de vídeo"
      }
    },
    dolphin: {
      image: { url: "/images/model-banner/dolphin.webp", alt: "BYD Dolphin" },
      title: "BYD DOLPHIN",
      videoCard: {
        title: "Linha Dolphin BYD Servopa",
        subtitle: "Veja o review de nossa concessionária",
        videoUrl: "/videos/video-servopa-web.mp4",
        mimeType: "video/mp4",
        ariaLabel: "Assistir ao review da concessionária Servopa",
        closeAriaLabel: "Fechar modal de vídeo"
      }
    },
    "dolphin-mini": {
      image: { url: "/images/model-banner/dolphin-mini.webp", alt: "BYD Dolphin Mini" },
      title: "BYD DOLPHIN MINI",
      videoCard: {
        title: "Linha Dolphin BYD Servopa",
        subtitle: "Veja o review de nossa concessionária",
        videoUrl: "/videos/video-servopa-web.mp4",
        mimeType: "video/mp4",
        ariaLabel: "Assistir ao review da concessionária Servopa",
        closeAriaLabel: "Fechar modal de vídeo"
      }
    },
    "dolphin-plus": {
      image: { url: "/images/model-banner/dolphin-plus.webp", alt: "BYD Dolphin Plus" },
      title: "BYD DOLPHIN PLUS",
      videoCard: {
        title: "Linha Dolphin BYD Servopa",
        subtitle: "Veja o review de nossa concessionária",
        videoUrl: "/videos/video-servopa-web.mp4",
        mimeType: "video/mp4",
        ariaLabel: "Assistir ao review da concessionária Servopa",
        closeAriaLabel: "Fechar modal de vídeo"
      }
    }
  }
};
