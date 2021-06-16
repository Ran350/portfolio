import { NextPage } from "next";

import { HeaderNavi } from "../components/HeaderNavi";
import { Layout } from "../components/Layout";

const ContactPage: NextPage = () => (
  <Layout>
    <HeaderNavi textColor="text-gray-600" />

    <h1 className="my-16 text-center text-3xl sm:text-4xl md:text-6xl font-telex">
      Contact
    </h1>

    <h1 className="text-center text-sm sm:text-md md:text-2xl">
      <span>If you want to get in contact feel free to say hello </span>
      <a
        className="text-blue-800 hover:text-blue-400"
        href="https://twitter.com/hoshina350"
        target="_blank"
        rel="noreferrer"
      >
        Twitter
      </a>
      <span> or </span>
      <a
        className="text-blue-800 hover:text-blue-400"
        href="https://www.instagram.com/ran350_3d/"
        target="_blank"
        rel="noreferrer"
      >
        Instagram
      </a>
    </h1>
  </Layout>
);

export default ContactPage;
