import React from 'react'
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
    // 5.5パッチノート公開（本公開版）
    href: 'https://sqex.to/7J7qa',
    src:
      'https://img.finalfantasyxiv.com/n/e9064e6f6a094d1c17bd01fa331fff7933dd5602.png?1618309015',
  },
  {
    // エッグハント
    href: 'https://sqex.to/oZAfv',
    src:
      'https://img.finalfantasyxiv.com/n/2595e2d5fd8325ad4be504dca6140c5ee23a4167.png?1618309015',
  },
  {
    // オンラインストア アルフィノなりきりセット
    href: 'https://sqex.to/qkUZv',
    src:
      'https://img.finalfantasyxiv.com/n/59901b3ee1d4d2db4f83284ad37dc675fdb2a047.png?1618309015',
  },
  {
    // PS5版 βテスト開始
    href: 'https://sqex.to/3drNc',
    src:
      'https://img.finalfantasyxiv.com/n/821e34bb00fe0d35fcac029694f11184f2fd8eef.png?1618309015',
  },
  {
    // デジタルファンフェス
    href: 'https://sqex.to/S0eaN',
    src:
      'https://img.finalfantasyxiv.com/n/fe19133ea0935e1ab9668450a18394468c11d120.png?1618309015',
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
