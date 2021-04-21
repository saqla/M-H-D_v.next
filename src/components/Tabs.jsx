import { useState } from 'react'
import Image from 'next/image'

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  // Member
  const MEMBERS = [
    {
      src: '/member/Saqla.png',
      alt: 'Saqla',
      name: 'Saqla',
    },
    {
      src: '/member/Tukune.png',
      alt: 'Tukune',
      name: 'Tukune',
    },
    {
      src: '/member/Sphia.png',
      alt: 'Sphia',
      name: 'Sphia',
    },
    {
      src: '/member/Romana.png',
      alt: 'Romana',
      name: 'Romana',
    },
    {
      src: '/member/Miya.png',
      alt: 'Miya',
      name: 'Miya',
    },
  ]

  // TAb Title
  const TABSTITLES = [
    {
      tabsId: 1,
      tabClassName: toggleState === 1 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleState(1),
      tabTitle: 'M-H-D 紹介',
    },
    {
      tabsId: 2,
      tabClassName: toggleState === 2 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleState(2),
      tabTitle: '伝達事項',
    },
    {
      tabsId: 3,
      tabClassName: toggleState === 3 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleState(3),
      tabTitle: 'PLL情報',
    },
    {
      tabsId: 4,
      tabClassName: toggleState === 4 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleState(4),
      tabTitle: '便利リンク',
    },
  ]

  // Tab content
  const TABSCONTENTS = [
    {
      contentsId: 1,
      contentClassName:
        toggleState === 1 ? 'content active-content' : 'content',
      contentPackage: (
        // information
        <>
          <div>
            <h3>~FC紹介~</h3>
            <p>
              うちは社会人FCなので、平日夕方から休日に２～５人ほどが活動している
              少数民族ですが、少ない分みんな仲がイィですよぉ♪
              <br />
              基本、ログイン・ログアウト時の挨拶が出来ればどなたでも歓迎です！！
              <br />
              新規の方からベテラン、バトルメインにギャザクラ民と多岐に渡る仲間がいます。
              <br />
              イフ鯖で活動していますので、まずは体験からどうですか？＾＾
            </p>
          </div>
          {/* member */}
          <div>
            <h3>&#9734; メンバー一覧 &#9734;</h3>
            <ul className="flex">
              {MEMBERS.map((member) => {
                return (
                  <li className="mx-1">
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={100}
                      height={100}
                    />
                    <p className="text-center">{member.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className='tab-container'>
      <ul className='tabs-title flex justify-center'>
        {TABSTITLES.map((item) => {
          return (
            <li
              key={item.tabsId}
              className={item.tabClassName}
              onClick={item.tabOnClick}
            >
              <p className='text-sm'>{item.tabTitle}</p>
            </li>
          )
        })}
      </ul>

      <div className='tab-contents'>
        {TABSCONTENTS.map((content) => {
          return (
            <div key={content.contentsId} className={content.contentClassName}>
              <div className="text-sm m-3">{content.contentPackage}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
