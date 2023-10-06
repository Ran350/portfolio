import { NextPage } from "next";
import Head from "next/head";

import { ArticlePage } from "@/feature/article/routes/ArticlePage";

const BlogIndexPage: NextPage = () => (
  <>
    <Head>
      <title>Ran350 | Articles</title>
      <meta name="description" content="List of my articles" />
    </Head>

    <ArticlePage />
  </>
);
export default BlogIndexPage;
