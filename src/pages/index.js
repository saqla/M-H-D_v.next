import Head from 'next/head'
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
        <div className="bg-red-500 w-2/6">aside contents</div>
      </main>
      <footer></footer>
    </div>
  )
}
