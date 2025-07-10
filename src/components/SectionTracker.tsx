// components/SectionTracker.tsx
'use client'

import React, {useEffect, useRef} from 'react';
import {useLocalStorage} from '@/hooks/useLocalStorage';

type SectionType = 'landing' | 'des' | 'what' | 'brief' | 'expertise' | 'contact';

interface SectionTrackerProps {
    sections: SectionType[];
    threshold?: number;
}

const SectionTracker: React.FC<SectionTrackerProps> = ({
                                                           sections,
                                                           threshold = 0.5
                                                       }) => {
    const [, setCurrentSection] = useLocalStorage('currentSection', 'landing');
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id as SectionType;
                    if (sections.includes(sectionId)) {
                        setCurrentSection(sectionId);
                    }
                }
            });
        };

        const observerOptions: IntersectionObserverInit = {
            threshold,
            rootMargin: '0px 0px -20% 0px', // Adjust based on your needs
        };

        observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        sections.forEach((sectionId) => {
            const element = document.getElementById(sectionId);
            if (element && observerRef.current) {
                observerRef.current.observe(element);
            }
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [sections, threshold, setCurrentSection]);

    // This component doesn't render anything visible
    return null;
};

export default SectionTracker;