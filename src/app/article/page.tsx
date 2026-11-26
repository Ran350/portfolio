import { ArticlePage } from "@/feature/article/routes/ArticlePage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Ran350 | Articles",
  description: "Ran350 が執筆した技術記事の一覧です。",
  path: "/article",
});

export default function BlogIndexPage() {
  return <ArticlePage />;
}
