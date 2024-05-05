import prisma from '@/lib/db'
import { cloudinaryUnoptimizedLoader } from '@/lib/imgLoader'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function Contact() {
    const socialMediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='customContainer'>
            <div className='p-2 flex-1 flex flex-col gap-3 justify-center items-center'>
                <h1 className='w-full text-5xl font-semibold'>Let&apos;s Chat.</h1>
                <h2 className='w-full text-5xl font-semibold'>Tell me about your project.</h2>
                <h3 className='mt-3 w-full text-3xl font-light'>Let&apos;s create something together.</h3>
                <div className='mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
                    {socialMediaLinks.map(link => {
                        return (
                            <Link key={link.id} href={link.url} target='_blank' className={`group max-w-xs p-3 rounded-lg border-2 flex gap-2 items-center hover:bg-gradient-to-l hover:from-${link.accentColor}`}>
                                <div className='w-fit h-fit p-1 rounded-full bg-gray-100' aria-hidden>
                                    <Image src={link.imgSrc} width={32} height={32} alt={link.title} loader={cloudinaryUnoptimizedLoader} aria-hidden />
                                </div>
                                <p className='text-2xl font-light group-hover:font-normal' >{link.message}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <form data-static-form-name='contact' className='hidden flex-1 flex-col gap-5 justify-stretch items-center'>
                <h1 className='w-full text-5xl font-semibold'>Send me a message.</h1>
                <input name='name' type='text' required placeholder='Full Name*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white' />
                <input name='email' type='text' required placeholder='Email Address*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white' />
                <input name='subject' type='text' required placeholder='Subject*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white' />
                <textarea name='message' rows={5} required placeholder='message*' className='border-2 p-2 max-w-screen-sm w-full rounded-lg focus:border-3 dark:bg-black dark:text-white' />
                <button type='submit' className='border-2 p-2 max-w-screen-sm w-full rounded-lg hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white'>Send message</button>
            </form>
        </main>
    )
}
