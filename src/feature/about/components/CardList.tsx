import { Simplify } from "@/types/Simplify";
import { Card } from "./Card";

type Props = {
  cardList: Simplify<Parameters<typeof Card>[0]>[];
};

export const CardList = ({ cardList }: Props) => (
  <div className="w-full flex flex-wrap justify-between gap-y-4 after:content-{a} after:w-72">
    {cardList.map((c) => (
      <Card
        key={c.title}
        title={c.title}
        image={c.image}
        description={c.description}
        href={c.href}
        tags={c.tags}
      />
    ))}
  </div>
);
