import Link from 'next/link'

const MENUITEMS = [
  {
    href: '/',
    title: 'トップページ',
  },
  {
    href: 'https://jp.finalfantasyxiv.com/lodestone/',
    title: 'トピックス',
  },
  // {
  //   href: '/',
  //   title: '設定参考',
  // },
]

export const GlobalMenu = () => {
  return (
    <div className='hidden md:block'>
      {/* グローバルメニュー */}
      <ul className='flex-around bg-black text-white text-2xl py-1'>
        {MENUITEMS.map((item) => {
          return (
            <li key={item.href} className='y-border'>
              <Link href={item.href}>
                <a className='mx-3 cursor-pointer'>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
