'use client';

import { motion } from 'framer-motion';
import { AlertCircle, Ghost, Users, Info } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetProblem() {
    const problems = [
        {
            title: "来客の「あれ、臭う？」が不安",
            desc: "自分たちは慣れてしまったニオイ。でも、玄関を開けた瞬間にゲストが感じるペット臭は、第一印象を大きく左右します。",
            icon: <Users className="text-orange-600" size={28} />,
            highlight: "自分では気づけない"
        },
        {
            title: "蓄積するアンモニア臭",
            desc: "トイレ周りから漂うアンモニア臭は、一般的な消臭剤では根本解決できません。壁やソファに染み付く前に分解が必要です。",
            icon: <AlertCircle className="text-orange-600" size={28} />,
            highlight: "染み付く前に分解"
        },
        {
            title: "目に見えない抜け毛と菌",
            desc: "空気中を漂う微細な抜け毛やフケは、アレルギーの原因に。空気を洗うように清浄しなければ、家族の健康に影響も。",
            icon: <Ghost className="text-orange-600" size={28} />,
            highlight: "浮遊物を徹底除去"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Case Study & Concern</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
                            芳香剤で「ごまかす」のは、<br className="md:hidden" />もう限界ではありませんか？
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            ペットと暮らす以上、ニオイの悩みは避けて通れません。しかし、強い香りで上書きするだけでは、根本的な解決にはなりません。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((problem, idx) => (
                        <ScrollReveal key={idx} delay={idx * 0.1}>
                            <div className="group h-full bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:bg-orange-600 hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-orange-200">
                                <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                                    {problem.icon}
                                </div>
                                <span className="inline-block text-xs font-bold py-1 px-3 rounded-full bg-orange-100 text-orange-700 mb-4 group-hover:bg-white group-hover:text-orange-600 transition-colors">
                                    {problem.highlight}
                                </span>
                                <h3 className="text-xl font-bold mb-4 group-hover:text-white">{problem.title}</h3>
                                <p className="text-slate-600 leading-relaxed group-hover:text-orange-50 transition-colors">
                                    {problem.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal delay={0.4} width="100%">
                    <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="bg-orange-600 p-6 rounded-2xl text-center min-w-[140px]">
                                <p className="text-xs font-bold mb-1 opacity-80 uppercase tracking-tighter">Bacteria reduction</p>
                                <p className="text-4xl font-bold">97.4%</p>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
                                    <Info className="text-orange-400" size={24} />
                                    <span>驚きの実験結果：壁の染み付き臭も抑制</span>
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    ペットサロンでの30日間実証実験では、壁材に染み付くアンモニア粒子を9割以上抑制。
                                    「退去時のニオイが心配」という賃貸マンション居住者や、オーナー様からも高い評価を得ています。
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
