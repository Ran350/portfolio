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
    publishedAt: "2023-07-22",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/22/cytex/",
    title:
      "GitHub Codespacesを用いた日本語LaTeX執筆環境『CyTeX』を作った話【概要編】",
    description:
      "環境構築が容易で、Git管理可能、無料で利用可能な日本語LaTeX執筆環境『CyTeX』の紹介。",
    tags: ["研究", "LaTeX"],
    host: "立命館大学サイバーセキュリティ研究室 公式ブログ",
  },
  {
    publishedAt: "2023-07-13",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/13/sec-dogo/",
    title: "サイバーセキュリティシンポジウム道後2023 参加記録",
    description: `6月29日〜6月30日にかけて サイバーセキュリティシンポジウム道後2023 が愛媛県の道後にて開催され、
      学生研究賞発表のために参加してきました。`,
    tags: ["学会発表", "研究"],
    host: "立命館大学サイバーセキュリティ研究室 公式ブログ",
  },
  {
    publishedAt: "2021-12-20",
    url: "http://www.rcc.ritsumei.ac.jp/2021/1220_12435/",
    title:
      "正規表現が ReDoS 脆弱になる 3 つの経験則 | アドベントカレンダー 2021 20日目",
    description:
      "正規表現がReDoS脆弱性になる原因、典型的な3つのパターン、その対策方法についてのまとめ。便利な正規表現ツールやライブラリも紹介！",
    tags: ["正規表現", "ReDoS"],
    host: "立命館コンピュータクラブ 公式ブログ",
  },
];
