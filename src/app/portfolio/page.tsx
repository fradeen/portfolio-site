import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
    {
        id: 1,
        title: 'Web Development'
    },
    {
        id: 2,
        title: 'Linux'
    },
]

export default function Portfolio() {
    return (
        <div className='grow min-h-fit w-full border-2 p-2 border-gray-500  flex flex-col sm:flex-row sm:justify-evenly'>
            {categories.map(category => {
                return (
                    <Link href={`/portfolio/${category.id}`} className='border-2 border-gray-500 hover:text-green-500 hover:cursor-pointer w-72 aspect-[9/16] mx-1 rounded-lg overflow-hidden my-2 sm:my-0 self-center grid grid-cols-1 grid-rows-1'
                        key={category.id}>
                        <Image
                            src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA..'
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
        </div>
    )
}
