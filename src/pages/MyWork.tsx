'use client'

import {useState} from "react";
import logo from "@/assets/svgs/full_logo.svg";
import Image from "next/image";
import nav_pri from "@/assets/svgs/nav_pri.svg";
import Work from "@/components/Work";
import DropDown from "@/components/DropDown";
import {useRouter} from "next/navigation";
import projects_svg from "@/assets/svgs/projects.svg"

export default function MyWork() {
    const router = useRouter()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="w-screen relative">
            <div className="flex items-center justify-between md:fixed top-0 left-0 right-0 z-20">
                <div className="h-[70px] bg-[var(--primary)] flex-1 px-7 flex items-center">
                    <Image src={logo} alt="" className="w-[120px] lg:w-[180px] cursor-pointer"
                           onClick={() => router.push("/")}/>
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
            <div className="fixed -left-12 top-8 h-screen hidden lg:block">
                <Image src={projects_svg} alt="" className="h-full"/>
            </div>
        </div>
    );
}