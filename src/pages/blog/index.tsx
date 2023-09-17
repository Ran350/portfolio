import { readFileSync } from "fs";

import { glob } from "glob";
import { GetStaticProps, NextPage } from "next";
import parseMD from "parse-md";
import { z } from "zod";

import { BlogCard } from "@/components/blog/BlogCard";
import { Layout } from "@/components/Layout";

type BlogMeta = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  month: string;
  day: string;
  slug: string;
};
type Props = {
  blogMetas: BlogMeta[];
};

const BlogIndexPage: NextPage<Props> = (props) => (
  <Layout>
    <h1 className="text-3xl font-bold text-center">Blog</h1>

    <div className="mx-32 my-8 grid gap-6">
      {props.blogMetas.map((blogMeta) => (
        <div key={blogMeta.slug} className="">
          <BlogCard
            href={`/blog/${blogMeta.year}/${blogMeta.month}/${blogMeta.day}/${blogMeta.slug}`}
            title={blogMeta.title}
            description={blogMeta.description}
            tags={blogMeta.tags}
            publishedAt={`${blogMeta.year}-${blogMeta.month}-${blogMeta.day}`}
          />
        </div>
      ))}
    </div>
  </Layout>
);
export default BlogIndexPage;

export const getStaticProps: GetStaticProps<Props> = async () => {
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

  const blogMetas: BlogMeta[] = files.map((file) => {
    const fileContents: string = readFileSync(file.path, "utf8");

    const { metadata } = parseMD(fileContents);

    const schema = z.object({
      title: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
    });
    const parsed: z.infer<typeof schema> = schema.parse(metadata);

    return {
      ...parsed,
      year: file.year,
      month: file.month,
      day: file.day,
      slug: file.name,
    };
  });

  return {
    props: {
      blogMetas,
    },
  };
};
