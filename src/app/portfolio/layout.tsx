import React from 'react'

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className='basis-1/4 m-5 w-full flex'>
                <span className='font-semibold text-7xl text-left self-center align-middle grow'>My Works</span>
            </div>
            {children}
        </>
    )
}
