import { FC } from "react";

type Props = {
  title: string;
  button?: React.ReactNode;
};

export const Section: FC<Props> = ({ title, children, button }) => (
  <section className="m-12 text-center">
    <h1 className="mx-auto my-2 border-b-2 border-gray-200 p-2 w-1/2 text-3xl">
      {title}
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {children}
    </div>

    <>{!button ? null : button}</>
  </section>
);
