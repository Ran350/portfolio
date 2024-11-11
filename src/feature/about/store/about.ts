export const accounts: {
  service: string;
  url: string;
  image: {
    path: string;
    alt: string;
  };
}[] = [
  {
    service: "GitHub",
    url: "https://github.com/Ran350",
    image: {
      path: "/service/github.svg",
      alt: "GitHub",
    },
  },
  {
    service: "Twitter",
    url: "https://x.com/ran350jp",
    image: {
      path: "/service/twitter.svg",
      alt: "Twitter",
    },
  },
  {
    service: "BlueSky",
    url: "https://bsky.app/profile/ran350.bsky.social",
    image: {
      path: "/service/bluesky.svg",
      alt: "BlueSky",
    },
  },
  {
    service: "Instagram",
    url: "https://www.instagram.com/ran350_3d",
    image: {
      path: "/service/instagram.svg",
      alt: "Instagram",
    },
  },
  {
    service: "Hatena Blog",
    url: "https://ran350.hatenablog.jp/",
    image: {
      path: "/service/hatenablog.svg",
      alt: "Hatena Blog",
    },
  },
  {
    service: "Zenn",
    url: "https://zenn.dev/ran350",
    image: {
      path: "/service/zenn.svg",
      alt: "Zenn",
    },
  },
  {
    service: "Speaker Deck",
    url: "https://speakerdeck.com/ran350",
    image: {
      path: "/service/speakerdeck.svg",
      alt: "Speaker Deck",
    },
  },
  {
    service: "OpenProcessing",
    url: "https://openprocessing.org/user/208689",
    image: {
      path: "/service/openprocessing.png",
      alt: "OpenProcessing",
    },
  },
];

export const employments: {
  dateFrom: string;
  dateTo: string;
  title: string;
  descriptions: string[];
}[] = [
  {
    dateFrom: "2022/1",
    dateTo: "2023/5",
    title: "株式会社80&Company",
    descriptions: ["ECサイト構築プロジェクトで新規機能実装や内部品質改善"],
  },
  {
    dateFrom: "2021/11",
    dateTo: "2022/12",
    title: "株式会社データ変換研究所",
    descriptions: ["自律走行車の研究開発"],
  },
];

export const activities: {
  date: string;
  title: string;
  descriptions: string[];
}[] = [
  {
    date: "2024/11",
    title: "CODE BLUE 2024 学生スタッフ",
    descriptions: ["予定"],
  },
  {
    date: "2024/11",
    title: "Kansai Open Forum 2024",
    descriptions: [
      "ステージ企画 登壇",
      "「2038年問題が思ったよりヤバい。検出ツールを作って脅威性評価してみた論文」",
    ],
  },
  {
    date: "2024/9",
    title: "情報処理学会 論文誌ジャーナル「組込みシステム工学」特集 ",
    descriptions: [
      "査読付き論文誌（筆頭著者）",
      "「32bitを超えるtime_t型をもつ環境における2038年問題とその検出」",
    ],
  },
  {
    date: "2024/8",
    title: "セキュリティキャンプ2024ネクスト",
    descriptions: ["TCP/IP、DDNS、CDN、FPGA、C++についての講義を受講"],
  },
  {
    date: "2024/6",
    title: "ISACA大阪支部 研究講演",
    descriptions: [
      "研究発表",
      "「2038年問題の原因となりうるソースコードの自動検出手法の提案と実装」",
    ],
  },
  {
    date: "2024/3",
    title: "第54回セキュリティ心理学とトラスト研究発表会",
    descriptions: [
      "「SCATを用いた業務における電子メール誤送信の要因分析」",
      "（共著）",
    ],
  },
  {
    date: "2024/3",
    title: "公益財団法人アイコム電子通信振興財団奨学金 採択",
    descriptions: ["令和6年度 第21期 奨学生"],
  },
  {
    date: "2023/10",
    title: "ISACA Osaka Chapter Scholarship 採択",
    descriptions: ["ISACA 大阪支部 会員"],
  },
  {
    date: "2023/8",
    title: "Treasure 2023",
    descriptions: [
      "グランプリ賞 / バックエンド賞受賞",
      "「技術書のオンライン読書会サービス」を提案・実装・発表",
    ],
  },
  {
    date: "2023/7",
    title: "DICOMO2023 シンポジウム",
    descriptions: [
      "優秀プレゼンテーション賞 受賞",
      "「32bitを超えるtime_t型をもつ環境における2038年問題の検出手法の提案」を発表",
    ],
  },
  {
    date: "2023/6",
    title: "サイバーセキュリティシンポジウム道後2023",
    descriptions: [
      "学生研究賞 受賞",
      "「32bitを超えるtime_t型をもつ環境における2038年問題の検出手法の提案」を発表",
    ],
  },
  {
    date: "2022/11",
    title: "JPHacks 2022",
    descriptions: [
      "Best Hacking Sprint Award 賞 / イノベータ認定賞受賞",
      "スマホをリモコン化する共同プレゼンテーション支援ツールを開発",
    ],
  },
];

