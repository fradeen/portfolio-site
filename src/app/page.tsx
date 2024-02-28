import Image from "next/image"
import Link from "next/link";

export default function Home() {
  return (
    <div className='grow flex flex-col sm:flex-row-reverse h-full w-full border-2 p-2 border-gray-500'>
      <div className='relative my-1 sm:my-0 sm:mx-1 w-fit h-fit rounded-lg overflow-hidden self-center'>
        <Image
          src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA..'
          width={1920}
          height={1080}
          alt="hero image"
        />
      </div>
      <div className='grow my-1 sm:my-0 sm:mx-1 w-full sm:self-center flex flex-col'>
        <p className='text-7xl'>Mohd Fardeen</p>
        <div>2</div>
        <Link href='/about' className='bg-green-500 text-white w-fit p-1 rounded-lg self-center sm:self-start'>Know more.</Link>
      </div>
    </div>
  );
}
