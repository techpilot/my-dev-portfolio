'use client'

import {useState} from "react";
import logo from "@/assets/svgs/full_logo.svg";
import Image from "next/image";
import nav_pri from "@/assets/svgs/nav_pri.svg";
import Work from "@/components/Work";
import DropDown from "@/components/DropDown";

export default function MyWork() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-screen">
            <div className="flex items-center justify-between">
                <div className="h-[70px] bg-[var(--primary)] flex-1 px-7 flex items-center">
                    <Image src={logo} alt="" className="w-[120px] lg:w-[180px] cursor-pointer"/>
                </div>
                <div className="h-[70px] w-[33%] bg-[var(--secondary)] px-14 pt-2 flex items-center">
                    <Image src={nav_pri} alt="" width={45} height={33}
                           className="cursor-pointer ml-auto my-auto"
                           onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>
                </div>
            </div>

            <div className="fixed right-2 md:right-5 lg:right-10 top-1 z-50">
                <DropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
            </div>
            <Work/>
        </div>
    );
}