import BookingIcon from './icons/booking'
import PaymentIcon from './icons/payment'
import ProfileIcon from './icons/profile'
import StatsIcon from './icons/stats'
// import SupportIcon from './icons/support'
import Users from './icons/users'

const data = [
    {
        title: 'Home',
        icon: <StatsIcon />,
        link: '/dashboard/home',
        id: 1
    },
    {
        title: 'Organization',
        icon: <BookingIcon />,
        link: '/dashboard/organization',
        id: 2
    },
    {
        title: 'Assets',
        icon: <Users />,
        link: '/dashboard/assets',
        id: 3
    },
    {
        title: 'Trade',
        icon: <PaymentIcon />,
        link: '/dashboard/trade',
        id: 4
    },
    {
        title: 'History',
        icon: <ProfileIcon />,
        link: '/dashboard/history',
        id: 5
    },
    {
        title: 'Wallet',
        icon: <ProfileIcon />,
        link: '/dashboard/wallet',
        id: 6
    },
]

export default data
