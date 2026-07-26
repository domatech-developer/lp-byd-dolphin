import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type ModelBannerContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  image: { url: string; alt: string };
  badge?: string;
  title: string;
  videoCard: { title: string; subtitle: string; videoUrl: string; mimeType: string; ariaLabel: string; closeAriaLabel: string };
  statusPill: string;
};

export const modelBannerContent: ModelBannerContent = {
  section_check: true,
  seo_headings: [{ tag: "h2", text: "Versões do BYD Dolphin na Servopa Curitiba" }],
  image: { url: "/images/model-tabs/banner.png", alt: "Linha Dolphin BYD Servopa" },
  badge: "Novo",
  title: "BYD DOLPHIN SE",
  videoCard: {
    title: "Linha Dolphin BYD Servopa",
    subtitle: "Veja o review de nossa concessionária",
    videoUrl: "/videos/video-servopa-web.mp4",
    mimeType: "video/mp4",
    ariaLabel: "Assistir ao review da concessionária Servopa",
    closeAriaLabel: "Fechar modal de vídeo"
  },
  statusPill: "SERVOPA EXPLICA"
};
