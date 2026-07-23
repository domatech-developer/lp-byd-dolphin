import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type VideoServopaContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  background_image: string;
  title_bold: string;
  title_thin: string;
  video: {
    url: string;
    mime_type: string;
    aria_label: string;
    close_aria_label: string;
  };
};

export const videoServopaContent: VideoServopaContent = {
  section_check: true,
  seo_headings: [
    { tag: "h2", text: "Grupo Servopa: tradição automotiva desde 1955" },
    { tag: "h3", text: "BYD Servopa em Curitiba" },
    { tag: "h3", text: "Atendimento especializado em veículos elétricos BYD" }
  ],
  background_image: "/images/background-video-servopa.png",
  title_bold: "Fundado em 1955, o Grupo Servopa",
  title_thin: " é um dos maiores grupos automotivos do Brasil",
  video: {
    url: "/videos/video-servopa-web.mp4",
    mime_type: "video/mp4",
    aria_label: "Assistir ao vídeo institucional do Grupo Servopa",
    close_aria_label: "Fechar modal de vídeo"
  }
};
