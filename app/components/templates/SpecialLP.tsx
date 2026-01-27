'use client';

import { motion } from 'framer-motion';
import { Shield, Sparkles, AlertCircle, Check, Info, Mail, Phone, MapPin, Menu, X, CheckCircle2, Zap, CreditCard, Plus, Minus, FileText, Award, Microscope, ShieldCheck, Ghost, Users, Power, Wind } from 'lucide-react';
import { useState } from 'react';

// UI Components
const ScrollReveal = ({ children, width = "fit-content", delay = 0, className = "", direction = "up" }: any) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: direction === "up" ? 20 : 0, x: direction === "left" ? 20 : direction === "right" ? -20 : 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.5, delay: delay }}
            viewport={{ once: true }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    );
};

// Types
interface LPData {
    colorTheme: {
        primary: string; // e.g., 'bg-orange-600'
        secondary: string; // e.g., 'bg-orange-50'
        text: string; // e.g., 'text-orange-600'
        border: string; // e.g., 'border-orange-200'
        bgHelper: string; // hex for inline styles
    };
    hero: {
        badge: string;
        title: string | React.ReactNode;
        description: string;
        imageSrc: string;
        benefit1: string;
        benefit2: string;
    };
    problem: {
        title: string | React.ReactNode;
        desc: string;
        items: { title: string; desc: string; icon: React.ReactNode; highlight: string }[];
        researchData?: { value: string; label: string; desc: string };
    };
    product: {
        title: string | React.ReactNode;
        desc: string;
        features: { title: string; desc: string; icon: React.ReactNode }[];
    };
    evidence: {
        items: { title: string; source: string; desc: string; icon: React.ReactNode }[];
        message: string;
    };
    price: {
        miniPrice: number;
        proPrice: number;
        dailyCost: number;
    };
    faq: { q: string; a: string }[];
    buyLink: string;
}

