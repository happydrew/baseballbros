import type { AppProps } from 'next/app'
import { type ReactElement } from 'react'
import Script from 'next/script';
import Head from 'next/head';
import '../style.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, []);

  return (<>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    </Head>

    {/* Google tag (gtag.js)  */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MSSVTCG2PL"></Script>
    <Script>
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-MSSVTCG2PL');
      `}
    </Script>

    <Component {...pageProps} />
  </>)
}
