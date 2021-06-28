import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { VFC } from "react";

type Props = {
  textColor?: string;
};

export const HeaderNavi: VFC<Props> = ({ textColor = "text-write" }) => {
  const router = useRouter();
  const currentPath = router.asPath;

  return (
    <nav className="p-8 flex justify-between">
      <Link href="/">
        <div className="flex flex-col justify-center">
          <Image
            src="/myicon.jpg"
            alt="header logo"
            width={42}
            height={42}
            className="rounded-full "
          />
        </div>
      </Link>

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
