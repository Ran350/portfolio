type Article = {
  publishedAt: `${number}-${number}-${number}`;
  url: string;
  title: string;
  description: string;
  hosting: {
    name: string;
    img: string;
    imgAlt: string;
  };
};

export const articles: Article[] = [
  {
    publishedAt: "2023-09-29",
    url: "https://www.wantedly.com/companies/wantedly/post_articles/545209",
    title: "Ruby の型システムの現実的な運用を、先入観にとらわれずに考えてみた",
    description:
      "今回のインターンでは 3 週間 DX (Developer Experience) squadに所属し、「Wantedly における Ruby コードベースへの型システムの導入」をテーマに取り組んでいました。本記事では、その仮説検証の過程や調査記録を紹介します。",
    hosting: {
      name: "Wantedly Engineer Blog | Wantedly, Inc.",
      img: "/service/Wantedly_Mark_LightBG.svg",
      imgAlt: "Icon of Wantedly, Inc.",
    },
  },
  {
    publishedAt: "2023-09-29",
    url: "https://tech.pepabo.com/2023/09/29/summer-internship-2023-ran350/",
    title:
      "【GMO ペパボ サマーインターン 2023】SUZURI 事業部で ショップページ刷新 と SNS シェア文生成機能をリリースした話 (らん)",
    description:
      "GMO ペパボサマーインターン 2023 にて SUZURI 事業部で行った取り組みやイベントを中心に、インターン参加記録をお送りします。",

    hosting: {
      name: "Pepabo Tech Portal | GMO ペパボ 株式会社",
      img: "/service/pepapon_regular_rgb.svg",
      imgAlt: "Icon of GMO Pepabo, Inc.",
    },
  },
  {
    publishedAt: "2023-07-22",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/22/cytex/",
    title:
      "GitHub Codespacesを用いた日本語LaTeX執筆環境『CyTeX』を作った話【概要編】",
    description:
      "環境構築が容易で、Git管理可能、無料で利用可能な日本語LaTeX執筆環境『CyTeX』の紹介。",
    hosting: {
      name: "立命館大学サイバーセキュリティ研究室",
      img: "/service/cysec-icon.png",
      imgAlt: "Icon of CySec Lab.",
    },
  },
  {
    publishedAt: "2023-07-13",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/13/sec-dogo/",
    title: "サイバーセキュリティシンポジウム道後2023 参加記録",
    description: `6月29日〜6月30日にかけて サイバーセキュリティシンポジウム道後2023 が愛媛県の道後にて開催され、
      学生研究賞発表のために参加してきました。`,
    hosting: {
      name: "立命館大学サイバーセキュリティ研究室",
      img: "/service/cysec-icon.png",
      imgAlt: "Icon of CySec Lab.",
    },
  },
  {
    publishedAt: "2021-12-20",
    url: "http://www.rcc.ritsumei.ac.jp/2021/1220_12435/",
    title:
      "正規表現が ReDoS 脆弱になる 3 つの経験則 | アドベントカレンダー 2021 20日目",
    description:
      "正規表現がReDoS脆弱性になる原因、典型的な3つのパターン、その対策方法についてのまとめ。便利な正規表現ツールやライブラリも紹介！",
    hosting: {
      name: "立命館コンピュータクラブ",
      img: "/service/rcc-2019logo.png",
      imgAlt: "Icon of RCC.",
    },
  },
];
