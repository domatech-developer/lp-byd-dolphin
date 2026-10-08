import { Icons } from "@/@types/icons";

type LinkItem = {
  label: string;
  icon: Icons;
};

type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

type HeaderContent = {
  section_check: boolean;
  logo: { url: string; alt: string };
  logoMobile: { url: string; alt: string };
  brandLabel: string;
  phones: LinkItem;
  location: LinkItem;
  cta: { text: string; icon: Icons };
  menuTitle: string;
  menuFooter: {
    title: string;
    linkLabel: string;
    linkUrl: string;
    socials: SocialLink[];
  };
};

export const headerContent: HeaderContent = {
  section_check: true,
  logo: { url: "/images/header/byd-logo.svg", alt: "BYD" },
  logoMobile: { url: "/images/header/byd-servopa-lockup-mobile.svg", alt: "BYD Servopa" },
  brandLabel: "SERVOPA",
  phones: {
    label: "Telefone",
    icon: "phone"
  },
  location: {
    label: "Localização",
    icon: "location"
  },
  cta: { text: "Solicitar cotação", icon: "whatsapp" },
  menuTitle: "Linha Dolphin BYD Servopa",
  menuFooter: {
    title: "Grupo Servopa",
    linkLabel: "Ir para nosso site",
    linkUrl: "https://www.gruposervopa.com.br",
    socials: [
      { name: "Instagram", url: "#", icon: "/icons/menu-social-instagram.svg" },
      { name: "LinkedIn", url: "#", icon: "/icons/menu-social-linkedin.svg" },
      { name: "WhatsApp", url: "#", icon: "/icons/menu-social-whatsapp.svg" },
      { name: "TikTok", url: "#", icon: "/icons/menu-social-tiktok.svg" },
      { name: "YouTube", url: "#", icon: "/icons/menu-social-youtube.svg" }
    ]
  }
};
