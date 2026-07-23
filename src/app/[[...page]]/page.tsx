// LP estática (PT-BR fixo). Sem busca em API externa — dados vêm de pageData.
import Home from "@/screens/Home/Home";
import { pageData } from "@/utils/constants/pageData";

// Gera apenas a rota raiz "/" no build.
export function generateStaticParams() {
  return [{ page: [] as string[] }];
}

export function generateMetadata() {
  return {
    title: pageData.acf.seo.title,
    description: pageData.acf.seo.description
  };
}

export default function Page() {
  return <Home data={pageData} locale="pt-br" />;
}
