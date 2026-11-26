import { AboutPage } from "@/feature/about/routes/AboutPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Ran350 | Portfolio",
  description: "my portfolio site",
  path: "/",
});

export default function IndexPage() {
  return <AboutPage />;
}
