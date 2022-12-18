import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Header() {
  return (
    <header className='flex justify-between items-center space-x-2 font-bold px-10 py-5'>
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image className="rounded-full" src={'http://ltyq.com/image1/image1/53.jpg'} alt="logo"
            height={50} width={100}
          ></Image>
        </Link>

      </div>
      <div className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a]  flex items-center rounded-full text-center">
        Sign up to Ltyq
      </div>
    </header>
  )
}

export default Header
