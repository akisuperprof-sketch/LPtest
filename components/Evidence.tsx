import Image from 'next/image';
import { CheckCircle2, ShieldCheck, Microscope } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Evidence() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal width="100%">
                        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/evidence.png"
                                alt="科学的根拠"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                                <p className="text-sm font-bold text-slate-800">
                                    第三者機関によるウイルス・花粉除去試験済み
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal width="100%" delay={0.2}>
                        <div>
                            <div className="inline-block bg-sky-100 text-sky-700 font-bold px-4 py-1 rounded-full text-sm mb-6">
                                RELIABILITY
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                                世界100ヶ国の医療機関で採用<br />
                                「AIO-2イオンクラスター」技術
                            </h2>
                            <p className="text-lg text-slate-600 mb-8">
                                AirFuture Miniは、単なる空気清浄機ではありません。世界中の病院やクリーンルームで採用されている「AIO-2イオンクラスター」技術を、家庭用コンパクトサイズに凝縮しました。
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full text-emerald-600">
                                        <ShieldCheck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">菌を97%除去（食品工場での実証）</h3>
                                        <p className="text-slate-600">
                                            大手コンビニ食品工場での実験では、浮遊菌数が930個から30個へ激減。プロの現場で認められた除去能力です。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full text-emerald-600">
                                        <Microscope size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">カビ発生ゼロ（トマト保存実験）</h3>
                                        <p className="text-slate-600">
                                            同期間放置したトマトの比較実験で、AirFuture稼働下では5日後もカビ発生ゼロ。有機物を「分解」する力を証明しました。
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full text-emerald-600">
                                        <CheckCircle2 size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">付着菌も81%減少（公共バス車内）</h3>
                                        <p className="text-slate-600">
                                            空気中だけでなく、机やドアノブに付着した菌も除去。不特定多数が触れる場所でも安全を確保します。
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
