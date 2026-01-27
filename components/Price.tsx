'use client';

import { Check, ShieldCheck, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Price() {
    const basePrice = 198000; // Tax included (180,000 * 1.1)
    const discount = 10000;
    const finalPrice = basePrice - discount;

    // Daily cost calculation: Final Price / (3 years * 365 days)
    const days = 3 * 365;
    const dailyCost = Math.round(finalPrice / days);

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-900/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-900/20 blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 mb-6">
                            受験合格への投資
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            高いと思われるかもしれません。<br />
                            しかし、お子様が勉強する時間は「3年間で約4,000時間」にも及びます。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="max-w-4xl mx-auto">
                    <ScrollReveal width="100%" direction="up">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl relative">
                            {/* Ribbon */}
                            <div className="absolute top-0 right-0 bg-yellow-400 text-black font-bold px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 shadow-md z-10">
                                学生限定
                            </div>

                            <div className="p-8 md:p-12 text-slate-900">
                                <div className="text-center mb-10">
                                    <h3 className="text-2xl font-bold text-slate-600 mb-2">AirFuture Mini (受験生応援パッケージ)</h3>
                                    <div className="flex items-center justify-center gap-4 mb-4">
                                        <span className="text-2xl text-slate-400 line-through">¥{basePrice.toLocaleString()}<span className="text-lg ml-1">(税込)</span></span>
                                        <span className="text-red-500 font-bold text-lg bg-red-50 px-3 py-1 rounded-full border border-red-100">
                                            クーポン適用で ¥{discount.toLocaleString()} OFF
                                        </span>
                                    </div>
                                    <div className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tight mb-2">
                                        ¥{finalPrice.toLocaleString()}
                                        <span className="text-2xl md:text-3xl font-normal text-slate-500 ml-2">(税込)</span>
                                    </div>

                                    {/* Daily Cost Calculation */}
                                    <div className="mt-4 inline-block bg-sky-50 border border-sky-100 rounded-xl px-6 py-3">
                                        <p className="text-sky-800 font-bold">
                                            1日あたり 約<span className="text-3xl mx-1">{dailyCost}</span>円
                                            <span className="text-sm font-normal text-sky-600 ml-2">（3年間使用した場合）</span>
                                        </p>
                                    </div>

                                    <div className="mt-6 text-sm text-slate-500">
                                        クーポンコード: <span className="font-mono bg-slate-100 px-2 py-1 rounded border border-slate-200">AF-STUDENT02</span>
                                        <span className="block mt-1 text-xs text-sky-600">※下記ボタンから進むと自動適用されます</span>
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 mb-10 border-t border-slate-100 pt-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>AirFuture Mini 本体</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>3年間の長期製品保証</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>フィルター交換不要</span> {/* Updated text */}
                                        </li>
                                    </ul>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>全国送料無料・最短翌日発送</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>受験生応援ガイドブック付き</span>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <Check className="text-emerald-500 flex-shrink-0" />
                                            <span>専任スタッフによるサポート</span>
                                        </li>
                                    </ul>
                                </div>

                                <a href="/buy/checkout?model=student&coupon=AF-STUDENT02" className="block w-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-center py-5 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                                    今すぐ申し込む（購入手続きへ）
                                </a>
                                <p className="text-center text-slate-400 text-sm mt-4">
                                    30日間の全額返金保証が付いています。リスクなくお試しください。
                                </p>
                            </div>

                            <div className="bg-slate-50 px-8 py-6 border-t border-slate-200">
                                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-slate-600 text-sm font-bold">
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-sky-500" />
                                        30日間全額返金保証
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Zap className="text-yellow-500" />
                                        フィルター交換不要
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <ShieldCheck className="text-emerald-500" />
                                        3年間長期保証
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
