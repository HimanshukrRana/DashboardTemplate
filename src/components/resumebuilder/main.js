import { Icon } from '@iconify/react'
import React from 'react'
import NavBoard from './navboard'

export default function Main() {
    return (
        <div className=''>
            <div className='py-[40px] px-[15%]'>
                <div className='flex justify-between'>
                    <div className=''>
                        <h1 className="text-center text-[25px] capitalize font-bold">Create your Resume</h1>
                        <p className="">Powered With AI</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <button className="border bg-blue-400 text-white p-3 rounded-lg flex gap-2 items-center">
                            Preview <Icon icon="ph:eye" fontSize={20} />
                        </button>
                        <button className="border border-black p-3 rounded-lg font-bold flex gap-2 items-center">
                            Download <Icon icon="solar:download-linear" />
                        </button>
                    </div>
                </div>

                <NavBoard />

            </div>
        </div>
    )
}
