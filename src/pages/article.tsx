import { ArticlePage } from "@/feature/article/routes/ArticlePage";
import { NextPage } from "next";

import Head from "next/head";

const BlogIndexPage: NextPage = () => (
  <>
    <Head>
      <title>Ran350's Articles</title>
      <meta name="description" content="List of my articles" />
    </Head>

    <ArticlePage />
  </>
);
export default BlogIndexPage;
