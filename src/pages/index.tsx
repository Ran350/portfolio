import { AboutPage } from "@/feature/about/routes/AboutPage";
import { NextPage } from "next";

import Head from "next/head";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>Ran350's Portfolio</title>
      <meta name="description" content="my portfolio site" />
    </Head>

    <AboutPage />
  </>
);

export default IndexPage;
