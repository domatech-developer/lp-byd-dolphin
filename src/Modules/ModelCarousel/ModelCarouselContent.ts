type ModelCarouselCard = {
  title: string;
  description?: string;
  image: { url: string; alt: string };
};

type ModelCarouselContent = {
  section_check: boolean;
  cards: ModelCarouselCard[];
};

export const modelCarouselContent: ModelCarouselContent = {
  section_check: true,
  cards: [
    {
      title: "Novo visual da linha",
      description:
        'Faróis redesenhados, rodas aro 17", para-choques renovados e traseira atualizada reforçam a presença do novo Dolphin SE.',
      image: { url: "/images/model-tabs/card-novo-visual.webp", alt: "Novo visual da linha" }
    },
    { title: "Mais performance", 
      description:
        'O Dolphin Plus é o modelo para quem busca mais desempenho, autonomia e uma experiência de condução mais empolgante dentro da linha Dolphin.',
      image: { url: "/images/model-tabs/card-performance.webp", alt: "Mais performance" }
    },
    { title: "Recarga mais rápida", 
      description:
        'A recarga DC de 30% a 80% em até 20 minutos torna a experiência elétrica ainda mais prática.',
      image: { url: "/images/model-tabs/card-recarga.webp", alt: "Recarga mais rápida" }
    },
    { title: "Tecnologia no interior", 
      description:
        'Painel de 8,8”, multimídia flutuante de 12,8”, Google Assistant e carregador por indução de 50 W elevam a experiência a bordo.',
      image: { url: "/images/model-tabs/card-tecnologia.webp", alt: "Tecnologia no interior" }
    },
    { title: "Segurança avançada", 
      description:
        'O pacote ADAS 2 inclui recursos de assistência ao condutor, como controle adaptativo, alerta de colisão, frenagem automática e monitoramento de ponto cego.',
      image: { url: "/images/model-tabs/card-seguranca.webp", alt: "Segurança avançada" }
    }
  ]
};
