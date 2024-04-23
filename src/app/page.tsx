import prisma from "@/lib/db";
import { cloudinaryUnoptimizedLoader } from "@/lib/imgLoader";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await prisma.user.findFirstOrThrow({
    include: {
      SocialMediaLink: true
    }
  })

  const techStack = await prisma.techStack.findMany({})
  return (
    <main className='customContainer'>
      <div className='mt-15 w-full max-w-screen-lg flex flex-col gap-16 justify-stretch'>
        <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
          <section className='flex-1 flex flex-col gap-5' aria-label="about me">
            <h1 className='text-5xl font-semibold'>{user.title}</h1>
            <p className='text-2xl font-light'>Hi, I&apos;m <span className='font-semibold'>{user.name}</span>. {user.intro}</p>
            <Link href='/about' className='text-2xl font-light w-fit hover:font-semibold'>Know more...</Link>
            <div className=' flex flex-col sm:flex-row gap-3'>
              <span className='text-2xl font-light'>Hi I&apos;m available on | </span>
              <div className='flex gap-3'>
                {user.SocialMediaLink.map(link => {
                  return (
                    <Link key={link.id} href={link.url} target='_blank' className='w-9 h-9 aspect-square p-1 rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-gray-100'>
                      <Image src={link.imgSrc} alt='' width={32} height={32} loader={cloudinaryUnoptimizedLoader} />
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
          <div className='flex-1 relative w-full max-w-xs aspect-square rounded-full overflow-hidden'>
            <Image src={user.avatarSrc} alt='' width={500} height={500} className='object-cover' />
          </div>
        </div>
        <section className='flex flex-col md:flex-row items-start md:items-center gap-5' aria-label='my tech stack'>
          <h1 className='w-full max-w-fit text-4xl font-semibold break-keep'> Tech Stack : </h1>
          <div className='w-full grid grid-cols-4 md:grid-cols-8 auto-rows-auto place-content-around place-items-center gap-5'>
            {techStack.map(item => {
              return (
                <div key={item.id} className='w-12 aspect-square p-1 rounded-full overflow-hidden bg-gray-100'>
                  <Image src={item.imgSrc} alt={item.title} title={item.title} width={32} height={32} className='w-fit h-fit mx-auto my-auto' loader={cloudinaryUnoptimizedLoader} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
