import Link from "next/link";
import { FC } from "react";

type Props = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
};
export const BlogCard: FC<Props> = (props) => (
  <div className="border border-border rounded-lg h-auto w-full cursor-pointer">
    <Link href={`/blog/${props.slug}`}>
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xs text-gray-400">{props.publishedAt}</h2>

        <h2 className="font-semibold text-lg underline">{props.title}</h2>

        <p className="text-sm text-gray-500">{props.description}</p>

        <p className="text-xs text-blue-400 flex gap-2">
          {props.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>
      </div>
    </Link>
  </div>
);
