"use client"

import {motion, AnimatePresence} from "framer-motion";
import React, {Dispatch, SetStateAction, useEffect} from "react";
import back_icon from "@/assets/icons/back_icon.svg"
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type ProjectTypes = {
    img: StaticImageData;
    title: string;
    short_description: string;
    tech: string[];
    website: string;
    id: number;
    github?: string;
    description: string;
}

interface SideDrawerProps {
    isDrawerOpen: boolean;
    setIsDrawerOpen: Dispatch<SetStateAction<boolean>>;
    project: ProjectTypes;
}

const SideDrawer: React.FC<SideDrawerProps> = ({isDrawerOpen, setIsDrawerOpen, project}) => {
    // disable body scroll when the side drawer is on
    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Clean up on unmounting
        return () => {
            document.body.style.overflow = '';
        };
    }, [isDrawerOpen]);

    return (
        <div>
            {/* Side Drawer */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        <motion.div
                            initial={{x: '100%'}}
                            animate={{x: 0}}
                            exit={{x: '100%'}}
                            transition={{type: 'tween'}}
                            className="fixed top-0 right-0 w-full md:w-[34rem] h-full bg-white shadow-lg z-30 p-4 md:p-7"
                        >
                            <div className="h-full flex flex-col gap-4 overflow-y-scroll scrollbar-hide">
                                <div className="flex justify-between items-center pb-3 border-b border-[#d5d5d5]">
                                    <Image src={back_icon} alt="" className="cursor-pointer"
                                           onClick={() => setIsDrawerOpen(false)}/>
                                    <p className="text-sm font-bold">Back To Projects</p>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <div className="space-y-1">
                                        <p className="font-bold lg:text-xl">{project?.title}</p>
                                        <p className="text-sm lg:text-[15px] text-[var(--work-font)]">{project?.short_description}</p>
                                    </div>

                                    <Image
                                        src={project?.img} alt=""
                                        className="rounded-lg h-[300px] w-full object-cover shadow-md"
                                    />

                                    {project?.description && <div className="space-y-1 mt-3 md:mt-5">
                                        <p className="font-semibold text-sm lg:text-lg">Description</p>
                                        <p className="text-xs lg:text-[15px] text-[var(--work-font)]">{project?.description}</p>
                                    </div>}

                                    <div className="space-y-1 mt-3 md:mt-5">
                                        <p className="font-semibold text-sm lg:text-lg">Technologies</p>
                                        <div className="flex items-center gap-3 flex-wrap">
                                            {project?.tech.map((tech, index) => (
                                                <p key={index}
                                                   className="text-xs bg-[#EFE9E4] px-2 py-1 rounded-md capitalize font-medium">{tech}</p>
                                            ))}
                                        </div>
                                    </div>

                                    {project?.website && <div className="mt-3 md:mt-5">
                                        <p className="font-semibold text-sm lg:text-lg">Website</p>
                                        <p>
                                            <Link href={project?.website}
                                                  target="_blank"
                                                  className="text-xs lg:text-sm cursor-pointer font-medium outline-none border-none">
                                                {project?.website}
                                            </Link>

                                        </p>
                                    </div>}

                                    {project?.github && <div className="mt-3 md:mt-5">
                                        <p className="font-semibold text-sm lg:text-lg">GitHub</p>
                                        <p>
                                            <Link href={project?.github}
                                                  target="_blank"
                                                  className="text-xs lg:text-sm cursor-pointer font-medium outline-none border-none">
                                                {project?.github}
                                            </Link>

                                        </p>
                                    </div>}
                                </div>
                            </div>
                        </motion.div>

                        {/* Backdrop */}
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 0.8}}
                            exit={{opacity: 0}}
                            className="fixed inset-0 bg-black z-20"
                            onClick={() => setIsDrawerOpen(false)}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}

export default SideDrawer