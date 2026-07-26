import "./Home.scss";
import { FC } from "react";
import MainDefault from "@/components/Main/Main";
import StructureData from "@/components/SEO/StructureData/StructureData";
import ModelsLineup from "@/Modules/ModelsLineup/ModelsLineup";
import ModelPicker from "@/Modules/ModelPicker/ModelPicker";
import ModelTabs from "@/Modules/ModelTabs/ModelTabs";
import ModelBanner from "@/Modules/ModelBanner/ModelBanner";
import ModelCarousel from "@/Modules/ModelCarousel/ModelCarousel";
import VideoServopa from "@/Modules/VideoServopa/VideoServopa";
import AboutServopa from "@/Modules/AboutServopa/AboutServopa";
import Highlights from "@/Modules/Highlights/Highlights";
interface HomeProps {
  data: any;
  locale?: any;
}
const Home: FC<HomeProps> = async ({ data, locale }) => {
  return (
    <MainDefault id="home" {...{ data, locale }}>
      <ModelsLineup />
      <ModelPicker />
      <ModelTabs />
      <ModelBanner />
      <ModelCarousel />
      <VideoServopa />
      <AboutServopa />
      <Highlights />
    </MainDefault>
  );
};

export default Home;
