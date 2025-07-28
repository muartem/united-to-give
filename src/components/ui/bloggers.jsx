'use client'

import IPhone from '@/assets/images/iPhone.png'
import Andr from '@/assets/images/team/andrewsh_ca.png'
import Miia from '@/assets/images/team/miia.png'
import Sofi from '@/assets/images/team/sofima.png'
import Chaus from '@/assets/images/team/v_chaus.png'
import Insta from '@/assets/svg/insta'
import Image from 'next/image'

/*const people = [
	{
		name: 'Anastasiia Savchenko, UI/UX',
		insta: '@miia.anastasiia',
		username: 'miia.anastasiia',
		image: Miia
	},
	{
		name: 'Volodymyr Chaus, founder',
		insta: '@v_chaus_',
		username: 'v_chaus_',
		image: Chaus
	},
	{
		name: 'Sofiia Matviieva, blogger',
		insta: '@sofima_sofima',
		username: 'sofima_sofima',
		image: Sofi
	},
	{
		name: 'Andrew Kabanets, photo',
		insta: '@andrewsh.ca',
		username: 'andrewsh.ca',
		image: Andr
	}
]*/

const Bloggers = ({classNames}) => {
  return (
    <div
      className={`rounded-md bg-transparent hover:outline-none focus:outline-none grid grid-cols-2 md:grid-cols-4 items-end ${classNames}
			hidden md:grid
			`}
    >
      <div className="z-20 hover:z-40 pb-12 cursor-pointer">
        <p className="b3 text-black-text mb-8 text-center">Anastasiia Savchenko, UI/UX</p>
        <div className="relative h-max scale-150">
          <Image className="top-0 w-full" src={IPhone} alt={''}/>
          <Image className="absolute top-0 left-1 scale-[.82]" src={Miia} alt={''}/>
          <div
            className="absolute w-max px-2 py-1 bottom-0 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-[#00000088] h-6">
            <Insta className="fill-background"/>
            <span className="block text-xs text-background">@miia.anastasiia</span>
          </div>
        </div>
      </div>
      <div className="z-30 hover:z-40 pb-12 cursor-pointer">
        <p className="b3 text-black-text mb-12 text-center">Volodymyr Chaus, Founder</p>
        <div className="relative h-max scale-[160%] -translate-y-[5%]">
          <Image className="top-0 w-full" src={IPhone} alt={''}/>
          <Image className="absolute -top-2 left-0 scale-[.76]" src={Chaus} alt={''}/>
          <div
            className="absolute right-0 w-max px-2 py-1 bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#00000088] h-6">
            <Insta className="fill-background"/>
            <span className="block  text-xs text-background">@v_chaus_</span>
          </div>
        </div>
      </div>
      <div className="z-20 hover:z-40 pb-12 cursor-pointer">
        <p className="b3 text-black-text mb-8 text-center">Sofiia Matviieva, Blogger, Founder</p>
        <div className="relative h-max scale-150">
          <Image className="top-0 w-full" src={IPhone} alt={''}/>
          <Image className="absolute top-0 left-1 scale-[.82]" src={Sofi} alt={''}/>
          <div
            className="absolute w-max px-2 py-1 bottom-0 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-[#00000088] h-6">
            <Insta className="fill-background"/>
            <span className="block text-xs text-background">@sofima_sofima</span>
          </div>
        </div>
      </div>
      <div className="z-10 hover:z-40 pb-12 cursor-pointer">
        <p className="b3 text-black-text mb-6 text-center">Andrew Kabanets, Blogger, Photo</p>
        <div className="relative h-max scale-[140%] translate-y-[5%]">
          <Image className="top-0 w-full" src={IPhone} alt={''}/>
          <Image className="absolute top-0 left-1 scale-[.82]" src={Andr} alt={''}/>
          <div
            className="absolute w-max px-2 py-1 bottom-0 left-1/2 -translate-x-1/2 flex gap-1 items-center bg-[#00000088] h-6">
            <Insta className="fill-background"/>
            <span className="block text-xs text-background">@andrewsh.ca</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Bloggers
