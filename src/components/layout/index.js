import SideNavigation from '@/components/sidenavigation'


/*	w-[calc(100%-13rem)] class get the remain width of the main component from lg:viewport by subtracting
(the total width by the width of the side navigation component which is w-64 = 16rem)*/

const style = {
    container: `h-screen overflow-hidden relative`,
    mainContainer: `bg-white flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-13rem)]`,
    main: `shadow-inner bg-[#0B0B0B] h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 `,
}

function DashboardLayout({ children }) {
    return (
        <div className={style.container}>
            <div className="flex items-start">
                <SideNavigation mobilePosition="left" />
                <div className={style.mainContainer}>
                    <main className={style.main}>{children}</main>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
