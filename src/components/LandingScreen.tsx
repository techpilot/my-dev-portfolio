'use client'

import {useEffect, useRef} from "react";
import LeftLandingScreen from "@/components/LeftLandingScreen";
import RightLandingScreen from "@/components/RightLandingScreen";
import Image from "next/image";
import profile_img from "@/assets/images/profile.jpeg"
import square_border from "@/assets/images/square_border.png";
import {componentsType} from "@/components/utils/datae";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export default function LandingScreen() {
    const landingRef = useRef(null);
    const [, setValue] = useLocalStorage('viewState', 'landing');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    localStorage.setItem('viewState', componentsType?.landing);
                    setValue('landing')
                }
            },
            {threshold: 0.5}
        );

        if (landingRef.current) {
            observer.observe(landingRef.current);
        }

        return () => {
            if (landingRef.current) {
                observer.unobserve(landingRef.current);
            }
        };
    }, [setValue]);

    return (
        <div
            ref={landingRef}
            className="snap-start relative w-screen h-screen md:h-[400px] lg:h-[675px] flex flex-col md:flex-row items-center justify-between">
            {/*center image*/}
            <div
                className="hidden md:block absolute top-[18%] lg:top-[21%] left-[54%] lg:left-[55%] w-full h-full md:z-40">
                <Image src={profile_img} alt="" className="h-[230px] lg:h-[370px] w-[220px] lg:w-[350px] object-cover"/>
            </div>

            <div
                className="hidden md:block absolute top-[22%] lg:top-[26%] left-[56%] lg:left-[57.5%] w-full h-full md:z-20">
                <Image src={square_border} alt="" className="h-[230px] lg:h-[370px] w-[220px] lg:w-[350px]"/>
            </div>

            <LeftLandingScreen/>
            <RightLandingScreen/>
        </div>
    )
}