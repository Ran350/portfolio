import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { NextPage } from "next";

import { About } from "../components/About";
import { Button } from "../components/Button";
import { Develop } from "../components/Develop";
import { GraphicArt } from "../components/GraphicArt";
import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { Section } from "../components/Section";

const IndexPage: NextPage = () => (
  <Layout>
    <Header
      title="Portfolio"
      subTitles={["Develop", "Graphic Art"]}
      imageUrl="./graphic/photorealistic/chess.jpg"
    />

    <Section
      title="Develop"
      button={
        <Button
          text="GitHub"
          name="GitHub"
          fontAwesome={faGithub}
          link="https://github.com/Ran350"
          isSameDomain={false}
        />
      }
    >
      <Develop
        imgPath="./develop/lv.png"
        link="https://github.com/Ran350/Lyrics-visualize"
        title="Lyrics-visualize / Python"
        description="Pretender / Official髭男dism"
      />
      <Develop
        imgPath="./develop/this-site.jpg"
        link="https://github.com/Ran350/ran350.github.io"
        title="ran350.github.io / Next.js"
        description="this web site"
      />
      <Develop
        imgPath="./develop/nlp-100-knocks.png"
        link="https://github.com/Ran350/nlp-100-knocks"
        title="nlp-100-knocks / Python"
        description="NLP 100 knocks challenge"
      />
      <Develop
        imgPath="./develop/shell-in-c.png"
        link="https://github.com/Ran350/network-development-experiment/tree/main/shell"
        title="Shell in C / Clang"
        description="simple shell implementation"
      />
    </Section>

    <Section
      title="Graphic arts"
      button={
        <Button
          text="Gallery"
          name="Palette"
          fontAwesome={faPalette}
          link="/gallery"
          isSameDomain={true}
        />
      }
    >
      <GraphicArt
        imgPath="./graphic/geometric/twist-circle-gray.jpg"
        title=""
      />
      <GraphicArt
        imgPath="./graphic/geometric/twist-circle-blue.jpg"
        title=""
      />
      <GraphicArt imgPath="/graphic/photorealistic/glass-chess.jpg" title="" />
      <GraphicArt imgPath="./graphic/toon/goldball.jpg" title="" />
    </Section>

    <Section title="about">
      <About
        title="Belong"
        contents={[
          { text: "RCC", link: "http://www.rcc.ritsumei.ac.jp/" },
          { text: "RDC", link: "https://rits-dajare.github.io/" },
          { text: "KC3", link: "https://kc3.me/" },
        ]}
      />
      <About
        title="Like"
        contents={[
          { text: "blender" },
          { text: "将棋" },
          { text: "Design theory" },
        ]}
      />
      <About
        title="Learning"
        contents={[
          { text: "Web front-end" },
          { text: "NLP" },
          { text: "Visualization" },
        ]}
      />
      <About
        title="SNS"
        contents={[
          { text: "Twitter", link: "https://twitter.com/hoshina350" },
          {
            text: "Instagram",
            link: "https://www.instagram.com/ran350_3d/",
          },
          { text: "GitHub", link: "https://github.com/Ran350" },
          { text: "Qiita", link: "https://qiita.com/Ran350" },
        ]}
      />
    </Section>
  </Layout>
);

export default IndexPage;
