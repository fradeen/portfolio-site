import React from 'react'
import Image from 'next/image'

export async function generateStaticParams() {
    return [{ categoryId: '1' }, { categoryId: '1' }]
}

const projects = [1, 2, 3]
export default function page({ params: { categoryId } }: { params: { categoryId: string } }) {
    return (
        <div className='grow min-h-fit w-full self-center border-2 border-gray-500 p-2 flex flex-col justify-center'>
            <div className='min-h-fit w-full border-2 border-gray-500 p-2 text-4xl font-semibold'>
                Category: Web Development
            </div>
            <div className='min-h-fit w-full border-2 p-2 flex flex-col border-gray-500 '>
                {projects.map(project => {
                    return (
                        <div key={project} className='group min-w-78 w-full my-2 md:border-2 rounded-lg md:p-2 grid grid-cols-1 grid-rows-1 md:flex md:flex-row-reverse md:self-center md:justify-between border-gray-500 hover:shadow-lg hover:shadow-inherit'>
                            <div className='max-h-96 md:max-h-80 col-start-1 row-start-1 md:ml-1 aspect-video md:aspect-[4/3] rounded-lg overflow-hidden'>
                                <Image
                                    src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA..'
                                    width={1920}
                                    height={1080}
                                    alt="hero image"
                                    className='w-full h-full '
                                />
                            </div>
                            <div className='col-start-1 row-start-1 md:p-0 flex flex-col justify-end md:justify-start'>
                                <div className='md:bg-inherit w-full p-2 md:p-0 bg-gray-500/50'>
                                    <h1 className='text-3xl font-semibold'>Portfolio Site</h1>
                                    <p className='text-2xl'>short info</p>
                                    <span className='font-light hidden sm:block'>long description</span>
                                    <span className='font-light group-hover:font-bold'> Know more...</span>
                                </div>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}
