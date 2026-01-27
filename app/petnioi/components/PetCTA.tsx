'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function PetCTA() {
    return (
        <section className="py-24 bg-orange-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -mr-48 -mt-48"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300 rounded-full blur-3xl -ml-48 -mb-48"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
                <ScrollReveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                        これからは、<br className="md:hidden" />
                        「ニオイを気にしない」という贅沢を。
                    </h2>
                    <p className="text-xl opacity-90 mb-12">
                        来客の前で気まずい思いをすることは、もうありません。<br />
                        ペットと、あなたと、大切な家族のために、<br />
                        極上の空気環境を手に入れませんか？
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="/buy/checkout?model=pet" className="bg-white text-orange-600 px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl hover:bg-orange-50 transition-all hover:-translate-y-1 block w-full sm:w-auto">
                            今すぐ購入する
                        </a>
                        <a href="/support" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-xl font-bold backdrop-blur-sm hover:bg-white/10 transition-all block w-full sm:w-auto">
                            疑問を相談する
                        </a>
                    </div>

                    <p className="mt-8 text-sm opacity-70">
                        ※30日間全額返金保証付き。まずはお部屋でお試しください。
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
