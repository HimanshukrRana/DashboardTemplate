"use client"
import { Icon } from '@iconify/react'

import { useToggle } from '../provider/context'

export default function SidenavHeader() {
    const { toggle } = useToggle()
    return (
        <div>
            <div className="bg-body  relative top-0 z-10 mb-6 flex h-[71px] items-center text-white">
                <img alt="carboncell" width="120px" src="/cell.png" className="ml-4" />
                <button
                    className="absolute right-[-18px] rounded-full bg-white p-2 text-black lg:hidden"
                    onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        toggle()
                    }}
                >
                    <Icon icon="cil:x-circle" width="20" height="20" color="white" />
                    {/* <Icon icon="uil:bars" width="20" height="20" color="white" /> */}
                </button>
                {/* <Icon icon="mdi:home" style={{ fontSize: '24px' }} /> */}
            </div>
            <div className="pl-2">
                <input height="20" type="text" className="bg-[#333333] text-white p-2 rounded-[7px] searchinput" placeholder='Search' icon="search" />
            </div>
        </div>
    )
}
