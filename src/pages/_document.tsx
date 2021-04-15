import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
        </Head>
        <body className="bg-gray-100 font-sans text-gray-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
