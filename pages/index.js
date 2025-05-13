import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga';
import Meta from "../components/SEO/Meta";
import Head from 'next/head';


const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID;
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
    <Head>
        <title>Web OS - Home</title>
      </Head>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
