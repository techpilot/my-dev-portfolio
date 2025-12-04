'use client'

import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import nav_pri from "@/assets/svgs/nav_pri.svg";
import DropDown from "@/components/DropDown";
import {useRouter} from "next/navigation";
import {useState} from "react";
import SpoxComponent from "@/components/SpoxComponent";

export default function Spox() {
    const router = useRouter()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section className="px-2 space-y-2">
            <div className="flex items-center justify-between z-20 py-3">
                <div className="flex-1 px-7 flex items-center">
                    <Image
                        src={logo} alt="" className="w-[80px] lg:w-[120px] cursor-pointer"
                        onClick={() => router.push("/")}
                    />
                </div>
                <div className="w-[33%] px-10 lg:px-14 pt-2 flex items-center">
                    <Image
                        src={nav_pri} alt="" width={45} height={33}
                        className="cursor-pointer ml-auto my-auto w-[35px] lg:w-[45px] h-[25px] lg:h-[33px]"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    />
                </div>
            </div>

            <div className="fixed right-2 md:right-5 lg:right-10 top-1 z-50">
                <DropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
            </div>

            <SpoxComponent/>
        </section>
    )
}