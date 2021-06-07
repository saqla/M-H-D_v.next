import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
} from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, EffectCube, Autoplay])

const SWIPERITEMS = [
  {
    // 最新拡張パッケージ　予約開始
    href: 'https://jp.finalfantasyxiv.com/lodestone/topics/detail/5f4efcf41089816a231d22917c4e4bb7009cb0bf',
    src:
      'https://img.finalfantasyxiv.com/t/5f4efcf41089816a231d22917c4e4bb7009cb0bf.png?1621054248?16207955421620795542',
  },
  {
    //LINEスタンプ第３弾
    href: 'https://jp.finalfantasyxiv.com/lodestone/topics/detail/7e8a8d0cd82f28d9bfb4d19f2eef2f2f2fc290a5',
    src:
      'https://img.finalfantasyxiv.com/t/7e8a8d0cd82f28d9bfb4d19f2eef2f2f2fc290a5.png?16219083385',
  },
]

export const SwiperComponent = () => {
  return (
    <Swiper
      className='md:w-4/5 md:my-5 md:h-60 lg:h-64'
      spaceBetween={0}
      slidesPerView={1}
      effect='cube'
      cubeEffect={{ slideShadows: false }}
      autoplay={true}
      loop='true'
      grabCursor='true'
      loopAdditionalSlides={5}
      tag='section'
      wrapperTag='ul'
      navigation
      pagination
    >
      {SWIPERITEMS.map((item) => {
        return (
          <SwiperSlide key={item.href} taf='li'>
            <Link href={item.href}>
              <img src={item.src} className='swiper-images' />
            </Link>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}
