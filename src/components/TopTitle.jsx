import React from 'react'
import Link from 'next/link'

export const TopTitle = () => {
  return (
    <div className='flex md:justify-center mb-3 md:mr-8'>
      <img
        src='/mhd-symbol.jpg'
        alt='M-H-D タイトルネーム'
        className='h-24 md:h-40 mx-4 md:mr-10'
      />
      <div className="ml-3">
        <h1 className='italic text-5xl md:text-8xl mb-1 md:mb-2'>
          M -{' '}
          <Link href='https://www.blogbear.xyz/article/category/fashioncheck'>
            <a className='text-red-600'>H</a>
          </Link>{' '}
          - D
        </h1>
        <p className='top-description text-sm md:text-xl py-2 md:text-center'>
          もぅ・・・<span className='text-red-600'>本気</span>・・・出してる
          <span className='text-red-600'>？</span>！
        </p>
      </div>
    </div>

    // <div className="grid-container">
    //   <img src='/mhd-symbol.jpg' alt='M-H-D タイトルネーム' className="top-symbol" />
    //   <h1 className='italic top-title'>
    //     M -{' '}
    //     <Link href='https://www.blogbear.xyz/article/category/fashioncheck'>
    //       <a className='text-red-600'>H</a>
    //     </Link>{' '}
    //     - D
    //   </h1>
    //   <p className="top-description">
    //     もぅ・・・<span className='text-red-600'>本気</span>・・・出してる
    //     <span className='text-red-600'>？</span>！
    //   </p>
    // </div>
  )
}
