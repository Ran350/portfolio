import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VFC } from "react";

type Props = {
  text: string;
  link: string;
  name: string;
  fontAwesome: IconProp;
};

export const Button: VFC<Props> = ({ text, link, name, fontAwesome }) => (
  <a href={link} target="_blank" rel="noreferrer">
    <button className="bg-white m-2 px-6 py-2 border-transparent rounded-xl shadow text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <span className="pr-4">
        <FontAwesomeIcon title={name} icon={fontAwesome} />
      </span>
      <span>{text}</span>
    </button>
  </a>
);
