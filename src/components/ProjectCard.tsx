"use client"

import Image, {StaticImageData} from "next/image";
import {useEffect, useState} from "react";
import SideDrawer from "@/components/SideDrawer";

interface ProjectCardProps {
    img: StaticImageData;
    title: string;
    short_description: string;
    tech: string[];
    website: string;
    id: number;
    github?: string;
    description: string;
}

const ProjectCard: React.FC<ProjectCardProps> =
    ({
         img,
         title,
         short_description,
         tech,
         id,
         github,
         description,
         website
     }) => {
        const [hovered, setHovered] = useState(false);
        const [isDrawerOpen, setIsDrawerOpen] = useState(false);
        const [isMobileScreen, setIsMobileScreen] = useState(false);

        const handleProjectDetails = (id: number) => {
            localStorage.setItem('project_id', id.toString());
            setIsDrawerOpen(true)
        }

        useEffect(() => {
            function isMobileUserAgent() {
                const userAgent = navigator.userAgent || navigator.vendor
                const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mobi|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
                const tabletRegex = /android|ipad|playbook|silk/i;

                return mobileRegex.test(userAgent) || tabletRegex.test(userAgent);
            }

            setIsMobileScreen(isMobileUserAgent())
        }, []);

        return (
            <>
                <div className="relative rounded-md mx-2 my-4 cursor-pointer"
                     onMouseOver={() => setHovered(true)}
                     onMouseOut={() => setHovered(false)}
                     onClick={() => handleProjectDetails(id)}>
                    <Image
                        src={img} alt={title}
                        className="rounded-md"
                        placeholder="blur"
                        priority
                    />

                    {hovered && !isMobileScreen && (
                        <>
                            <div
                                className="absolute inset-0 top-0 bottom-0 left-0 right-0
                        bg-gradient-to-t from-black/75 to-black/10 bg-opacity-50 flex flex-col justify-end gap-1.5 p-5 rounded-md"
                            >
                                <p className="text-white lg:text-xl font-bold capitalize">{title}</p>
                                <p className="text-[#d5d5d5] text-xs lg:text-sm font-medium">
                                    {short_description}
                                </p>
                                <div className="flex items-center gap-3 flex-wrap">
                                    {tech.map((tech, index) => (
                                        <p key={index}
                                           className="text-white text-xs bg-[#696869b0] px-2 py-1 rounded-3xl capitalize font-medium">{tech}</p>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/*    mobile*/}
                    {isMobileScreen && (
                        <div
                            className="absolute inset-0 top-0 bottom-0 left-0 right-0
                        bg-gradient-to-t from-black/75 to-black/10 bg-opacity-50 flex flex-col justify-end gap-1.5 p-5 rounded-md"
                        >
                            <p className="text-white lg:text-xl font-bold capitalize">{title}</p>
                            <p className="text-[#d5d5d5] text-xs lg:text-sm font-medium">
                                {short_description}
                            </p>
                            <div className="flex items-center gap-3 flex-wrap">
                                {tech.map((tech, index) => (
                                    <p key={index}
                                       className="text-white text-xs bg-[#696869b0] px-2 py-1 rounded-3xl capitalize font-medium">{tech}</p>
                                ))}
                            </div>
                        </div>)}
                </div>

                <SideDrawer isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} project={{
                    img: img,
                    title: title,
                    short_description: short_description,
                    tech: tech,
                    id: id,
                    description: description,
                    github: github,
                    website: website
                }}/>
            </>
        )
    }

export default ProjectCard;