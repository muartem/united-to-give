'use client'

import {slides, responsive} from './slides'
import Container from '@/components/ui/container'
import {useRef} from 'react'
import ArrowIcon from '@/assets/images/icons/link-arrow.svg'
import ArrowLeftIcon from '@/assets/images/icons/arrow-left.svg'
import ArrowRightIcon from '@/assets/images/icons/arrow-right.svg'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const MainMentioned = () => {
  const carouselRef = useRef(null)

  return (
    <Container outerCls="bg-background" innerCls="relative">
      <h2 className="uppercase text-light-black text-center">
				where have we been mentioned
      </h2>
      <div className="b1 text-black-text text-center">
        &quot;This initiative is bringing people together in the most powerful way.&quot;
      </div>
      <div className="relative max-w-screen-lg m-auto">
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          infinite={true}
          arrows={false}
          slidesToSlide={1}
          swipeable={true}
          draggable={true}
          showDots={false}
          containerClass="flex justify-between"
        >
          {slides().map((slide, index) => (
            <div key={`slide-${index}`} className="flex flex-col items-center">
              <div
                className="flex justify-center items-center h-[280px] w-[325px] px-2.5 bg-light-gray rounded-xl md:rounded-3xl mb-8 overflow-hidden">
                <Image src={slide.img} alt="Hero background" width={325} height={380} className="object-contain w-auto h-auto"/>
              </div>
              <div
                className="b2 font-bold text-light-black mb-2">{slide.title}</div>
              <div className="b2 text-black-text mb-6">{slide.text}</div>
              <button
                className="b2 font-bold text-primary mb-2 flex items-center gap-2">
                <span>Read more</span>
                <Image src={ArrowIcon} alt="Arrow" width={22} height={16}/>
              </button>
            </div>
          ))}
        </Carousel>
      </div>
      <button
        type="button"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
        onClick={() => carouselRef.current?.previous()}
      >
        <Image src={ArrowLeftIcon} alt="Arrow Icon" width={40} height={40} className="w-auto h-auto hover:brightness-95"/>
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
        onClick={() => carouselRef.current?.next()}
      >
        <Image src={ArrowRightIcon} alt="Arrow Icon" width={40} height={40} className="w-auto h-auto hover:brightness-95"/>
      </button>
    </Container>
  )
}

export default MainMentioned
