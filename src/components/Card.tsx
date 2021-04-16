import { ReactNode, VFC } from "react";

type Props = {
  children: ReactNode;
  isHoverShadow?: boolean;
};

export const Card: VFC<Props> = ({ children, isHoverShadow = false }) => {
  return (
    <>
      <div
        className={
          "bg-white m-2 border-transparent p-4 shadow" +
          (isHoverShadow && "transition hover:shadow-2xl duration-500 ease-out")
        }
      >
        {children}
      </div>
    </>
  );
};
