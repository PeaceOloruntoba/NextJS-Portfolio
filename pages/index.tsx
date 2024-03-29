import Head from 'next/head'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peace | Full Stack Software Engineer</title>
        <meta name="description" content="I'm a Full Stack Developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}