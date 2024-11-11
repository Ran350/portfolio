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

const IPSJ: Article["hosting"] = {
  name: "情報処理学会 電子図書館",
  img: "/service/website.svg",
  imgAlt: "no image",
};

const KOF: Article["hosting"] = {
  name: "Kansai Open Forum",
  img: "/service/website.svg",
  imgAlt: "Icon of Kansai Open Forum.",
};

const Zenn: Article["hosting"] = {
  name: "Zenn",
  img: "/service/zenn.svg",
  imgAlt: "Icon of Zenn.",
};

const Qiita: Article["hosting"] = {
  name: "Qiita",
  img: "/service/qiita.png",
  imgAlt: "Icon of Qiita.",
};

export const articles: Article[] = [
  {
    publishedAt: "2024-11-09",
    url: "https://www.k-of.jp/2024/stage/y2k38-discussion",
    title:
      "Kansai Open Forum 2024 ステージ発表「2038年問題が思ったよりヤバい。検出ツールを作って脅威性評価してみた論文」",
    description:
      "Kansai Open Forum 2024 ステージ企画にて、開発中の2038年問題検出ツールについて紹介し、2038年問題の今後について議論しました。",
    hosting: KOF,
  },
  {
    publishedAt: "2024-09-15",
    url: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=239377&item_no=1&page_id=13&block_id=8",
    title: " 32bitを超えるtime_t型を持つ環境における2038年問題とその検出",
    description: "情報処理学会 論文誌 Vol.65 No.9（査読付き論文誌）",
    hosting: IPSJ,
  },
  {
    publishedAt: "2024-08-26",
    url: "https://ran350.hatenablog.jp/entry/2024/08/26/220706",
    title: "ブラウザのURLバーにURLを入力して決定キーを押した時になにが起こるか",
    description:
      "ブラウザ、TCP、TCP、イーサネット/IPルーティング、TLSレイヤにおいてどんな処理が行われるかを調べたメモです。",
    hosting: HatenaBlog,
  },
  {
    publishedAt: "2024-08-26",
    url: "https://ran350.hatenablog.jp/entry/2024/08/26/203843",
    title: "セキュリティキャンプ2024 ネクスト 参加記",
    description:
      "2024年8月12日～8月17日に開催されたセキュリティキャンプ2024にネクスト受講生として参加してきました。本ブログでは、いくつか受講した講義をピックアップして内容および感想を紹介します。",
    hosting: HatenaBlog,
  },
  {
    publishedAt: "2024-08-20",
    url: "https://ran350.hatenablog.jp/entry/2024/08/20/184209",
    title: "セキュリティ・キャンプ2024 ネクスト 応募課題晒し",
    description:
      "セキュリティ・キャンプ ネクストは、セキュリティ・キャンプ全国大会に対してさらに高度な教育を行うための特別プログラムです。選考において提出した課題を示します。",
    hosting: HatenaBlog,
  },

  {
    publishedAt: "2024-04-02",
    url: "https://cysec.ise.ritsumei.ac.jp/2024/04/02/4th-kyusec/",
    title: "第4回KYUSEC 参加記録",
    description:
      "2024年3月18日・19日に 鹿児島県にて開催された第4回九州サイバーセキュリティシンポジウム（KYUSEC）の参加記録。",
    hosting: CysecLab,
  },
  {
    publishedAt: "2024-01-20",
    url: "https://zenn.dev/ran350/scraps/2a3f91d890fd12",
    title:
      "マルチプラットフォーム対応Docker imageを配布してGitHub Codespacesで動かす",
    description:
      "ARM64/AMD64 両環境に対応したDocker Imageを作成、Docker Hubにpushし、GitHub Codespaceでコンテナを動作させたい",
    hosting: Zenn,
  },
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
    publishedAt: "2023-06-28",
    url: "https://ipsj.ixsq.nii.ac.jp/ej/?action=pages_view_main&active_action=repository_view_main_item_detail&item_id=228078&item_no=1&page_id=13&block_id=8",
    title: "32bitを超えるtime_t型をもつ環境における2038年問題の検出手法の提案",
    description: "マルチメディア，分散，協調とモバイルシンポジウム2023論文集",
    hosting: IPSJ,
  },
  {
    publishedAt: "2022-12-27",
    url: "https://qiita.com/80andco_tech_pr/items/10af32308f7b22c8b052",
    title: "スキーマ駆動開発 with Open API",
    description: "社内勉強会で登壇した内容を記事に書き起こしてもらいました。",
    hosting: Qiita,
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
