import { Metadata } from "next";

export const SITE_URL = "https://ran350.jp";
export const SITE_NAME = "Ran350 | Portfolio";
const OG_IMAGE = {
  url: "/myicon.jpg",
  width: 400,
  height: 400,
  alt: "Ran350",
};

/**
 * ページごとの Metadata を生成する。
 * Next.js の metadata は openGraph / twitter をページ側で指定すると
 * layout 側の値を丸ごと上書きするため、共通値はここでまとめて付与する。
 */
export const createMetadata = ({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata => ({
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: SITE_NAME,
    url: path,
    title,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary",
    site: "@ran350jp",
    creator: "@ran350jp",
    title,
    description,
    images: [OG_IMAGE.url],
  },
});
