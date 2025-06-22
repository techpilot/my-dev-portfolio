"use client"

import Image, {StaticImageData} from "next/image";
import {useState} from "react";

interface ProjectCardProps {
    img: StaticImageData;
    title: string;
    short_description: string;
    tech: string[];
    website: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({img, title, short_description, tech}) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="relative rounded-md mx-2 my-4 cursor-pointer" onMouseOver={() => setHovered(true)}
             onMouseOut={() => setHovered(false)}>
            <Image
                src={img} alt=""
                className="rounded-md"
            />

            {hovered && (
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
        </div>
    )
}

export default ProjectCard;