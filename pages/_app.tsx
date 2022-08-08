import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Head>
      <meta charSet='UTF-8' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name='author' content='Stefan Bartl' />
      <meta name='description' content='"The Odin Project" - Project: Duplicate of Facebook.'/>
      <meta name='keywords' content='Social Media, Development, Training, The Odin Project, TOP, next.js, Frontend, Backend'/>
      <link rel="shortcut icon" href="/graphics/logos/dev_logo.png" />
      <title>FREI:raum (alpha-WKD)</title>
    </Head>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
