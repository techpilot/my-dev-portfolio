'use client';

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import arrow_icon from "@/assets/icons/arrow.svg";
import arrow_sec from "@/assets/icons/arrow_sec.svg";
import {componentsType} from "@/components/utils/datae";
import emailjs from "@emailjs/browser";
import {motion, AnimatePresence} from 'framer-motion';

export default function Contact() {
    const formData: any = useRef(null);
    const [btnHover, setBtnHover] = useState(false);
    const contactRef = useRef(null);
    const [successMsg, setSuccessMsg] = useState<string | null>('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE || 'template_xpx0klq';
        const key = process.env.NEXT_PUBLIC_EMAILJS_KEY;
        if (key) {
            setIsLoading(true);
            emailjs
                .sendForm(`${serviceID}`, `${templateID}`, formData?.current, {
                    publicKey: `${key}`,
                })
                .then(
                    () => {
                        console.log("SUCCESS!");
                        setIsLoading(false);
                        setSuccessMsg("Boom! Your message just landed in my inbox.");

                        setTimeout(() => {
                            setSuccessMsg(null);
                        }, 10000);
                    },
                    (error) => {
                        console.log("FAILED...", error);
                        setIsLoading(false);
                    }
                );
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    localStorage.setItem('viewState', componentsType?.contact);
                }
            },
            {threshold: 0.5}
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => {
            if (contactRef.current) {
                observer.unobserve(contactRef.current);
            }
        };
    }, []);

    return (
        <div ref={contactRef} className="snap-start w-full lg:h-screen py-10 lg:py-28 px-12">
            <div className="w-full h-full flex flex-col md:items-center justify-center gap-4">
                <h1 className="text-[var(--primary)] text-3xl lg:text-5xl font-bold">Send me a
                    message!</h1>
                <p className="text-[var(--primary)] md:text-center text-sm lg:text-lg md:w-[25rem]">
                    Got a question or proposal, or
                    just want to say hello? Go ahead.
                </p>

                <form
                    ref={formData}
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center gap-7 md:gap-12 w-[90%] md:w-[80%] lg:w-[45%] mt-5 lg:mt-10">
                    <div className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 w-full">
                        <div className="w-full">
                            <label className="text-[var(--input-color)] text-xs lg:text-sm">
                                Your Name
                            </label>
                            <input type="text"
                                   name="from_name"
                                   required
                                   className="w-full py-2 text-sm text-[#3d155f] border-b border-[var(--input-color)] outline-none"
                                   placeholder="Enter your name"/>
                        </div>

                        <div className="w-full">
                            <label className="text-[var(--input-color)] text-xs lg:text-sm">
                                Email Address
                            </label>
                            <input type="email"
                                   name="from_email"
                                   required
                                   className="w-full py-2 text-sm text-[#3d155f] border-b border-[var(--input-color)] outline-none"
                                   placeholder="Enter your email address"/>
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-[var(--input-color)] text-xs lg:text-sm">
                            Your Message
                        </label>
                        <textarea
                            name="message"
                            required
                            className="resize-none w-full py-2 text-sm text-[#3d155f] border-b border-[var(--input-color)] outline-none h-[2.5rem]"
                            placeholder="Enter your message"></textarea>
                    </div>

                    <button
                        onMouseOver={() => setBtnHover(true)}
                        onMouseOut={() => setBtnHover(false)}
                        type="submit"
                        disabled={isLoading}
                        className="relative overflow-hidden px-6 py-3 text-[var(--primary)] font-medium bg-white group flex items-center justify-center gap-5 p-3 border border-[var(--primary)] w-[80%] md:w-[60%] cursor-pointer mt-5 max-[450px]:-ml-12">
                        <span
                            className="absolute inset-0 w-full h-full bg-[var(--primary)] transition-transform duration-500 ease-in-out transform -translate-x-full group-hover:translate-x-0">

                        </span>
                        <span
                            className="uppercase text-xs group-hover:text-white relative z-10 transition-colors duration-500 ease-in-out">
                          {isLoading ? 'shooting...' : 'shoot'}
                        </span>
                        {!btnHover && <Image src={arrow_icon} alt=""/>}
                        {btnHover && <Image src={arrow_sec} alt="" className="z-20"/>}
                    </button>
                </form>
            </div>

            {/*    success banner*/}
            <AnimatePresence>
                {successMsg && (
                    <motion.div
                        id={"popup"}
                        initial={{opacity: 0, y: -10}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -10}}
                        className="fixed right-2 top-24 md:top-10 md:right-5 lg:right-10 mt-2 w-[95vw] md:w-[20rem] bg-white rounded shadow-lg p-5 z-50"
                    >
                        <p className="text-sm font-medium text-black">
                            {successMsg}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}