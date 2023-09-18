type Blog = {
  publishedAt: `${number}-${number}-${number}`;
  path: `blog/${string}.md`;
  slug: string;
  title: string;
  description: string;
  tags: string[];
};

export const blogs: Blog[] = [
  {
    publishedAt: "2023-10-01",
    path: "blog/apollo-client-cache-trouble.md",
    slug: "apollo-client-cache-trouble",
    title: "【WIP】Apollo Client のキャッシュ周りでハマった話",
    description: "Apollo Client のキャッシュ周りでハマった話",
    tags: ["Apollo-Client", "GraphQL", "React"],
  },
  {
    publishedAt: "2023-09-26",
    path: "blog/wantedly-internship.md",
    slug: "wantedly-internship",
    title: "【WIP】Wantedly インターン 2023 参加記",
    description:
      "9/11 から 9/29 まで3週間、Wantedly 社の就業型インターンに参加してきましたので、参加記録を残していきます。",
    tags: ["インターン"],
  },
  {
    publishedAt: "2023-09-24",
    path: "blog/treasure-internship.md",
    slug: "treasure-intern",
    title: "【WIP】Treasure インターン 2023 参加記",
    description:
      "8/7 から 8/25 までの期間にて、CARTA HOLDINGS 社主催のTreasure 2023インターンに参加してきましたので、参加記録を残していきます。",
    tags: ["インターン"],
  },
  {
    publishedAt: "2023-09-22",
    path: "blog/chatwork-internship.md",
    slug: "chatwork-internship",
    title: "【WIP】Chatwork インターン 2023 参加記",
    description:
      "8/28 から 9/8 までの期間にて、Chatwork インターン 2023に参加してきましたので、参加記録を残していきます。",
    tags: ["インターン"],
  },
  {
    publishedAt: "2023-09-20",
    slug: "gmo-pepabo-internship",
    title: "【WIP】GMOペパボ インターン 2023 参加記",
    description:
      "7/24 から 8/4 までの期間にて、GMO ペパボ 社の就業型インターンに参加してきましたので、参加記録を残していきます。",
    tags: ["インターン"],
    path: "blog/gmo-pepabo-internship.md",
  },
];
