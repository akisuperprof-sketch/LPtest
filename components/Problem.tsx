import { AlertTriangle, TrendingDown, BatteryWarning, Brain } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Problem() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            こんな悩み、お子様から聞いていませんか？
                        </h2>
                        <p className="text-lg text-slate-600">
                            春先の受験シーズン、花粉は想像以上に学習効率を奪っています。
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    <ScrollReveal delay={0.1}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden h-full transform transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05] md:opacity-10">
                                <AlertTriangle size={80} className="md:w-[100px] md:h-[100px]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-red-100 text-red-600 p-2 rounded-lg"><TrendingDown size={24} /></span>
                                集中力が続かない
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                数分おきに出るくしゃみと鼻水。
                                問題を解く思考がその度に分断され、深い集中状態（フロー）に入れません。
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden h-full transform transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05] md:opacity-10">
                                <Brain size={80} className="md:w-[100px] md:h-[100px]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-red-100 text-red-600 p-2 rounded-lg"><BatteryWarning size={24} /></span>
                                睡眠不足で記憶定着ダウン
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                鼻づまりによる口呼吸で浅い睡眠に。
                                記憶は睡眠中に定着するため、学習した内容が頭に残りにくくなります。
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative overflow-hidden h-full transform transition-all hover:-translate-y-1 hover:shadow-md">
                            <div className="absolute top-0 right-0 p-4 opacity-[0.05] md:opacity-10">
                                <AlertTriangle size={80} className="md:w-[100px] md:h-[100px]" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <span className="bg-red-100 text-red-600 p-2 rounded-lg"><BatteryWarning size={24} /></span>
                                薬は眠くなる
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                「症状は抑えたいけど、眠くなるのは困る」。
                                受験直前の大事な時期に、薬の副作用は大きなリスクです。
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal delay={0.4} width="100%">
                    <div className="mt-12 bg-red-50 border border-red-100 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
                        <div className="flex-shrink-0 bg-red-100 p-4 rounded-full text-red-600 font-bold text-2xl">
                            DATA
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-red-900 mb-2">研究データ：花粉症は学習効率を38%低下させる</h4>
                            <p className="text-red-800">
                                ある調査によると、花粉症の症状がある状態での学習は、通常時に比べて計算速度や記憶テストのスコアが平均38%低下することが分かっています。
                                これは偏差値にして5〜10のダウンに相当する深刻な影響です。
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
