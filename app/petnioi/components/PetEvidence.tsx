'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Microscope, Award, FileText } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetEvidence() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <ScrollReveal width="100%" className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-100 rounded-3xl translate-x-4 translate-y-4"></div>
                            <div className="relative bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
                                <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                                    <Award className="text-orange-500" size={28} />
                                    <span>国内外の公的機関が実証</span>
                                </h3>

                                <div className="space-y-8">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-3 rounded-2xl text-orange-600">
                                            <Microscope size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">アンモニア除去率 99.9%</h4>
                                            <p className="text-sm text-slate-500">（北里環境科学センター 2023年試験結果）</p>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                高密度のイオンクラスターが、ペットの尿に含まれるアンモニア分子を瞬時にキャッチして分解。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-3 rounded-2xl text-orange-600">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-800 mb-1">付着菌・ウイルス抑制試験</h4>
                                            <p className="text-sm text-slate-500">（日本食品分析センター 試験済み）</p>
                                            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                                                空気中だけでなく、床や壁に付着した菌の増殖も抑制。多頭飼育や店舗の衛生管理にも適しています。
                                            </p>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100">
                                        <button className="flex items-center gap-2 text-orange-600 font-bold hover:underline">
                                            <FileText size={18} />
                                            <span>詳細なエビデンス資料（PDF）を請求する</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal width="100%" className="lg:w-1/2" delay={0.2}>
                        <div>
                            <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Technology</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
                                自然界の「自浄作用」を<br />
                                科学で再現しました。
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                森林や滝の近くで空気が清々しく感じるのは、自然のイオンが空気を浄化しているからです。AirFutureは、その力を最大化。
                            </p>

                            <div className="bg-orange-50 p-6 rounded-2xl border border-orange-100">
                                <h4 className="font-bold text-orange-800 mb-2">獣医師からの推薦</h4>
                                <blockquote className="text-slate-700 italic border-l-4 border-orange-300 pl-4">
                                    「ペットの嗅覚は人間の数万倍。我々が感じる不快な匂いは、彼らにとっては大きなストレスです。AirFutureはペットの健康と安心を守るための、最良の環境投資と言えるでしょう。」
                                </blockquote>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
