import Head from 'next/head'
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function Home() {
  return (
    <>
      <Head>
        <title>Peace | Software Developer</title>
        <meta name="description" content="I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Main />
    </>
  )
}