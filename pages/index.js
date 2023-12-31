import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Avinash | Web Developer</title>
        <link rel="icon" href="/navLogo.svg" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}
