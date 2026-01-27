'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, Heart } from 'lucide-react';

export default function PetHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#FDF8F3]">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-64 h-64 bg-orange-200 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-[20%] right-[15%] w-96 h-96 bg-amber-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Sparkles size={16} />
                            <span>ペット専用・強力脱臭特化モデル</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            「ペットのニオイ」を<br />
                            <span className="text-orange-600">なかったこと</span>に。
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                            来客が驚く、圧倒的な脱臭パワー。<br />
                            猫カフェやペットサロンでも採用される「AIO-2技術」で、<br />
                            家族にもペットにも、真に清潔な空気を。
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg shadow-orange-200 transition-all hover:-translate-y-1">
                                無料で脱臭性能を試す →
                            </button>
                            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all">
                                導入事例を見る
                            </button>
                        </div>

                        <div className="mt-10 flex items-center gap-6 text-slate-500 text-sm">
                            <div className="flex items-center gap-2">
                                <Shield className="text-orange-500" size={18} />
                                <span>30日間全額返金保証</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="text-orange-500" size={18} />
                                <span>ペット安全試験済み</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Hero Image Container */}
                        <div className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl bg-white border-8 border-white">
                            {/* Using a solid background with a product shot since generate_image failed */}
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-12">
                                <img
                                    src="/product-pro.png"
                                    alt="AirFuture Pro"
                                    className="max-h-full object-contain filter drop-shadow-2xl translate-y-4"
                                />

                                {/* Floating Badges */}
                                <div className="absolute top-10 right-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white">
                                    <p className="text-xs font-bold text-slate-400 uppercase mb-1">Ammonia removal</p>
                                    <p className="text-2xl font-bold text-orange-600">99.9%</p>
                                </div>
                                <div className="absolute bottom-10 left-10 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white">
                                    <p className="text-xs font-bold text-slate-400 mb-1">User Satisfaction</p>
                                    <div className="flex text-amber-400 gap-1">
                                        {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pet tag indicator */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-orange-600 text-white rounded-full flex flex-col items-center justify-center font-bold rotate-12 shadow-xl">
                            <span className="text-xs">獣医師も</span>
                            <span className="text-xl leading-none">太鼓判</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
