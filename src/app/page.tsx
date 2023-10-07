import { NextPage } from "next";
import Head from "next/head";

import { AboutPage } from "@/feature/about/routes/AboutPage";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Ran350 | Portfolio</title>
      <meta name="description" content="my portfolio site" />
    </Head>

    <AboutPage />
  </>
);

export default IndexPage;
