"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function PetBuyPage() {
    const searchParams = useSearchParams();
    const model = searchParams.get('model') || 'standard';
    const isDemo = searchParams.get('demo') === 'true';

    // Model dictionary for display
    const modelNames: Record<string, string> = {
        student: "AirFuture Study (受験生応援モデル)",
        pet: "AirFuture for Pet (ペットモデル)",
        elderly: "AirFuture Care (介護・高齢者モデル)",
        office: "AirFuture Biz (オフィスモデル)",
        pollen: "AirFuture Pollen (花粉対策モデル)",
        newhouse: "AirFuture Home (新築・VOC対策モデル)",
        hotel: "AirFuture Stay (ホテルモデル)",
        restaurant: "AirFuture Chef (飲食店モデル)",
        salon: "AirFuture Beauty (サロンモデル)",
        car: "AirFuture Drive (車載モデル)",
        standard: "AirFuture Standard"
    };

    const displayModelName = modelNames[model] || modelNames['standard'];

    return (
        <main className="min-h-screen bg-slate-50 font-sans py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="bg-slate-900 text-white p-6 text-center">
                        <h1 className="text-2xl font-bold">
                            {isDemo ? '無料デモお申し込み' : 'ご注文手続き'}
                        </h1>
                        <p className="text-sm opacity-80 mt-2">安全なSSL通信で保護されています</p>
                    </div>

                    <div className="p-8">
                        {/* Order Summary */}
                        <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-200">
                            <h2 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <span className="w-1 h-6 bg-blue-600 block rounded-full"></span>
                                {isDemo ? 'お申し込み内容' : '選択された商品'}
                            </h2>
                            <div className="flex flex-col md:flex-row gap-6 items-center">
                                <div className="w-24 h-24 bg-white rounded-xl p-2 shadow-sm border border-slate-100 flex items-center justify-center">
                                    <img src="/product-mini.png" alt="Product" className="max-h-full object-contain" />
                                </div>
                                <div className="flex-1 text-center md:text-left">
                                    <div className="font-bold text-xl text-slate-900">{displayModelName}</div>
                                    <div className="text-sm text-slate-500 mt-1">適用：特別カスタマイズ済</div>

                                    {isDemo ? (
                                        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-300">
                                            1週間 無料デモ体験（Pro機）
                                        </div>
                                    ) : (
                                        <div className="text-2xl font-bold text-blue-600 mt-2">
                                            ¥198,000 <span className="text-sm text-slate-400 font-normal">（税込 / 送料無料）</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Link href="/" className="text-blue-600 hover:text-blue-800 underline block text-center mt-8">
                            &larr; ポータルに戻る
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
