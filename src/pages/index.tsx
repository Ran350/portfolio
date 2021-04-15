import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

import { NextPage } from "next";

import { About } from "../components/About";
import { Button } from "../components/Button";
import { Develop } from "../components/Develop";
import { Gallery } from "../components/Gallery";
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
        imgPath="./lv.png"
        link=""
        title="title"
        description="description"
      />
      <Develop
        imgPath="./lv.png"
        link=""
        title="title"
        description="description"
      />
      <Develop
        imgPath="./lv.png"
        link=""
        title="title"
        description="description"
      />
    </Section>

    <Section
      title="Gallery"
      button={<Button text="Gallery" link="/gallery" fontAwesome={faPalette} />}
    >
      <Gallery imgPath="./ga.jpeg" title="" />
      <Gallery imgPath="./ga.jpeg" title="" />
      <Gallery imgPath="./ga.jpeg" title="" />
      <Gallery imgPath="./ga.jpeg" title="" />
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
