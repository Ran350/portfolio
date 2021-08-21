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
        imgPath="./develop/this-site.jpg"
        link="https://github.com/Ran350/ran350.github.io"
        title="ran350.github.io"
        description="Next.js / Tailwind CSS"
      />
      <Develop
        imgPath="./develop/web-wordcloud.jpg"
        link="https://ran350.github.io/web-wordcloud"
        title="Web WordCloud"
        description="Web Assembly / Next.js"
      />
      <Develop
        imgPath="./develop/lv.png"
        link="https://github.com/Ran350/Lyrics-visualize"
        title="Lyrics-visualize"
        description="Python / MeCab"
      />
      <Develop
        imgPath="./develop/redos-checker.jpg"
        link="https://marketplace.visualstudio.com/items?itemName=Ran350.redos-checker-for-vscode"
        title="Redos Checker for VSCode "
        description="extension to detect redos vulnerable"
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
