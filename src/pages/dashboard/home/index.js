"use client"

import MarketOverview from "@/components/charts/marketoverview";
import Walletbalance from "@/components/charts/walletbalace";
import DashboardLayout from "@/components/layout";
import RecentPosts from "@/components/recentposts";

import { Icon } from "@iconify/react";
export default function Home() {
    return (
        <DashboardLayout>
            <div className="">
                <div className="flex justify-between">

                    <div className="">
                        <h1 className="text-white text-[30px]">
                            Hello, <span className="text-[#BFDB44]">Brooklyn Simmons <Icon icon="emojione:waving-hand" color="#fff" /></span>
                        </h1>
                        <h3 className="text-white text-[25px]">Welcome to <span className="text-[#1B9A59]">Spot trading!</span> </h3>
                    </div>
                    <div className="flex items-center">
                        <button className="p-3 bg-[#1B9A59] text-white rounded-sm">
                            Start Trading
                        </button>
                    </div>

                </div>
                <div className="flex gap-[20px] mt-4">
                    <MarketOverview />
                    <Walletbalance />
                    <RecentPosts />
                </div>
            </div>
        </DashboardLayout>
    );
}
