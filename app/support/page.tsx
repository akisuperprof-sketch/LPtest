'use client';

import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SupportPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-20">
            {/* Minimal Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
                    <a href="/student" className="font-bold text-slate-900 tracking-tight hover:text-sky-600 transition-colors">
                        AirFuture
                    </a>
                    <a href="/student" className="text-sm font-medium text-slate-500 hover:text-slate-800">
                        戻る
                    </a>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-12">
                        <span className="inline-block bg-sky-100 text-sky-700 font-bold px-3 py-1 rounded-full text-xs mb-4">
                            SUPPORT
                        </span>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            お問い合わせ窓口
                        </h1>
                        <p className="text-slate-600 max-w-xl mx-auto">
                            製品に関するご質問、サポートのご依頼など、お気軽にお問い合わせください。
                            専任スタッフが24時間以内にご回答いたします。
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-start">
                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <Send size={20} className="text-sky-500" />
                                お問い合わせフォーム
                            </h2>
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">お名前</label>
                                    <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all" placeholder="山田 太郎" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">メールアドレス</label>
                                    <input type="email" id="email" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all" placeholder="example@email.com" />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">件名</label>
                                    <select id="subject" className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all">
                                        <option value="">選択してください</option>
                                        <option value="product">製品について</option>
                                        <option value="order">注文・決済について</option>
                                        <option value="support">修理・サポートについて</option>
                                        <option value="other">その他</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">お問い合わせ内容</label>
                                    <textarea id="message" rows={5} className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none transition-all" placeholder="詳細をご記入ください"></textarea>
                                </div>
                                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl transition-all shadow-lg hover:shadow-xl mt-4">
                                    送信する
                                </button>
                                <p className="text-xs text-center text-slate-400 mt-4">
                                    ※現在はデモ動作のため送信されません
                                </p>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                    <MessageCircle size={20} className="text-emerald-400" />
                                    お電話・LINEでの対応
                                </h2>
                                <div className="space-y-6 relative z-10">
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">カスタマーサポート</p>
                                        <a href="tel:03-1234-5678" className="text-3xl font-bold hover:text-sky-400 transition-colors flex items-center gap-2">
                                            <Phone size={24} />
                                            03-1234-5678
                                        </a>
                                        <p className="text-sm text-slate-400 mt-2">受付時間: 平日 10:00 - 18:00</p>
                                    </div>
                                    <div className="pt-6 border-t border-slate-700">
                                        <p className="text-xs text-slate-400 uppercase tracking-wider mb-3">LINE公式アカウント</p>
                                        <button className="bg-[#06C755] hover:bg-[#05b54d] text-white py-3 px-6 rounded-lg font-bold w-full transition-all flex items-center justify-center gap-2">
                                            LINEで質問する
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                                <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <MapPin size={18} className="text-slate-400" />
                                    所在地
                                </h3>
                                <address className="not-italic text-sm text-slate-600 leading-relaxed">
                                    〒100-0000<br />
                                    東京都千代田区〇〇 1-2-3<br />
                                    AirFutureビル 4F<br />
                                </address>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
