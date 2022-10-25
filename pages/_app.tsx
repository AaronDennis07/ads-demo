import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from "next/script"

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <>
      <Script id="Adsense-id"  crossOrigin="anonymous" data-ad-client="ca-pub-6813609620822362" async strategy="afterInteractive" onError={(e)=>{console.error(e)}}
    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  />
  <Component {...pageProps} />
    </>
  )

  
}

export default MyApp


