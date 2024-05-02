import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    initial: {
        opacity: 0,
        scale: 1,
    },
    animate: {
        opacity: 0.7,
        scale: 1.1,
        transition: {
            opacity: { duration: 2 },
            scale: { duration: 10 },
        },
    },
    exit: {
        opacity: 0,
        transition: {
            opacity: { duration: 2 },
        },
    },
};

const SlideshowAuto = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence initial={true} mode="sync">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 bg-cover bg-center" //
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    variants={variants}
                    animate="animate"
                    initial="initial"
                    exit="exit"
                />
            </AnimatePresence>
        </div>
    );
};

export default SlideshowAuto;
