import React from 'react'
import Link from 'next/link'

export const GlobalMenu = () => {
  return (
    <div className="hidden md:block">
      {/* グローバルメニュー */}
      <ul className="flex-around bg-black text-white text-2xl py-1">
        <li className="y-border">
          <Link href="/">
            <a className="mx-3 cursor-pointer">トップページ</a>
          </Link>
        </li>
        <li className="y-border">
          <Link href="https://jp.finalfantasyxiv.com/lodestone/">
            <a className="mx-3 cursor-pointer">トピックス</a>
          </Link>
        </li>
        {/* <li className="y-border">
          <Link href="">
            <a className="mx-3 cursor-pointer">設定参考</a>
          </Link>
        </li> */}
      </ul>
    </div>
  )
}
