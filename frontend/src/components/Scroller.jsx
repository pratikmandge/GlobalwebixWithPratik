import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function Scroller({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    const current = testimonials[currentIndex];

    return (
        <div className="relative max-w-6xl mx-auto px-4">
            {/* Arrows */}
            <button
                onClick={prevTestimonial}
                className="absolute left-5 top-1/2 -translate-y-1/2 p-2 hover:cursor-pointer z-10"
            >
                <ArrowLeftIcon size={24} />
            </button>

            <button
                onClick={nextTestimonial}
                className="absolute right-5 top-1/2 -translate-y-1/2 p-2 hover:cursor-pointer z-10"
            >
                <ArrowRightIcon size={24} />
            </button>

            {/* Testimonial Content with Animation */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-center text-lg mb-6 max-w-3xl mx-auto">{current.content}</p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <img
                            src={current.icon}
                            alt={current.user}
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-center sm:text-left">
                            <span className="font-semibold">{current.user}</span>
                            <span className="text-sm text-gray-500"> / {current.designation}</span>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
