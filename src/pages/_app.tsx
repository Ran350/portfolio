import { AppProps } from "next/app";

import { useGTag } from "@/feature/googleAnalytics/useGTags";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useGTag();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
