import Container from '@/components/ui/container'

const MainWhatIs = () => {
  return (
    <Container
      outerCls="bg-light-gray"
      innerCls="relative flex-col md:flex-row justify-between items-center text-center md:text-left"
    >
      <div className="flex-1">
        <h1>
					What Is
          <div className="text-primary">“United to Give”?</div>
        </h1>
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <div className="b1">
					“United to Give is a nationwide humanitarian campaign that unites Ukrainians across Canada to support the
					national blood donation system and show the power of community.
        </div>
        <div className="b1">
					It’s more than just donating blood - it’s about showing Ukrainians as an active, grateful, and compassionate
					group, ready to share life even in the most difficult times.”
        </div>
        <div className="b2 font-bold">
					Volodymyr Chaus, Sofiia Orlovska
        </div>
      </div>
    </Container>
  )
}

export default MainWhatIs
