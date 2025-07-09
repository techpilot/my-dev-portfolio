'use client'

import {useEffect, useRef} from "react";
import Image from "next/image";
import code_img from "@/assets/svgs/code.svg";
import computer from "@/assets/icons/computer.svg"
import react_icon from "@/assets/icons/react.svg"
import code_icon from "@/assets/icons/code_icon.svg"
import h3_img from "@/assets/svgs/h3.svg"
import {componentsType} from "@/components/utils/datae";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export default function Expertise() {
    const expertiseRef = useRef(null);
    const [, setValue] = useLocalStorage('viewState', 'landing');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('brief Section is in view!');
                    localStorage.setItem('viewState', componentsType?.expertise);
                    setValue(componentsType?.expertise)
                }
            },
            {threshold: 0.5}
        );

        if (expertiseRef.current) {
            observer.observe(expertiseRef.current);
        }

        return () => {
            if (expertiseRef.current) {
                observer.unobserve(expertiseRef.current);
            }
        };
    }, [setValue]);

    return (
        <div
            ref={expertiseRef}
            className="snap-start relative w-full lg:h-screen py-10 lg:py-28 flex flex-col items-center gap-5 lg:gap-10 bg-gradient-to-t from-[var(--third-bg)] to-[var(--primary)]">
            <h1 className="text-white text-4xl md:text-3xl lg:text-6xl font-extrabold">My Expertise</h1>
            <div
                className="flex flex-col md:flex-row justify-center gap-5 border-[3px] border-[var(--border)] w-[90%] md:w-[80%] lg:w-[65%]">
                <div className="space-y-3 p-5 lg:p-7 md:w-[33%]">
                    <div className="flex items-center gap-5">
                        <Image src={computer} alt="" className="w-[40px]"/>
                        <div>
                            <div className="min-w-max max-w-max">
                                <h2 className="text-white text-lg md:text-base lg:text-xl font-bold z-20">Software</h2>

                                <div
                                    className="min-w-[calc(100%+5px)] max-w-[calc(100%+5px)] border-b-8 border-[#DD551B] -mt-[10px]"></div>
                            </div>
                            <p className="text-white text-lg md:text-base lg:text-xl font-semibold">Development</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={h3_img} alt=""/>
                        <p className="text-white text-sm md:text-xs lg:text-base">Experienced in both
                            functional and OOP: Typescript, JavaScript,
                            Python, Java, Solidity.</p>

                    </div>
                </div>

                <div
                    className="space-y-3 border-t-[2px] md:border-t-0 md:border-l-[2px] border-[var(--border)] p-5 lg:p-7 md:w-[33%]">
                    <div className="flex items-center gap-5">
                        <Image src={react_icon} alt="" className="w-[40px]"/>
                        <div>
                            <div className="min-w-max max-w-max">
                                <h2 className="text-white text-lg md:text-base lg:text-xl font-bold">Front-end</h2>
                                <div
                                    className="min-w-[calc(100%+5px)] max-w-[calc(100%+5px)] border-b-8 border-[#2CD8A7] -mt-[10px]"></div>
                            </div>
                            <p className="text-white text-lg md:text-base lg:text-xl font-semibold">React, NextJS,
                                Angular</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={h3_img} alt=""/>
                        <p className="text-white text-sm md:text-xs lg:text-base">Over
                            5 years of development
                            experience in HTML, CSS, JS,
                            React, NextJS, and Angular frameworks.</p>
                    </div>
                </div>

                <div
                    className="space-y-3 border-t-[2px] md:border-t-0 md:border-l-[2px] border-[var(--border)] p-5 lg:p-7 md:w-[33%]">
                    <div className="flex items-center gap-5">
                        <Image src={code_icon} alt="" className="w-[42px]"/>
                        <div>
                            <div className="min-w-max max-w-max">
                                <h2 className="text-white text-lg md:text-base lg:text-xl font-bold">Back-end</h2>
                                <div
                                    className="min-w-[calc(100%+5px)] max-w-[calc(100%+5px)] border-b-8 border-[#A32BFF] -mt-[10px]"></div>
                            </div>
                            <p className="text-white text-lg md:text-base lg:text-xl font-semibold">Express, NestJS</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <Image src={h3_img} alt=""/>
                        <p className="text-white text-sm md:text-xs lg:text-base">Skilled in developing
                            backend applications and microservices including database management.</p>
                    </div>
                </div>
            </div>

            {/*absolute code image*/}
            <Image src={code_img} alt=""
                   className="absolute bottom-[3%] md:bottom-0 lg:bottom-[5%] xl:bottom-[10%] left:[22%] md:left-[18%] lg:left-[32%] opacity-20 lg:opacity-50 xl:opacity-90 max-[450px]:w-[200px]"/>
        </div>
    )
}