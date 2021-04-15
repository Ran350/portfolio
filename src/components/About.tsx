import { ReactNode, VFC } from "react";
import { Card } from "../components/Card";

type Content = {
  content: string;
  link?: string;
};

type Props = {
  title: string;
  contents: Content[];
};

export const About: VFC<Props> = ({ title, contents }) => (
  <Card>
    <div className="m-4 mb-6 text-xl">
      <h1 className="w-min text-left text-gray-300">{title}</h1>

      <div className="mx-auto w-min">
        {/* FIXME:もっとスマートに書けへん？ */}
        {contents.map((c) => (
          <a href={c?.link} target="_blank" rel="noopener">
            <h1
              className={`text-left ${
                c.link ? "text-blue-800 hover:text-blue-400" : null
              }`}
            >
              {c.content}
            </h1>
          </a>
        ))}
      </div>
    </div>
  </Card>
);
