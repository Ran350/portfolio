import { readFileSync } from "fs";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parseMD from "parse-md";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { z } from "zod";

import { ReactMarkdownComponents } from "@/components/blog/ReactMarkdownComponents";
import { Layout } from "@/components/Layout";
import { blogs } from "@/store/blog";
import Head from "next/head";

type Props = {
  metadata: {
    publishedAt: `${number}-${number}-${number}`;
    title: string;
    description: string;
    tags: string[];
  };
  content: string;
};

const BlogMeta: FC<{
  title: string;
}> = (props) => (
  <div>
    <h1 className="text-3xl font-bold">{props.title}</h1>
  </div>
);

const BlogPage: NextPage<Props> = (props) => (
  <Layout>
    <Head>
      <title>{props.metadata.title} | Ran350 Blog</title>
      <meta name="description" content={props.metadata.description} />
    </Head>

    <BlogMeta {...props.metadata} />

    <ReactMarkdown components={ReactMarkdownComponents}>
      {props.content}
    </ReactMarkdown>
  </Layout>
);
export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = z.object({ slug: z.string() }).parse(params);

  // FIXME: blog/[slug] ページ毎に O(N) かかるので改善したい
  const blog = blogs.find((blog) => blog.slug === slug);
  if (blog === undefined) {
    throw new Error(`Invalid slug: ${slug}`);
  }

  const fileContents = readFileSync(blog.path, "utf8");
  const { content } = parseMD(fileContents);

  return {
    props: {
      content,
      metadata: { ...blog },
    },
  };
};
