import Image from "next/image"
import Link from "next/link";
import prisma from "@/lib/db";

export default async function Home() {

  const userInfo = await prisma.user.findFirstOrThrow()
  return (
    <div className='customContainer flex flex-col sm:flex-row-reverse '>
      <div className='relative my-1 sm:my-0 sm:mx-1 w-fit h-fit rounded-lg overflow-hidden self-center'>
        <Image
          src={userInfo?.imgURL}
          width={1920}
          height={1080}
          alt="Author image"
        />
      </div>
      <div className='grow my-1 sm:my-0 sm:mx-1 w-full sm:self-center flex flex-col gap-y-3'>
        <p className='text-7xl'>{userInfo.name}</p>
        <div>{userInfo.intro}</div>
        <div className='flex gap-x-3'>
          <Link href={{ pathname: '/about/update', query: { id: userInfo.id } }} className='text-green-500 w-fit p-1 rounded-lg mb-5 ring-1 ring-green-500'>Edit Info</Link>
          <Link href='/about' className='bg-green-500 text-white w-fit p-1 rounded-lg self-center sm:self-start'>Know more.</Link>
        </div>
      </div>
    </div>
  );
}
