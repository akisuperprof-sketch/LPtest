"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import { ArrowRight, Check, AlertCircle, Lock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'sonner';
import Image from 'next/image';

// Minimal Checkbox Component
function Checkbox({ id, checked, onCheckedChange, label }: { id: string, checked: boolean, onCheckedChange: (c: boolean) => void, label: string }) {
    return (
        <div className="flex items-start gap-3">
            <button
                type="button"
                id={id}
                role="checkbox"
                aria-checked={checked}
                onClick={() => onCheckedChange(!checked)}
                className={`flex-shrink-0 w-6 h-6 rounded border flex items-center justify-center transition-colors ${checked ? 'bg-sky-600 border-sky-600' : 'bg-white border-slate-300'}`}
            >
                {checked && <Check size={16} className="text-white" />}
            </button>
            <label htmlFor={id} className="text-sm text-slate-600 cursor-pointer select-none leading-tight pt-0.5">
                {label}
            </label>
        </div>
    );
}

function CheckoutContent() {
    const searchParams = useSearchParams();
    const model = searchParams.get('model') || 'standard';
    const isDemo = searchParams.get('demo') === 'true';
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const price = 198000;
    const taxPrice = Math.floor(price * 1.1);

    const handleCheckout = async () => {
        if (!agreed) {
            toast.error("購入前の確認事項にチェックを入れてください");
            return;
        }

        setIsSubmitting(true);

        // Simulation of redirect
        setTimeout(() => {
            if (isDemo) {
                toast.success("デモ申込みを受け付けました(仮)");
            } else {
                // In real app, redirect to Stripe/BASE
                toast.success("決済画面へ移動します(仮)");
            }
            setIsSubmitting(false);
        }, 1500);
    };

    return (
        <div className="pb-20">
            <Toaster position="top-center" richColors />

            {/* Minimal Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-slate-900 tracking-tight text-xl">AirFuture</div>
                    <div className="flex items-center gap-2 text-xs font-medium bg-slate-100 px-3 py-1 rounded-full text-slate-500">
                        <Lock size={12} />
                        SSL Secure
                    </div>
                </div>
            </header>

            <div className="max-w-2xl mx-auto px-4 py-8">
                {/* Steps */}
                <div className="flex items-center justify-between mb-8 max-w-xs mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold mb-1">1</div>
                        <span className="text-xs text-slate-400">商品確認</span>
                    </div>
                    <div className="h-[1px] bg-slate-300 w-12 mx-2"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center text-sm font-bold mb-1">2</div>
                        <span className="text-xs text-sky-600 font-bold">入力確認</span>
                    </div>
                    <div className="h-[1px] bg-slate-300 w-12 mx-2"></div>
                    <div className="flex flex-col items-center">
                        <div className="w-8 h-8 rounded-full bg-slate-200 text-slate-500 flex items-center justify-center text-sm font-bold mb-1">3</div>
                        <span className="text-xs text-slate-400">完了</span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                        {isDemo ? '無料デモお申し込み確認' : 'ご注文内容の確認'}
                    </h1>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
                        <div className="p-6">
                            <div className="flex gap-4 mb-6">
                                <div className="w-24 h-24 bg-slate-100 rounded-lg relative overflow-hidden flex-shrink-0 flex items-center justify-center">
                                    <img src="/product-mini.png" alt="Product" className="max-h-full object-contain" />
                                </div>
                                <div className="flex-1">
                                    <h2 className="font-bold text-slate-900 leading-tight mb-2 text-lg">{displayModelName}</h2>
                                    <p className="text-sm text-slate-500 mb-3">適用：{model}専用チューニングモデル</p>

                                    {isDemo ? (
                                        <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-300">
                                            1週間 無料デモ体験（Pro機）
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-start gap-1">
                                            <span className="text-2xl font-bold text-sky-600">¥{taxPrice.toLocaleString()}</span>
                                            <span className="text-xs text-slate-500">税込 / 送料無料</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="border-t border-slate-100 pt-4 space-y-3">
                                <h3 className="text-sm font-bold text-slate-700">セット内容:</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    <li className="flex gap-2 items-center"><Check size={14} className="text-emerald-500" /> 専用フィルター x1</li>
                                    <li className="flex gap-2 items-center"><Check size={14} className="text-emerald-500" /> 電源アダプター</li>
                                    <li className="flex gap-2 items-center"><Check size={14} className="text-emerald-500" /> リモコン</li>
                                    <li className="flex gap-2 items-center"><Check size={14} className="text-emerald-500" /> 取扱説明書（保証書付）</li>
                                </ul>
                            </div>
                        </div>

                        {!isDemo && (
                            <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                                <span className="font-bold text-slate-700">お支払い合計</span>
                                <span className="text-2xl font-bold text-sky-600">¥{taxPrice.toLocaleString()}</span>
                            </div>
                        )}
                    </div>

                    {/* Pre-purchase Checklist */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <AlertCircle size={18} className="text-amber-500" />
                            {isDemo ? 'お申し込み前の確認' : '購入前の最終確認'}
                        </h3>
                        <div className="space-y-4 mb-6">
                            <Checkbox
                                id="check1"
                                checked={agreed}
                                onCheckedChange={setAgreed}
                                label={isDemo
                                    ? "デモ機の返却期限（到着後7日以内）を厳守することに同意します。"
                                    : "30日間の全額返金保証規定を確認しました（商品到着後30日以内、送料のみお客様負担）。"}
                            />
                            {!isDemo && (
                                <div className="text-xs text-slate-400 pl-9">
                                    ※3年間の品質保証も付帯しています。
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sticky CTA for Mobile */}
                    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-5px_20px_rgba(0,0,0,0.05)] md:relative md:bg-transparent md:border-0 md:shadow-none md:p-0">
                        <div className="max-w-2xl mx-auto">
                            <button
                                onClick={handleCheckout}
                                disabled={isSubmitting}
                                className={`w-full font-bold py-4 px-6 rounded-xl text-lg shadow-lg flex items-center justify-center gap-2 transition-all ${isSubmitting
                                    ? 'bg-slate-400 cursor-not-allowed'
                                    : 'bg-sky-600 hover:bg-sky-500 text-white hover:shadow-xl transform active:scale-95'
                                    }`}
                            >
                                {isSubmitting ? (
                                    '処理中...'
                                ) : (
                                    <>
                                        {isDemo ? 'デモを申し込む' : '決済へ進む'} <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                            {!isDemo && (
                                <p className="text-center text-xs text-slate-400 mt-3">
                                    この先はBASE(Pay ID)の安全な決済画面へ移動します。<br />
                                    クレジットカード、あと払い、キャリア決済などがご利用いただけます。
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="h-24 md:h-0"></div>

                </motion.div>
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <Suspense fallback={<div className="text-center p-12">読み込み中...</div>}>
                <CheckoutContent />
            </Suspense>
        </main>
    );
}
