type ModelCarouselCard = {
  title: string;
  description?: string;
  image: { url: string; alt: string };
};

type ModelCarouselContent = {
  section_check: boolean;
  models: Record<string, ModelCarouselCard[]>;
};

export const modelCarouselContent: ModelCarouselContent = {
  section_check: true,
  models: {
    "dolphin-se": [
      {
        title: "Novo visual da linha",
        description:
          'Faróis redesenhados, rodas aro 17”, para-choques renovados e traseira atualizada reforçam a presença do novo Dolphin SE.',
        image: { url: "/images/model-carroussel/dolphin-se-01.webp", alt: "Novo visual da linha" }
      },
      {
        title: "Mais performance",
        description:
          "O motor de 177 cv e 290 Nm entrega aceleração eficiente, ideal para quem quer mais resposta sem abrir mão do custo-benefício.",
        image: { url: "/images/model-carroussel/dolphin-se-02.webp", alt: "Mais performance" }
      },
      {
        title: "Recarga mais rápida",
        description: "A recarga DC de 30% a 80% em até 20 minutos torna a experiência elétrica ainda mais prática.",
        image: { url: "/images/model-carroussel/dolphin-se-03.webp", alt: "Recarga mais rápida" }
      },
      {
        title: "Tecnologia no interior",
        description:
          "Painel de 8,8”, multimídia flutuante de 12,8”, Google Assistant e carregador por indução de 50 W elevam a experiência a bordo.",
        image: { url: "/images/model-carroussel/dolphin-se-04.webp", alt: "Tecnologia no interior" }
      },
      {
        title: "Segurança avançada",
        description:
          "O pacote ADAS 2 inclui recursos de assistência ao condutor, como controle adaptativo, alerta de colisão, frenagem automática e monitoramento de ponto cego.",
        image: { url: "/images/model-carroussel/dolphin-se-05.webp", alt: "Segurança avançada" }
      }
    ],
    dolphin: [
      {
        title: "Equilíbrio elétrico",
        description:
          'Um hatch 100% elétrico completo, pensado para quem busca conforto, eficiência e tecnologia no uso diário.',
        image: { url: "/images/model-carroussel/dolphin-01.webp", alt: "Novo visual da linha" }
      },
      {
        title: "Design Ocean",
        description:
          "Linhas fluidas, faróis em LED e identidade inspirada no oceano criam um visual moderno, leve e marcante.",
        image: { url: "/images/model-carroussel/dolphin-02.webp", alt: "Mais performance" }
      },
      {
        title: "Conectividade",
        description: "A tela rotativa de 12,8” com sistema inteligente integra funções do carro, comandos de voz e entretenimento.",
        image: { url: "/images/model-carroussel/dolphin-03.webp", alt: "Recarga mais rápida" }
      },
      {
        title: "Espaço interno",
        description:
          "A e-Platform 3.0 favorece o aproveitamento interno, com piso plano e mais conforto para os passageiros.",
        image: { url: "/images/model-carroussel/dolphin-04.webp", alt: "Tecnologia no interior" }
      },
      {
        title: "Recarga rápida",
        description:
          "Com carregamento de 30% a 80% em cerca de 30 minutos, facilita a rotina de quem quer praticidade no elétrico.",
        image: { url: "/images/model-carroussel/dolphin-05.webp", alt: "Segurança avançada" }
      }
    ],
    "dolphin-mini": [
      {
        title: "Compacto urbano",
        description:
          'Perfeito para a rotina urbana, combina dimensões compactas, direção prática e eficiência para quem quer viver seu primeiro elétrico.',
        image: { url: "/images/model-carroussel/dolphin-mini-01.webp", alt: "Novo visual da linha" }
      },
      {
        title: "Economia no dia a dia",
        description:
          "Com baixo custo por quilômetro e manutenção reduzida, entrega uma experiência elétrica mais inteligente e acessível.",
        image: { url: "/images/model-carroussel/dolphin-mini-02.webp", alt: "Mais performance" }
      },
      {
        title: "Segurança reforçada",
        description: "Conta com 6 airbags e freios a disco nas quatro rodas, oferecendo mais proteção e confiança em todos os trajetos.",
        image: { url: "/images/model-carroussel/dolphin-mini-03.webp", alt: "Recarga mais rápida" }
      },
      {
        title: "Autonomia",
        description:
          "Com autonomia de até 280 km pelo padrão INMETRO, atende com tranquilidade os deslocamentos urbanos do dia a dia.",
        image: { url: "/images/model-carroussel/dolphin-mini-04.webp", alt: "Tecnologia no interior" }
      },
      {
        title: "Tecnologia a bordo",
        description:
          "Tela giratória de 10,1”, carregador por indução e comandos intuitivos tornam a experiência mais conectada e prática.",
        image: { url: "/images/model-carroussel/dolphin-mini-05.webp", alt: "Segurança avançada" }
      }
    ],
    "dolphin-plus": [
      {
        title: "Mais performance",
        description:
          'Com 204 cv de potência e 32 kgf.m de torque, entrega uma condução elétrica mais forte, ágil e envolvente.',
        image: { url: "/images/model-carroussel/dolphin-plus-01.webp", alt: "Novo visual da linha" }
      },
      {
        title: "Mais autonomia",
        description:
          "Com até 330 km de autonomia PBEV, é uma opção para quem busca mais liberdade nos deslocamentos.",
        image: { url: "/images/model-carroussel/dolphin-plus-02.webp", alt: "Mais performance" }
      },
      {
        title: "Interior premium",
        description: "Bancos esportivos em couro vegano sustentável unem conforto, apoio lateral e acabamento mais sofisticado.",
        image: { url: "/images/model-carroussel/dolphin-plus-03.webp", alt: "Recarga mais rápida" }
      },
      {
        title: "Teto solar panorâmico",
        description:
          "O teto de vidro amplia a sensação de espaço, luminosidade e sofisticação dentro da cabine.",
        image: { url: "/images/model-carroussel/dolphin-plus-04.webp", alt: "Tecnologia no interior" }
      },
      {
        title: "Porta-malas versátil",
        description:
          "Com bancos rebatíveis 60:40, o espaço pode ser ampliado para acomodar melhor malas, compras e objetos maiores.",
        image: { url: "/images/model-carroussel/dolphin-plus-05.webp", alt: "Segurança avançada" }
      }
    ]
  }
};
