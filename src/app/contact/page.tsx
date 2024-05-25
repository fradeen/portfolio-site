import ContactCard from '@/components/contactCard'
import prisma from '@/lib/db'
import Link from 'next/link'
import React from 'react'

export default async function Contact() {
    const socialMediaLinks = await prisma.socialMediaLink.findMany({})
    return (
        <main className='customContainer'>
            <div className='p-2 flex-1 flex flex-col gap-20 justify-center items-center'>
                <div className='w-full flex flex-col'>
                    <h1>Let&apos;s Chat.</h1>
                    <h2>Tell me about your project.</h2>
                    <h3>Let&apos;s create something together.</h3>
                </div>
                <div className='gap-3 grid self-center grid-cols-1 lg:grid-cols-2 place-content-center'>
                    {socialMediaLinks.map(link => {
                        return (
                            <div key={link.id} className='prose-a:hover:underline prose-a:no-underline'>
                                <Link href={link.url} target='_blank' >
                                    <ContactCard mediaLink={link} />
                                </Link>
                            </div>
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
