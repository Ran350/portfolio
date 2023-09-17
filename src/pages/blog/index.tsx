import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import parseMD from "parse-md";
import { z } from "zod";

import { Layout } from "../../components/Layout";

type BlogMeta = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
};
type Props = {
  blogMetas: BlogMeta[];
};
const BlogIndexPage: NextPage<Props> = (props) => (
  <Layout>
    {props.blogMetas.map((blogMeta) => (
      <Link key={blogMeta.slug} href={`/blog/${blogMeta.slug}`}>
        <div>
          <h1>{blogMeta.title}</h1>
          <p>{blogMeta.description}</p>
          <p>{blogMeta.tags}</p>
          <p>{blogMeta.publishedAt}</p>
        </div>
      </Link>
    ))}
  </Layout>
);
export default BlogIndexPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const blogDir: string = join(process.cwd(), "blog");
  const markdownFiles: string[] = readdirSync(blogDir);

  const blogMetas: BlogMeta[] = markdownFiles.map((filename) => {
    const slug = filename.replace(".md", "");

    const fileContents: string = readFileSync(join(blogDir, filename), "utf8");
    const { metadata } = parseMD(fileContents);
    const schema = z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      publishedAt: z.string(), // TODO: YYYY-MM-DD
    });
    const parsed: z.infer<typeof schema> = schema.parse(metadata);

    return { slug, ...parsed };
  });

  return {
    props: {
      blogMetas,
    },
  };
};
