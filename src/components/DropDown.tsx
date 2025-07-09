'use client';

import React, {Dispatch, SetStateAction, useEffect, useState} from "react";
import {motion, AnimatePresence} from 'framer-motion';
import close_icon from "@/assets/icons/close.svg"
import Image from "next/image";
import Link from "next/link";
import {usePathname} from 'next/navigation';

interface DropDownProps {
    isDropdownOpen: boolean;
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
}

const DropDown: React.FC<DropDownProps> = ({isDropdownOpen, setIsDropdownOpen}) => {
    const pathname = usePathname();
    const [isWorkPage, setIsWorkPage] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);

    useEffect(() => {
        if (pathname == '/work') {
            setIsWorkPage(true);
        } else {
            setIsWorkPage(false);
        }

        if (pathname == '/') {
            setIsHomePage(true);
        } else {
            setIsHomePage(false);
        }
    }, [isWorkPage, pathname, isHomePage]);

    return (
        <>
            {/* Dropdown Menu */}
            <AnimatePresence>
                {isDropdownOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        className="fixed right-2 md:right-5 lg:right-10 mt-2 w-[95vw] md:w-88 bg-white rounded shadow-lg z-50"
                    >
                        <div className="flex flex-col gap-4 p-10">
                            <div className="flex justify-end">
                                <Image src={close_icon} alt="" className="cursor-pointer h-7"
                                       onClick={() => setIsDropdownOpen(false)}/>
                            </div>

                            {!isHomePage &&
                                <div className="max-w-max relative group">
                                    <p className="px-4 py-2 text-[var(--primary)] cursor-pointer">
                                        <Link href={`/`}>
                                            Home
                                        </Link>
                                    </p>

                                    <span
                                        className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-2 right-2 -z-10 transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                                </div>
                            }

                            {!isWorkPage &&
                                <div className="max-w-max relative group">
                                    <p className="pl-4 text-[var(--primary)] cursor-pointer max-w-max">
                                        <Link href={`/work`}>
                                            My Work
                                        </Link>
                                    </p>

                                    <span
                                        className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute -top-0.5 -right-2 -z-10 transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                                </div>
                            }

                            <div className="max-w-max relative group">
                                <p className="pl-4 py-2 text-[var(--primary)] cursor-pointer">
                                    <Link href={`/resume`} target="_blank">
                                        My Résumé
                                    </Link>
                                </p>

                                <span
                                    className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-2 -right-2 -z-10 transition-transform duration-300 
                                        ease-in-out transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                            </div>

                            <p className="mt-5 text-lg lg:text-xl px-4 py-2 text-[var(--work-font)]">
                                Let&apos;s collaborate
                            </p>

                            <div className="max-w-max relative group">
                                <p>
                                    <a href="mailto:ngwustephen99@gmail.com"
                                       className="text-sm lg:text-base px-4 py-2 text-[var(--primary)]">ngwustephen99@gmail.com
                                    </a>
                                </p>
                                <span
                                    className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-0 right-3 -z-10 transition-transform duration-300 ease-in-out 
                                        transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                            </div>


                            <div className="max-w-max relative group">
                                <p>
                                    <a href="https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE" target="_blank"
                                       className="text-sm lg:text-base px-4 py-2 text-[var(--primary)]">
                                        Microsoft Teams
                                    </a>
                                </p>
                                <span
                                    className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-0 right-3 -z-10 transition-transform duration-300 ease-in-out 
                                        transform -translate-x-full group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                            </div>

                            <div className="flex items-center gap-3 mt-5">
                                <div className="max-w-max relative group">
                                    <p>
                                        <a href="https://www.linkedin.com/in/stephenngwu" target="_blank"
                                           className="text-sm lg:text-sm font-medium px-4 py-2 text-[var(--primary)]">
                                            LN
                                        </a>
                                    </p>
                                    <span
                                        className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-0 right-2 -z-10 transition-transform duration-300 ease-in-out 
                                        transform -translate-x-[50%] group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                                </div>

                                <div className="max-w-max relative group">
                                    <p>
                                        <a href="https://github.com/techpilot" target="_blank"
                                           className="text-sm lg:text-sm font-medium px-4 py-2 text-[var(--primary)]">
                                            GH
                                        </a>
                                    </p>
                                    <span
                                        className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-0 right-2 -z-10 transition-transform duration-300 ease-in-out 
                                        transform -translate-x-[50%] group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                                </div>

                                <div className="max-w-max relative group">
                                    <p>
                                        <a href="https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE" target="_blank"
                                           className="text-sm lg:text-sm font-medium px-4 py-2 text-[var(--primary)]">
                                            TM
                                        </a>
                                    </p>

                                    <span
                                        className={`w-[1.2rem] h-[1.7rem] bg-transparent absolute top-0 right-2 -z-10 transition-transform duration-300 ease-in-out 
                                        transform -translate-x-[50%] group-hover:translate-x-0 group-hover:bg-[var(--resume-bg)]`}></span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default DropDown;