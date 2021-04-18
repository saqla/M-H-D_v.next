import Head from 'next/head'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import { SwiperComponent } from '../components/swiper'

export default function Home() {
  return (
    <div className='container m-auto'>
      <Head>
        <title>M-H-D</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header />
      <main className='twoColumn-container'>
        <SwiperComponent />
        <Aside />
      </main>
      <footer></footer>
    </div>
  )
}
