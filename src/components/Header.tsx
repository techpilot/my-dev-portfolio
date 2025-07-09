'use client';

import Image from "next/image";
import {useState} from 'react';
import DropDown from "@/components/DropDown";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [currentSection] = useLocalStorage('viewState', 'landing');


    function isMobileUserAgent() {
        const userAgent = navigator.userAgent || navigator.vendor
        const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mobi|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
        const tabletRegex = /android|ipad|playbook|silk/i;

        return mobileRegex.test(userAgent) || tabletRegex.test(userAgent);
    }

    const getLogo = (): string => {
        // for logo
        switch (currentSection) {
            case 'landing':
                return '/logo.svg';
            case 'des':
                return '/logo_pri.svg';
            case 'brief':
                return '/logo.svg';
            case 'expertise':
                return '/logo.svg';
            case 'contact':
                return '/logo_pri.svg';
            default:
                return '/logo.svg';
        }
    };

    const getNav = (): string => {
        switch (currentSection) {
            case 'landing':
                if (isMobileUserAgent()) {
                    return '/nav_sec.svg';
                }
                return '/nav_pri.svg';
            case 'des':
                return '/nav_pri.svg';
            case 'brief':
                return '/nav_sec.svg';
            case 'expertise':
                return '/nav_sec.svg';
            case 'contact':
                return '/nav_pri.svg';
            default:
                return '/nav_pri.svg';
        }
    }

    return (
        <>
            <div
                className="absolute top-6 lg:top-10 left-7 lg:left-14 right-7 lg:right-20 flex justify-between items-center z-50">

                {/*logo*/}
                <Image src={getLogo()} alt="" width={220} height={220} className="w-[80px] lg:w-[120px]"/>

                {/*desktop nav bar*/}
                <Image src={getNav()} alt="" width={45} height={33}
                       className="cursor-pointer w-[35px] lg:w-[45px] h-[25px] lg:h-[33px]"
                       onClick={() => setIsDropdownOpen(!isDropdownOpen)}/>

            </div>

            <DropDown isDropdownOpen={isDropdownOpen} setIsDropdownOpen={setIsDropdownOpen}/>
        </>
    )
}