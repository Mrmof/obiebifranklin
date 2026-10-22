
'use client'
import React from 'react'
import {
    PersonIcon,
    CodeIcon,
    DatabaseIcon,
    HardHatIcon,
    MoneyIcon
} from '@phosphor-icons/react'
import Link from 'next/link'

const WorkExperience = () => {
    const experiences = [
        {
            Icon: CodeIcon,
            organization: "Schoolville",
            year: "2026 - current",
            location: "Asaba, Delta State",
            role: "Full Stack Web Developer",
            href: "/schoolville"
        },
        {
            Icon: DatabaseIcon,
            organization: "Marolt Digital Agency",
            year: "2024 - 2026",
            location: "Effurun, Delta State",
            role: "Data Analysis - Instructor",
            href: "/mda"
        },
        {
            Icon: CodeIcon,
            organization: "Unicus Technology",
            year: "2020 - 2024",
            location: "Effurun, Delta State",
            role: "Full Stack Web Developer",
             href: "/unicus"
        },
        {
            Icon: PersonIcon,
            organization: "Jospet Cabs",
            year: "2018 - 2019",
            location: "Effurun, Delta State",
            role: "HSE/Administrative Officer",
            href: "/jospet"
        },
        {
            Icon: MoneyIcon,
            organization: "Lincbrol Interbiz Concept",
            year: "2017 - 2018",
            location: "Ijebu-Ode, Ogun State",
            role: "Assistant Administrative Officer - NYSC",
            href: "/lic"
        },
        {
            Icon: HardHatIcon,
            organization: "Emval Holdings Nig Ltd",
            year: "2013 - 2014",
            location: "Asaba, Delta State",
            role: "HSE Intern",
            href: "/ehnl"
        },
    ]

    return (
        <div className='w-full md:w-4/5 md:mx-auto p-5 relative z-10'>
            <h1 className='font-regular text-[40px] text-white py-3'>
                Work Experience
            </h1>
            <div className='absolute top-[2%] left-[25%] z-[-1] w-1/2 h-125 rounded-[50%] bg-[linear-gradient(135deg,#763CAC_0%,#320F85_100%)] blur-3xl'>

            </div>

            <div className='flex flex-col flex-wrap md:flex-row justify-between gap-4'>
                {experiences.map((experience, index) => {
                    const Icon = experience.Icon

                    return (
                        <div
                            key={index}
                            className='relative z-10 w-full md:w-[calc(50%-8px)] rounded-[15px] p-3 border border-gray-200 flex flex-row items-center gap-2 bg-[linear-gradient(135deg,#130428_7.3%,#251043_34.4%,#38126D_56.8%,#261045_84.9%,#190634_100%)] shadow-[#000000_12%]' 
                        >
                            <Icon size={50} weight="duotone" color='#ffffff' className='w-1/4' />
                            <div className='flex-1'>
                                <h2 className='text-[24px] font-semibold text-white'>
                                {experience.organization}
                            </h2>
                            <p className='mt-2 text-white font-medium text-[12px]'>
                                {experience.role}
                            </p>
                            <p className='text-[12px] font-medium text-white'>
                                {experience.year} | {experience.location}
                            </p>
                            <Link href={experience.href}
                            className='text-white text-start my-4 rounded-[10px] border border-white bg-[#693B93] p-3 inline-block'>
                                Learn more &gt;&gt;&gt;
                            </Link>
                            
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default WorkExperience
