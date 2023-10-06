import Link from "next/link";

export const Footer = () => (
  <footer className="h-16 flex items-center bg-gray-50">
    <div className="w-full grid grid-cols-5">
      <h1 className="col-start-3 text-center">©2023 Ran350</h1>
      <div className="col-start-5 flex gap-8">
        <Link href="/">about</Link>
        <Link href="/article">article</Link>
      </div>
    </div>
  </footer>
);
