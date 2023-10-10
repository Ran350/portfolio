import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  text: string;
};
export const Tooltip: FC<Props> = (props) => (
  <div className="relative group">
    {props.children}
    <div className="absolute opacity-0  transform -translate-x-1/2 group-hover:opacity-100 left-1/2">
      <div className="bg-gray-800 text-white text-xs rounded p-2 whitespace-nowrap">
        {props.text}
      </div>
    </div>
  </div>
);
