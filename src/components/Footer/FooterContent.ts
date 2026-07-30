type FooterModel = {
  name: string;
  badge?: string;
  image: { url: string; alt: string; title: string };
  url: string;
  target?: string;
};

type FooterContent = {
  section_check: boolean;
  title: string;
  models: FooterModel[];
  description: string;
  contact: string;
  copyright: string;
  credits_label: string;
  credits_link: { url: string; target?: string };
  credits_logo: { url: string; alt: string; title: string };
};

export const footerContent: FooterContent = {
  section_check: true,
  title: "Explore a linha BYD Dolphin",
  models: [
    {
      name: "Novo Dolphin",
      image: { url: "/images/footer/byd-novo-dolphin.webp", alt: "BYD Novo Dolphin", title: "BYD Novo Dolphin" },
      url: "https://bydservopa.com.br/novos/dolphin",
      target: "_blank"
    },
    {
      name: "Dolphin Mini",
      image: { url: "/images/footer/byd-dolphin-mini.webp", alt: "BYD Dolphin Mini", title: "BYD Dolphin Mini" },
      url: "https://bydservopa.com.br/novos/dolphin-mini",
      target: "_blank"
    },
    {
      name: "Dolphin Plus",
      image: { url: "/images/footer/byd-dolphin-plus.webp", alt: "BYD Dolphin Plus", title: "BYD Dolphin Plus" },
      url: "https://bydservopa.com.br/novos/dolphin-plus",
      target: "_blank"
    },
    {
      name: "Dolphin SE",
      badge: "Novo",
      image: { url: "/images/footer/byd-dolphin-se.webp", alt: "BYD Dolphin SE", title: "BYD Dolphin SE" },
      url: "https://bydservopa.com.br/novos/dolphin-se",
      target: "_blank"
    }
  ],
  description:
    "O Grupo Servopa foi fundado em 1955, atuando nos segmentos de concessionárias de automóveis, caminhões, motocicletas e consórcio, além de outros serviços ligados diretamente ao setor automotivo. Sendo um dos maiores e melhores grupos do país, trabalhamos para garantir solidez, credibilidade, segurança e confiança, pilares essenciais que fazem parte da nossa identidade. Hoje, o Grupo Servopa atua em toda a região Sul do país e atende seus mais de 300 mil clientes com total dedicação, que ao longo dos anos ajudaram a escrever uma história de sucesso.",
  contact: "Entre em contato com a gente pelo formulário, whatsapp ou telefone ou e-mail sac@gruposervopa.com.br.",
  copyright: "© Copyright  2026 - Servopa.  Todos os direitos reservados.",
  credits_label: "Feito por:",
  credits_link: {
    url: "https://www.domatech.com.br",
    target: "_blank"
  },
  credits_logo: {
    url: "/icons/domatech-light.svg",
    alt: "Domatech",
    title: "Domatech"
  }
};
