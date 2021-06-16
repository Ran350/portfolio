import {
  faGithub,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VFC } from "react";

export const Footer: VFC = () => (
  <div className="bg-gray-200 shadow-inner py-4 px-16 text-gray-400 flex justify-between">
    <div>
      <a href="/">Home</a>
      <a href="/gallery" className="mx-4">
        Gallery
      </a>
      <a href="/contact">Contact</a>
    </div>

    <h1>©2021 Ran</h1>

    <div>
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
          <FontAwesomeIcon title={name} icon={icon} className="ml-4 text-xl" />
        </a>
      ))}
    </div>
  </div>
);
