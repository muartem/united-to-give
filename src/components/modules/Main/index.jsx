import Button from '@/components/ui/button'
import Image from 'next/image'
import Kid from '@/assets/images/main_kid.png'

const Main = () => {
	return (
		<main
			className="max-h-dvh md:h-[752px] w-dvw bg-main-gradient text-light-black"
		>
			<div
				className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left"
			>
				<div
					className="flex z-10 flex-col justify-between py-12 px-4 md:px-0 md:py-24"
				>
					<div className="flex flex-col gap-4">
					<h1 className='uppercase'>
						Donate blood add someone’s <span className="text-primary">time</span>
					</h1>
					<span className="b2 text-black-text">
							Help in the way you can - join anytime between <span className="text-primary">April 20 to May 10.</span>
					</span>
					</div>
					<div className="flex flex-col gap-4 items-center md:items-start">
						<h2 className="text-black-text uppercase">
							someone’s waiting for their tomorrow
						</h2>
						<Button classNames='w-64'>Donate Blood</Button>
					</div>
				</div>
				<div className="absolute opacity-50 w-dvw flex-none pt-8 h-full md:pt-0 md:static md:flex md:opacity-100 md:w-max">
					<Image className="h-full" src={Kid} width={568} alt={'kid'} />
				</div>
			</div>
		</main>
	)
}

export default Main