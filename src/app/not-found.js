'use client'

import NotFoundImage from '@/assets/images/404.png'
import Image from 'next/image'
import Link from 'next/link'
import ArrowRight from '@/assets/svg/Arrow-right.jsx'
import '@/app/globals.css'

const NotFound = () => {
  return (
    <div className="flex flex-col gap-4 text-center items-center p-12 justify-center md:h-[calc(100dvh-350px)] w-full">
      <Image priority className="max-w-56 h-auto mb-2" src={NotFoundImage} alt="Not Found" />
      <h1 className="text-4xl text-light-black font-bold">Page not found</h1>
      <p className="b2 text-black-text ">The page you are looking for does not exist.</p>
      <Link href={'/'} className="b2 text-primary font-bold flex justify-center items-center gap-4 hover:text-dark-primary p-2">
          Go to home
        <ArrowRight className="[&>path:hover]:fill-dark-primary  -ml-2"/>
      </Link>
    </div>
  )
}

export default NotFound
