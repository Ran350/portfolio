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
  hosting: {
    name: string;
    img: string;
    imgAlt: string;
  };
};
export const ArticleCard: FC<Props> = (props) => (
  <div className="border border-border rounded-lg h-auto w-full">
    <div className="p-4 flex flex-col gap-3 relative">
      <span className="absolute top-3 right-4 material-symbols-outlined text-lg text-gray-400">
        <Link href={props.url}>open_in_new</Link>
      </span>

      <p className="text-sm text-gray-400">{props.publishedAt}</p>

      <Link href={props.url}>
        <h2 className="font-semibold text-lg text-gray-600 underline hover:text-cyan-600">
          {props.title}
        </h2>
      </Link>

      <p className="text-sm text-gray-400">{props.description}</p>

      <div className="flex gap-2">
        <img
          src={props.hosting.img}
          alt={props.hosting.imgAlt}
          className="w-5 h-5"
        />
        <p className="text-sm text-gray-400">{props.hosting.name}</p>
      </div>
    </div>
  </div>
);
