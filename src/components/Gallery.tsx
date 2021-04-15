import { VFC } from "react";
import { Card } from "../components/Card";

type Props = {
  imgPath: string;
  title: string;
};

export const Gallery: VFC<Props> = ({ imgPath, title }) => (
  <Card>
    <img src={imgPath} alt={title} />
  </Card>
);
