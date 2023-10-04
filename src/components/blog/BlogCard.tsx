import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  title: string;
  description: string;
  publishedAt: string;
};
export const BlogCard: FC<Props> = (props) => (
  <div className="border border-border rounded-lg h-auto w-full cursor-pointer">
    <Link href={props.href}>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm text-gray-400">{props.publishedAt}</p>

        <h2 className="font-semibold text-lg text-gray-600 underline hover:text-cyan-600">
          {props.title}
        </h2>

        <p className="text-sm text-gray-400">{props.description}</p>
      </div>
    </Link>
  </div>
);
