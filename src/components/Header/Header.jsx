import Link from 'next/link'
import { GlobalMenu } from './GlobalMenu'

export const Header = () => {
  return (
    <>
      {/* タイトル */}
      <div className="flex-between my-2">
        <Link href="/">
          <a className="text-2xl italic mx-5 md:text-4xl md:mx-10 text-black">M-<span className="text-red-600">H</span>-D</a>
        </Link>
        <p className="text-sm mx-2 md:text-xl md:mx-5">Final Fantasy XIV 〜FCウェブページ〜</p>
      </div>
      <GlobalMenu />
    </>
  )
}
