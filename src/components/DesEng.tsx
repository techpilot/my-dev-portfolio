'use client'

import {useEffect, useRef} from "react";
import Image from "next/image";
import bullet_pri from "@/assets/svgs/bullet_pri.svg";
import zigzag_pri from "@/assets/svgs/zigzag_pri.svg";
import pri_dotted from "@/assets/svgs/pri_dotted.svg";
import {componentsType} from "@/components/utils/datae";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export default function DesEng() {
    const desRef = useRef(null);
    const [, setValue] = useLocalStorage('viewState', 'landing');

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    localStorage.setItem('viewState', componentsType?.des);
                    setValue(componentsType?.des)
                }
            },
            {threshold: 0.5}
        );

        if (desRef.current) {
            observer.observe(desRef.current);
        }

        return () => {
            if (desRef.current) {
                observer.unobserve(desRef.current);
            }
        };
    }, [setValue]);

    return (
        <div ref={desRef} className="snap-start w-full lg:h-screen pt-76 pb-14 md:pt-20 lg:pt-52 lg:pb-0">
            <div
                className="flex flex-col md:flex-row justify-between gap-10 md:gap-32 px-12 md:px-14 lg:px-28 xl:px-36 w-full md:h-[350px]">
                <div className="relative h-full md:w-[50%] z-40">
                    <p className="text-4xl md:text-3xl lg:text-6xl font-bold lg:leading-16 text-[var(--primary)]">Engineering</p>
                    <p className="text-sm lg:text-base mt-4 text-[var(--pri-text)]">In building applications, I&#39;m
                        equipped with just the right tools, and can absolutely function independently of them to deliver
                        fast, resilient solutions designed for scale — performance and scalability are a priority for
                        me.
                    </p>

                    {/*left side absolutes*/}
                    <div className="hidden md:block absolute top-[72%] left-[40%]">
                        <Image src={bullet_pri} alt="" className="h-[10px]"/>
                    </div>

                    <div className="hidden md:block absolute top-[95%] left-[80%]">
                        <Image src={zigzag_pri} alt="" className="rotate-180 w-[50px]"/>
                    </div>
                </div>


                <div className="relative h-full md:w-[50%] flex flex-col justify-end">
                    <h2 className="text-4xl md:text-3xl lg:text-6xl font-bold lg:leading-16 text-[var(--primary)]">Security</h2>
                    <p className="text-sm lg:text-base mt-4 text-[var(--pri-text)]">Being a professional software
                        developer,
                        I
                        apply
                        cybersecurity best practices at every stage of development. From securing APIs using JWT and
                        OAuth2 to avoiding common vulnerabilities (XSS, SQL injection, CSRF), I create applications with
                        security in mind and I bring a strong security outlook to every project.
                    </p>

                    {/*right side absolutes*/}
                    <div className="hidden md:block absolute top-[15%] right-[62%]">
                        <Image src={bullet_pri} alt="" className="h-[10px]"/>
                    </div>

                    <div className="hidden lg:block absolute top-[17%] right-[20%]">
                        <Image src={pri_dotted} alt="" className="w-[120px] h-[100px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}