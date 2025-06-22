import Image from "next/image";
import pri_dotted from "@/assets/svgs/pri_dotted.svg";
import zigzag_pri from "@/assets/svgs/zigzag_pri.svg";
import profile_img from "@/assets/images/profile.jpeg";
import square_border from "@/assets/images/square_border.png";

export default function RightLandingScreen() {
    return (
        <div className="relative min-h-[390px] md:min-h-full md:h-full w-full md:w-[33%] bg-[var(--secondary)]">
            {/*center image*/}
            <div
                className="block md:hidden absolute top-[18%] left-[22%] w-full h-full z-50">
                <Image src={profile_img} alt="" className="h-[230px] lg:h-[370px] w-[220px] lg:w-[350px] object-cover"/>
            </div>

            <div
                className="block md:hidden absolute top-[22%] left-[26%] w-full h-full z-40">
                <Image src={square_border} alt="" className="h-[230px] lg:h-[370px] w-[220px] lg:w-[350px]"/>
            </div>

            <div className={"hidden md:block absolute bottom-24 lg:bottom-44 left-20 lg:left-28"}>
                <Image src={pri_dotted} alt="" width={120} height={120} className={"w-[70px] lg:w-[120px]"}/>
            </div>

            <div className={"hidden md:block absolute top-40 lg:top-60 left-32 lg:left-52"}>
                <Image src={zigzag_pri} alt="" width={75} height={75} className={"w-[30px] lg:w-[55px]"}/>
            </div>
        </div>
    )
}