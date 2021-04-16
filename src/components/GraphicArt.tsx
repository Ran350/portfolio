import { VFC } from "react";
import { Card } from "./Card";

type Props = {
  imgPath: string;
  title: string;
};

export const GraphicArt: VFC<Props> = ({ imgPath, title }) => (
  <Card isHoverShadow={true}>
    <img src={imgPath} alt={title} className="w-full" />
  </Card>
);
