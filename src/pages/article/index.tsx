import { GetStaticProps, NextPage } from "next";

import { ArticleCard } from "@/components/blog/ArticleCard";
import { BlogCard } from "@/components/blog/BlogCard";
import { Layout } from "@/components/Layout";
import { articles } from "@/store/articles";
import { blogs } from "@/store/blog";
import Head from "next/head";

type Blog = {
  type: "blog";
  publishedAt: string;
  slug: string;
  title: string;
  description: string;
};
type Article = {
  type: "article";
  publishedAt: string;
  url: string;
  title: string;
  description: string;
  host: {
    name: string;
    img: string;
    imgAlt: string;
  };
};
type Props = {
  items: Array<Blog | Article>;
};

const BlogIndexPage: NextPage<Props> = (props) => (
  <Layout>
    <Head>
      <title>Ran350's Articles</title>
      <meta name="description" content="List of my articles" />
    </Head>

    <h1 className="text-3xl font-bold text-center">Articles</h1>

    <div className="lg:mx-32 mx-0 my-8 grid gap-6">
      {props.items.map((item) =>
        item.type === "blog" ? (
          <BlogCard key={item.slug} href={`article/${item.slug}`} {...item} />
        ) : (
          <ArticleCard key={item.url} {...item} />
        )
      )}
    </div>
  </Layout>
);
export default BlogIndexPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const a: Article[] = articles
    .map((a) => ({
      ...a,
      host: {
        name: a.host,
        img: a.hostImg,
        imgAlt: a.hostImgAlt,
      },
    }))
    .map((a) => ({ ...a, type: "article" as const }));
  const b: Blog[] = blogs.map((b) => ({ ...b, type: "blog" as const }));
  const items: Props["items"] = [...a, ...b].sort((x, y) =>
    x.publishedAt < y.publishedAt ? 1 : -1
  );

  return {
    props: {
      items,
    },
  };
};