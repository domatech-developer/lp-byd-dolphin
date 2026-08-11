import { HiddenHeadings } from "@/components/SEO/HiddenHeadings/HiddenHeadings.type";

type AboutServopaCard = {
  title: string;
  description: string;
};

type AboutServopaContent = {
  section_check: boolean;
  seo_headings: HiddenHeadings[];
  title: string;
  paragraph: string;
  cards: AboutServopaCard[];
};

export const aboutServopaContent: AboutServopaContent = {
  section_check: true,
  seo_headings: [
    { tag: "h3", text: "Servopa e BYD: inovação para a mobilidade elétrica" },
  ],
  title: "Servopa e BYD: inovação que move o futuro",
  paragraph:
    "Com mais de 70 anos de história, a Servopa amplia sua trajetória de inovação ao integrar a BYD ao seu portfólio, tornando-se a segunda rede do Brasil a representar a marca. Uma união que conecta tradição, tecnologia e a nova geração da mobilidade híbrida e elétrica.",
  cards: [
    { title: "1.100+", description: "Parceiros autorizados" },
    { title: "70+", description: "Anos de história" },
    { title: "300 mil+", description: "Clientes atendidos" },
    { title: "2.000+", description: "Colaboradores na equipe" }
  ]
};