export const certificates: {
  date: string;
  title: string;
  descriptions: string[];
}[] = [
  {
    date: "2025/3",
    title: "修士（工学）予定",
    descriptions: [
      "立命館大学大学院",
      "情報理工学研究科 情報理工学専攻 博士前期課程 計算機科学コース",
    ],
  },
  {
    date: "2024/4",
    title: "情報処理安全確保支援士",
    descriptions: ["第028175号"],
  },
  {
    date: "2023/6",
    title: "情報処理安全確保支援士試験",
    descriptions: [],
  },
  {
    date: "2023/3",
    title: "学士（工学）",
    descriptions: ["立命館大学 情報理工学部 セキュリティネットワークコース"],
  },
  {
    date: "2022/12",
    title: "応用情報技術者試験",
    descriptions: [],
  },
];

export const developments: {
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  href: string;
}[] = [
  {
    title: "y2k38-checker",
    description:
      "C言語ソースコードから2038年問題を引き起こす可能性のあるコードを検出",
    image: {
      url: "/develop/y2k38-checker.png",
      alt: "y2k38-checker",
    },
    tags: ["clang-static-analyzer", "LLVM", "AST"],
    href: "https://github.com/cysec-lab/y2k38-checker",
  },
  {
    title: "スマートポインター【JPHacks】",
    description:
      "手元のスマホをリモコン化する、共同プレゼンテーション支援ツール",
    image: {
      url: "/develop/JPHacks.jpeg",
      alt: "スマートポインター",
    },
    tags: ["Electron", "React", "Spring-Boot"],
    href: "https://github.com/jphacks/D_2208",
  },
  {
    title: "ReDoS Checker for VSCode",
    description: "recheckを用いて正規表現のReDoS脆弱性を判定するVSCode拡張機能",
    image: {
      url: "/develop/redos-checker.jpg",
      alt: "ReDoS Checker for VSCode",
    },
    tags: ["recheck", "VSCode-Extension"],
    href: "https://github.com/Ran350/redos-checker-for-vscode",
  },
  {
    title: "CyTeX",
    description:
      "GitHub Codespacesを用いた 環境構築が容易な 日本語LaTeX執筆環境テンプレート",
    image: {
      url: "/develop/CyTeX.svg",
      alt: "CyTeX",
    },
    tags: ["LaTeX", "GitHub-Codespaces"],
    href: "https://github.com/Ran350/redos-checker-for-vscode",
  },
  {
    title: "MSZN Project | 見せ算",
    description:
      "M-1 2023 決勝ネタでさや香によって提案された「見せ算」に関するツールセットを提供",
    image: {
      url: "/develop/mszn.png",
      alt: "MSZN",
    },
    tags: ["Syntactic-Parsing", "Turborepo", "Next.js"],
    href: "https://mszn.vercel.app/",
  },
  {
    title: "ja-wordcloud",
    description:
      "高いカスタマイズ性と軽量性を備えた、日本語WordCloudを生成するサーバーレスWebアプリ",
    image: {
      url: "/develop/web-wordcloud.jpg",
      alt: "ja-wordcloud",
    },
    tags: ["Next.js", "TinySegmenter"],
    href: "https://github.com/ran350/ja-wordcloud",
  },
  {
    title: "make10",
    description: "make 10 パズルを解くnpmパッケージおよびWebアプリ実装",
    image: {
      url: "/develop/make10.png",
      alt: "make10",
    },
    tags: ["algorithm", "npm-package"],
    href: "https://github.com/ran350/make10",
  },
  {
    title: "calculator",
    description: "再帰下降構文解析による四則演算器の実装および Web UI",
    image: {
      url: "/develop/calculator.png",
      alt: "calculator",
    },
    tags: ["algorithm", "syntax-analysis"],
    href: "https://ran350.github.io/calculator-app",
  },

  {
    title: "数学表紙デザイン ジェネレーター",
    description: "数学の教科書の表紙風の画像を生成する Web アプリ",
    image: {
      url: "/develop/math-cover-generator.png",
      alt: "math-cover-generator",
    },
    tags: ["Three.js"],
    href: "https://ran350.github.io/media-processing/6/kadai5.html",
  },
];

export const presentations: {
  title: string;
  image: {
    url: string;
    alt: string;
  };
  tags: string[];
  href: string;
}[] = [
  {
    title: "たいとる",
    image: {
      url: "/develop/web-wordcloud.jpg",
      alt: "ja-wordcloud",
    },
    tags: ["Next.js"],
    href: "speakerdeck.com/",
  },
];
