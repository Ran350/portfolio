import Link from "next/link";
import { VFC } from "react";
import { useRouter } from "next/router";

type Props = {
  textColor?: string;
};

export const HeaderNavi: VFC<Props> = ({ textColor = "text-write" }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
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
            className={path === currentPath ? "text-yellow-400" : textColor}
          >
            <Link href={path}>
              <div className="m-4 text-2xl">{title}</div>
            </Link>
          </h1>
        ))}
      </div>
    </nav>
  );
};
