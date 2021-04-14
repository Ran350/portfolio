import { NextPage } from "next";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

const IndexPage: NextPage = () => (
  <>
    <Header title="Ran's Portfolio" />
    <Main />
  </>
);

export default IndexPage;
