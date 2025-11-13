'use client'

import {Poppins} from "next/font/google";
import Image from "next/image";
import linkedin from "@/assets/icons/linkedin_blue.svg"
import download_icon from "@/assets/icons/download.svg"
import Link from "next/link";

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
            <div className="container mx-auto md:my-[40px] p-4 md:p-[30px] bg-[var(--resume-bg)] relative">
                <div className="flex items-center gap-4 absolute top-6 right-6">
                    <Link href={'https://www.linkedin.com/in/stephenngwu'} target="_blank">
                        <Image src={linkedin} alt="" className="w-4 h-4 cursor-pointer"/>
                    </Link>

                    <div onClick={handleDownload} className="flex items-center gap-1 cursor-pointer">
                        <Image src={download_icon} alt="" className="w-4 h-4"/>
                        <p className="text-sm text-[var(--pri-text)]">Download</p>
                    </div>
                </div>
                <div className="lg:px-10 py-10">
                    <p className="text-5xl font-extrabold text-[var(--primary)]">Stephen Ngwu</p>
                    <p className="text-base lg:text-lg text-[var(--pri-text)] font-medium mt-2">Frontend Engineer |
                        Cybersecurity Analyst</p>
                </div>
                <div className="flex flex-wrap -mx-4 w-full">
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Sumary</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">
                                Stephen Ngwu
                            </h4>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Nigeria</li>
                                    <li className="text-[var(--pri-text)]">ngwustephen99@gmail.com</li>
                                    <li className="text-[var(--pri-text)]">
                                        <a href="https://github.com/techpilot"
                                           target="_blank"
                                           className="no-underline text-[var(--resume-link)]">
                                            https://github.com/techpilot
                                        </a>
                                    </li>
                                </ul>
                            </p>
                        </div>

                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Education</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Bachelor
                                of Computer Science and Mathematics</h4>
                            <h5 className="text-[var(--pri-text)]">2017 - 2021</h5>
                            <p className="text-[var(--pri-text)]"><em>University of Nigeria Nsukka</em></p>
                        </div>


                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">Skills</h3>
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <ul className="list-disc list-outside flex flex-col gap-1">
                                <li className="text-[var(--pri-text)]">
                                    <strong>Languages and Frameworks:</strong> Python, JavaScript, Typescript, Java,
                                    Solidity, PowerShell, Angular, ReactJS, Vue3,
                                    NodeJS
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Technologies and Tools:</strong> JSON,
                                    Docker, Cloud Storage, Virtual Machines, SQL, VirusTotal, Splunk
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Platforms:</strong> Google Cloud
                                    Platform, Mapbox, Stripe, WebRTC, Socket.io, Postman, Version Control (Git)
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Paradigms</strong>: REST API Architecture, Agile Software Development,
                                    Microservices, CI/CD
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Database:</strong> PostgreSQL, MySQL,
                                    MongoDB, Firestore, JSON
                                </li>
                                <li className="text-[var(--pri-text)]"><strong>Security:</strong> Unit testing, Threat
                                    Modelling, Code Review, SAST, DAST, SCA, IAM, SIEM/SOAR
                                </li>
                                <li className="text-[var(--pri-text)]">
                                    <strong>Others:</strong> Network Security, Operating System (Linux & Windows)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*experience section*/}
                    <div className="w-full lg:w-1/2 px-4">
                        <h3 className="text-[26px] font-bold mt-5 mb-5 text-[var(--pri-text)]">
                            Professional Experience
                        </h3>

                        {/*SBINARY*/}
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">
                                Software Engineer
                            </h4>
                            <h5 className={`text-[14px] bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>
                                Jul 2024 - Present
                            </h5>
                            <p className="text-[var(--pri-text)] my-1 font-medium"><em>Spordis Binary</em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Implemented a Shift Left approach by
                                        integrating threat modeling, SAST (Snyk), and DAST (Nikto, OWASP ZAP)
                                        while hardening CI/CD pipelines, ensuring secure deployments and reducing
                                        critical vulnerabilities by 45%
                                    </li>
                                    <li className="text-[var(--pri-text)]">Implemented API-driven LLM integrations using
                                        JavaScript and TypeScript to enable real-time interaction, parsing,
                                        and response evaluation.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Built and optimized JSON prompt structures
                                        for multi-step AI agents, enhancing decision-making accuracy and
                                        performance evaluation for real-time sports token live charts.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Designed and tested APIs against OWASP API
                                        Security Top 10 using Postman, ensuring robust authentication,
                                        authorization, and input validation aligned with industry best standards.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Boosted team performance by 25% by
                                        integrating security best practices into agile workflows, mentoring developers
                                        on secure coding, and leveraging GitHub Actions to reduce vulnerabilities.
                                    </li>
                                </ul>
                            </p>

                            <br/>
                            <strong className="text-[var(--pri-text)]">Projects</strong>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">
                                        <a href="https://global.spox.trading"
                                           target="_blank"
                                           className="no-underline text-[var(--resume-link)]">SPOX</a>:
                                        Designed and engineered a robust trading platform with seamless interoperability
                                        between front-end and back-end systems.
                                        Additionally, I worked closely with designers and engineers and reported to
                                        stakeholders to ensure unified development, smooth workflows, and high
                                        usability.
                                    </li>
                                </ul>
                            </p>
                        </div>

                        {/*C-SUNSHINE*/}
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Front-End
                                Engineer</h4>
                            <h5 className={`text-[14px] bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>
                                Nov 2023 - Jul 2024
                            </h5>
                            <p className="text-[var(--pri-text)] my-1 font-medium"><em>C-Sunshine, Bratislava,
                                Slovakia </em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Increased revenue and slashed development
                                        expenses by 20% through the deployment of a dynamic, real-time
                                        medical check-up chart.
                                    </li>
                                    <li className="text-[var(--pri-text)]">
                                        Boosted user engagement by 15% by engineering a JSON-based survey module that
                                        automated response handling,
                                        improved UX, and streamlined feedback analytics.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Leveraged Test Driven Development to optimize
                                        web pages for peak performance and scalability.
                                    </li>
                                </ul>
                            </p>

                            <br/>
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

                        {/*NANOCODES*/}
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Lead
                                Front-end Engineer</h4>
                            <h5 className={`text-[14px] bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Jan
                                2023
                                - Feb 2024</h5>
                            <p className="text-[var(--pri-text)] my-1 font-medium"><em>Nanocodes
                                Programming</em></p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Led the design and optimization of dynamic
                                        frontend workflows using JSON-based configuration schemas,
                                        improving user interaction, system responsiveness, and overall task execution
                                        efficiency across applications.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Drove a 25% increase in customer engagement
                                        by leading the development of an intuitive, high-performing customer
                                        service platform.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Catalyzed a 14% revenue uplift by
                                        architecting and delivering a robust, industry-compliant e-commerce solution
                                        aligned with business goals.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Engineered the front-end architecture for
                                        Andromedia’s live chat application, delivering a user experience
                                        comparable to industry leaders like Tidio Chat.
                                    </li>
                                </ul>
                            </p>

                            <br/>
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

                        {/*DREAM HUNTERS*/}
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 md:pb-7 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Front-end
                                Developer</h4>
                            <h5 className={`text-[14px] bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Oct
                                2022
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

                        {/*WHATIDO*/}
                        <div className="relative before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-full before:left-[-9px] before:top-0 before:bg-[var(--primary)] before:border-2 before:border-[var(--primary)]
                        pt-0 pr-0 pb-5 pl-5 md:pl-8 -mt-0.5 border-l-2 border-black/80">
                            <h4 className="text-[16px] leading-[18px] font-semibold uppercase text-[var(--primary)] mb-2.5">Full
                                Stack Engineer</h4>
                            <h5 className={`text-[14px] bg-[#00000026] py-1 px-3 font-bold ${poppins.variable} max-w-max`}>Aug
                                2021
                                - Oct 2022</h5>
                            <p className="text-[var(--pri-text)] my-1"><em>Global Network LLC, Avondale, United
                                States</em>
                            </p>
                            <p>
                                <ul className="list-disc list-outside flex flex-col gap-1">
                                    <li className="text-[var(--pri-text)]">Optimized payment processes and reduced
                                        operational costs by 35% through the development and deployment of
                                        an Ethereum-based smart contract solution.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Integrated Paystack and Stripe payment
                                        gateways to enable seamless, secure, and multi-currency transactions,
                                        resulting in a 30% increase in successful payments and improved overall user
                                        trust and conversion rates.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Increased user engagement by 15% through the
                                        implementation of personalized, real-time email and push
                                        notification campaigns.
                                    </li>
                                    <li className="text-[var(--pri-text)]">Enhanced user experience and increased
                                        engagement by 20% through the integration of advanced Elasticsearch
                                        functionality.
                                    </li>
                                </ul>
                            </p>

                            <br/>
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