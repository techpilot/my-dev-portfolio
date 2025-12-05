import Image from 'next/image'
import circular_search from "@/assets/svgs/circular_search.svg";
import sec_dotted from "@/assets/svgs/sec_dotted.svg";
import zigzag_sec from "@/assets/svgs/zigzag_sec.svg";
import Link from "next/link";

export default function LeftLandingScreen() {
    return (
        <div className="relative h-full flex-1 w-full md:w-[67%] bg-[var(--primary)]">
            {/*absolutely placed svgs*/}
            <div className={"hidden lg:block absolute top-1 left-0 z-30"}>
                <Image src={circular_search} alt="" width={250} height={250}/>
            </div>

            <div className={"hidden md:block absolute top-16 lg:top-24 right-14 lg:right-24"}>
                <Image src={sec_dotted} alt="" width={120} height={120} className={"w-[70px] lg:w-[120px]"}/>
            </div>

            <div className={"hidden md:block absolute top-44 lg:top-68 right-14 lg:right-32"}>
                <Image src={zigzag_sec} alt="" width={100} height={100} className="w-[50px] lg:w-[80px]"/>
            </div>

            <div className={"hidden lg:block absolute top-64 lg:top-100 right-24 lg:right-60"}>
                <Image src={zigzag_sec} alt="" width={100} height={100} className={"rotate-45 w-[50px] lg:w-[80px]"}/>
            </div>

            <div
                className="px-12 md:px-0 md:ml-14 lg:ml-28 xl:ml-36 mt-32 md:mt-20 lg:mt-32 xl:mt-40 flex flex-col justify-center md:justify-between w-full md:w-[30rem] lg:w-[35rem]">
                <div>
                    <h1 className="text-5xl md:text-3xl lg:text-6xl font-bold lg:leading-16 text-[var(--secondary)]">Software <br/> Engineer
                        <span
                            className="bg-white rounded-full h-2.5 w-2.5 inline-block -ml-1"></span>
                    </h1>
                    <p className="text-white text-base mt-3 md:w-[23rem] lg:w-[30rem] cursor-pointer">I focus on writing
                        clean,
                        efficient
                        code
                        and thrive
                        in collaborative environments.
                    </p>

                    <div className="relative h-16">
                        <Link
                            href={'/spox'}
                            className="z-[100] absolute inset-0 px-3 lg:px-5 py-3 border-2 rounded-full font-medium flex items-center transition-all hover:shadow-lg text-sm lg:text-base max-w-max mt-4"
                            style={{borderColor: '#CCF381', color: '#CCF381'}}>
                            Spox Case Study
                            {/*<Github className="w-5 h-5 mr-2"/>*/}
                        </Link>
                    </div>
                </div>

                <div className="flex flex-row gap-6 md:gap-12 mb-10 md:mb-0 mt-20 md:mt-12 lg:mt-28 w-full">
                    <p className="text-[var(--secondary)] text-xs lg:text-sm w-[50%]">I am all
                        in — attention to details, thoughtful, structured, and test-driven.</p>
                    <p className="text-[var(--secondary)] text-xs lg:text-sm w-[50%]">Crafting real-time
                        systems, architecting software, and mentoring the next generation of developers.</p>
                </div>
            </div>
        </div>
    )
}