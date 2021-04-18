import React from 'react'
import Link from 'next/link'

export const GlobalMenu = () => {
  return (
    <div className="hidden md:block">
      {/* グローバルメニュー */}
      <ul className="flex-around bg-black text-white text-2xl py-1 lg:text-4xl lg:py-3">
        <li className="y-border">
          <Link href="https://m-h-d.family/">
            <p className="mx-3 cursor-pointer">トップページ</p>
          </Link>
        </li>
        <li className="y-border">
          <Link href="https://jp.finalfantasyxiv.com/lodestone/">
            <p className="mx-3 cursor-pointer">トピックス</p>
          </Link>
        </li>
        <li className="y-border">
          <Link href="">
            <p className="mx-3 cursor-pointer">設定参考</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}
