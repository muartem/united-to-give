const Container = ({children, innerCls, outerCls}) => (
	<section
		className={`w-dvw text-light-black py-10 md:py-16 ${outerCls}`}
	>
		<div
			className={`max-w-screen-xl m-auto px-4 xl:px-0 gap-6 xl:gap-10 b2 flex flex-col ${innerCls}`}
		>
			{children}
		</div>
	</section>
)

export default Container
