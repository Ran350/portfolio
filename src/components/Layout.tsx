import { FC } from "react";

import { Footer } from "../components/Footer";

export const Layout: FC = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
