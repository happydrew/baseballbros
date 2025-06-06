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
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />

      {/* Google Adsense */}
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4907197973761221" crossOrigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-4907197973761221" />

      {/* clickadilla */}
      {/* <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="314085"></script> */}

    </Head>

    {/* adsterra banner */}
    <Script type="text/javascript">
      {`
      atOptions = {
        'key' : '8a7438b49174eebfc88793b361af2b7b',
        'format' : 'iframe',
        'height' : 600,
        'width' : 160,
        'params' : {}
	    };
    `}
    </Script>
    <Script type="text/javascript" src="//www.highperformanceformat.com/8a7438b49174eebfc88793b361af2b7b/invoke.js"></Script>

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
