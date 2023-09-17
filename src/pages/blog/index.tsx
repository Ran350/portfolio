import { readFileSync, readdirSync } from "fs";
import { join } from "path";

import { GetStaticProps, NextPage } from "next";
import parseMD from "parse-md";
import { z } from "zod";

import { BlogCard } from "@/components/blog/BlogCard";
import { Layout } from "@/components/Layout";

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
    <div className="mx-32 grid gap-6">
      {props.blogMetas.map((blogMeta) => (
        <div key={blogMeta.slug} className="">
          <BlogCard {...blogMeta} />
        </div>
      ))}
    </div>
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
      publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    });
    const parsed: z.infer<typeof schema> = schema.parse(metadata);

    return { slug, ...parsed };
  });

  return {
    props: {
      blogMetas: [...blogMetas, ...blogMetas],
    },
  };
};
