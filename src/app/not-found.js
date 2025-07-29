'use client'

import NotFoundImage from '@/assets/images/404.png'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import '@/app/globals.css'

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <Image src={NotFoundImage} width={300} height={300} alt="Not Found" />
      <h1 className="text-4xl font-bold mb-4">Page not found</h1>
      <p className="text-lg text-gray-500 mb-2">The page you are looking for does not exist.</p>
      <Button variant="secondary" onClick={() => router.push('/en')} classNames="px-12">Go to home</Button>
    </div>
  )
}

export default NotFound