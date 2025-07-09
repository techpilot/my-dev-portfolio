import LandingScreen from "@/components/LandingScreen";
import DesEng from "@/components/DesEng";
import Brief from "@/components/Brief";
import Expertise from "@/components/Expertise";
import WhatIDo from "@/components/WhatIDo";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionTracker from "@/components/SectionTracker";

export default function HomePage() {
    const sections = ['landing', 'des', 'what', 'brief', 'expertise', 'contact'] as const;

    return <div className="h-screen lg:snap-y lg:snap-mandatory overflow-y-scroll overflow-x-hidden"
                style={{scrollBehavior: 'smooth'}}>
        {/*header*/}
        <Header/>
        <SectionTracker sections={[...sections]} threshold={0.5}/>
        <LandingScreen/>
        <DesEng/>
        <Brief/>
        <Expertise/>
        <WhatIDo/>
        <Contact/>
        <Footer/>
    </div>
}