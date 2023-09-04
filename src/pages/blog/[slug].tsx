import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import parseMD from "parse-md";
import { FC } from "react";
import ReactMarkdown from "react-markdown";

import { ReactMarkdownComponents } from "../../components/blog/ReactMarkdownComponents";
import { Layout } from "../../components/Layout";

type Props = {
  metadata: {
    title: string;
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
  const markdownFiles = readdirSync(join(process.cwd(), "blog"));

  const paths = markdownFiles.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;
  if (typeof slug !== "string") {
    throw new Error("slug is not string");
  }

  const filePath = join(process.cwd(), "blog", `${slug}.md`);
  const fileContents = readFileSync(filePath, "utf8");
  const { metadata, content } = parseMD(fileContents);
  // metadata の zod 検証

  return {
    props: {
      metadata,
      content,
    },
  };
};
