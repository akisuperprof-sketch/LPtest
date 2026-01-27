import { Check, X, Minus } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function Comparison() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            なぜ、「一般的な空気清浄機」では<br />
                            ダメなのか？
                        </h2>
                        <p className="text-lg text-slate-600">
                            勉強部屋に必要なのは「リビング用」の機能ではありません。<br />
                            受験生に特化したAirFuture Miniとの違いをご覧ください。
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal width="100%" delay={0.2} direction="up">
                    <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-slate-200">
                        <table className="w-full text-center border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-4 w-1/4 md:w-1/3 text-sm md:text-base font-medium opacity-80">比較項目</th>
                                    <th className="p-4 w-1/4 md:w-1/3 text-sm md:text-base font-medium opacity-80 bg-slate-800">一般的な<br className="md:hidden" />空気清浄機</th>
                                    <th className="p-4 w-1/4 md:w-1/3 text-lg md:text-xl font-bold bg-sky-600 relative overflow-hidden">
                                        AirFuture Mini
                                        <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[10px] px-2 py-0.5 font-bold">推奨</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {/* Size */}
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-slate-600 font-bold text-sm md:text-base">サイズ感</td>
                                    <td className="p-4 text-slate-500 text-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <Minus size={20} className="text-slate-400" />
                                            <span>床置きで場所をとる</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-900 font-bold bg-sky-50/30 text-sm md:text-base">
                                        <div className="flex flex-col items-center gap-1">
                                            <Check size={24} className="text-sky-600" />
                                            <span className="text-sky-700">机に置けるハガキサイズ</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* Tech */}
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-slate-600 font-bold text-sm md:text-base">除去方式</td>
                                    <td className="p-4 text-slate-500 text-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <X size={20} className="text-red-400" />
                                            <span>フィルター吸着のみ</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-900 font-bold bg-sky-50/30 text-sm md:text-base">
                                        <div className="flex flex-col items-center gap-1">
                                            <Check size={24} className="text-sky-600" />
                                            <span className="text-sky-700">イオン分解除去 (AIO-2)</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* Maintenance */}
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-slate-600 font-bold text-sm md:text-base">メンテナンス</td>
                                    <td className="p-4 text-slate-500 text-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <X size={20} className="text-red-400" />
                                            <span>定期的なフィルター交換<br />(コスト増)</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-900 font-bold bg-sky-50/30 text-sm md:text-base">
                                        <div className="flex flex-col items-center gap-1">
                                            <Check size={24} className="text-sky-600" />
                                            <span className="text-sky-700">交換不要 (拭くだけ)</span>
                                        </div>
                                    </td>
                                </tr>

                                {/* Noise */}
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 text-slate-600 font-bold text-sm md:text-base">静音性</td>
                                    <td className="p-4 text-slate-500 text-sm">
                                        <div className="flex flex-col items-center gap-1">
                                            <Minus size={20} className="text-slate-400" />
                                            <span>ファンの音が気になる</span>
                                        </div>
                                    </td>
                                    <td className="p-4 text-slate-900 font-bold bg-sky-50/30 text-sm md:text-base">
                                        <div className="flex flex-col items-center gap-1">
                                            <Check size={24} className="text-sky-600" />
                                            <span className="text-sky-700">静音設計 (微細なファン音)</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
