import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRouter } from "next/router";
import { VFC } from "react";

type Props = {
  title: string;
};

export const Header: VFC<Props> = ({ title }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <>
      <header
        className="w-full min-h-screen relative bg-center bg-cover flex flex-col justify-between text-white text-lg md:text-2xl"
        style={{ backgroundImage: 'url("/chess.png")' }}
      >
        <nav className="mb-8 p-8 flex justify-between">
          <div className="">
            <a href="/">
              <img className="rounded-full w-10" src="./myicon.jpg" alt="" />
            </a>
          </div>

          <div className="flex my-auto">
            {[
              {
                path: "/",
                title: "Home",
              },
              {
                path: "/gallery",
                title: "Gallery",
              },
              {
                path: "/contact",
                title: "Contact",
              },
            ].map(({ path, title }) => (
              <div key={title} className={path === currentPath ? "text-yellow-400" : ""}>
                <a href={path} className="m-4">{title}</a>
              </div>
            ))}
          </div>
        </nav>

        <div>
          <div
            // style="font-family: 'Josefin Sans', 'Open Sans', sans-serif"
            className="text-center text-4xl sm:text-6xl md:text-8xl"
          >
            {title}
          </div>

          <div className="flex justify-center">
            <div className="m-2">
              <a href="/">Develop</a>
            </div>
            <div className="m-2 border-r-2 border-white"></div>
            <div className="m-2">
              <a href="/"> Graphic Arts</a>
            </div>
          </div>
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
            <a href={url} key={name} target="_blank" rel="noopener">
              <FontAwesomeIcon
                title={name}
                icon={icon}
                className="m-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </header>
    </>
  );
};
