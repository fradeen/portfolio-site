import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import prisma from '@/lib/db'
import { addCategory } from '@/lib/actions'

export default async function Portfolio() {
    const categories = await prisma.category.findMany({})
    return (
        <div className='grow min-h-fit w-full border-2 p-2 border-gray-500  flex flex-col sm:flex-row sm:justify-evenly'>
            {categories.map(category => {
                return (
                    <Link href={`/portfolio/${category.id}`} className='border-2 border-gray-500 hover:text-green-500 hover:cursor-pointer w-72 aspect-[9/16] mx-1 rounded-lg overflow-hidden my-2 sm:my-0 self-center grid grid-cols-1 grid-rows-1'
                        key={category.id}>
                        <Image
                            src={category.imgURL}
                            width={1920}
                            height={1080}
                            alt="hero image"
                            className='w-full h-full col-start-1 row-start-1 '
                        />
                        <div className='col-start-1 row-start-1 mx-2 flex flex-col-reverse'>
                            <p className='font-semibold text-6xl break-words text-center sm:text-right'>{category.title}</p>
                        </div>
                    </Link>
                )
            })}
            <div className='group border-2 border-gray-500  w-72 aspect-[9/16] mx-1 rounded-lg overflow-hidden my-2 sm:my-0 self-center p-2 flex flex-col justify-around'>
                <div className=''>
                    <p className='font-semibold text-6xl group-hover:text-green-500 text-center'>Add Category</p>
                </div>
                <form action={addCategory} className='hidden group-hover:flex flex-col gap-y-3'>
                    <label>Category Name</label>
                    <input name='title' type='text' className='px-2 rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark' />
                    <label>Image URL</label>
                    <input name='imgURL' type='text' className='px-2 rounded-lg ring-2 ring-gray-500 self-center dark:bg-default-dark ' />
                    <button className='bg-green-500 text-white w-fit p-1 rounded-lg mb-5 self-center'>Add</button>
                </form>
            </div>
        </div>
    )
}
