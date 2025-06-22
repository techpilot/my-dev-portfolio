import Image from "next/image";
import brief from "@/assets/svgs/brief.svg";

export default function Brief() {
    return (
        <div className="snap-start w-full lg:h-screen py-10 lg:py-28 bg-[var(--primary)]">
            <div
                className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-32 px-12 md:px-14 lg:px-28 xl:px-36 w-full md:h-[600px]">
                <div className="w-full md:w-[37%]">
                    <h2 className="text-[var(--secondary)] text-4xl md:text-3xl lg:text-6xl font-extrabold lg:leading-16">Over
                        the years</h2>

                    <p className="text-white text-sm md:text-xs lg:text-base mt-5">4+ years of experience working in the
                        software
                        industry, I specialize in building scalable, user-centric web applications and delivering
                        intuitive, visually compelling interfaces. My expertise spans JavaScript, TypeScript, ReactJS,
                        Angular, VueJS, and Web3 technologies. Proficient in both Object-Oriented and Functional
                        Programming, I focus on writing clean, efficient code and thrive in collaborative Agile
                        environments. Skilled in end-to-end development, I enjoy working with both frontend and backend
                        technologies, ensuring seamless integration and optimization for performance, accessibility, and
                        security.
                        <br/>
                        <br/>
                        With a strong foundation in Data Structures, and Algorithms, I am adept at solving complex
                        problems, driving impactful solutions, and enhancing the overall user experience. I am eager to
                        bring my passion for front-end development, and modern web technologies to innovative teams
                        focused on crafting the future of the web.</p>
                </div>

                <div className="w-full md:w-[63%]">
                    <Image src={brief} alt="" className="w-full"/>
                </div>
            </div>
        </div>
    )
}