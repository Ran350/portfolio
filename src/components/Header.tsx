import { Telex } from "next/font/google";

import Link from "next/link";

const telex = Telex({
  subsets: ["latin"],
  weight: "400",
});

export const Header = () => (
  <header className="xl:px-60 lg:px-32 md:px-16 px-4 h-16 flex items-center justify-between">
    <Link href="/">
      <h1 className={`text-xl ${telex.className}`}>Ran350</h1>
    </Link>

    <div className="flex gap-8 md:text-lg text-base">
      <Link href="/">about</Link>
      <Link href="/article">article</Link>
    </div>
  </header>
);
