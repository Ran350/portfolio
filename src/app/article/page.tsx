import { ArticlePage } from "@/feature/article/routes/ArticlePage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Ran350 | Articles",
  description: "List of my articles",
  path: "/article",
});

export default function BlogIndexPage() {
  return <ArticlePage />;
}
