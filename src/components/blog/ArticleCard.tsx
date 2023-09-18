import { FC } from "react";

type Props = {
  publishedAt: string;
  url: string;
  title: string;
  description: string;
  tags: string[];
  host: string;
};
export const ArticleCard: FC<Props> = (props) => (
  <div className="border border-border rounded-lg h-auto w-full cursor-pointer">
    <a href={props.url} target="_blank" rel="noopener noreferrer">
      <div className="p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-xs text-gray-400">
            {props.publishedAt} / {props.host}
          </p>
          <span className="material-symbols-outlined text-md text-gray-300">
            open_in_new
          </span>
        </div>
        <h2 className="font-semibold text-lg underline">{props.title}</h2>

        <p className="text-sm text-gray-500">{props.description}</p>

        <p className="text-xs text-blue-400 flex gap-2">
          {props.tags.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </p>
      </div>
    </a>
  </div>
);
