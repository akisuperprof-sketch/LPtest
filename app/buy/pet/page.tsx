import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

export default function PetBuyPage() {
    return (
        <main className="min-h-screen bg-orange-50 font-sans p-8">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <header className="bg-orange-600 text-white p-6 flex justify-between items-center">
                    <h1 className="text-xl font-bold">AirFuture Checkout</h1>
                    <div className="flex items-center gap-2">
                        <ShoppingCart size={20} />
                        <span className="text-sm">Secure Payment</span>
                    </div>
                </header>

                <div className="p-8 md:p-12">
                    <div className="mb-8 p-4 bg-orange-50 border border-orange-100 rounded-lg flex items-center gap-4">
                        <div className="w-16 h-16 bg-slate-200 rounded flex-shrink-0"></div>
                        <div>
                            <h2 className="font-bold text-lg text-slate-800">AirFuture Mini (Pet Guardian Pack)</h2>
                            <p className="text-slate-600">¥120,000 (税込)</p>
                        </div>
                    </div>

                    <h3 className="font-bold text-slate-800 mb-4">Checkout Concept</h3>
                    <p className="text-slate-500 mb-8">
                        Checkout flow customized for pet owners (e.g., upsell odor-eliminating spray).
                    </p>

                    <Link href="/" className="text-orange-500 hover:text-orange-700 underline block text-center">
                        &larr; Back to Portal
                    </Link>
                </div>
            </div>
        </main>
    );
}
