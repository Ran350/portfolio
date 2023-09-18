type Article = {
  publishedAt: `${number}-${number}-${number}`;
  url: string;
  title: string;
  description: string;
  tags: string[];
  host: string;
};

export const articles: Article[] = [
  {
    publishedAt: "2021-12-20",
    url: "http://www.rcc.ritsumei.ac.jp/2021/1220_12435/",
    title:
      "正規表現が ReDoS 脆弱になる 3 つの経験則 | アドベントカレンダー 2021 20日目",
    description:
      "正規表現がReDoS脆弱性になる原因、典型的な3つのパターン、その対策方法についてのまとめ。便利な正規表現ツールやライブラリも紹介！",
    tags: ["正規表現", "ReDoS"],
    host: "立命館コンピュータクラブ 公式サイト",
  },
];
