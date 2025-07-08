'use client';
import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import arrow_icon from "@/assets/icons/arrow.svg"
import arrow_sec from "@/assets/icons/arrow_sec.svg"
import {componentsType} from "@/components/utils/datae";

export default function WhatIDo() {
    const [btnHover, setBtnHover] = useState(false);
    const [btnTwoHover, setBtnTwoHover] = useState(false);
    const whatRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    console.log('brief Section is in view!');
                    localStorage.setItem('viewState', componentsType?.what);
                }
            },
            {threshold: 0.5}
        );

        if (whatRef.current) {
            observer.observe(whatRef.current);
        }

        return () => {
            if (whatRef.current) {
                observer.unobserve(whatRef.current);
            }
        };
    }, []);

    return (
        <div ref={whatRef}
             className="snap-start w-full lg:h-screen py-10 lg:py-28 px-8 lg:px-14 bg-[var(--fourth-bg)]">
            <div className="bg-white w-full grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col justify-center gap-7 px-10 py-14 lg:p-20 lg:py-32">
                    <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold lg:leading-14 text-[var(--primary)]">I
                        build <br/>stuff</h1>
                    <p className="text-lg md:text-base lg:text-xl text-[#3d155f] lg:w-[12rem]">Open source
                        projects, web apps
                        and experimentals.
                    </p>
                    <button
                        onMouseOver={() => setBtnHover(true)}
                        onMouseOut={() => setBtnHover(false)}
                        className="relative overflow-hidden px-6 py-3 text-[var(--primary)] font-semibold bg-white group flex items-center justify-center gap-5 p-3 border border-[var(--primary)] lg:w-[60%] cursor-pointer mt-5">
                        <span
                            className="absolute inset-0 w-full h-full bg-[var(--primary)] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">

                        </span>
                        <span
                            className="uppercase text-xs group-hover:text-white relative z-10 transition-colors duration-500 ease-in-out">
                          See my work
                        </span>
                        {!btnHover && <Image src={arrow_icon} alt=""/>}
                        {btnHover && <Image src={arrow_sec} alt="" className="z-20"/>}
                    </button>
                </div>

                <div
                    className="flex flex-col justify-center gap-7 px-10 py-14 lg:px-20 lg:py-32 border-t md:border-t-0 md:border-l border-[#0067DE4D]">
                    <h1 className="text-4xl md:text-3xl lg:text-5xl font-bold lg:leading-14 text-[var(--primary)]">I
                        read, <br/>sometimes
                    </h1>
                    <p className="text-lg md:text-base lg:text-xl text-[#3d155f] lg:w-[16rem]">
                        About cybersecurity, software, artificial intelligence,
                        sales and life.
                    </p>

                    <button
                        onMouseOver={() => setBtnTwoHover(true)}
                        onMouseOut={() => setBtnTwoHover(false)}
                        className="relative overflow-hidden px-6 py-3 text-[var(--primary)] font-semibold bg-white group flex items-center justify-center gap-5 p-3 border border-[var(--primary)] lg:w-[60%] cursor-pointer mt-5">
                        <span
                            className="absolute inset-0 w-full h-full bg-[var(--primary)] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">

                        </span>
                        <span
                            className="uppercase text-xs group-hover:text-white relative z-10 transition-colors duration-500 ease-in-out">
                          View my reads
                        </span>
                        {!btnTwoHover && <Image src={arrow_icon} alt=""/>}
                        {btnTwoHover && <Image src={arrow_sec} alt="" className="z-20"/>}
                    </button>
                </div>
            </div>
        </div>
    )
}