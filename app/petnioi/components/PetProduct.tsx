'use client';

import { motion } from 'framer-motion';
import { Power, Wind, CheckCircle2, Zap } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetProduct() {
    const features = [
        {
            title: "24時間連続稼働",
            desc: "ペットのいる空間は24時間の管理が必須。月々の電気代は約120円〜と経済的です。",
            icon: <Power size={20} />
        },
        {
            title: "静音設計 28dB",
            desc: "聴覚の鋭い犬や猫を驚かせない。ささやき声よりも静かな動作音を実現。",
            icon: <Wind size={20} />
        },
        {
            title: "メンテナンスフリー",
            desc: "フィルター交換の手間なし。抜け毛が詰まる心配もなく、吸い込み型の限界を超えました。",
            icon: <Zap size={20} />
        }
    ];

    return (
        <section className="py-24 bg-slate-900 text-white overflow-hidden" id="product">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            「洗えないもの」まで、<br className="md:hidden" />空気が綺麗にする。
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            カーテン、じゅうたん、ソファ。ペットのニオイが染み付く場所を、<br />
                            浮遊イオンが直接クリーニング。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                    <ScrollReveal delay={0.1}>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative bg-slate-800 rounded-3xl p-8 border border-white/10">
                                <span className="inline-block px-3 py-1 rounded-full bg-orange-600 text-xs font-bold mb-4 uppercase">The Power</span>
                                <h3 className="text-2xl font-bold mb-6">AIO-2 イオンクラスターの威力</h3>
                                <p className="text-slate-300 leading-relaxed mb-8">
                                    空気清浄機の「吸い込み方式」では、ソファの裏や壁際のニオイまでは届きません。<br /><br />
                                    AirFutureは、世界最高レベルのイオン発生量を誇る技術を搭載。数千万個のイオンが部屋中の隅々まで広がり、アンモニア分子を細胞レベルで分解・無臭化します。
                                </p>
                                <ul className="space-y-4">
                                    {features.map((f, i) => (
                                        <li key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                                            <div className="bg-orange-600 p-2 rounded-lg">{f.icon}</div>
                                            <div>
                                                <h4 className="font-bold mb-1">{f.title}</h4>
                                                <p className="text-sm text-slate-400">{f.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Product Card: Mini */}
                            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-100 rounded-bl-full -mr-4 -mt-4"></div>
                                <img src="/product-mini.png" alt="Mini" className="h-48 mx-auto object-contain mb-6 drop-shadow-lg" />
                                <h4 className="text-xl font-bold mb-2">AirFuture Mini</h4>
                                <p className="text-xs text-slate-400 mb-4 px-2 py-1 bg-slate-100 inline-block rounded font-bold">適用床面積：〜8畳</p>
                                <p className="text-sm text-slate-600 mb-6">ワンちゃんの寝床、トイレ横、脱衣所などピンポイントの脱臭に最適。</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xl font-bold text-orange-600">¥198,000</span>
                                    <button className="p-2 rounded-full bg-slate-900 text-white"><CheckCircle2 size={18} /></button>
                                </div>
                            </div>

                            {/* Product Card: Pro */}
                            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl relative overflow-hidden ring-4 ring-orange-500">
                                <div className="absolute top-0 right-0 bg-orange-600 text-white px-4 py-1 text-xs font-bold rounded-bl-xl">人気No.1</div>
                                <img src="/product-pro.png" alt="Pro" className="h-48 mx-auto object-contain mb-6 drop-shadow-xl" />
                                <h4 className="text-xl font-bold mb-2">AirFuture Pro</h4>
                                <p className="text-xs text-orange-600 mb-4 px-2 py-1 bg-orange-50 inline-block rounded font-bold">適用床面積：〜30畳</p>
                                <p className="text-sm text-slate-600 mb-6">リビング全体や猫カフェなど。圧倒的な風量で室内の匂いを一掃します。</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xl font-bold text-orange-600">¥327,800</span>
                                    <button className="p-2 rounded-full bg-orange-600 text-white"><CheckCircle2 size={18} /></button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
