import React from 'react'
import Image from 'next/image'
import ContactCard from '@/components/contactCard/ContactCard'
export default function ContactList() {
    return (
        <div className='customContainer flex justify-around align-middle gap-x-2'>
            <div className=' md:w-1/2 border-2 border-gray-500 hidden md:flex flex-col justify-around align-middle'>
                <div className='w-full h-fit rounded-lg overflow-hidden relative border-2 border-gray-500'>
                    <Image src='https://images.pexels.com/photos/574070/pexels-photo-574070.jpeg?cs=srgb&dl=pexels-lukas-574070.jpg&fm=jpg&w=6144&h=4069&_gl=1*51sk5i*_ga*ODY2MjY3NTk1LjE3MDg1MTEwODQ.*_ga_8JE65Q40S6*MTcwODc3MjMzMC4yLjEuMTcwODc3MjYyMi4wLjAuMA' alt='' width={1080} height={1920} />
                </div>
            </div>
            <div className='w-full md:w-1/2 border-2 border-gray-500 flex flex-col  justify-around align-middle'>
                <div className='h-fit flex flex-col justify-start content-center gap-y-3'>
                    <ContactCard href='https://github.com/fradeen' favicon='/github.svg' title='Fradeen (Mohd Fardeen) - Github' description='Four repositories available for collaboration, open PR!' />
                    <ContactCard href='https://github.com/fradeen' favicon='/github.svg' title='Fradeen (Mohd Fardeen) - Github' description='Four repositories available for collaboration, open PR!' />
                    {/* <ContactCard href='https://www.linkedin.com/in/mohd-fardeen-451256297/' /> */}
                </div>
            </div>
        </div>
    )
}
