'use client'
import React, { Children, useState } from 'react'

export default function ImgSlider({ children }: { children: React.ReactNode }) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const maxIndex = Children.count(children) - 1
    return (
        <div className='relative'>
            <div
                className='w-full max-w-screen-sm aspect-video flex shrink-0 grow-0 overflow-hidden transition-all ease-in-out duration-300'
            >
                {
                    Children.map(children, (child) => {
                        return (
                            <div
                                className='w-full max-w-screen-sm aspect-video transition-all ease-in-out duration-300'
                                style={{ translate: `${-100 * currentIndex}%` }}
                            >{child}</div>
                        )
                    })
                }
            </div>
            <button type='button'
                className='group p-3 absolute bottom-0 right-0 h-full hover:bg-black/40 rounded-r-lg'
                onClick={() => {
                    if (currentIndex === maxIndex)
                        setCurrentIndex(0)
                    else
                        setCurrentIndex(prev => prev + 1)
                }} >
                <div className='w-6 h-1 bg-gray-600 group-hover:bg-white rotate-45 -translate-y-1.5' />
                <div className='w-6 h-1 bg-gray-600 group-hover:bg-white -rotate-45 translate-y-1.5' />
            </button>
            <button type='button'
                className='group p-3 absolute bottom-0 left-0 h-full hover:bg-black/40 rounded-l-lg'
                onClick={() => {
                    if (currentIndex === 0)
                        setCurrentIndex(maxIndex)
                    else
                        setCurrentIndex(prev => prev - 1)
                }} >
                <div className='w-6 h-1 bg-gray-600 group-hover:bg-white origin-top-left -rotate-45 translate-y-1' />
                <div className='w-6 h-1 bg-gray-600 group-hover:bg-white origin-bottom-left rotate-45 -translate-y-1' />
            </button>
            <div className='absolute bottom-4 w-full px-3 flex justify-center items-center gap-2'>
                {
                    Children.map(children, (_child, index) => {
                        return (
                            <button
                                type='button'
                                className='aspect-square border-spacing-3 p-1 bg-gray-300 rounded-full transition-all ease-in-out duration-300'
                                onClick={() => setCurrentIndex(index)}
                                disabled={currentIndex == index}
                            >
                                {
                                    currentIndex == index ? (<div className='bg-gray-700 w-1 h-1 rounded-full'></div>) : null
                                }
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}
