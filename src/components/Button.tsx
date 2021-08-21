import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FC } from "react";

type InnerButtonProps = {
  text: string;
  name: string;
  fontAwesome: IconProp;
};

type ButtonProps = InnerButtonProps & { link: string; isSameDomain: boolean };

const InnerButton: FC<InnerButtonProps> = ({ text, name, fontAwesome }) => (
  <button className="bg-white m-2 px-6 py-2 border-transparent rounded-xl shadow text-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110  focus:outline-none">
    <span className="pr-4">
      <FontAwesomeIcon title={name} icon={fontAwesome} />
    </span>
    <span>{text}</span>
  </button>
);

export const Button: FC<ButtonProps> = ({
  text,
  link,
  name,
  fontAwesome,
  isSameDomain,
}) => (
  <>
    {isSameDomain ? (
      <Link href={link} passHref>
        <a>
          <InnerButton text={text} name={name} fontAwesome={fontAwesome} />
        </a>
      </Link>
    ) : (
      <a href={link} target="_blank" rel="noreferrer">
        <InnerButton text={text} name={name} fontAwesome={fontAwesome} />
      </a>
    )}
  </>
);
