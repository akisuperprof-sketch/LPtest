import AnimeHero from '@/components/AnimeHero';
import Problem from '@/components/Problem';
import Evidence from '@/components/Evidence';
import Product from '@/components/Product';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import LastPush from '@/components/LastPush';
import Price from '@/components/Price';
import Footer from '@/components/Footer';

export default function StudentLP() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <AnimeHero />
            <Problem />
            <Product />
            <Comparison />
            <Evidence />
            <FAQ />
            <LastPush />
            <Price />
            <Footer />
        </main>
    );
}
