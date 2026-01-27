'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetFAQ() {
    const faqs = [
        {
            q: "猫が本体の上に乗ったり、爪を研いだりしても大丈夫ですか？",
            a: "AirFuture Pro/Miniは頑丈なABS樹脂・金属筐体を採用しており、標準的な衝撃には耐えられます。また、吹き出し口の隙間にはペットの足が入らない安全設計となっています。"
        },
        {
            q: "アンモニア臭以外のニオイ（食べ残しや生魚など）にも効きますか？",
            a: "はい。AIO-2技術はアンモニアだけでなく、硫化水素などの様々な悪臭分子を分解します。キッチン周りの生ゴミ臭や調理後の脂のニオイにも非常に強力な効果を発揮します。"
        },
        {
            q: "フィルター交換は本当に不要なのでしょうか？",
            a: "はい。一般的なフィルター吸着型とは異なり、イオンによる分解型ですので、目詰まりするメインフィルター自体が存在しません。半年に一度、イオン発生体を軽く綿棒などで清掃いただくだけで、半永久的に性能が持続します。"
        },
        {
            q: "電気代は月額どのくらいですか？",
            a: "24時間連続稼働で、Miniは約80円、Proは約150円〜200円程度（使用モードによる）と、非常に経済的です。"
        },
        {
            q: "音が大きくてペットが怖がりませんか？",
            a: "「静音モード」では28dB（ささやき声や図書館の静かさ以下）の動作音です。多くのユーザー様から、ワンちゃんネコちゃんも気にせず横で眠っているというお声をいただいております。"
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">よくあるご質問</h2>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <ScrollReveal key={i} delay={i * 0.05} width="100%">
                            <div className="border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-200 transition-colors">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left group bg-white"
                                >
                                    <span className="font-bold text-slate-900 text-lg group-hover:text-orange-600 transition-colors">
                                        Q. {faq.q}
                                    </span>
                                    {openIndex === i ? <Minus className="text-orange-600" /> : <Plus className="text-slate-400 group-hover:text-orange-600" />}
                                </button>
                                {openIndex === i && (
                                    <div className="px-6 pb-6 bg-white animate-in slide-in-from-top duration-300">
                                        <p className="text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                                            {faq.a}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
