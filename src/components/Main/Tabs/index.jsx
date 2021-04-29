import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MEMBERS } from './MEMBERS'

const Tabs = () => {
  const [toggleState, setToggleState] = useState(1)

  // 選択tabをactiveに
  const isActiveTab = (index) => {
    if (toggleState === index) {
      return 'tabs active-tabs'
    } else {
      return 'tabs'
    }
  }

  // 選択tabのcontentをactiveに
  const isActiveContent = (index) => {
    if (toggleState === index) {
      return 'content active-content'
    } else {
      return 'content'
    }
  }

  // Stateの変更
  const toggleTab = (index) => {
    setToggleState(index)
  }

  // -- Tabs Titles --
  const TABSTITLES = [
    {
      tabClassName: () => isActiveTab(1),
      tabOnClick: () => toggleTab(1),
      tabTitle: 'M-H-D 紹介',
    },
    {
      tabClassName: () => isActiveTab(2),
      tabOnClick: () => toggleTab(2),
      tabTitle: 'PLL情報',
    },
    // {
    //   tabClassName: () => isActiveTab(3),
    //   tabOnClick: () => toggleTab(3),
    //   tabTitle: '便利リンク',
    // },
  ]

  // -- Tabs Contents --
  const TABSCONTENTS = [
    {
      contentTitle: 'FC紹介',
      contentClassName: () => isActiveContent(1),
      contentPackage: (
        // information
        <>
          <div className='mb-5'>
            <h3>~FC紹介~</h3>
            <p>
              うちは社会人FCなので、平日夕方&#x1f307;から休日&#x1f3d6;に２～５人ほどが活動している
              少数FCですが、少ない分みんな仲がイィですよ♪
              <br />
              基本、ログイン・ログアウト時の挨拶&#x1f64b;が出来ればどなたでも歓迎です！！
              <br />
              イフ鯖で活動していて、
              現在は私を筆頭にギャザラー＆クラフターがメインだったり、
              バトル好きの方など巣立って行った人を含めいろんなタイプがいますので、
              新規・ベテラン問わずまずは体験からどうですか？&#x1f97a;
            </p>
          </div>
          <hr />
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
      contentTitle: 'PLL情報',
      contentClassName: () => isActiveContent(2),
      contentPackage: (
        // PLL
        <>
          <div>
            <h3>PLL速報</h3>
            <p className='pll-span'>
              <span className='text-red-600'>※</span>
              気付いた時点での情報になるので速報と言うほど早く無いかも（；^ω^）
            </p>
            <hr />
            <div className='m-auto'>
              <h3 className='pll-movie'>
                第63回
                <br />
                FFXIVプロデューサーレターLIVE
              </h3>
              <iframe
                width='300'
                height='185'
                src='https://www.youtube.com/embed/y1n-VFj2Fmg'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>

            <p className='mt-3 text-center'>
              第63回公式PLLまとめ →
              <Link href='https://forum.square-enix.com/ffxiv/threads/434924'>
                こちら
              </Link>
            </p>

            {/* <h4 class="text-center">パッチ5.3 先行版パッチノート初動作独自まとめは <a href="https://ffxivifmhd.com/pll/index.html">こちら</a> </h4> */}
            {/* <br> */}
            {/* <h4><span>☆告知☆</span> 第57回FFXIVプロデューサーレターLIVE</h4> */}
            {/* <p><u>日時  2020年2月6日（木）20:00頃から</u><br><br>詳しくは『<a href="https://jp.finalfantasyxiv.com/lodestone/topics/detail/fa7959927124a9084bbb205ae08dfcc4987212b0">こちら</a>』をご覧ください。</p> */}

            {/* <h4 class="text-center">パッチ5.3 特設サイトは <a href="https://jp.finalfantasyxiv.com/shadowbringers/patch_5_3/">こちら</a> </h4> */}
            <hr />

            <h3>パッチノート</h3>
            <ul className='flex-around text-base md:text-2xl tracking-widest'>
              <li>
                最新
                <Link href='https://jp.finalfantasyxiv.com/lodestone/topics/detail/f427e511207e1629b3e611662cf08321937e7389'>
                  <a>Patch5.5</a>
                </Link>
              </li>
              <li>
                過去の
                <Link href='https://jp.finalfantasyxiv.com/lodestone/special/patchnote_log/'>
                  パッチノート一覧
                </Link>
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      contentTitle: '便利リンク',
      contentClassName: () => isActiveContent(3),
      contentPackage: (
        // information
        <>
          <div>
            <h3>~FC紹介~</h3>
            <p>
              うちは社会人FCなので、平日夕方&#x1f307;から休日&#x1f3d6;に２～５人ほどが活動している
              少数FCですが、少ない分みんな仲がイィですよ♪
              <br />
              基本、ログイン・ログアウト時の挨拶&#x1f64b;が出来ればどなたでも歓迎です！！
              <br />
              イフ鯖で活動していて、
              現在は私を筆頭にギャザラー＆クラフターがメインだったり、
              バトル好きの方など巣立って行った人を含めいろんなタイプがいますので、
              新規・ベテラン問わずまずは体験からどうですか？&#x1f97a;
            </p>
          </div>
        </>
      ),
    },
  ]

  return (
    <div className='tabs-container'>
      <ul className='w-full flex'>
        {TABSTITLES.map((item) => {
          return (
            <li
              key={item.tabTitle}
              className={item.tabClassName()}
              onClick={item.tabOnClick}
            >
              <p className='text-base md:text-2xl'>{item.tabTitle}</p>
            </li>
          )
        })}
      </ul>

      <div className='flex-grow'>
        {TABSCONTENTS.map((content) => {
          return (
            <div
              key={content.contentTitle}
              className={content.contentClassName()}
            >
              <div>{content.contentPackage}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Tabs }
