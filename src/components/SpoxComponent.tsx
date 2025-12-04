'use client';

import {
    Award,
    BarChart3,
    ChevronRight,
    Code,
    Database,
    ExternalLink,
    Github,
    Lock, Mail,
    Server,
    Shield, TrendingUp,
    Zap
} from 'lucide-react';
import spox_all from '@/assets/images/spox_all.png'
import Image from "next/image";
import spox_awareness from '@/assets/images/spox_awareness.png'
import {useState} from "react";

const techStack = [
    {category: 'Frontend', items: ['Angular', 'TypeScript', 'RxJS', 'TradingView'], icon: <Code className="w-5 h-5"/>},
    {category: 'Backend', items: ['NestJS', 'PostgreSQL', 'WebSockets', 'JWT'], icon: <Database className="w-5 h-5"/>},
    {category: 'Security', items: ['SCA', 'SAST', 'DAST', 'Threat Modeling'], icon: <Shield className="w-5 h-5"/>},
    {
        category: 'Infrastructure',
        items: ['Horizontal Scaling', 'Load Balancing', 'Redis'],
        icon: <Server className="w-5 h-5"/>
    }
];

const features = [
    {
        icon: <TrendingUp className="w-6 h-6"/>,
        title: 'Real-Time Trading Engine',
        description: 'Sub-second price updates with bidirectional WebSocket connections',
        challenge: 'Maintaining price consistency across 100+ concurrent users',
        tech: 'IndexedDB, WebSockets, Event-driven architecture',
        color: 'from-blue-500 to-blue-600'
    },
    {
        icon: <BarChart3 className="w-6 h-6"/>,
        title: 'TradingView Charts',
        description: 'Professional-grade charting with technical indicators and live updates',
        challenge: 'Custom datafeed adapters for real-time candle synchronization',
        tech: 'TradingView Library, Custom Data Adapters',
        color: 'from-indigo-500 to-indigo-600'
    },
    {
        icon: <Shield className="w-6 h-6"/>,
        title: 'Enterprise Security',
        description: 'Comprehensive testing: SCA, SAST, DAST, and threat modeling',
        challenge: 'Bank-grade security without sacrificing development velocity',
        tech: 'Snyk, OWASP ZAP, Nikto, Grafana k6',
        color: 'from-purple-500 to-purple-600'
    },
    {
        icon: <Lock className="w-6 h-6"/>,
        title: 'Multi-Auth & KYC',
        description: 'Traditional and Google OAuth with mandatory identity verification',
        challenge: 'Managing verification states across features gracefully',
        tech: 'JWT, Google Auth2.0, Multi-step verification flow',
        color: 'from-pink-500 to-pink-600'
    },
    {
        icon: <Server className="w-6 h-6"/>,
        title: 'Horizontal Scaling',
        description: 'Stateless architecture handling traffic spikes during major matches',
        challenge: 'WebSocket connection integrity during scaling operations',
        tech: 'Load balancer, Redis sessions, Sticky connections',
        color: 'from-cyan-500 to-cyan-600'
    },
    {
        icon: <Zap className="w-6 h-6"/>,
        title: 'Live Match Data',
        description: 'Real-time fixtures and scores synchronized with trading availability',
        challenge: 'Normalizing inconsistent data from multiple sports APIs',
        tech: 'Polling services, WebSocket broadcasts, Adapter pattern',
        color: 'from-green-500 to-green-600'
    }
];

