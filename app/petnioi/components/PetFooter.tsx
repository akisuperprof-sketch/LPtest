'use client';

import { Mail, Shield, CheckCircle } from 'lucide-react';

const productLinks = [
    { label: 'AirFuture Mini', href: '/buy/pet?model=mini' },
    { label: 'AirFuture Pro', href: '/buy/pet?model=pro' },
];

const supportLinks = [
    { label: 'よくある質問', href: '#faq' },
    { label: 'お問い合わせ', href: '/support' },
];

const legalLinks = [
    { label: 'プライバシーポリシー', href: '/legal/privacy' },
    { label: '利用規約', href: '/legal/terms' },
    { label: 'ト特定商取引法', href: '/legal/tokusho' },
];

export default function PetFooter() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-2">
                        <h2 className="text-white text-3xl font-bold mb-6">AirFuture</h2>
                        <p className="text-sm leading-relaxed max-w-sm mb-6">
                            私たちは「空気の質」こそが、健やかな日常を作る鍵であると信じています。
                            ペットと家族、大切なすべての人に、真に清潔な環境を。
                        </p>
                        <div className="flex gap-4">
                            <div className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                                <Mail size={20} className="text-white" />
                            </div>
                            <div className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                                <Shield size={20} className="text-white" />
                            </div>
                            <div className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors">
                                <CheckCircle size={20} className="text-white" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">製品情報</h3>
                        <ul className="space-y-3">
                            {productLinks.map((link, i) => (
                                <li key={i}><a href={link.href} className="text-sm hover:text-orange-400 transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">サポート</h3>
                        <ul className="space-y-3">
                            {supportLinks.map((link, i) => (
                                <li key={i}><a href={link.href} className="text-sm hover:text-orange-400 transition-colors">{link.label}</a></li>
                            ))}
                            {legalLinks.map((link, i) => (
                                <li key={i}><a href={link.href} className="text-sm hover:text-orange-400 transition-colors">{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>&copy; {new Date().getFullYear()} AirFuture Inc. All rights reserved.</p>
                    <p className="mt-4 md:mt-0 opacity-50 italic">Science for Clean Air. Design for Happiness.</p>
                </div>
            </div>
        </footer>
    );
}
