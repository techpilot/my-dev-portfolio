import Image from "next/image";
import brief from "@/assets/svgs/brief.svg";

export default function Brief() {
    return (
        <div className="snap-start w-full lg:h-screen py-10 lg:py-28 bg-[var(--primary)]">
            <div
                className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32 px-12 md:px-14 lg:px-28 xl:px-36 w-full md:h-full">
                <div className="w-full md:w-[37%]">
                    <h2 className="text-[var(--secondary)] text-4xl md:text-3xl lg:text-6xl font-extrabold lg:leading-16">Over
                        the years</h2>

                    <p className="text-white text-sm md:text-xs lg:text-[0.95rem] mt-7">I&#39;ve built products for
                        companies
                        and
                        businesses around the globe ranging from e-commerce websites to complex solutions and enterprise
                        apps with focus on fast, elegant and accessible user experiences.
                        <br/>
                        <br/>
                        Currently, I work at SBinary as a Full-Stack Engineer crafting thoughtful and inclusive
                        experiences that adhere to web standards.
                        <br/>
                        <br/>
                        Before now, I was Principal Frontend Engineer at C-Sunshine, where I worked on a suite of tools
                        and services tailored towards providing software solutions for medical practitioners, and an
                        fitness buddies.
                        <br/>
                        <br/>
                        Prior to C-Sunshine, I was Lead Frontend Engineering consultant with Nanocodes, building
                        JavaScript applications and interfaces for organizations and individuals.
                        <br/>
                        <br/>
                        I once also led the frontend team at whatido, a professional social media startup through
                        building a video-heavy and live call React applications.</p>
                </div>

                <div className="w-full md:w-[63%]">
                    <Image src={brief} alt="" className="w-full"/>
                </div>
            </div>
        </div>
    )
}