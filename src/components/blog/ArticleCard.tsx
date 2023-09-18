import { FC, ReactNode } from "react";

const Link: FC<{
  href: string;
  children: ReactNode;
}> = (props) => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer"
  >
    {props.children}
  </a>
);

type Props = {
  publishedAt: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  host: string;
};
export const ArticleCard: FC<Props> = (props) => (
  <div className="border border-border rounded-lg h-auto w-full">
    <div className="p-4 flex flex-col gap-2">
      <div className="flex justify-between">
        <p className="text-xs text-gray-400">
          {props.publishedAt} / {props.host}
        </p>

        <Link href={props.url}>
          <span className="material-symbols-outlined text-lg text-gray-400">
            open_in_new
          </span>
        </Link>
      </div>

      <Link href={props.url}>
        <h2 className="font-semibold text-lg underline">{props.title}</h2>
      </Link>

      <p className="text-sm text-gray-500">{props.description}</p>

      <p className="text-xs text-blue-400 flex gap-2">
        {props.tags.map((tag) => (
          <span key={tag}>#{tag}</span>
        ))}
      </p>
    </div>
  </div>
);
