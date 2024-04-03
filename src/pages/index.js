import Link from 'next/link'
import React from 'react'

export default function landing() {
    return (
        <div>

            <div>landing</div>
            <Link href='/dashboard/home' className='p-4 border border-blue'>
                Got to dashboard
            </Link>
        </div>

    )
}
