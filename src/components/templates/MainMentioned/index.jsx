'use client'

import { useRef } from 'react'
import NeedsLogo from '@/assets/images/needs1.png'
import ArrowIcon from '@/assets/images/icons/link-arrow.svg'
import ArrowLeftIcon from '@/assets/images/icons/arrow-left.svg'
import ArrowRightIcon from '@/assets/images/icons/arrow-right.svg'
import Image from 'next/image'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css"

const MainMentioned = () => {
	const carouselRef = useRef(null);

	const responsive = {
    desktop: {
      breakpoint: { max: 30000, min: 0 },
      items: 3,
    },
  };
	
	const slides = [
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
		{
			img: NeedsLogo,
			title: 'NAME OF THE sourse',
			text: '“....” - from there'
		},
	];

	return (
		<div className="w-dvw mb-16 px-28">
			<div className="relative max-w-screen-xl m-auto">
				<div className="h2 uppercase text-[#222222] mb-2 text-center">
					where have we been mentioned
				</div>
				<div className="b1 text-[#464646] mb-16 text-center">
					"This initiative is bringing people together in the most powerful way."
				</div>
				<div className="relative max-w-[1024px] m-auto">
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
						{slides.map((slide, index) => (
							<div key={`slide-${index}`}>
								<div className="flex justify-center items-center h-[280px] w-[325px] px-[10px] bg-[#F5F5F5] rounded-3xl mb-8 overflow-hidden">
									<Image src={slide.img} alt="Hero background" width={325} height={380} className="object-contain" />
								</div>
								<div className="text-lg font-bold tracking-[0.02em] text-[#222222] mb-2 leading-[21px]">{slide.title}</div>
								<div className="text-lg font-normal leading-[140%] text-[#464646] mb-6">{slide.text}</div>
								<button className="text-lg font-bold tracking-[0.02em] text-[#C5161D] mb-2 leading-[21px] flex items-center gap-2">
									<span>Read more</span>
									<Image src={ArrowIcon} alt="Arrow" width={22} height={16} />
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
					<Image src={ArrowLeftIcon} alt="Arrow Icon" width={40} height={40} />
				</button>
				<button
					type="button" 
					className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full"
					onClick={() => carouselRef.current?.next()}
				>
					<Image src={ArrowRightIcon} alt="Arrow Icon" width={40} height={40} />
				</button>
			</div>
		</div>
	)
}

export default MainMentioned;
