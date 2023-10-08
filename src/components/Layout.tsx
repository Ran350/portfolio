import { Open_Sans } from "next/font/google";
import { ReactNode } from "react";

import { Footer } from "../components/Footer";
import { Header } from "./Header";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={`text-gray-700 min-h-screen ${openSans.className}`}>
      <Header />
      <main className="xl:px-60 lg:px-32 md:px-16 px-4">{children}</main>
      <Footer />
    </div>
  );
};
