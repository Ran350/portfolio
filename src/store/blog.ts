type Blog = {
  publishedAt: `${number}-${number}-${number}`;
  path: `blog/${string}.md`;
  slug: string;
  title: string;
  description: string;
};

export const blogs: Blog[] = [
  {
    publishedAt: "2023-10-01",
    path: "blog/apollo-client-cache-trouble.md",
    slug: "apollo-client-cache-trouble",
    title: "【WIP】Apollo Client のキャッシュ周りでハマった話",
    description: "Apollo Client のキャッシュ周りでハマった話",
  },
  {
    publishedAt: "2023-09-24",
    path: "blog/treasure-internship.md",
    slug: "treasure-intern",
    title: "【WIP】Treasure インターン 2023 参加記",
    description:
      "8/7 から 8/25 までの期間にて、CARTA HOLDINGS 社主催のTreasure 2023インターンに参加してきましたので、参加記録を残していきます。",
  },
];
