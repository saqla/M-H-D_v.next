import Image from 'next/image'
import Link from 'next/link'

const BANNERITEMS = [
  {
    // Online Store
    href:
      'https://store.finalfantasyxiv.com/ffxivstore/ja-jp/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_onlinestore',
    alt: 'OnlineStore',
    src: 'https://img.finalfantasyxiv.com/lds/banner/914/LDS_ffxivos_ja.jpg',
  },
  {
    // ジョブガイド
    href:
      'https://jp.finalfantasyxiv.com/jobguide/battle/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_jobguide',
    alt: 'OnlineStore',
    src: 'https://img.finalfantasyxiv.com/lds/banner/502/jobguide_v50_ja.jpg',
  },
  {
    // UIガイド
    href:
      'https://jp.finalfantasyxiv.com/uiguide/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_uiguide',
    alt: 'OnlineStore',
    src: 'https://img.finalfantasyxiv.com/lds/banner/669/pc_uiguide_ja.jpg',
  },
  {
    // 友達招待キャンペーン
    href:
      'https://jp.finalfantasyxiv.com/lodestone/special/friend_recruit/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_friendrecruit',
    alt: 'OnlineStore',
    src:
      'https://img.finalfantasyxiv.com/lds/banner/201/bn_Recruit_a_Friend_ja.png',
  },
  {
    // FINAL FANTASY XIV COMPANION
    href:
      'https://jp.finalfantasyxiv.com/companion/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_app-companion',
    src:
      'https://img.finalfantasyxiv.com/lds/banner/609/ffxivcompanion_300x80.jpg',
  },
]

const Aside = () => {
  return (
    <div className='aside-container'>
      <ul className='py-3 md:flex md:justify-center md:flex-wrap md:gap-3 lg:block'>
        {/* フォーラム */}
        <ul className='flex justify-center mb-2'>
          <Link href='https://forum.square-enix.com/ffxiv/forum.php?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_forum'>
            <li className='forum'>
              <Image
                src='https://img.finalfantasyxiv.com/lds/h/3/_HKtFrUVpc6uMs5NUag3WWLnIc.png'
                alt='FORUM'
                width={93}
                height={80}
              />
            </li>
          </Link>
          {/* モグステ */}
          <Link href='https://sqex.to/Msp?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_mogstation'>
            <li className='mogStation'>
              <Image
                src='https://img.finalfantasyxiv.com/lds/h/3/GjsnqfVxPQrE4Jve8GvKZABF5w.png'
                alt='MogStation'
                width={93}
                height={80}
              />
            </li>
          </Link>
          {/* ブログ */}
          <Link href='https://jp.finalfantasyxiv.com/pr/blog/?utm_source=lodestone&utm_medium=pc_banner&utm_campaign=jp_officalblog'>
            <li className='blog'>
              <Image
                src='https://img.finalfantasyxiv.com/lds/h/C/Zft_LbIdHU4rMO4a4pC33zW1mE.png'
                alt='OFFICIAL BLOG'
                width={93}
                height={80}
              />
            </li>
          </Link>
        </ul>
        {BANNERITEMS.map((item) => {
          return (
            <Link key={item.alt} href={item.href}>
              <li key={item.href} className='banner-list'>
                <Image src={item.src} alt={item.alt} width={280} height={80} />
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export { Aside }
