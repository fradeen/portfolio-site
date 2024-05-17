import prisma from "@/lib/db";
import { cloudinaryUnoptimizedLoader } from "@/lib/imgLoader";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const user = await prisma.user.findFirstOrThrow({})
  const socialMediaLinks = await prisma.socialMediaLink.findMany({})

  const techStack = await prisma.techStack.findMany({})
  return (
    <main className='customContainer'>
      <div className='mt-15 w-full max-w-screen-lg flex flex-col gap-16 justify-stretch'>
        <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
          <section className='flex-1 flex flex-col gap-5' aria-label="about me">
            <h1 className='text-start'>{user.title}</h1>
            <p>Hi, I&apos;m <b>{user.name}</b>. {user.intro}</p>
            <Link href='/about' className='w-fit'>Know more...</Link>
            <section className=' flex flex-col sm:flex-row gap-3 items-center' aria-label='contact links'>
              <span>Hi I&apos;m available on | </span>
              <div className='flex gap-3'>
                {socialMediaLinks.map(link => {
                  return (
                    <Link key={link.id} href={link.url} target='_blank' className='size-11 p-2 rounded-full overflow-hidden hover:shadow-inherit hover:shadow-md bg-gray-100'>
                      <Image src={link.imgSrc} alt={link.title} width={32} height={32} loader={cloudinaryUnoptimizedLoader} />
                    </Link>
                  )
                })}
              </div>
            </section>
          </section>
          <div className='flex-1 relative w-full max-w-xs aspect-square rounded-full overflow-hidden'>
            <Image src={user.avatarSrc} alt='' width={500} height={500} className='object-cover' />
          </div>
        </div>
        <section className='flex flex-col md:flex-row items-start md:items-center gap-5' aria-label='my tech stack'>
          <h2 className='min-w-fit'>Tech Stack : </h2>
          <div className='w-full grid grid-cols-4 md:grid-cols-8 auto-rows-auto place-content-around place-items-center gap-5'>
            {techStack.map(item => {
              return (
                <div key={item.id} className='size-16 p-3 flex justify-center items-center rounded-full overflow-hidden bg-gray-100'>
                  <Image src={item.imgSrc} alt={item.title} title={item.title} width={48} height={48} loader={cloudinaryUnoptimizedLoader} />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
