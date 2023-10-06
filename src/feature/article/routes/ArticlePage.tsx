import { FC } from "react";

import { Layout } from "@/components/Layout";

import { ArticleCard } from "../components/ArticleCard";
import { articles } from "../store/articles";

export const ArticlePage: FC = () => (
  <Layout>
    <h1 className="text-3xl font-bold text-center">Articles</h1>

    <div className="lg:mx-32 mx-0 my-8 grid gap-6">
      {articles.map((article) => (
        <ArticleCard key={article.url} {...article} />
      ))}
    </div>
  </Layout>
);
