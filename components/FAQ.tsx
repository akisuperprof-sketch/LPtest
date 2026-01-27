import { Plus, Minus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function FAQ() {
    const faqs = [
        {
            q: "本当に音はしませんか？",
            a: "はい、AirFuture Miniはファンを使わない「イオン風」方式のため、動作音はほぼ無音です。集中力を削ぐ「ブーン」という機械音は一切ありませんので、図書館よりも静かな環境で学習いただけます。"
        },
        {
            q: "フィルター交換は本当に不要なのですか？",
            a: "はい、不要です。独自技術により汚れを分解・吸着するため、使い捨てフィルターは使いません。メンテナンスは半年に1回程度、電極プレートをウェットティッシュ等で拭き取るだけで完了します。追加コストは一切かかりません。"
        },
        {
            q: "どのくらいの広さまで対応していますか？",
            a: "推奨適用範囲は4.5畳〜6畳程度の個室です。勉強部屋や寝室など、区切られた空間で最も効果を発揮するように設計されています。"
        },
        {
            q: "電気代はどのくらいかかりますか？",
            a: "24時間つけっぱなしでも、1ヶ月の電気代は約数十円程度です。省エネ設計ですので、家計を気にせず常時稼働させていただけます。"
        },
        {
            q: "効果を感じられなかった場合は返金できますか？",
            a: "はい、商品到着から30日以内であれば、理由を問わず全額返金いたします。「実際に部屋に置いてみたけど合わなかった」という場合でも安心してお申し込みください。"
        }
    ];

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            よくあるご質問
                        </h2>
                        <p className="text-lg text-slate-600">
                            購入前に気になる点をご確認ください。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <ScrollReveal key={index} width="100%" delay={index * 0.1}>
                            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                                <h3 className="text-lg md:text-xl font-bold text-slate-900 flex gap-4 items-start mb-3">
                                    <span className="flex-shrink-0 bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">Q</span>
                                    {faq.q}
                                </h3>
                                <div className="flex gap-4 items-start text-slate-600 leading-relaxed">
                                    <span className="flex-shrink-0 bg-white border border-slate-200 text-slate-400 w-8 h-8 rounded-full flex items-center justify-center text-sm">A</span>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
