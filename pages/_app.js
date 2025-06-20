import 'tailwindcss/tailwind.css'
import '../styles/index.css'
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Web OS</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
