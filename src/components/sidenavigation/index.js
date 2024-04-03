"use client"
import { useToggle } from '../provider/context'

import SidenavHeader from './header'
import SidenavItems from './items'

import css from './index.module.css'

const style = {
    mobilePosition: {
        left: 'left-0',
        right: 'right-0',
    },
    close: `hidden`,
    container: `pb-32 lg:pb-12 w-full`,
    open: `absolute z-40 w-52`,
    default: `bg-[#1A1E1C] h-screen top-0 lg:flex lg:relative lg:w-52 lg:z-auto`,
}

export default function SideNavigation({ mobilePosition }) {
    const { open, ref } = useToggle()
    return (
        <aside
            ref={ref}
            className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} ${css.scrollbar}`}
        >
            <div className={style.container}>
                <SidenavHeader />
                <SidenavItems />
            </div>
        </aside>
    )
}
