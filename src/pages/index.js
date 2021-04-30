import Head from 'next/head'
import { Aside } from '../components/Main/Aside/Aside'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { SwiperComponent } from '../components/Main/Swiper'
import { TopTitle } from '../components/Main/TopTitle'
import { Tabs } from '../components/Main/Tabs'
import { GlobalMenu } from '../components/Header/GlobalMenu'
import { BottomMenu } from '../components/Footer/BottomMenu'

export default function Home() {
  return (
    <div className='container m-auto'>
      <Head>
        <title>M-H-D</title>
      </Head>

      <header>
        <Header />
        <GlobalMenu />
      </header>

      <main className='twoColumn-container'>
        <div className='left-contents'>
          <SwiperComponent />
          <TopTitle />
          <Tabs />
        </div>

        {/* <div className='right-contents'>
          <Aside />
        </div> */}
      </main>

      <footer>
        <Footer />
      </footer>
        <BottomMenu />
    </div>
  )
}
