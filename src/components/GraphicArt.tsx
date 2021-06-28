import Image from "next/image";
import { VFC } from "react";

import { Card } from "./Card";

type Props = {
  imgPath: string;
  title: string;
};

export const GraphicArt: VFC<Props> = ({ imgPath, title }) => (
  <Card isHoverShadow={true}>
    <div className="flex flex-col justify-center">
      <Image src={imgPath} alt={title} width={360} height={360} />
    </div>
  </Card>
);
