import "./Home.scss";
import { FC } from "react";
import MainDefault from "@/components/Main/Main";
import StructureData from "@/components/SEO/StructureData/StructureData";
import VideoServopa from "@/Modules/VideoServopa/VideoServopa";
import Highlights from "@/Modules/Highlights/Highlights";
import AboutServopa from "@/Modules/AboutServopa/AboutServopa";
interface HomeProps {
  data: any;
  locale?: any;
}
const Home: FC<HomeProps> = async ({ data, locale }) => {
  return (
    <MainDefault id="home" {...{ data, locale }}>
      <VideoServopa />
      <AboutServopa />
      <Highlights />
    </MainDefault>
  );
};

export default Home;
