import '../styles/globals.css'
import Navbar from './components/Navbar'

function App({ Component, pageProps }: {Component: Component; pageProps: pageProps}) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default App