export default function SpecialLPTemplate({ data }: { data: LPData }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    // Dynamic classes based on theme (Simplified for this example, usually handled with tailwind-merge or similar)
    // Note: Tailwind classes need to be complete strings to be scanned, so we use style objects or safe predefined maps in a real app.
    // For this rapid prototyping, we assume valid classes are passed or simple style overrides.

    return (
        <main className="min-h-screen bg-white font-sans text-slate-900">
            {/* Header */}
            <nav className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-md border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <a href="/" className="font-bold text-2xl tracking-tighter">
                        AirFuture<span style={{ color: data.colorTheme.bgHelper }}>.</span>
                    </a>
                    <div className="hidden md:flex items-center gap-6 text-sm font-bold">
                        <a href="#product" className="hover:opacity-70">製品</a>
                        <a href="#evidence" className="hover:opacity-70">実証</a>
                        <a href="#price" className="hover:opacity-70">価格</a>
                        <button
                            className={`px-6 py-2 rounded-full text-white transition-all hover:opacity-90 ${data.colorTheme.primary}`}
                            onClick={() => window.location.href = data.buyLink}
                        >
                            今すぐ購入
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero matched to Student LP Style */}
            <div className="relative min-h-[85vh] overflow-hidden bg-slate-900 text-white flex items-center">
                {/* Background Image */}
                <motion.div
                    className="absolute inset-0 transform origin-center"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/20 z-10 ${data.colorTheme.primary.replace('bg-', 'from-').split('-')[0] + '-900/50'}`} /> {/* Dynamic tint if possible, or just dark slate */}
                    <img
                        src={data.hero.imageSrc || "/hero-student.png"}
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                </motion.div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid md:grid-cols-12 gap-12 items-center pt-20 pb-20">
                    {/* Left Content */}
                    <motion.div
                        className="md:col-span-7"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Badge */}
                        <div className={`inline-block ${data.colorTheme.primary} bg-opacity-20 border border-white/20 text-white font-bold px-4 py-1 rounded-full text-sm mb-6 backdrop-blur-md`}>
                            {data.hero.badge}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight text-white drop-shadow-md">
                            {data.hero.title}
                        </h1>

                        {/* Description */}
                        <p className="mt-6 text-xl text-slate-100 leading-relaxed max-w-2xl text-shadow-sm font-medium">
                            {data.hero.description}
                        </p>

                        {/* CTA Button */}
                        <div className="mt-10 flex flex-col sm:flex-row gap-4">
                            <a
                                href={data.buyLink}
                                className={`bg-white ${data.colorTheme.text} font-bold py-4 px-8 rounded-full text-lg shadow-lg relative overflow-hidden group transition-all text-center hover:bg-slate-100 hover:scale-105`}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    効果を試す
                                    <CheckCircle2 size={20} />
                                </span>
                            </a>
                            <div className="flex items-center justify-center gap-2 text-slate-300 mt-2 sm:mt-0 px-4 bg-black/30 rounded-full py-1 backdrop-blur-sm">
                                <ShieldCheck size={18} className="text-emerald-400" />
                                <span className="text-sm">30日間全額返金保証付き</span>
                            </div>
                        </div>

                        <div className="mt-8 flex gap-6 text-sm font-bold text-slate-300">
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400" /> {data.hero.benefit1}</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={18} className="text-emerald-400" /> {data.hero.benefit2}</div>
                        </div>
                    </motion.div>

                    {/* Right Product Image */}
                    <motion.div
                        className="md:col-span-5 relative" // Removed hidden md:block
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                            <div className={`absolute inset-0 ${data.colorTheme.primary} opacity-20 blur-3xl rounded-full animate-pulse`} />
                            {/* Always show product cutout on top */}
                            <img
                                src="/product-angle-cutout.png"
                                alt="AirFuture Product"
                                className="object-contain drop-shadow-2xl relative z-10 w-full h-full"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Problem */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">{data.problem.title}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">{data.problem.desc}</p>
                    </ScrollReveal>
                </div>
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
                    {data.problem.items.map((item, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className={`h-full p-8 rounded-3xl border transition-all hover:shadow-xl hover:-translate-y-1 bg-white ${data.colorTheme.border}`}>
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${data.colorTheme.secondary} ${data.colorTheme.text}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                {data.problem.researchData && (
                    <div className="max-w-4xl mx-auto px-4 mt-16">
                        <ScrollReveal>
                            <div className="bg-slate-900 text-white rounded-3xl p-8 flex items-center gap-8">
                                <div className={`p-4 rounded-xl text-center min-w-[120px] ${data.colorTheme.primary}`}>
                                    <div className="text-xs font-bold opacity-80">{data.problem.researchData.label}</div>
                                    <div className="text-3xl font-bold">{data.problem.researchData.value}</div>
                                </div>
                                <p className="text-sm md:text-base opacity-90">{data.problem.researchData.desc}</p>
                            </div>
                        </ScrollReveal>
                    </div>
                )}
            </section>

            {/* Product */}
            <section id="product" className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className={`text-sm font-bold tracking-widest uppercase ${data.colorTheme.text}`}>Solution</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">{data.product.title}</h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">{data.product.desc}</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-4">
                            {data.product.features.map((f, i) => (
                                <ScrollReveal key={i} delay={i * 0.1} direction="left">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm flex items-start gap-4">
                                        <div className={`p-2 rounded-lg text-white ${data.colorTheme.primary}`}>{f.icon}</div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                                            <p className="text-slate-600 text-sm">{f.desc}</p>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                        <ScrollReveal delay={0.3}>
                            <div className="relative">
                                <div className={`absolute -inset-4 rounded-full opacity-20 blur-3xl ${data.colorTheme.primary}`}></div>
                                <img src="/product-group.png" onError={(e) => e.currentTarget.src = "/product-mini.png"} alt="Product Family" className="relative z-10 mx-auto" />
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Evidence */}
            <section id="evidence" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <ScrollReveal>
                        <h2 className="text-2xl font-bold mb-10 text-center flex items-center justify-center gap-2">
                            <Award className={data.colorTheme.text} />
                            信頼の証（エビデンス）
                        </h2>
                    </ScrollReveal>
                    <div className="grid md:grid-cols-2 gap-8">
                        {data.evidence.items.map((item, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <div className="border border-slate-100 p-8 rounded-3xl h-full hover:shadow-lg transition-all">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`p-2 rounded-lg ${data.colorTheme.secondary} ${data.colorTheme.text}`}>
                                            {item.icon}
                                        </div>
                                        <div className="text-xs font-bold text-slate-400">{item.source}</div>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">よくあるご質問</h2>
                    <div className="space-y-4">
                        {data.faq.map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm">
                                <button
                                    className="w-full p-6 text-left font-bold flex justify-between items-center"
                                    onClick={() => setOpenFaqIndex(openFaqIndex === i ? null : i)}
                                >
                                    <span>{item.q}</span>
                                    {openFaqIndex === i ? <Minus size={18} className="text-slate-400" /> : <Plus size={18} className="text-slate-400" />}
                                </button>
                                {openFaqIndex === i && (
                                    <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price / CTA */}
            <section id="price" className={`py-24 text-white ${data.colorTheme.primary}`}>
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <ScrollReveal>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">今すぐ、理想の空気環境を。</h2>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-2xl mx-auto mb-10">
                            <p className="text-xl mb-2 font-bold opacity-90">Web限定特別価格</p>
                            <div className="text-5xl md:text-7xl font-bold mb-4">
                                ¥{(Math.min(data.price.proPrice, data.price.miniPrice)).toLocaleString()}<span className="text-xl font-normal ml-2">~</span>
                            </div>
                            <p className="text-sm opacity-80 mb-6">1日あたり 約{data.price.dailyCost}円（3年利用時）</p>
                            <ul className="flex flex-col sm:flex-row justify-center gap-4 text-sm font-medium mb-8">
                                <li className="flex items-center gap-2"><Check size={16} /> 全国送料無料</li>
                                <li className="flex items-center gap-2"><Check size={16} /> 30日間返金保証</li>
                                <li className="flex items-center gap-2"><Check size={16} /> フィルター交換不要</li>
                            </ul>
                            <a
                                href={data.buyLink}
                                className="block w-full bg-white text-slate-900 py-4 rounded-xl font-bold text-xl shadow-xl transition-all hover:bg-slate-100"
                            >
                                購入ページへ進む
                            </a>
                        </div>
                    </ScrollReveal>
                    <p className="opacity-60 text-xs">※注文が殺到しているため、発送までにお時間をいただく場合がございます。</p>
                </div>
            </section>

            <footer className="bg-slate-900 text-slate-500 py-12 text-center text-sm">
                <div className="mb-4 text-white font-bold text-xl">AirFuture.</div>
                <p>&copy; 2026 AirFuture Inc. All rights reserved.</p>
            </footer>
        </main>
    );
}
