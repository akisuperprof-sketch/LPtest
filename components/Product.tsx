import Image from 'next/image';
import { Wind, VolumeX, Zap, Ruler, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Product() {
    return (
        <section id="product" className="py-20 bg-slate-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                            「勉強部屋」に特化した<br className="md:hidden" />
                            <span className="inline-block">3つの理由</span>
                        </h2>
                        <p className="text-slate-400">
                            リビング用とは違う。受験生のために設計された機能。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-12">
                        {/* Feature 1 */}
                        <ScrollReveal delay={0.1} direction="left">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center border border-sky-500/50">
                                    <Ruler size={28} />
                                </div>
                                <div className="w-full">
                                    <h3 className="text-xl font-bold text-white mb-2">勉強机に置ける「はがきサイズ」</h3>
                                    <p className="text-slate-400 leading-relaxed mb-6">
                                        サイズはわずか16cm×12cm。辞書より小さいコンパクト設計で、参考書やノートを広げた机の上でも邪魔になりません。
                                    </p>

                                    {/* Visual Comparison Diagram */}
                                    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 pt-12 flex items-end justify-center gap-8 relative mt-4">
                                        <div className="text-center group">
                                            <div className="w-20 h-28 bg-white border border-slate-300 mx-auto mb-2 flex flex-col items-center justify-center text-xs text-slate-500 shadow-sm relative">
                                                <div className="absolute top-2 right-2 w-4 h-5 border border-slate-300"></div>
                                                <span className="mt-4 font-bold">官製はがき</span>
                                            </div>
                                            <span className="text-xs text-slate-400">100×148mm</span>
                                        </div>

                                        <div className="text-2xl text-slate-500 font-thin mb-8">≒</div>

                                        <div className="text-center relative">
                                            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-sky-500 text-white text-[10px] px-3 py-1 rounded-full whitespace-nowrap shadow-lg animate-bounce z-20">
                                                ほぼ同じ！
                                                <div className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-sky-500"></div>
                                            </div>
                                            <div className="w-20 h-28 bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-sky-500 mx-auto mb-2 flex items-center justify-center text-xs text-sky-400 font-bold relative z-10 shadow-sky-900/50 shadow-xl">
                                                Mini
                                            </div>
                                            <span className="text-xs text-sky-400 font-bold">AirFuture</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Feature 2 */}
                        <ScrollReveal delay={0.2} direction="left">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center border border-indigo-500/50">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">独自技術「AIO-2イオンクラスター」</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        フィルターで「吸着」するのではなく、強力なイオンで花粉やウイルスを「分解」除去。
                                        医療機関でも採用されるプロ仕様の技術を、お子様の部屋へ。
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        {/* Feature 3 */}
                        <ScrollReveal delay={0.3} direction="left">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0 h-14 w-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/50">
                                    <Zap size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">フィルター交換不要</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        面倒なフィルター在庫管理や交換作業は一切不要。
                                        半年に1度、電極プレートを拭くだけの簡単メンテナンスで、高い性能を維持し続けます。
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    <div className="order-1 lg:order-2 relative h-[500px] w-full">
                        <ScrollReveal delay={0.4} width="100%" className="h-full">
                            <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30 animate-pulse" />
                            <Image
                                src="/product-angle-cutout.png"
                                alt="AirFuture Product"
                                fill
                                className="object-contain relative z-10 drop-shadow-2xl"
                            />
                        </ScrollReveal>
                    </div>
                </div>

                {/* Product Comparison Section */}
                <ScrollReveal delay={0.5} width="100%">
                    <div className="mt-24 pt-16 border-t border-slate-800">
                        <div className="text-center mb-12">
                            <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-slate-400 text-sm font-medium mb-4">
                                Use Case
                            </span>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                お部屋の広さに合わせて選べる<br className="md:hidden" /><span className="inline-block">2つのモデル</span>
                            </h3>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                受験生には個室専用モデルを。ご家族の健康を守るリビングにはハイパワーモデルをおすすめします。
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* AirFuture Mini (Student) */}
                            <div className="relative bg-slate-800/50 rounded-2xl p-8 border border-sky-500/50 flex flex-col items-center text-center backdrop-blur-sm shadow-[0_0_30px_rgba(14,165,233,0.1)]">
                                <div className="absolute -top-4 bg-sky-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                                    お子様の勉強部屋に（個室用）
                                </div>
                                <h4 className="mt-6 text-2xl font-bold text-white">AirFuture Mini</h4>
                                <div className="mt-6 w-48 h-48 relative">
                                    <Image
                                        src="/product-mini.png"
                                        fill
                                        className="object-contain"
                                        alt="AirFuture Mini"
                                    />
                                </div>
                                <ul className="mt-8 space-y-3 text-sm text-slate-300 text-left w-full max-w-xs mx-auto">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        6畳〜10畳対応
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        机に置けるコンパクト設計
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        集中力を守る静音仕様
                                    </li>
                                </ul>
                                <div className="mt-8 w-full">
                                    <span className="block w-full py-3 rounded-lg bg-sky-600 text-white font-bold text-sm">
                                        本ページでのご案内モデル
                                    </span>
                                </div>
                            </div>

                            {/* AirFuture Pro (Living) */}
                            <div className="relative bg-slate-800/20 rounded-2xl p-8 border border-slate-700 flex flex-col items-center text-center hover:bg-slate-800/40 transition-colors">
                                <div className="absolute -top-4 bg-slate-700 text-slate-300 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg border border-slate-600">
                                    リビングダイニングに（リビング用）
                                </div>
                                <h4 className="mt-6 text-2xl font-bold text-slate-300">AirFuture Pro</h4>
                                <div className="mt-6 w-48 h-48 relative">
                                    <Image
                                        src="/product-pro.png"
                                        fill
                                        className="object-contain"
                                        alt="AirFuture Pro"
                                    />
                                </div>
                                <ul className="mt-8 space-y-3 text-sm text-slate-400 text-left w-full max-w-xs mx-auto">
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        20畳〜対応のハイパワー
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        家族が集まる空間を浄化
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-slate-700 text-slate-400 flex items-center justify-center flex-shrink-0">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                        </div>
                                        パワフルな循環気流
                                    </li>
                                </ul>
                                <div className="mt-8 w-full px-4">
                                    <p className="text-xs text-slate-500">
                                        ※ご希望の方は、購入後のアンケートにて「Proも検討中」とご回答ください。特別価格でご案内可能です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
