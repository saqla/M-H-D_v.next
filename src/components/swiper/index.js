import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, EffectCoverflow, Autoplay])

export const SwiperComponent = () => {
  return (
    <Swiper
      className='md:w-4/5 md:mt-5'
      spaceBetween={0}
      slidesPerView={1}
      effect='coverflow'
      coverflowEffect={{
        slideShadows: false,
      }}
      autoplay={true}
      loop='true'
      loopAdditionalSlides={5}
      tag="section"
      wrapperTag="ul"
      breakpoints={{
        768: {
          slidesPerView: 3,
        },
      }}
      navigation
      pagination
    >
      {/* Slide-1 */}
      <SwiperSlide className='cursor-pointer' tag="li">
        <Link href='https://sqex.to/7J7qa'>
          <img
            src='https://img.finalfantasyxiv.com/n/e9064e6f6a094d1c17bd01fa331fff7933dd5602.png?1618309015'
            className='w-3/4 m-auto'
          />
        </Link>
      </SwiperSlide>
      {/* Slide-2 */}
      <SwiperSlide className='cursor-pointer' tag="li">
        <Link href='https://sqex.to/oZAfv'>
          <img
            src='https://img.finalfantasyxiv.com/n/2595e2d5fd8325ad4be504dca6140c5ee23a4167.png?1618309015'
            className='w-3/4 m-auto'
          />
        </Link>
      </SwiperSlide>
      {/* Slide-3 */}
      <SwiperSlide className='cursor-pointer' tag="li">
        <Link href='https://sqex.to/qkUZv'>
          <img
            src='https://img.finalfantasyxiv.com/n/59901b3ee1d4d2db4f83284ad37dc675fdb2a047.png?1618309015'
            className='w-3/4 m-auto'
          />
        </Link>
      </SwiperSlide>
      {/* Slide-4 */}
      <SwiperSlide className='cursor-pointer' tag="li">
        <Link href='https://sqex.to/3drNc'>
          <img
            src='https://img.finalfantasyxiv.com/n/821e34bb00fe0d35fcac029694f11184f2fd8eef.png?1618309015'
            className='w-3/4 m-auto '
          />
        </Link>
      </SwiperSlide>
      {/* Slide-5 */}
      <SwiperSlide className='cursor-pointer' tag="li">
        <Link href='https://sqex.to/S0eaN'>
          <img
            src='https://img.finalfantasyxiv.com/n/fe19133ea0935e1ab9668450a18394468c11d120.png?1618309015'
            className='w-3/4 m-auto'
          />
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}
