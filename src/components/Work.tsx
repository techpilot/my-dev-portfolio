'use client'

import Image from "next/image"
import {useState} from "react";
import ProjectCard from "@/components/ProjectCard";
import Masonry from "react-masonry-css";
import linkedin_icon from "@/assets/icons/linkedin_black.svg";
import github_icon from "@/assets/icons/github_black.svg";
import teams_icon from "@/assets/icons/teams_black.svg";
import arrow_icon from "@/assets/icons/arrow.svg"
import {projects} from "@/components/utils/datae";
import Link from "next/link";

const breakpointObj = {
    default: 2,
    450: 1
}

export default function Work() {
    const [selectedOption, setSelectedOption] = useState("all");

    const handleProjectsFilter = (value: string) => {
        if (value === "all") {
            return projects;
        } else {
            return projects.filter((item) => item.category.includes(value.toLowerCase()));
        }
    };

    return (
        <div className="w-full flex flex-col items-center gap-5 lg:gap-7 pt-10 md:pt-32">
            <h1 className="text-5xl text-[var(--primary)] text-center font-bold">Projects</h1>
            <div className="flex items-center gap-3 justify-center">
                <p className={`text-sm cursor-pointer px-2 py-1 ${selectedOption === 'all' ? 'text-[var(--primary)] border border-[var(--primary)] rounded-md font-medium' : 'text-[var(--work-font)]'}`}
                   onClick={() => setSelectedOption('all')}>
                    All
                </p>
                <p className={`text-sm cursor-pointer px-2 py-1 ${selectedOption === 'web' ? 'text-[var(--primary)] border border-[var(--primary)] rounded-md font-medium' : 'text-[var(--work-font)]'}`}
                   onClick={() => setSelectedOption('web')}>
                    Web
                </p>
                <p className={`text-sm cursor-pointer px-2 py-1 ${selectedOption === 'web3' ? 'text-[var(--primary)] border border-[var(--primary)] rounded-md font-medium' : 'text-[var(--work-font)]'}`}
                   onClick={() => setSelectedOption('web3')}>
                    Web 3
                </p>
                <p className={`text-sm cursor-pointer px-2 py-1 ${selectedOption === 'open-source' ? 'text-[var(--primary)] border border-[var(--primary)] rounded-md font-medium' : 'text-[var(--work-font)]'}`}
                   onClick={() => setSelectedOption('open-source')}>
                    Open Source
                </p>
            </div>

            <div className="w-full md:w-[85%] lg:w-[63%]">
                <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
                    {handleProjectsFilter(selectedOption).map((project, index) => (
                        <ProjectCard
                            key={index}
                            id={project.id}
                            img={project.img}
                            title={project.title}
                            short_description={project.short_description}
                            tech={project.tech}
                            website={project.website}
                            github={project?.github}
                            description={project.description}
                        />
                    ))}
                </Masonry>

                <div
                    className="flex flex-col gap-5 mt-10 p-2 pb-10">
                    <Link href={'/resume'} className="flex items-center gap-3 cursor-pointer">
                        <p className="font-medium ">Let&apos;s to my resume</p>
                        <Image src={arrow_icon} alt="" className="w-7 mt-1"/>
                    </Link>
                    <div className="flex items-center gap-2">
                        <Link href={'https://www.linkedin.com/in/stephenngwu'} target="_blank">
                            <Image
                                src={linkedin_icon} alt=""
                                className="cursor-pointer w-6 h-6 lg:h-8 -mt-1"
                            />
                        </Link>

                        <Link href={'https://github.com/techpilot'} target="_blank">
                            <Image src={github_icon} alt="" className="cursor-pointer w-6 h-6 lg:w-7 lg:h-7"/>
                        </Link>

                        <Link href={'https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE'} target="_blank">
                            <Image src={teams_icon} alt="" className="cursor-pointer h-6 lg:h-8"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}