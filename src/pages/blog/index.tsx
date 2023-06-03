import type { NextPage } from "next";

import { getNotionData } from "../../lib/getNotionData";

const Blog: NextPage = () => <></>;

export default Blog;

export const getStaticProps = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID;
  if (typeof databaseId === "undefined") {
    throw new Error("NOTION_DATABASE_ID not found");
  }
  const database = await getNotionData(databaseId);

  return {
    props: {
      posts: database,
    },
  };
};
