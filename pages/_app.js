import Script from 'next/script';
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Head> 
     <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
     <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
    </Head>
      <Component {...pageProps} />
     
    </>
  )
}

export default MyApp
