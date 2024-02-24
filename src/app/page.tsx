import Image from "next/image"

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row h-full w-full border-2 p-2 border-gray-500'>
      <div className='relative basis-1/2'>
        <Image
          src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA..'
          fill
          alt="hero image"
          className="object-contain"
        />
      </div>
      <div className='basis-1/4 flex flex-col'>
        <p className='bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-xl'>hello</p>
        <div>2</div>
      </div>
    </div>
  );
}
