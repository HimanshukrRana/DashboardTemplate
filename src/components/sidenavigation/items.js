"use client"
// import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { useDispatch } from 'react-redux'

// import Button from '../button'
// import { handlelogout } from '@/utils/index'
// import { Icon } from '@iconify/react'

// import { fetchAPI } from '@/store/actions/Common'

import data from './data'

const style = {
    link: `flex items-center justify-start my-2 p-2 sm:p-4 text-sm w-full  rounded-l-3xl`,
    inactive: `text-white hover:text-[#1B9A59] `,
    active: `font-medium text-white hover:text-[#1B9A59] `,
}

export default function SidenavItems() {
    const { asPath } = useRouter()

    return (
        <ul className="ml-6">
            <li>
                {data.map((item) => (
                    <Link href={item.link} key={item.id}>
                        <div
                            className={`${style.link} 
               ${item.link === asPath ? style.active : style.inactive}`}
                        >
                            <span>{item.icon}</span>
                            <span className="mx-4">{item.title}</span>
                        </div>
                    </Link>
                ))}
            </li>
        </ul>
    )
}
