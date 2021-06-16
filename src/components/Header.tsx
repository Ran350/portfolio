import {
  faGithub,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { VFC } from "react";

type Props = {
  title: string;
};

export const Header: VFC<Props> = ({ title }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <header
      className="w-full min-h-screen relative bg-center bg-cover flex flex-col justify-between text-white"
      style={{ backgroundImage: 'url("/chess.png")' }}
    >
      <nav className="mb-8 p-8 flex justify-between">
        <div className="">
          <Link href="/">
            <img className="rounded-full w-10" src="./myicon.jpg" alt="" />
          </Link>
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
            <h1
              key={title}
              className={path === currentPath ? "text-yellow-400" : ""}
            >
              <Link href={path}>
                <div className="m-4 text-2xl">{title}</div>
              </Link>
            </h1>
          ))}
        </div>
      </nav>

      <div>
        <div className="text-center text-4xl sm:text-6xl md:text-8xl font-telex">
          {title}
        </div>

        <div className="flex justify-center text-2xl">
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
