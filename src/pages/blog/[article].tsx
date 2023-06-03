import { BlogLayout } from "../../components/notion/BlogLayout";
import { RenderBlocks } from "../../components/notion/ContentBlocks";
import { getNotionData, getPage, getBlocks } from "../../lib/getNotionData";

const databaseId = process.env.NOTION_DATABASE_ID;
if (typeof databaseId === "undefined") {
  throw new Error("NOTION_DATABASE_ID not found");
}

type Props = {
    page
}
const Post = ({ page, blocks }) => (
  <BlogLayout data={page} content={blocks}>
    <span className="text-sm text-gray-700">
      {new Date(page.created_time).toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      })}
    </span>

    <h1 className="mb-5 text-3xl font-bold tracking-tight text-black md:text-5xl">
      {page.properties.Post.title[0].plain_text}
    </h1>

    <RenderBlocks blocks={blocks} />
  </BlogLayout>
);
export default Post;

export const getStaticPaths = async () => {
  const database = await getNotionData(databaseId);
  return {
    paths: database.map((page) => ({
      params: {
        slug: page.properties.Slug.rich_text[0].plain_text,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const database = await getNotionData(databaseId);
  const filter = database.filter(
    (blog) => blog.properties.Slug.rich_text[0].plain_text === slug
  );
  const page = await getPage(filter[0].id);
  const blocks = await getBlocks(filter[0].id);

  const childrenBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );

  const blocksWithChildren = blocks.map((block) => {
    if (block.has_children) {
      block[block.type].children = childrenBlocks.find(
        (x) => x.id === block.id
      ).children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
  };
};
