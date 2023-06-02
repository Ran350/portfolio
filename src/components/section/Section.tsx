import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: Props) => (
  <section>
    <h2 className="mb-6 w-full font-bold text-aiiro text-3xl">{title}</h2>
    {children}
  </section>
);
