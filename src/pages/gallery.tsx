import { NextPage } from "next";

import { GraphicArt } from "../components/GraphicArt";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

const GalleryPage: NextPage = () => (
  <Layout>
    <Header
      title="Graphic arts"
      subTitles={["Geometric", "Photorealistic", "Toon"]}
      imageUrl="./graphic/photorealistic/chess2.jpg"
    />

    <Section title="Geometric">
      <GraphicArt imgPath="./graphic/geometric/shere-swirl.jpg" title="" />
      <GraphicArt imgPath="./graphic/geometric/spiral.jpg" title="" />
      <GraphicArt
        imgPath="./graphic/geometric/twist-circle-blue.jpg"
        title=""
      />
      <GraphicArt
        imgPath="./graphic/geometric/twist-circle-gray.jpg"
        title=""
      />
    </Section>

    <Section title="Photo realistic">
      <GraphicArt imgPath="./graphic/photorealistic/chess.jpg" title="" />
      <GraphicArt imgPath="./graphic/photorealistic/chess2.jpg" title="" />
    </Section>

    <Section title="Toon">
      <GraphicArt imgPath="./graphic/toon/goldball.jpg" title="" />
      <GraphicArt imgPath="./graphic/toon/monsterball.jpg" title="" />
      <GraphicArt imgPath="./graphic/toon/premiereball.jpg" title="" />
      <GraphicArt imgPath="./graphic/toon/superball.jpg" title="" />
    </Section>
  </Layout>
);

export default GalleryPage;
