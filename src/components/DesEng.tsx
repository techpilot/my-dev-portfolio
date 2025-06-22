import Image from "next/image";
import bullet_pri from "@/assets/svgs/bullet_pri.svg";
import zigzag_pri from "@/assets/svgs/zigzag_pri.svg";
import pri_dotted from "@/assets/svgs/pri_dotted.svg";

export default function DesEng() {
    return (
        <div className="snap-start w-full lg:h-screen pt-76 pb-14 md:pt-20 lg:pt-52 lg:pb-0">
            <div
                className="flex flex-col md:flex-row justify-between gap-10 md:gap-32 px-12 md:px-14 lg:px-28 xl:px-36 w-full md:h-[350px]">
                <div className="relative h-full">
                    <p className="text-4xl md:text-3xl lg:text-6xl font-bold lg:leading-16 text-[var(--primary)] z-50">Engineering</p>
                    <p className="text-sm lg:text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium aliquid culpa fuga laboriosam
                        modi quam tenetur voluptates? Eius explicabo perferendis sint suscipit tempora. Culpa distinctio
                        dolorum hic numquam officia perferendis?
                    </p>

                    {/*left side absolutes*/}
                    <div className="hidden md:block absolute top-[72%] left-[40%]">
                        <Image src={bullet_pri} alt="" className="h-[10px]"/>
                    </div>

                    <div className="hidden md:block absolute top-[95%] left-[80%]">
                        <Image src={zigzag_pri} alt="" className="rotate-180 w-[50px]"/>
                    </div>
                </div>


                <div className="relative h-full flex flex-col justify-end">
                    <h2 className="text-4xl md:text-3xl lg:text-6xl font-bold lg:leading-16 text-[var(--primary)]">Cybersecurity</h2>
                    <p className="text-sm lg:text-base mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium aliquid culpa fuga laboriosam
                        modi quam tenetur voluptates? Eius explicabo perferendis sint suscipit tempora. Culpa distinctio
                        dolorum hic numquam officia perferendis?
                    </p>

                    {/*right side absolutes*/}
                    <div className="hidden md:block absolute top-[15%] right-[62%]">
                        <Image src={bullet_pri} alt="" className="h-[10px]"/>
                    </div>

                    <div className="hidden md:block absolute top-[17%] right-[20%]">
                        <Image src={pri_dotted} alt="" className="w-[120px] h-[100px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}