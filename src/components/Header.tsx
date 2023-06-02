import Link from "next/link";

export const Header = () => (
  <>
    <header className="px-8 h-16 flex items-center justify-between">
      <h1 className="text-xl font-telex">Ran350</h1>
      <div className="flex gap-8 text-lg">
        <Link href="/">about</Link>
        <Link href="/blog">blog</Link>
        <Link href="/gallery">gallery</Link>
      </div>
    </header>
  </>
);
