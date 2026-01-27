'use client';

import { motion, useInView, useAnimation, Variant } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({ children, width = "100%", delay = 0, className = "", direction = "up" }: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const getVariants = (): { hidden: Variant; visible: Variant } => {
        switch (direction) {
            case "down":
                return {
                    hidden: { opacity: 0, y: -50 },
                    visible: { opacity: 1, y: 0 }
                };
            case "left":
                return {
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "right":
                return {
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                };
            case "up":
            default:
                return {
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 }
                };
        }
    };

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }} // smooth ease
            >
                {children}
            </motion.div>
        </div>
    );
};
