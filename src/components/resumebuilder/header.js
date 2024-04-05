import React from "react";
import { Icon } from "@iconify/react";
function Header() {
    return (
        <div className="py-3 border-b">
            <div className="container mx-auto px-[20px] md:px-[50px]">
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <div className="mr-12 cursor-pointer select-none text-2xl font-bold">
                            Resume Builder
                        </div>
                    </div>
                    <div className="relative w-2/6 flex justify-end">
                        <div
                            className="flex cursor-pointer select-none justify-end relative items-center w-full text-md gap-2 font-semibold text-gray-600"
                        >
                            <Icon width={40} icon="mdi:user-circle-outline" />
                            <div className="flex flex-col">
                                <span className="text-black text-base capitalize">
                                    Himanshu kumar
                                </span>
                                <span className="text-gray-400 text-sm">
                                    hrkumar@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
