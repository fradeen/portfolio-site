import React from 'react'

export default function AboutPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='grow flex flex-col w-full h-full min-h-fit min-w-fit'>
            {children}
        </div>
    )
}
