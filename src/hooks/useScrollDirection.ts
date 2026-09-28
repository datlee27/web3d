import { useEffect, useRef, useState } from 'react';

export const useScrollDirection = (threshold = 0.1) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isAbove, setIsAbove] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY.current) {
                setScrollDirection('down');
            } else if (currentScrollY < lastScrollY.current) {
                setScrollDirection('up');
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);

                // If not intersecting, check if it's above the viewport
                if (!entry.isIntersecting) {
                    setIsAbove(entry.boundingClientRect.top < 0);
                } else {
                    // When it becomes visible, it's no longer 'above' in a hiding context
                    setIsAbove(false);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px',
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return { ref, isVisible, isAbove, scrollDirection };
};
