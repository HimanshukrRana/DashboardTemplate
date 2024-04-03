"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

// create new context
const Context = React.createContext({})

export default function DashboardProvider({ children }) {
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef(null)
    const router = useRouter()

    const toggle = React.useCallback(() => {
        setOpen((prevState) => !prevState)
    }, [])

    // set the html tag style overflow to hidden
    React.useEffect(() => {
        document.documentElement.style.overflow = 'hidden'
    }, [])

    // close side navigation on mobile when route changes. it's triggered when viewport is less than 1024px
    React.useEffect(() => {
        if (open && window.innerWidth < 1024) {
            router.events.on('routeChangeStart', () => setOpen(false))
        }

        return () => {
            if (open && window.innerWidth < 1024) {
                router.events.off('routeChangeStart', () => setOpen(false))
            }
        }
    }, [open, router])

    return <Context.Provider value={{ open, ref, toggle }}>{children}</Context.Provider>
}

// custom hook to consume all context values { open, ref, toggle }
export function useToggle() {
    return React.useContext(Context)
}
