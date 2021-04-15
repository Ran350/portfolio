import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
};

export const Card: VFC<Props> = ({ children }) => (
  <>
    <div className="bg-white m-2 border-transparent p-4 shadow">{children}</div>
  </>
);
