import { Metadata } from "next";

import { AboutPage } from "@/feature/about/routes/AboutPage";

export const metadata: Metadata = {
  title: "Ran350 | Portfolio",
  description: "my portfolio site",
};

export default function IndexPage() {
  return <AboutPage />;
}
