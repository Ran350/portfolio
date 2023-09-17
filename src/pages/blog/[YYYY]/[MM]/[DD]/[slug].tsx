import { readFileSync } from "fs";

import { glob } from "glob";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parseMD from "parse-md";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { z } from "zod";

import { ReactMarkdownComponents } from "@/components/blog/ReactMarkdownComponents";
import { Layout } from "@/components/Layout";

type Props = {
  metadata: {
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
    <BlogMeta {...props.metadata} />

    <ReactMarkdown components={ReactMarkdownComponents}>
      {props.content}
    </ReactMarkdown>
  </Layout>
);

export default BlogPage;

export const getStaticPaths: GetStaticPaths = async () => {
  // REFACTOR ME: index.tsx と共通化させたい
  const filePaths: string[] = await glob("./blog/**/*.md");
  const files = filePaths.map((path) => {
    // blog/YYYY/MM/DD/ファイル名.md
    // ファイル名は a-z と - で構成される
    const parsed = /blog\/(\d{4})\/(\d{2})\/(\d{2})\/([a-z-]+)\.md/.exec(path);
    if (parsed === null) {
      throw new Error(`Invalid file path: ${path}`);
    }
    return {
      path: parsed[0],
      year: parsed[1],
      month: parsed[2],
      day: parsed[3],
      name: parsed[4],
    };
  });

  const paths = files.map((filename) => ({
    params: {
      YYYY: filename.year,
      MM: filename.month,
      DD: filename.day,
      slug: filename.name,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { YYYY, MM, DD, slug } = z
    .object({
      YYYY: z.string(),
      MM: z.string(),
      DD: z.string(),
      slug: z.string(),
    })
    .parse(params);

  const fileContents = readFileSync(
    `blog/${YYYY}/${MM}/${DD}/${slug}.md`,
    "utf8"
  );
  const { metadata: markdownMeta, content } = parseMD(fileContents);
  const metadata = z
    .object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    })
    .parse(markdownMeta);

  return {
    props: {
      metadata,
      content,
    },
  };
};
