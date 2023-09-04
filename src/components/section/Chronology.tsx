type Props = {
  dateFrom: string;
  dateTo?: string | "現在";
  title: string;
  descriptions?: string[];
};

export const Chronology = ({
  dateFrom,
  dateTo,
  title,
  descriptions,
}: Props) => (
  <div className="grid grid-cols-12 gap-x-8 gap-y-2">
    <p className="col-span-4 text-gray-500 text-sm">
      {dateFrom}
      {dateTo && <> 〜 {dateTo}</>}
    </p>

    <h2 className="col-start-1 col-span-4 text-xl font-bold text-gray-600">
      {title}
    </h2>

    <p className="col-end-13 col-span-8">
      {descriptions?.map((description) => (
        <p key={description}>{description}</p>
      ))}
    </p>
  </div>
);
