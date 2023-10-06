import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: Props) => (
  <section>
    <h2 className="mb-6 w-full font-bold text-aiiro md:text-3xl text-xl">
      {title}
    </h2>
    {children}
  </section>
);
