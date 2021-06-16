import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VFC } from "react";

import { HeaderNavi } from "./HeaderNavi";

type Props = {
  title: string;
  subTitles: string[];
  imageUrl: string;
};

export const Header: VFC<Props> = ({ title, imageUrl, subTitles }) => {
  return (
    <header
      className="w-full min-h-screen relative bg-center bg-cover flex flex-col justify-between text-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <HeaderNavi />

      <div className="filter drop-shadow-xl">
        <div className="text-center text-4xl sm:text-6xl md:text-8xl font-telex">
          {title}
        </div>

        <ul className="flex justify-center text-2xl">
          {subTitles.map((subtitle, index) => (
            <li
              key={subtitle}
              className={`p-2 border-current ${
                index !== 0 ? "border-l-2" : ""
              }`}
            >
              {subtitle}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-4 flex justify-center">
        {[
          {
            name: "Twitter",
            icon: faTwitter,
            url: "https://twitter.com/hoshina350",
          },
          {
            name: "Instagram",
            icon: faInstagram,
            url: "https://www.instagram.com/ran350_3d/",
          },
          {
            name: "GitHub",
            icon: faGithub,
            url: "https://github.com/Ran350",
          },
        ].map(({ name, icon, url }) => (
          <a href={url} key={name} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              title={name}
              icon={icon}
              className="m-8 text-3xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </a>
        ))}
      </div>
    </header>
  );
};
