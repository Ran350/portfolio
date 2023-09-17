import { ReactNode } from "react";

import { Footer } from "../components/Footer";

import { Header } from "./Header";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className="font-opensans text-gray-700 min-h-screen">
      <Header />
      <main className="flex-grow lg:mx-60 md:mx-32 mx-6">{children}</main>
      <Footer />
    </div>
  );
};
