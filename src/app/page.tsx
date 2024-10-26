import RenderMarkdown from "@/components/renderMarkdown";
import prisma from "@/lib/db";
import { cloudinaryUnoptimizedLoader } from "@/lib/imgLoader";
import Image from "next/image";

export default async function Home() {
  const user = await prisma.user.findFirstOrThrow({})
  const techStack = await prisma.techStack.findMany({})
  return (
    <main className='customContainer'>
      <div className='mt-15 w-full max-w-screen-lg flex flex-col gap-16 justify-stretch'>
        <div className='flex flex-col-reverse md:flex-row gap-10 items-center'>
          <section className='flex-1 flex flex-col gap-5' aria-label={`${user.name}'s introduction.`}>
            <h1>{user.title}</h1>
            <section title='intro' className='text-justify'>
              <RenderMarkdown markdown={user.intro} />
            </section>
          </section>
          <div className='flex-1 relative w-full max-w-xs aspect-square rounded-full overflow-hidden prose-img:m-0'>
            <Image src={user.avatarSrc} alt='' width={500} height={500} className='object-cover' />
          </div>
        </div>
        <section className='flex flex-col md:flex-row items-start md:items-center gap-5 prose-headings:m-0 prose-img:m-0' aria-label='my tech stack'>
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
