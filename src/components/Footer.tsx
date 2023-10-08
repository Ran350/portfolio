import Link from "next/link";

export const Footer = () => (
  <footer className="xl:px-60 lg:px-32 md:px-16 px-4 py-6 bg-gray-50 grid grid-cols-3 text-xs md:text-base text-gray-500">
    <h1 className="col-start-2 text-center">©2023 Ran350</h1>

    <div className="col-start-3">
      <div className="ml-auto w-fit flex flex-col md:flex-row md:gap-8">
        <Link href="/">about</Link>
        <Link href="/article">article</Link>
      </div>
    </div>
  </footer>
);
