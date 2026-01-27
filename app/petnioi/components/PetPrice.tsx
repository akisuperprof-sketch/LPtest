'use client';

import { Check, ShieldCheck, Zap, CreditCard } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetPrice() {
    const proPrice = 327800;
    const miniPrice = 198000;

    // Daily cost calculation for Pro (3 years)
    const dailyCost = Math.round(proPrice / (3 * 365));

    return (
        <section className="py-24 bg-[#FDF8F3] overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            ペットと家族の、一生の「安心」を買う。
                        </h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                            フィルター交換不要のため、ランニングコストは電気代のみ。<br />
                            長期的に見れば、安価な清浄機よりも圧倒的に経済的です。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Mini Plan */}
                    <ScrollReveal delay={0.1} direction="up">
                        <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-xl transition-transform hover:-translate-y-2">
                            <h3 className="text-xl font-bold text-slate-600 mb-4">特定箇所を狙い打ち</h3>
                            <div className="text-center pb-8 border-b border-slate-100 mb-8">
                                <h4 className="text-2xl font-bold mb-4">AirFuture Mini</h4>
                                <div className="text-5xl font-bold text-slate-900">
                                    ¥198,000<span className="text-lg font-normal text-slate-500 ml-1">(税込)</span>
                                </div>
                                <p className="text-sm text-slate-400 mt-2">トイレ横、寝床、玄関などに</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {["適用床面積 〜8畳", "アンモニア・抜け毛対策", "フィルター交換不要", "静音モード搭載"].map((text, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <Check className="text-orange-500" size={18} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/buy/pet?model=mini" className="block w-full py-4 text-center bg-white border-2 border-slate-200 text-slate-900 font-bold rounded-2xl hover:bg-slate-50 transition-colors">
                                購入ページへ
                            </a>
                        </div>
                    </ScrollReveal>

                    {/* Pro Plan */}
                    <ScrollReveal delay={0.2} direction="up">
                        <div className="bg-white rounded-3xl p-8 border-4 border-orange-500 shadow-2xl relative overflow-hidden transition-transform hover:-translate-y-2">
                            <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 transform rotate-45 translate-x-8 translate-y-4 font-bold text-sm">
                                人気No.1
                            </div>
                            <h3 className="text-xl font-bold text-orange-600 mb-4">リビング全体を丸ごと脱臭</h3>
                            <div className="text-center pb-8 border-b border-slate-100 mb-8">
                                <h4 className="text-2xl font-bold mb-4">AirFuture Pro</h4>
                                <div className="text-5xl font-bold text-slate-900">
                                    ¥327,800<span className="text-lg font-normal text-slate-500 ml-1">(税込)</span>
                                </div>
                                <div className="mt-4 inline-block bg-orange-50 text-orange-700 text-sm font-bold px-4 py-1 rounded-full">
                                    1日あたり 約{dailyCost}円
                                </div>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {["適用床面積 〜30畳", "ハイパワー脱臭モード", "ハウスダスト・菌・ウイルス抑制", "フィルター交換不要", "3年間長期保証パック"].map((text, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <Check className="text-orange-500" size={18} />
                                        <span>{text}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/buy/pet?model=pro" className="block w-full py-4 text-center bg-orange-600 text-white font-bold rounded-2xl hover:bg-orange-700 shadow-lg shadow-orange-200 transition-colors">
                                今すぐ購入する
                            </a>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-white/50 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-slate-500 text-sm font-bold">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={24} className="text-orange-500" />
                        <span>30日間全額返金保証</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap size={24} className="text-orange-500" />
                        <span>フィルター交換不要</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard size={24} className="text-orange-500" />
                        <span>24回・分割払い対応</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