export default function SpoxComponent() {
    const [activeFeature, setActiveFeature] = useState(0)

    return (
        <div className="relative w-full">
            <div
                className="w-full bg-[var(--secondary)] h-[400px] lg:h-[600px] rounded-md flex flex-col items-center gap-3 pt-14 px-4"
            >
                <p className="text-[#0a0a0a] text-2xl lg:text-4xl xl:text-5xl font-bold">Spox Trading Platform</p>
                <p className="text-[#0a0a0a] text-base md:w-[30rem] lg:w-[40rem] xl:w-[50rem] text-center">
                    Revolutionizing sports engagement by transforming one-off bets into continuous, tradeable assets.
                    Built with enterprise-grade security and real-time performance.
                </p>

                <div className="flex items-center justify-center gap-4 w-full overflow-x-auto">
                    <p className="px-4 py-1.5 bg-[#696869b0]/20 rounded-full text-sm font-medium text-[#0a0a0a]">Angular</p>
                    <p className="px-4 py-1.5 bg-[#696869b0]/20 rounded-full text-sm font-medium text-[#0a0a0a]">NestJs</p>
                    <p className="px-4 py-1.5 bg-[#696869b0]/20 rounded-full text-sm font-medium text-[#0a0a0a]">PostgreSQL</p>
                    <p className="px-4 py-1.5 bg-[#696869b0]/20 rounded-full text-sm font-medium text-[#0a0a0a]">TradingView</p>
                    <p className="px-4 py-1.5 bg-[#696869b0]/20 rounded-full text-sm font-medium text-[#0a0a0a]">WebSockets</p>
                </div>

                <div className="flex items-center gap-2 justify-center mt-5">
                    <button
                        className="px-3 lg:px-5 py-3 text-white rounded-full font-medium flex items-center transition-all hover:shadow-xl hover:scale-105 text-sm lg:text-base"
                        style={{backgroundColor: '#0067DE'}}>
                        View Live Platform <ExternalLink className="w-5 h-5 ml-2"/>
                    </button>
                    <button
                        className="px-3 lg:px-5 py-3 border-2 rounded-full font-medium flex items-center transition-all hover:shadow-lg text-sm lg:text-base"
                        style={{borderColor: '#0067DE', color: '#0067DE'}}>
                        <Github className="w-5 h-5 mr-2"/>
                        View White Paper
                    </button>
                </div>
            </div>

            <div className="-mt-68 w-[95%] h-[550px] mx-auto hidden lg:block">
                <Image src={spox_all} alt="" className="w-full h-full rounded-2xl"/>
            </div>

            {/*challenge section*/}
            <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-[95%] mx-auto px-3 py-14">
                <div className="md:w-[50%] flex flex-col gap-4 lg:gap-7">
                    <div>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold lg:leading-16 text-[var(--primary)]">My
                            Role</h2>
                        <p className="text-sm lg:text-base text-[var(--pri-text)]">Frontend Lead • Security
                            Architect</p>
                    </div>

                    <div>
                        <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold lg:leading-16 text-[var(--primary)]">The
                            Challenge</h2>
                        <p className="text-sm lg:text-base text-[var(--pri-text)]">Building a secure, real-time trading
                            platform
                            that transforms sports engagement</p>
                    </div>
                </div>
                <div className="w-full md:w-[50%] grid grid-cols-2 gap-2 md:items-end md:pl-5 lg:pl-10 md:border-l">
                    <div className="p-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
                        <p className="text-lg md:text-2xl lg:text-3xl text-[#DD551B] font-extrabold">253+</p>
                        <p className="text-xs md:text-sm text-[var(--pri-text)] min-w-max">Active Users</p>
                    </div>

                    <div className="p-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
                        <p className="text-lg md:text-2xl lg:text-3xl text-[#2CD8A7] font-extrabold">100%</p>
                        <p className="text-xs md:text-sm text-[var(--pri-text)] min-w-max">Security Score</p>
                    </div>

                    <div className="p-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
                        <p className="text-lg md:text-2xl lg:text-3xl text-[#A32BFF] font-extrabold">{'<1s'}</p>
                        <p className="text-xs md:text-sm text-[var(--pri-text)] min-w-max">Response Time</p>
                    </div>

                    <div className="p-7 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl">
                        <p className="text-lg md:text-2xl lg:text-3xl text-[var(--primary)] font-extrabold">99.9%</p>
                        <p className="text-xs md:text-sm text-[var(--pri-text)] min-w-max">Uptime</p>
                    </div>
                </div>
            </div>

            {/*problem section*/}
            <div
                className="flex flex-col md:flex-row justify-around gap-5 w-full mx-auto px-5 md:px-10 py-7 md:py-14 bg-gradient-to-t from-[var(--third-bg)] to-[var(--primary)] rounded-md">
                {/*<Image src={spox_awareness} alt="" className="w-[40%] h-[500px] object-contain rounded-lg"/>*/}

                <div className="flex flex-col gap-4 lg:gap-3 md:w-[50%] lg:w-[40%]">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold lg:leading-16 text-[var(--secondary)]">
                        The Problem
                    </h2>

                    <ul className="list-disc list-outside space-y-5 text-sm lg:text-base text-white">
                        <li>Traditional betting offers binary outcomes with stakes that expire after each match</li>
                        <li>Existing platforms lack real-time responsiveness for live trading</li>
                        <li>Financial platforms require bank-grade security often overlooked in sports apps</li>
                        <li>Scalability challenges during concurrent real-time data streams</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4 lg:gap-3 md:w-[50%] lg:w-[40%]">
                    <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold lg:leading-16 text-[var(--secondary)]">The
                        Solution
                    </h2>

                    <div className="text-sm lg:text-base text-white">
                        Sports fans globally wager billions annually but lack investment-style instruments that preserve
                        value beyond individual match outcomes.
                        <br/><br/>
                        SPOX creates a secure, real-time trading environment that bridges traditional sports engagement
                        with modern fintech, opening a new market category while maintaining enterprise-level security
                        and performance standards

                        <div className="mt-6 p-3 rounded-md" style={{backgroundColor: '#CCF381'}}>
                            <div className="flex items-center gap-3">
                                <Award className="w-6 h-6" style={{color: '#0067DE'}}/>
                                <span className="font-semibold text-sm lg:text-base" style={{color: '#0067DE'}}>Result: 253+ active users trading profitably</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl xl:text-4xl font-bold mb-4"
                            style={{color: '#0067DE'}}>Technical Architecture</h2>
                        <p className="text-xl text-gray-600">Built with modern, scalable technologies</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {techStack.map((stack, idx) => (
                            <div key={idx}
                                 className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all hover:scale-105">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg"
                                         style={{backgroundColor: '#CCF381', color: '#0067DE'}}>
                                        {stack.icon}
                                    </div>
                                    <h3 className="font-bold text-gray-900">{stack.category}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {stack.items.map((item, i) => (
                                        <li key={i} className="text-sm text-gray-600 flex items-center gap-2">
                                            <ChevronRight className="w-4 h-4" style={{color: '#0067DE'}}/>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div
                        className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 shadow-lg border border-gray-200">
                        <h3 className="text-2xl font-bold mb-6" style={{color: '#0067DE'}}>Architecture Decisions</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-gray-700">
                            <div>
                                <div className="font-semibold mb-2 text-gray-900">Frontend Choice</div>
                                <p className="text-sm leading-relaxed">
                                    Angular&#39;s TypeScript foundation naturally complemented
                                    WebSocket streams for live chart updates and complex state management.
                                </p>
                            </div>
                            <div>
                                <div className="font-semibold mb-2 text-gray-900">Backend Architecture</div>
                                <p className="text-sm leading-relaxed">
                                    NestJS mirrors Angular&#39;s modular structure, enabling clean separation between
                                    trading logic, match aggregation, and user management with ACID-compliant
                                    PostgreSQL.
                                </p>
                            </div>
                            <div>
                                <div className="font-semibold mb-2 text-gray-900">Scaling Strategy</div>
                                <p className="text-sm leading-relaxed">
                                    Stateless API design with horizontal scaling implemented early, enabling seamless
                                    load distribution during major matches with institutional-grade TradingView charts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Key Features */}
            <div className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4" style={{color: '#0067DE'}}>Key Features</h2>
                        <p className="text-xl text-gray-600">Innovative solutions to complex challenges</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, idx) => (
                            <div
                                key={idx}
                                className="bg-white rounded-2xl p-8 shadow-lg border-2 border-transparent hover:border-opacity-100 transition-all hover:scale-105 cursor-pointer"
                                style={{borderColor: idx === activeFeature ? '#0067DE' : 'transparent'}}
                                onMouseEnter={() => setActiveFeature(idx)}
                            >
                                <div className="p-3 rounded-xl inline-block mb-4" style={{backgroundColor: '#CCF381'}}>
                                    <div style={{color: '#0067DE'}}>
                                        {feature.icon}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{feature.description}</p>
                                <div className="space-y-2 text-xs">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <span className="font-semibold text-gray-700">Challenge: </span>
                                        <span className="text-gray-600">{feature.challenge}</span>
                                    </div>
                                    <div className="p-3 rounded-lg" style={{backgroundColor: '#CCF381'}}>
                                        <span className="font-semibold" style={{color: '#0067DE'}}>Tech: </span>
                                        <span className="text-gray-700">{feature.tech}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Security Section */}
            <div className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-12 shadow-xl border-2"
                         style={{borderColor: '#0067DE'}}>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 rounded-2xl" style={{backgroundColor: '#CCF381'}}>
                                <Shield className="w-10 h-10" style={{color: '#0067DE'}}/>
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold" style={{color: '#0067DE'}}>Enterprise Security</h2>
                                <p className="text-gray-600">Comprehensive testing ensuring zero incidents</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h4 className="font-bold mb-3 text-gray-900">Software Composition Analysis</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Scanned 300+ npm dependencies identifying outdated packages with known CVEs.
                                    Implemented automated dependency updates via Dependabot.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h4 className="font-bold mb-3 text-gray-900">Static Analysis (SAST)</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Analyzed codebase identifying potential injection points, credential exposure risks,
                                    and insecure configurations before runtime.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h4 className="font-bold mb-3 text-gray-900">Dynamic Analysis (DAST)</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Tested running application simulating attacker behavior, validating authentication
                                    security and SQL injection prevention.
                                </p>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-md">
                                <h4 className="font-bold mb-3 text-gray-900">Threat Modeling</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Applied STRIDE framework identifying 13 potential threat vectors with implemented
                                    mitigations including rate limiting and encryption.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-6 rounded-2xl" style={{backgroundColor: '#CCF381'}}>
                            <Shield className="w-8 h-8" style={{color: '#0067DE'}}/>
                            <div>
                                <div className="font-bold text-lg" style={{color: '#0067DE'}}>Zero Security Incidents
                                </div>
                                <div className="text-sm text-gray-700">SCA • SAST • DAST • Threat Modeling • Load
                                    Testing
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lessons Learned */}
            <div className="py-20 px-6 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center" style={{color: '#0067DE'}}>Lessons Learned</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                            <div className="text-3xl mb-4">🔄</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">What I'd Do Differently</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{color: '#0067DE'}}/>
                                    <span>Implement comprehensive E2E testing with Cypress from the start</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{color: '#0067DE'}}/>
                                    <span>Begin with infrastructure-as-code rather than retrofitting later</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                            <div className="text-3xl mb-4">💡</div>
                            <h3 className="text-xl font-bold mb-4 text-gray-900">What Surprised Me</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                The complexity of maintaining real-time state consistency across hundreds of connected
                                clients. WebSocket management became a project in itself. Optimistic UI updates created
                                perceptibly better experience even when actual latency was unchanged.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-lg border-2" style={{borderColor: '#CCF381'}}>
                            <div className="text-3xl mb-4">🏆</div>
                            <h3 className="text-xl font-bold mb-4" style={{color: '#0067DE'}}>Most Proud Of</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{color: '#CCF381'}}/>
                                    <span>Zero security incidents despite handling real user funds</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-1" style={{color: '#CCF381'}}/>
                                    <span>Platform feels as responsive as traditional finance apps</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-3xl p-12 text-center shadow-2xl relative overflow-hidden"
                         style={{backgroundColor: '#0067DE'}}>
                        <div className="absolute inset-0 opacity-10" style={{
                            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                            backgroundSize: '40px 40px'
                        }}></div>
                        <div className="relative">
                            <h2 className="text-4xl font-bold text-white mb-4">Let's Build Something Amazing</h2>
                            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                                I'm open to opportunities where I can bring this level of technical rigor,
                                security-first mindset, and user-focused design to your team.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button
                                    className="px-8 py-4 bg-white rounded-full font-medium flex items-center transition-all hover:scale-105 shadow-lg"
                                    style={{color: '#0067DE'}}>
                                    <ExternalLink className="w-5 h-5 mr-2"/>
                                    View Live Platform
                                </button>
                                <button
                                    className="px-8 py-4 border-2 border-white text-white rounded-full font-medium flex items-center transition-all hover:scale-105 hover:bg-white/10">
                                    <Mail className="w-5 h-5 mr-2"/>
                                    Get in Touch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}