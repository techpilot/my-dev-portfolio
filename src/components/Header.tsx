'use client';

import Image from "next/image";
import logo from "@/assets/icons/logo.svg";
import nav_sec from "@/assets/svgs/nav_sec.svg";
import nav_pri from "@/assets/svgs/nav_pri.svg";
import {useState} from 'react';
import DropDown from "@/components/DropDown";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <>
            <div
                className="absolute top-6 lg:top-10 left-7 lg:left-14 right-7 lg:right-20 flex justify-between items-center z-50">

                {/*logo*/}
                <Image src={logo} alt="" width={220} height={220}
                       className="w-[80px] lg:w-[120px]"/>

                {/*mobile nav bar*/}
                <Image src={nav_sec} alt="" width={45} height={33}
                       className="cursor-pointer block md:hidden"
                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>

                {/*desktop nav bar*/}
                <Image src={nav_pri} alt="" width={45} height={33}
                       className="cursor-pointer hidden md:block"
                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>

            </div>

            <DropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
        </>
    )
}