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

const HatenaBlog: Article["hosting"] = {
  name: "はてなブログ",
  img: "/service/hatenablog.svg",
  imgAlt: "Icon of HatenaBlog.",
};

const CysecLab: Article["hosting"] = {
  name: "立命館大学サイバーセキュリティ研究室",
  img: "/service/cysec-icon.png",
  imgAlt: "Icon of CySec Lab.",
};

const WantedlyBlog: Article["hosting"] = {
  name: "Wantedly Engineer Blog | Wantedly, Inc.",
  img: "/service/Wantedly_Mark_LightBG.svg",
  imgAlt: "Icon of Wantedly, Inc.",
};

const PepaboTechPortal: Article["hosting"] = {
  name: "Pepabo Tech Portal | GMO ペパボ 株式会社",
  img: "/service/pepapon_regular_rgb.svg",
  imgAlt: "Icon of GMO Pepabo, Inc.",
};

const RCCBlog: Article["hosting"] = {
  name: "立命館コンピュータクラブ",
  img: "/service/rcc-2019logo.png",
  imgAlt: "Icon of RCC.",
};

export const articles: Article[] = [
  {
    publishedAt: "2024-01-14",
    url: "https://cysec.ise.ritsumei.ac.jp/2024/01/14/review-paper-via-github-pull-request/",
    title: "GitHub Pull Request をもちいた論文レビュー添削のすゝめ",
    description:
      "Pull Request 機能は、論文添削においても非常に有用だと考えています。実際に、本研究室では本年度から卒論添削で利用しています。そこで本記事では、Pull Request 機能を使った論文添削のメリットや運用方法について紹介します。",
    hosting: CysecLab,
  },
  {
    publishedAt: "2024-01-08",
    url: "https://ran350.hatenablog.jp/entry/2024/01/08/211135",
    title: "2023年振り返り & 2024年の抱負",
    description:
      "2023年の12ヶ月を振り返り、得た知見と経験をKPTで整理しました。この一年間の学びを踏まえて、2024年の抱負を綴っています。",
    hosting: HatenaBlog,
  },
  {
    publishedAt: "2024-01-08",
    url: "https://cysec.ise.ritsumei.ac.jp/2024/01/08/thesis-git-repository/",
    title: "卒業論文のためのGitHub運用法",
    description:
      "所属するサイバーセキュリティ研究室での卒業論文のためのGitHub運用法について紹介している",
    hosting: CysecLab,
  },
  {
    publishedAt: "2024-01-07",
    url: "https://cysec.ise.ritsumei.ac.jp/2024/01/07/bachelor-thesis-lecture/",
    title: "卒論に迷えるB4生へ 卒論執筆 指南書を授けたい",
    description:
      "卒論を控えるB4生がスムーズに卒論を執筆し始められるように卒論執筆指南書を作成し、卒論執筆講座で共有した話。",
    hosting: CysecLab,
  },
  {
    publishedAt: "2023-09-29",
    url: "https://www.wantedly.com/companies/wantedly/post_articles/545209",
    title: "Ruby の型システムの現実的な運用を、先入観にとらわれずに考えてみた",
    description:
      "今回のインターンでは 3 週間 DX (Developer Experience) squadに所属し、「Wantedly における Ruby コードベースへの型システムの導入」をテーマに取り組んでいました。本記事では、その仮説検証の過程や調査記録を紹介します。",
    hosting: WantedlyBlog,
  },
  {
    publishedAt: "2023-09-29",
    url: "https://tech.pepabo.com/2023/09/29/summer-internship-2023-ran350/",
    title:
      "【GMO ペパボ サマーインターン 2023】SUZURI 事業部で ショップページ刷新 と SNS シェア文生成機能をリリースした話 (らん)",
    description:
      "GMO ペパボサマーインターン 2023 にて SUZURI 事業部で行った取り組みやイベントを中心に、インターン参加記録をお送りします。",
    hosting: PepaboTechPortal,
  },
  {
    publishedAt: "2023-07-22",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/22/cytex/",
    title: "GitHub Codespacesを用いた日本語LaTeX執筆環境『CyTeX』を作った話",
    description:
      "環境構築が容易で、Git管理可能、無料で利用可能な日本語LaTeX執筆環境『CyTeX』の紹介。",
    hosting: CysecLab,
  },
  {
    publishedAt: "2023-07-13",
    url: "https://cysec.ise.ritsumei.ac.jp/2023/07/13/sec-dogo/",
    title: "サイバーセキュリティシンポジウム道後2023 参加記録",
    description: `6月29日〜6月30日にかけて サイバーセキュリティシンポジウム道後2023 が愛媛県の道後にて開催され、
      学生研究賞発表のために参加してきました。`,
    hosting: CysecLab,
  },
  {
    publishedAt: "2021-12-20",
    url: "http://www.rcc.ritsumei.ac.jp/2021/1220_12435/",
    title:
      "正規表現が ReDoS 脆弱になる 3 つの経験則 | アドベントカレンダー 2021 20日目",
    description:
      "正規表現がReDoS脆弱性になる原因、典型的な3つのパターン、その対策方法についてのまとめ。便利な正規表現ツールやライブラリも紹介！",
    hosting: RCCBlog,
  },
  {
    publishedAt: "2020-12-19",
    url: "http://www.rcc.ritsumei.ac.jp/2020/1219_11083/",
    title:
      "#Nodevember と 3DCGにおけるノードの魅力 | アドベントカレンダー 2020 19日目",
    description:
      "#Nodevemberは、毎年11月に行われるノードベースの3DCG作品を盛り上げるSNS上のイベントです。#Nodevemberを通して3DCGにおけるノードの魅了をお伝えします。",
    hosting: RCCBlog,
  },
];
