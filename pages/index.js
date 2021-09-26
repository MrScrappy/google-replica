import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Avatar from '../components/Avatar'
import {ViewGridIcon} from '@heroicons/react/solid'
import ViewGrid from '../components/icons/ViewGrid'
import SearchComponent from '../components/SearchComponent'
import FooterCustom from '../components/FooterCustom'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Guugle</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>


      {/* Header */}
   <header className="flex w-full p-5 justify-between text-sm text-gray-700">
     {/* Left */}
     <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>
        <ViewGridIcon/>
     </div>

    {/* Right */}
    <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>
        
        {/* Icon */}
        <ViewGrid />

        {/* Avatar */}
        <Avatar url="https://randomuser.me/api/portraits/men/34.jpg"/>
    </div>

   </header>


      {/* Body */}
        <form className="flex flex-col items-center mt-16 flex-grow w-4/5">
          <Image
          src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
          height={100}
          width={300}
          //!
          // src="https://www.google.com.mx/logos/doodles/2021/christopher-reeves-69th-birthday-6753651837109086-l.webp"
          // height={200}
          // width={500}
          />
          <SearchComponent/>
          <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button className="btn-goog">Buscar con Google</button>
          <button className="btn-goog">Me siento con suerte</button>
        </div>
        <p className="text-sm mt-16">Ofrecido por Google en:
        <Link href="/about">
        <a className="text-blue-500"> English</a>
        </Link>
        </p>
        </form>
       
      {/* Footer */}
      <FooterCustom />
    </div>
  )

} 

