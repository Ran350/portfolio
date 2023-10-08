import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export const Section = ({ title, children }: Props) => (
  <section>
    <h2 className="md:mb-6 mb-2 w-full font-bold text-aiiro md:text-2xl text-xl">
      {title}
    </h2>
    {children}
  </section>
);
