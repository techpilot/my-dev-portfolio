'use client'
import Image from "next/image";
import big_quote from "@/assets/icons/big_quote.svg"
import donny from "@/assets/images/donny.png"
import juve from "@/assets/images/juve.png"
import evans from "@/assets/images/evans.png"
import teams_icon from "@/assets/icons/teams.svg"
import github_icon from "@/assets/icons/github.svg"
import linkedin_icon from "@/assets/icons/linkedin.svg"
import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <div className="snap-start w-full h-[1000px] md:h-[600px] lg:h-screen flex flex-col">
            <div className="bg-white w-full h-[110px] hidden lg:block"></div>

            <div className="flex flex-col-reverse md:flex-row justify-between flex-1 h-full">
                <div
                    className="py-10 lg:py-24 px-8 lg:px-14 bg-[var(--black-bg)] h-[50%] md:h-full w-full md:w-[45%] text-white space-y-5 flex flex-col justify-between">
                    <div className="flex flex-col gap-14">
                        <div className="flex flex-col gap-3">
                            <p className="text-white text-xl lg:text-3xl">Let&apos;s collaborate</p>
                            <p><a href="mailto:ngwustephen99@gmail.com"
                                  className="hover:text-[var(--secondary)] text-sm lg:text-base">ngwustephen99@gmail.com</a>
                            </p>
                            <p><a href="https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE" target="_blank"
                                  className="hover:text-[var(--secondary)] text-sm lg:text-base">Teams</a>
                            </p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <p className="hover:text-[var(--secondary)] cursor-pointer text-sm lg:text-base max-w-max">
                                <Link href={`/work`}>
                                    My Work
                                </Link>
                            </p>
                            <p className="hover:text-[var(--secondary)] cursor-pointer text-sm lg:text-base max-w-max">
                                <Link href={`/resume`} target='_blank'>
                                    My Résumé
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-between gap-3 pt-2 border-t">
                        <p className="text-sm lg:text-base">© Stephen Ngwu 2025</p>

                        <div className="flex items-center gap-2">
                            <Link href={`https://www.linkedin.com/in/stephenngwu`} target='_blank'>
                                <Image src={linkedin_icon} alt="" className="cursor-pointer w-6 h-6 lg:h-8 -mt-3 mr-2"/>
                            </Link>

                            <Link href={`https://github.com/techpilot`} target='_blank'>
                                <Image src={github_icon} alt="" className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"/>
                            </Link>

                            <Link href={'https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE'} target='_blank'>
                                <Image src={teams_icon} alt="" className="cursor-pointer h-6 lg:h-8 -mt-2"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex-1 h-[50%] md:h-full w-full md:w-[55%] flex text-white">
                    <div className="h-full w-[50%] bg-[var(--third-bg)] p-3 md:p-5 lg:p-7">
                        <div className="w-full flex justify-between items-start">
                            <Image src={big_quote} alt=""/>

                            <div
                                className="h-16 lg:h-20 w-16 lg:w-20 rounded-full bg-[#ffffff14] p-0.5 flex justify-center items-center">
                                <Image src={juve} alt="juventus" placeholder="blur"
                                       className="rounded-full h-14 lg:h-18 w-14 lg:w-18 object-cover"/>
                            </div>
                        </div>

                        <div className="mt-3 lg:mt-7">
                            <p className="text-[10px] md:text-xs lg:text-base">
                                It has been a pure delight to work with Stephen. He applies the highest level of
                                professionalism and expediency to each
                                assignment, and always delivers top-quality work. Most impressive is his ability to
                                penetrate complexity and go directly to the core of what truly needs to be
                                accomplished — getting the job done, and doing it superbly. Not only is Stephen
                                reliable,
                                he also possesses a very high work ethic and attention to detail that sets him apart
                                from everyone else. <br/>I wholeheartedly endorse him and would unconditionally
                                nominate
                                him
                                for any project or job.
                            </p>
                            <p className="text-sm lg:text-lg font-semibold mt-2 lg:mt-5">- Juventus Jude</p>
                            <p className="text-xs lg:text-sm text-[#fafafa]">CEO, Spordis Binary</p>
                        </div>
                    </div>

                    <div className="h-full w-[50%]">
                        <div className="h-[45%] bg-[#A32BFF] p-3 md:p-5 lg:p-7">
                            <div className="w-full flex justify-between items-start">
                                <Image src={big_quote} alt=""/>

                                <div
                                    className="h-16 lg:h-20 w-16 lg:w-20 rounded-full bg-[#ffffff14] p-0.5 flex justify-center items-center">
                                    <Image src={donny} alt="donny" placeholder="blur"
                                           className="rounded-full h-14 lg:h-18 w-14 lg:w-18"/>
                                </div>
                            </div>

                            <div className="mt-3 lg:mt-7">
                                <p className="text-[10px] md:text-sm lg:text-base">Stephen is a software developer with
                                    a
                                    creative flare. He is among the fundamental
                                    components of whatido. I wholeheartedly endorse</p>
                                <p className="text-sm lg:text-lg font-semibold mt-2 lg:mt-5">- Donny Summet</p>
                                <p className="text-xs lg:text-sm text-[#fafafa]">Tech Entrepreneur</p>
                            </div>
                        </div>

                        <div className="h-[55%] bg-[#DD551B] p-3 md:p-5 lg:p-7">
                            <div className="w-full flex justify-between items-start">
                                <Image src={big_quote} alt=""/>

                                <div
                                    className="h-16 lg:h-20 w-16 lg:w-20 rounded-full bg-[#ffffff14] p-0.5 flex justify-center items-center">
                                    <Image src={evans} alt="evans" placeholder="blur"
                                           className="rounded-full h-14 lg:h-18 w-14 lg:w-18"/>
                                </div>
                            </div>

                            <div className="mt-3 lg:mt-7">
                                <p className="text-[10px] md:text-sm lg:text-base">Stephen is absolutely an excellent
                                    teammate, his depth of knowledge & his problem solving skill really meant a lot to
                                    our team</p>
                                <p className="text-sm lg:text-lg font-semibold mt-2 lg:mt-5">- Chinonso Ekwo</p>
                                <p className="text-xs lg:text-sm text-[#fafafa]">Software Engineer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}