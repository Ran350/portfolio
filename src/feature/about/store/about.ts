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
    url: "https://twitter.com/ran350jp",
    image: {
      path: "/service/twitter.svg",
      alt: "Twitter",
    },
  },
  {
    service: "note",
    url: "https://note.com/ran350",
    image: {
      path: "/service/note.svg",
      alt: "note",
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
    service: "Qiita",
    url: "https://qiita.com/Ran350",
    image: {
      path: "/service/qiita.png",
      alt: "Qiita",
    },
  },
  {
    service: "Zenn",
    url: "https://zenn.dev/ran350",
    image: {
      path: "/service/zenn.jpg",
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
];

export const employments: {
  dateFrom: string;
  dateTo: string;
  title: string;
  descriptions: string[];
}[] = [
  {
    dateFrom: "2022/1",
    dateTo: "現在",
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
    href: "https://github.com/ran350/ja-wordcloud",
  },
  {
    title: "redos-checker-for-vscode",
    description: "recheckを用いて正規表現のReDoS脆弱性を判定するVSCode拡張機能",
    image: {
      url: "/develop/redos-checker.jpg",
      alt: "redos-checker-for-vscode",
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
