/**
 * Dados estáticos da página (LP única, PT-BR fixo).
 * Substitui o que antes vinha do WordPress (getPages/getGeneral).
 * - acf.seo.title       -> <title> e H1 oculto
 * - acf.seo.description  -> meta description
 * - acf.metaDados        -> JSON-LD (string). Deixe "" para não renderizar.
 */
export const pageData = {
  title: { rendered: "Linha BYD Dolphin em Curitiba | Grupo Servopa" },
  acf: {
    seo: {
      title: "Linha BYD Dolphin em Curitiba | Grupo Servopa",
      description:
        "Descubra a linha BYD Dolphin na BYD Servopa em Curitiba. Carros elétricos modernos, confortáveis e tecnológicos para sua rotina urbana."
    },
    // JSON-LD opcional (string). Ex.: '{"@context":"https://schema.org",...}'
    metaDados: ""
  }
};

export type PageData = typeof pageData;
