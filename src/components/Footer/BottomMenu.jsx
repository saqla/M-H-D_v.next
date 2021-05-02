import Link from 'next/link'
import Image from 'next/image'

const BOTTOMMENUITEMS = [
  {
    href: '/',
    src: '/return.png',
    alt: 'ホーム',
  },
  {
    href: 'https://jp.finalfantasyxiv.com/lodestone/',
    src: '/ingenuity.png',
    alt: 'トピックス',
  },
  // {
  //   href: '/',
  //   src: '/display_order_hotbar.png',
  //   alt: '支援協力',
  // },
  // {
  //   href: '/',
  //   src: '/repair.png',
  //   alt: '設定参考',
  // },
]

export const BottomMenu = () => {
  return (
    // ボトムメニュー
    <ul className='bottom-menu'>
      {BOTTOMMENUITEMS.map((item) => {
        return (
          <li key={item.href} className='bottom-menu-lists'>
            <Link href={item.href}>
              <a>
                <Image src={item.src} width={65} height={65} />
                <br />
              <p className="-mt-1 text-white">{item.alt}</p>
              </a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
