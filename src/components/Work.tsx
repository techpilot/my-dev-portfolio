'use client'

import Image from "next/image"
import {useState} from "react";
import ProjectCard from "@/components/ProjectCard";
import Masonry from "react-masonry-css";
import linkedin_icon from "@/assets/icons/linkedin.svg";
import github_icon from "@/assets/icons/github.svg";
import teams_icon from "@/assets/icons/teams.svg";
import arrow_icon from "@/assets/icons/arrow_sec.svg"
import {projects} from "@/components/utils/datae";

const breakpointObj = {
    350: 1,
    750: 2
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
        <div className="w-full flex flex-col items-center gap-5 lg:gap-7 mt-10 lg:mt-16">
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

            <div className="w-full md:w-[80%] lg:w-[60%] ">
                <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointObj}>
                    {handleProjectsFilter(selectedOption).map((project, index) => (
                        <ProjectCard
                            key={index}
                            img={project.img}
                            title={project.title}
                            short_description={project.short_description}
                            tech={project.tech}
                            website={project.website}
                        />
                    ))}
                </Masonry>

                <div
                    className="flex flex-col gap-8 mt-10 bg-gradient-to-t from-[var(--third-bg)] to-[var(--primary)] p-5">
                    <div className="flex items-center gap-3 cursor-pointer">
                        <p className="font-medium text-white">Let&apos;s to my resume</p>
                        <Image src={arrow_icon} alt="" className="w-7 mt-1"/>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image onClick={() => window.open("https://www.linkedin.com/in/stephenngwu", "_blank")}
                               src={linkedin_icon} alt=""
                               className="cursor-pointer w-6 h-6 lg:h-8 -mt-3 mr-2"/>
                        <Image onClick={() => window.open("https://github.com/techpilot", "_blank")}
                               src={github_icon} alt="" className="cursor-pointer w-6 h-6 lg:w-8 lg:h-8"/>
                        <Image
                            onClick={() => window.open("https://teams.live.com/l/invite/FEAbewk99kGbLP5AgE", "_blank")}
                            src={teams_icon} alt="" className="cursor-pointer h-6 lg:h-8 -mt-2"/>
                    </div>
                </div>
            </div>
        </div>
    )
}