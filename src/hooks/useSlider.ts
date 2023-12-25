import { useEffect, useState } from "react";

import { testimonialsItems } from "~utils/constants";

const INTERVAL_VALUE = 3000;
const TOTAL_TESTIMONIALS = testimonialsItems.length;

export const useSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex === TOTAL_TESTIMONIALS - 1 ? 0 : prevIndex + 1));
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex === 0 ? TOTAL_TESTIMONIALS - 1 : prevIndex - 1));

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, INTERVAL_VALUE);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return {
        nextSlide,
        prevSlide,
        currentTestimonial: testimonialsItems[currentIndex]
    };
};
