import { useState } from 'react'
import Image from 'next/image'
import { MEMBERS } from './Members'

export const Tabs = () => {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  // Member
  // const MEMBERS = [
  //   {
  //     membersId: 1,
  //     src: '/member/Saqla.png',
  //     alt: 'Saqla',
  //     name: 'Saqla',
  //   },
  //   {
  //     membersId: 2,
  //     src: '/member/Tukune.png',
  //     alt: 'Tukune',
  //     name: 'Tukune',
  //   },
  //   {
  //     membersId: 3,
  //     src: '/member/Sphia.png',
  //     alt: 'Sphia',
  //     name: 'Sphia',
  //   },
  //   {
  //     membersId: 4,
  //     src: '/member/Romana.png',
  //     alt: 'Romana',
  //     name: 'Romana',
  //   },
  //   {
  //     membersId: 5,
  //     src: '/member/Miya.png',
  //     alt: 'Miya',
  //     name: 'Miya',
  //   },
  // ]

  // TAb Title
  const TABSTITLES = [
    {
      tabsId: 1,
      tabClassName: toggleState === 1 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleTab(1),
      tabTitle: 'M-H-D 紹介',
    },
    {
      tabsId: 2,
      tabClassName: toggleState === 2 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleTab(2),
      tabTitle: '伝達事項',
    },
    {
      tabsId: 3,
      tabClassName: toggleState === 3 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleTab(3),
      tabTitle: 'PLL情報',
    },
    {
      tabsId: 4,
      tabClassName: toggleState === 4 ? 'tabs active-tabs' : 'tabs',
      tabOnClick: () => toggleTab(4),
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
            <ul className='flex flex-wrap'>
              {MEMBERS.map((member) => {
                return (
                  <li key={member.membersId} className='mx-1'>
                    <Image
                      src={member.src}
                      alt={member.alt}
                      width={90}
                      height={90}
                    />
                    <p className='text-center'>{member.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ),
    },
    {
      contentsId: 2,
      contentClassName:
        toggleState === 2 ? 'content active-content' : 'content',
      contentPackage: (
        // information
        <>
          {/* member */}
          <div>
            <h3>&#9734; メンバー一覧 &#9734;</h3>
            <ul className='flex'>
              {MEMBERS.map((member) => {
                return (
                  <li className='mx-1'>
                    <Image
                      key={member.membersId}
                      src={member.src}
                      alt={member.alt}
                      width={100}
                      height={100}
                    />
                    <p className='text-center'>{member.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ),
    },
    {
      contentsId: 3,
      contentClassName:
        toggleState === 3 ? 'content active-content' : 'content',
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
        </>
      ),
    },
    {
      contentsId: 4,
      contentClassName:
        toggleState === 4 ? 'content active-content' : 'content',
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
        </>
      ),
    },
  ]

  return (
    <div className='tabs-container'>
      <ul className='flex'>
        {TABSTITLES.map((item) => {
          return (
            <li
              key={item.tabsId}
              className={item.tabClassName}
              onClick={item.tabOnClick}
            >
              <p>{item.tabTitle}</p>
            </li>
          )
        })}
      </ul>

      <div className="flex-grow">
        {TABSCONTENTS.map((content) => {
          return (
            <div key={content.contentsId} className={content.contentClassName}>
              <div>{content.contentPackage}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
