import { VFC } from "react";

import { Card } from "../components/Card";

type Props = {
  imgPath: string;
  link?: string;
  title: string;
  description: string;
};

export const Develop: VFC<Props> = ({ imgPath, link, title, description }) => (
  <Card isHoverShadow={true}>
    <a href={link} target="_blank" rel="noreferrer">
      {/* TODO: linkがundefinedのときはaタグが無効になるようにしたい */}
      <img src={imgPath} alt={title} className="object-cover h-64 w-full" />
      <h1 className="text-xl">{title}</h1>
      <h1 className="text-md text-gray-400">{description}</h1>
    </a>
  </Card>
);
