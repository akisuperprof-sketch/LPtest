'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart, CheckCircle2 } from 'lucide-react';

export default function PetHero() {
    return (
        <div className="relative min-h-[85vh] overflow-hidden bg-slate-900 text-white flex items-center">
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 transform origin-center"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1600&q=80"
                    alt="Cute Dog Background"
                    className="w-full h-full object-cover opacity-60"
                />
            </motion.div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-12 items-center pt-20 pb-20">
                {/* Left Content */}
                <motion.div
                    className="md:col-span-7"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Badge */}
                    <div className="inline-block bg-orange-500/20 border border-orange-500/50 text-orange-300 font-bold px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-md">
                        <span className="flex items-center gap-2"><Sparkles size={14} /> ペット専用・強力脱臭モデル</span>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-md">
                        「ペットのニオイ」を<br />
                        <span className="text-orange-400">なかったこと</span>に。
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-xl text-slate-100 leading-relaxed max-w-2xl text-shadow-sm font-medium">
                        来客が驚く、圧倒的な脱臭パワー。<br />
                        猫カフェやペットサロンでも採用される技術で、<br className="md:hidden" />
                        愛犬・愛猫との暮らしをもっと快適に。
                    </p>

                    {/* CTA Button */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="/buy/pet"
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg relative overflow-hidden group transition-all text-center hover:scale-105"
                        >
                            <span className="flex items-center justify-center gap-2">
                                脱臭効果を試す
                                <CheckCircle2 size={20} />
                            </span>
                        </a>
                        <div className="flex items-center justify-center gap-2 text-slate-300 mt-2 sm:mt-0 px-4 bg-black/30 rounded-full py-1 backdrop-blur-sm">
                            <Shield size={18} className="text-emerald-400" />
                            <span className="text-sm">30日間全額返金保証付き</span>
                        </div>
                    </div>

                    <div className="mt-8 flex gap-6 text-sm font-bold text-slate-300">
                        <div className="flex items-center gap-2"><Heart size={18} className="text-pink-400" /> ペット安全試験済み</div>
                        <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400" /> アンモニア99%除去</div>
                    </div>
                </motion.div>

                {/* Right Product Image */}
                <motion.div
                    className="md:col-span-5 relative"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full animate-pulse" />
                        <img
                            src="/product-angle-cutout.png"
                            alt="AirFuture Product"
                            className="object-contain drop-shadow-2xl relative z-10 w-full h-full"
                        />
                        {/* Pet tag indicator */}
                        <div className="absolute -top-0 -right-0 w-28 h-28 bg-orange-600 text-white rounded-full flex flex-col items-center justify-center font-bold rotate-12 shadow-xl z-20 border-4 border-slate-900">
                            <span className="text-xs">獣医師も</span>
                            <span className="text-lg leading-none">太鼓判</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
