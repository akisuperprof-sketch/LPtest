'use client';

import PetHero from './components/PetHero';
import PetProblem from './components/PetProblem';
import PetProduct from './components/PetProduct';
import PetEvidence from './components/PetEvidence';
import PetPrice from './components/PetPrice';
import PetFAQ from './components/PetFAQ';
import PetCTA from './components/PetCTA';
import PetFooter from './components/PetFooter';

export default function PetLP() {
    return (
        <main className="min-h-screen bg-white font-sans selection:bg-orange-100 selection:text-orange-900">
            {/* Minimal Navigation */}
            <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <a href="/" className="font-bold text-2xl text-slate-900 tracking-tight">
                        AirFuture<span className="text-orange-600">.</span>
                    </a>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a href="#product" className="hover:text-orange-600 transition-colors">製品の特長</a>
                        <a href="#evidence" className="hover:text-orange-600 transition-colors">実証データ</a>
                        <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
                        <a href="/buy/checkout?model=pet" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition-all font-bold">
                            今すぐ購入
                        </a>
                    </div>
                </div>
            </nav>

            <PetHero />
            <PetProblem />
            <PetProduct />
            <div id="evidence">
                <PetEvidence />
            </div>
            <PetPrice />
            <div id="faq">
                <PetFAQ />
            </div>
            <PetCTA />
            <PetFooter />
        </main>
    );
}
