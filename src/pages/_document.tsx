import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

type Props = {};

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <script></script> 
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
