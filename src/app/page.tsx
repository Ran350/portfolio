import { AboutPage } from "@/feature/about/routes/AboutPage";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Ran350 | Portfolio",
  description:
    "Ran350 のポートフォリオサイト。職歴・資格・活動・開発物を紹介しています。",
  path: "/",
});

export default function IndexPage() {
  return <AboutPage />;
}
