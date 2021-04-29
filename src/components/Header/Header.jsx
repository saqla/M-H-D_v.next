import Link from 'next/link'

export const Header = () => {
  return (
    <>
      {/* タイトル */}
      <div className='flex-between my-2'>
        <Link href='/'>
          <a className='text-2xl md:text-4xl mx-5 md:mx-10 text-black italic'>
            M-<span className='text-red-600'>H</span>-D
          </a>
        </Link>
        <p className='mx-2 md:mx-5'>
          Final Fantasy XIV 〜FCウェブページ〜
        </p>
      </div>
    </>
  )
}
