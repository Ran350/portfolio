import Image from "next/image";
import { VFC } from "react";

import { Card } from "../components/Card";

type Props = {
  imgPath: string;
  link?: string;
  title: string;
  description: string;
};

export const Develop: VFC<Props> = ({ imgPath, link, title, description }) => (
  <Card isHoverShadow={Boolean(link)}>
    <a href={link} target="_blank" rel="noreferrer">
      <Image
        src={imgPath}
        alt={title}
        width={360}
        height={300}
        className="object-cover h-64 w-full"
      />
      <h1 className="text-xl">{title}</h1>
      <h1 className="text-md text-gray-400">{description}</h1>
    </a>
  </Card>
);
