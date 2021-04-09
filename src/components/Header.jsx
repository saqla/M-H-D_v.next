import React from 'react'
import Link from 'next/link'
import { GlobalMenu } from './GlobalMenu'

export const Header = () => {
  return (
    <div>
      {/* タイトル */}
      <div className="flex-between my-2">
        <Link href="https://m-h-d-v-next.vercel.app/">
          <h1 className="text-2xl italic mx-5 md:text-4xl md:mx-10 lg:text-6xl">M-<span className="text-red-600">H</span>-D</h1>
        </Link>
        <p className="text-sm mx-2 md:text-xl md:mx-5 lg:text-3xl">Final Fantasy XIV 〜FCウェブページ〜</p>
      </div>
      <GlobalMenu />
    </div>
  )
}
