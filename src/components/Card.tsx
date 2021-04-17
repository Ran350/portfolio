import { FC } from "react";
import ClassNames from "classnames";
import classNames from "classnames";

type Props = {
  isHoverShadow?: boolean;
};

export const Card: FC<Props> = ({ children, isHoverShadow = false }) => (
  <div
    className={classNames("bg-white m-2 border-transparent p-4 shadow", {
      "transition hover:shadow-2xl duration-500 ease-out": isHoverShadow,
    })}
  >
    {children}
  </div>
);
