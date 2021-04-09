import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div className="container m-auto">
      <Head>
        <title>M-H-D</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <main>

      </main>
      <footer>
      </footer>
    </div>
  )
}
