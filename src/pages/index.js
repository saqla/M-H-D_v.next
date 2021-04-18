import Head from 'next/head'
import { Aside } from '../components/Aside'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { SwiperComponent } from '../components/Swiper'
import { TopTitle } from '../components/TopTitle'

export default function Home() {
  return (
    <div className='container m-auto'>
      <Head>
        <title>M-H-D</title>
      </Head>

      <Header />
      <main className='twoColumn-container'>
        <div className='left-contents'>
          <SwiperComponent />
          <TopTitle />
        </div>

        <div className='right-contents'>
          <Aside />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
