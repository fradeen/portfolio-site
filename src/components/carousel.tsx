'use client'
import React, { Children, useState } from 'react'

export default function Carousel({ children }: { children: React.ReactNode }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const maxIndex = Children.count(children) - 1
    return (
        <section className='relative max-w-screen-sm rounded-lg flex overflow-hidden' aria-label='carousel'>
            {
                Children.map(children, (child, index) => {
                    return (
                        <div
                            className='self-center shrink-0 grow-0 w-full h-full transition-all ease-in-out duration-300'
                            style={{ translate: `${-100 * currentIndex}%` }}
                            aria-hidden={currentIndex != index}
                        >{child}</div>
                    )
                })
            }
            <button type='button'
                className='p-3 absolute top-1/2 right-0 bg-black/40 aspect-square rounded-full'
                onClick={() => {
                    if (currentIndex === maxIndex)
                        setCurrentIndex(0)
                    else
                        setCurrentIndex(prev => prev + 1)
                }}
                aria-label='move to next image'
            >
                <div className='w-6 h-1 bg-white rotate-45 -translate-y-1.5' aria-hidden />
                <div className='w-6 h-1 bg-white -rotate-45 translate-y-1.5' aria-hidden />
            </button>
            <button type='button'
                className='p-3 absolute top-1/2 left-0 bg-black/40 aspect-square rounded-full'
                onClick={() => {
                    if (currentIndex === 0)
                        setCurrentIndex(maxIndex)
                    else
                        setCurrentIndex(prev => prev - 1)
                }}
                aria-label='move to previous image'
            >
                <div className='w-6 h-1 bg-white origin-top-left -rotate-45 translate-y-1' aria-hidden />
                <div className='w-6 h-1 bg-white origin-bottom-left rotate-45 -translate-y-1' aria-hidden />
            </button>
            <div className='absolute bottom-4 w-full'>
                <div className='w-fit mx-auto p-1 bg-black/50 rounded-full flex justify-center items-center gap-2'>
                    {
                        Children.map(children, (_child, index) => {
                            return (
                                <button
                                    type='button'
                                    className={`aspect-square ${currentIndex == index ? 'p-1.5' : 'p-1'} bg-white rounded-full transition-all ease-in-out duration-300`}
                                    onClick={() => setCurrentIndex(index)}
                                    disabled={currentIndex == index}
                                    aria-label={`move to image ${index + 1}`}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
