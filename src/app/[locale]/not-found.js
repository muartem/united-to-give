'use client'

import NotFoundImage from '@/assets/images/404.png'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import ArrowRight from '@/assets/svg/Arrow-right'
import '@/app/globals.css'

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Image src={NotFoundImage} width={300} height={300} alt="Not Found" />
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-lg text-gray-500 mb-2">The page you are looking for does not exist.</p>
      <Link href="/en" className="b2 text-primary font-bold flex justify-end md:justify-start items-center gap-4 hover:text-dark-primary">
        Go to home
        <ArrowRight className="[&>path:hover]:fill-dark-primary -ml-2"/>
      </Link>
    </div>
  )
}

export default NotFound