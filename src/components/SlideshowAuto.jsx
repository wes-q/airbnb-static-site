import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SlideshowAuto = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="absolute inset-0">
            <AnimatePresence initial={false} mode="sync">
                <motion.div
                    key={currentImageIndex}
                    className="absolute inset-0 bg-cover bg-center" //
                    style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                />
            </AnimatePresence>
        </div>
    );
};

export default SlideshowAuto;
