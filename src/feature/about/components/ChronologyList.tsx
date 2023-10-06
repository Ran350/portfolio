import { Simplify } from "@/types/Simplify";
import { Chronology } from "./Chronology";

type Props = {
  chronologyList: Simplify<Parameters<typeof Chronology>[0]>[];
};

export const ChronologyList = ({
  chronologyList: chronologyPropsList,
}: Props) => (
  <div className="-my-6 grid grid-cols-1 divide-y">
    {chronologyPropsList.map((chronologyProps) => (
      <div key={chronologyProps.title} className="py-6">
        <Chronology
          dateFrom={chronologyProps.dateFrom}
          dateTo={chronologyProps.dateTo}
          title={chronologyProps.title}
          descriptions={chronologyProps.descriptions}
        />
      </div>
    ))}
  </div>
);
