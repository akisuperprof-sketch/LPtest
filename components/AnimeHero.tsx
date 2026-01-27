'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

export default function AnimeHero() {
    // Animation Variants
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 }
        }
    };

    const letterContainerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 0.5 }
        }
    };

    const letterVariants: Variants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    const imageVariants: Variants = {
        hidden: { x: 100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, delay: 0.2 }
        }
    };

    const bgVariants: Variants = {
        hidden: { scale: 1.2, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: { duration: 1.5 }
        }
    };

    const splitText = (text: string) => {
        return text.split('').map((char, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block" style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                {char}
            </motion.span>
        ));
    };

    return (
        <div className="relative min-h-[85vh] overflow-hidden bg-slate-900 text-white flex items-center">
            {/* Background Image */}
            <motion.div
                className="hero-bg absolute inset-0 transform origin-center"
                initial="hidden"
                animate="visible"
                variants={bgVariants}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20 z-10" />
                <img
                    src="/hero-student.png"
                    alt="Study with AirFuture"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-12 items-center pt-20 pb-20">
                {/* Left Content */}
                <motion.div
                    className="md:col-span-7"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants} className="inline-block bg-amber-500/10 border border-amber-500/50 text-amber-400 font-bold px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-md">
                        受験生を持つ保護者様へ
                    </motion.div>

                    {/* Title */}
                    <div className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        <motion.span
                            className="block text-slate-300 text-2xl md:text-3xl mb-4 font-normal"
                            variants={itemVariants}
                        >
                            「花粉症のせいで志望校に落ちたら…」
                        </motion.span>
                        <motion.span
                            className="block"
                            variants={letterContainerVariants}
                        >
                            {splitText("受験生の親が選ぶ、")}
                        </motion.span>
                        <motion.span
                            className="text-sky-400 block pt-2"
                            variants={letterContainerVariants}
                        >
                            {splitText("勉強部屋専用 ")}
                            <span className="inline-block">{splitText("高性能イオン発生器")}</span>
                        </motion.span>
                    </div>

                    {/* Description */}
                    <motion.p variants={itemVariants} className="mt-6 text-xl text-slate-200 leading-relaxed max-w-2xl text-shadow-sm">
                        くしゃみ、鼻づまり、薬の副作用...。<br />
                        お子様の努力を邪魔する要因を、<br className="md:hidden" />医療グレードの技術で「無」にします。
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#product" className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg relative overflow-hidden group transition-all text-center">
                            <span className="flex items-center justify-center gap-2">
                                志望校合格を空気から応援する
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </span>
                        </a>
                        <div className="flex items-center justify-center gap-2 text-slate-300 mt-2 sm:mt-0 px-4 bg-slate-900/50 rounded-full py-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                            <span className="text-sm">30日間全額返金保証付き</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Product Image */}
                <motion.div
                    className="md:col-span-5 relative"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full animate-pulse" />
                        <Image
                            src="/product-angle-cutout.png"
                            alt="AirFuture Mini Product"
                            fill
                            className="object-contain drop-shadow-2xl relative z-10"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
