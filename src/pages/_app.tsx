import { AppProps } from 'next/app';
import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=NTR&family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
      {/* <link rel="shortcut icon" href="/favicon.png" key="shortcutIcon" /> */}
      {/* <link rel="manifest" href="/manifest.json" /> */}
    </Head>
    <GlobalStyle />
    <Component {...pageProps} />
  </>
);

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding; 0;
    text-decoration: none;
    color: #707070;
    font-family: 'NTR', 'Noto Sans JP', sans-serif;
  }

  body {
    width: 100vw;
  }
`;

export default App;
