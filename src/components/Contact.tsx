'use client';
import {useState} from "react";
import Image from "next/image";
import arrow_icon from "@/assets/icons/arrow.svg";
import arrow_sec from "@/assets/icons/arrow_sec.svg";

export default function Contact() {
    const [btnHover, setBtnHover] = useState(false);

    return (
        <div className="snap-start w-full lg:h-screen py-10 lg:py-28 px-12">
            <div className="w-full h-full flex flex-col md:items-center justify-center gap-4">
                <h1 className="text-[var(--primary)] text-3xl lg:text-5xl font-bold">Send me a
                    message!</h1>
                <p className="text-[var(--primary)] md:text-center text-sm lg:text-lg md:w-[25rem]">
                    Got a question or proposal, or
                    just want to say hello? Go ahead.
                </p>

                <form
                    className="flex flex-col items-center gap-7 md:gap-12 w-[90%] md:w-[80%] lg:w-[45%] mt-5 lg:mt-10">
                    <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 w-full">
                        <div className="w-full">
                            <label className="text-[var(--input-color)] text-xs lg:text-sm">
                                Your Name
                            </label>
                            <input type="text"
                                   className="w-full py-2 text-sm text-[var(--primary)] placeholder-[var(--primary)] border-b border-[var(--input-color)] outline-none"
                                   placeholder="Enter your name"/>
                        </div>

                        <div className="w-full">
                            <label className="text-[var(--input-color)] text-xs lg:text-sm">
                                Email Address
                            </label>
                            <input type="text"
                                   className="w-full py-2 text-sm text-[var(--primary)] placeholder-[var(--primary)] border-b border-[var(--input-color)] outline-none"
                                   placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-[var(--input-color)] text-xs lg:text-sm">
                            Your Message
                        </label>
                        <input type="text"
                               className="w-full py-2 text-sm text-[var(--primary)] placeholder-[var(--primary)] border-b border-[var(--input-color)] outline-none"
                               placeholder="Enter your message"/>
                    </div>

                    <button
                        onMouseOver={() => setBtnHover(true)}
                        onMouseOut={() => setBtnHover(false)}
                        className="relative overflow-hidden px-6 py-3 text-[var(--primary)] font-medium bg-white group flex items-center justify-center gap-5 p-3 border border-[var(--primary)] w-[80%] md:w-[60%] cursor-pointer mt-5 max-[450px]:-ml-12">
                        <span
                            className="absolute inset-0 w-full h-full bg-[var(--primary)] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">

                        </span>
                        <span
                            className="uppercase text-xs group-hover:text-white relative z-10 transition-colors duration-500 ease-in-out">
                          fire
                        </span>
                        {!btnHover && <Image src={arrow_icon} alt=""/>}
                        {btnHover && <Image src={arrow_sec} alt="" className="z-20"/>}
                    </button>
                </form>
            </div>
        </div>
    )
}