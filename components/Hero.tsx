'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <div className="relative bg-slate-900 text-white overflow-hidden h-screen min-h-[700px]">
            {/* Background with slight parallax/zoom effect for "Floating" feel */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            >
                <Image
                    src="/hero-student.png"
                    alt="勉強に集中する受験生"
                    fill
                    className="object-cover opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20" />
            </motion.div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 flex flex-col justify-center h-full">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block bg-amber-500/10 border border-amber-500/50 text-amber-400 font-bold px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-md"
                    >
                        受験生を持つ保護者様へ
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                        <motion.span
                            className="block text-slate-300 text-2xl md:text-3xl mb-4 font-normal"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            「花粉症のせいで志望校に落ちたら…」
                        </motion.span>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            受験生の親が選ぶ、<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-sky-500">勉強部屋専用</span> 空気清浄機
                        </motion.div>
                    </h1>

                    <motion.p
                        className="mt-6 text-xl text-slate-200 leading-relaxed max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                    >
                        くしゃみ、鼻づまり、薬の副作用...。<br />
                        お子様の努力を邪魔する要因を、<br className="md:hidden" />医療グレードの技術で「無」にします。
                    </motion.p>

                    <motion.div
                        className="mt-10 flex flex-col sm:flex-row gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.0 }}
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(14, 165, 233, 0.5)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-sky-500 to-sky-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                            <span className="flex items-center justify-center gap-2">
                                志望校合格を空気から応援する <ArrowRight size={20} />
                            </span>
                        </motion.button>

                        <div className="flex items-center gap-2 text-slate-300 mt-2 sm:mt-0 px-4">
                            <ShieldCheck size={20} className="text-emerald-400" />
                            <span className="text-sm">30日間全額返金保証付き</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
