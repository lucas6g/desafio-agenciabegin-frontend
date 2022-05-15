import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global';
import Head from 'next/head';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Book</title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
