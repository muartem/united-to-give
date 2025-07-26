import AboutPerson from '@/assets/images/about-person.png'
import BeIcon from '@/assets/images/icons/be.svg'
import IgIcon from '@/assets/images/icons/ig.svg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const MainTeam = () => {
  const team = [
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Anastasiia Savchenko',
      description: 'Lead UIUX designer, Project Information Architect, UX writer.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
    {
      image: AboutPerson,
      name: 'Volodymyr Chaus',
      description: 'Founder of “United to Give” project, project developer and negotiator.',
      beUrl: '/',
      igLink: '/',
    },
  ]

  return (
    <div className="w-dvw bg-[#F5F5F5] px-6 xl:px-28 py-16">
      <div className="max-w-screen-xl m-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-20 mb-16">
          <div>
            <div className="h2 text-[#222222] mb-0 lg:mb-10 uppercase">
							Who is our <span className="text-[#EC0F16]">team?</span>
            </div>
          </div>
          <div className="flex-1">
            <div className="b1 text-[#464646]">
							“Our team is every Ukrainian - in Canada and around the world - who believes in giving back, standing united, and creating impact through action.”
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {team.map((item, index) => (
            <div key={index}>
              <Image src={item.image} alt={item.name} width={200} height={200} className="object-cover rounded-2xl mb-8" />
              <div className="b1 text-[#222222] mb-2">
                {item.name}
              </div>
              <div className="b3 text-[#464646] mb-4">
                {item.description}
              </div>
              <div className="flex items-center gap-4">
                <a href={item.beUrl} target="_blank" rel="noopener noreferrer">
                  <Image src={BeIcon} alt={item.name} width={24} height={24} />
                </a>
                <a href={item.igLink} target="_blank" rel="noopener noreferrer">
                  <Image src={IgIcon} alt={item.name} width={24} height={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button classNames="text-[#222222] bg-transparent border-2 border-[#EC0F16] px-20 py-4" variant="custom" customPX>
						See all team
          </Button>
        </div>
      </div>
    </div>
  )
}

export default MainTeam
