'use client'

import {Poppins} from "next/font/google";
import Image from "next/image";
import linkedin from "@/assets/icons/linkedin_blue.svg"
import download_icon from "@/assets/icons/download.svg"

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: "400"
})

export default function Resume() {
    const handleDownload = async () => {
        try {
            const response = await fetch('/resume.pdf');

            if (!response.ok) {
                throw new Error('Failed to download PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');

            link.href = url;
            link.download = 'dev-stephen-resume.pdf';
            document.body.appendChild(link);
            link.click();

            // Cleanup
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download PDF. Please try again.');
        }
    };


    return (
        <section id="resume" className="resume">
            <div className="container mx-auto my-[40px] p-4 md:p-[30px] bg-[var(--resume-bg)] relative">
                <div className="flex items-center gap-4 absolute top-6 right-6">
                    <Image onClick={() => window.open("https://www.linkedin.com/in/stephenngwu", "_blank")}
                           src={linkedin} alt="" className="w-4 h-4 cursor-pointer"/>

                    <div onClick={handleDownload} className="flex items-center gap-1 cursor-pointer">
                        <Image src={download_icon} alt="" className="w-4 h-4"/>
                        <p className="text-sm text-[var(--pri-text)]">Download</p>
                    </div>
                </div>
                <div className="p-10">
                    <p className="text-6xl font-extrabold text-[var(--primary)]">Stephen<br/> Ngwu</p>
                    <p className="text-lg lg:text-xl text-[var(--pri-text)] font-medium mt-4">Expert Frontend developer
                        and Cybersecurity enthusiast.</p>
                </div>
                <div className="flex flex-wrap -mx-4 w-full">
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Sumary</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">
                                Stephen Ngwu
                            </h4>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Enugu, Nigeria</li>
                                    <li className="text-[var(--pri-text)]">ngwustephen99@gmail.com</li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Education</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Bachelor
                                of Computer Science and Mathematics</h4>
                            <h5 className="text-[var(--pri-text)]">2017 - 2021</h5>
                            <p className="text-[var(--pri-text)]"><em>University of Nigeria Nsukka</em></p>
                        </div>


                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Skills</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <ul className="list-disc list-outside flex flex-col gap-1">
                                <li className="text-[var(--pri-text)]">
                                    <strong>Programming Languages</strong>: JavaScript, Typescript, Python,
                                    Solidity,HTML5, CSS3
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Frameworks</strong>: ReactJS, NextJS, Angular, Vue3, NodeJS, ExpressJS,
                                    NestJS, Tailwind CSS, Styled Components, Redux, Context API
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>APIS</strong>: REST APIs</li>
                                <li className="text-[var(--pri-text)]"><strong>Cloud</strong>: Google Cloud, Mapbox,
                                    Stripe
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Tools</strong>: WebRTC, Socket.io, Git, GitHub, Postman, Twilio, Firebase,
                                    JWT,
                                    Webpack, Babel, CRA, Vite, Docker, React Hooks, Ethers, Hardhat, Jira,
                                    Asana, Trello
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Paradigms</strong>: REST API Architecture, Agile Software Development,
                                    Microservices, CICD
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Database</strong>: PostgreSQL, MySQL,
                                    MongoDB, Firestore, JSON
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Hosting</strong>: Vercel, Netlify,
                                    Namecheap
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Soft Skills</strong>: Communication, Scheduling, Flexibility, Leadership,
                                    Management
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*experience section*/}
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">
                            Professional Experience</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Front-End
                                Developer</h4>
                            <h5 className={`bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>
                                Nov 2023 - Present
                            </h5>
                            <p className="text-[var(--pri-text)] my-1 font-medium"><em>C-Sunshine, Bratislava,
                                Slovakia </em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Boosted revenue and slashed development
                                        expenses by 20% through
                                        the deployment of a dynamic, real-time medical check-up chart.
                                    </li>
                                    <li className="text-[var(--pri-text)]">
                                        Enhanced user engagement and feedback by 15% by integrating a robust survey
                                        feature.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Leveraged Test Driven Development to optimize
                                        web pages for peak
                                        performance and scalability.
                                    </li>
                                </ul>
                            </p>

                            <strong className="text-[var(--pri-text)]">Projects</strong>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">
                                        Body Fast (<a href="https://my.bodyfast.app/onboarding"
                                                      target="_blank"
                                                      className="no-underline text-[var(--resume-link)]">bodyfast.app</a>):
                                        Contributed to the Body Fast fitness webapplication by refining the
                                        authentication and onboarding experience
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Lead
                                Front-end Developer</h4>
                            <h5 className={`bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Jan 2023
                                - Feb 2024</h5>
                            <p className="text-[var(--pri-text)] my-1 font-medium"><em>Nanocodes
                                Programming</em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Spearheaded a skilled development team in
                                        crafting scalable software
                                        solutions, leveraging top-tier project management methodologies to
                                        align with industry benchmarks.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Drove a 25% surge in customer engagement by
                                        leading the creation of
                                        an intuitive customer service platform.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Catalyzed a 14% uplift in revenue through the
                                        strategic development of a
                                        robust, industry-standard e-commerce website.
                                    </li>
                                </ul>
                            </p>

                            <strong>Projects</strong>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">
                                        Andromedia (<a href="https://www.andromedia.cc"
                                                       target="_blank"
                                                       className="no-underline text-[var(--resume-link)]">andromedia.cc</a>):
                                        Engineered the front-end architecture of a
                                        live chat application, delivering a user experience on par with market
                                        leaders like Tidio Chat.
                                    </li>
                                    <li className="text-[var(--pri-text)]">
                                        Ms Network (<a href="https://www.msnetwork.com.ng"
                                                       target="_blank"
                                                       className="no-underline text-[var(--resume-link)]">msnetwork.com.ng</a>):
                                        Contributed front-end expertise to
                                        the development of a critical network application for the Nigerian Army
                                        82 Division, enhancing operational efficiency
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Front-end
                                Developer</h4>
                            <h5 className={`bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Oct 2022
                                - Jan 2023</h5>
                            <p className="my-1"><em>Dream Hunters DAO, Naples, Italy</em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Engineered robust RESTful APIs enhancing
                                        front-end to back-end
                                        system interoperability.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Fostered collaborative development with
                                        product managers, designers,
                                        and engineers to deliver cutting-edge web3 NFT platforms.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Elevated application efficiency through
                                        meticulous code reviews and
                                        optimization strategies, mitigating performance bottlenecks.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[18px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Full
                                Stack Engineer</h4>
                            <h5 className={`bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Aug 2021
                                - Oct 2022</h5>
                            <p className="text-[var(--pri-text)] my-1"><em>Global Network LLC, Avondale, United
                                States</em>
                            </p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Enhanced payment efficiency and slashed costs
                                        by 35% via the
                                        development of an Ethereum-based smart contract system.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Boosted user engagement by 15% by deploying
                                        personalized, real-time
                                        email and push notification strategies.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Elevated user experience and engagement by
                                        20% with the integration
                                        of an Elasticsearch functionality.
                                    </li>
                                </ul>
                            </p>

                            <strong className="text-[var(--pri-text)]">Projects</strong>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">
                                        whatido (<a href="https://www.whatido.app" target="_blank"
                                                    className="no-underline text-[var(--resume-link)]">whatido.app</a>):
                                        Led the development of a cutting-edge social
                                        media application, incorporating video reels, an explore page, and
                                        seamless crypto and Stripe payments, complemented by live
                                        messaging features.
                                    </li>

                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}