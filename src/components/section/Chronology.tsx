type Props = {
  dateFrom: string;
  dateTo?: string | "現在";
  title: string;
  descriptions: string[];
};

export const Chronology = ({
  dateFrom,
  dateTo,
  title,
  descriptions,
}: Props) => (
  <div>
    <p className="text-gray-400 text-sm">
      {dateFrom}
      {dateTo && <> 〜 {dateTo}</>}
    </p>

    <div className="flex gap-2 md:gap-4 flex-col md:flex-row">
      <h2 className="md:w-1/3 md:text-xl text-base font-bold text-gray-600">
        {title}
      </h2>

      <p className="md:text-base text-sm text-gray-500">
        {descriptions.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </p>
    </div>
  </div>
);
