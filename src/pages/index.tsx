import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import { NextPage } from "next";

import { About } from "../components/About";
import { Button } from "../components/Button";
import { Develop } from "../components/Develop";
import { GraphicArt } from "../components/GraphicArt";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const IndexPage: NextPage = () => (
  <>
    <Header title="Ran's Portfolio" />

    <Section
      title="Develop"
      button={
        <Button
          text="GitHub"
          link="https://github.com/Ran350"
          name="GitHub"
          fontAwesome={faGithub}
        />
      }
    >
      <Develop
        imgPath="./lv.png"
        link="https://github.com/Ran350/Lyrics-visualize"
        title="Lyrics-visualize / Python"
        description="Pretender / Official髭男dism"
      />
      <Develop
        imgPath="./this-site.png"
        link="https://github.com/Ran350/ran350.github.io"
        title="ran350.github.io / Next.js"
        description="this web site"
      />
      <Develop
        imgPath="./nlp-100-knocks.png"
        link="https://github.com/Ran350/nlp-100-knocks"
        title="nlp-100-knocks / Python"
        description="NLP 100 knocks challenge"
      />
      <Develop
        imgPath="./shell-in-c.png"
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
          link="/gallery"
          name="Palette"
          fontAwesome={faPalette}
        />
      }
    >
      <GraphicArt imgPath="./ga.jpeg" title="" />
      <GraphicArt imgPath="./twist-circle.jpeg" title="" />
      <GraphicArt imgPath="./glass-chess.png" title="" />
      <GraphicArt imgPath="./toon_GB.png" title="" />
    </Section>

    <Section title="about">
      <About
        title="Belong"
        contents={[
          { content: "RCC", link: "http://www.rcc.ritsumei.ac.jp/" },
          { content: "RDC", link: "https://rits-dajare.github.io/" },
          { content: "KC3", link: "https://kc3.me/" },
        ]}
      />
      <About
        title="Like"
        contents={[
          { content: "Blender" },
          { content: "Python" },
          { content: "将棋" },
        ]}
      />
      <About
        title="Studying"
        contents={[
          { content: "Web Front" },
          { content: "NLP" },
          { content: "Visualization" },
        ]}
      />
      <About
        title="SNS"
        contents={[
          { content: "Twitter", link: "https://twitter.com/hoshina350" },
          {
            content: "Instagram",
            link: "https://www.instagram.com/ran350_3d/",
          },
          { content: "GitHub", link: "https://github.com/Ran350" },
          { content: "Qiita", link: "https://qiita.com/Ran350" },
        ]}
      />
    </Section>
  </>
);

export default IndexPage;
