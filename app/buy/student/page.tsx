'use client';

import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { ArrowRight, Check, AlertCircle, ShoppingCart, Lock, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';
import { productData } from '@/lib/product';
import { useSearchParams } from 'next/navigation';
import { track } from '@/lib/track';
import { Toaster, toast } from 'sonner';

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

function StudentBuyContent() {
    const searchParams = useSearchParams();
    const couponCode = searchParams.get('coupon');
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Calculate price with coupon
    const basePrice = productData.price;
    const discount = (couponCode === 'AF-STUDENT02') ? 10000 : 0;
    const finalPrice = Math.floor(basePrice * 1.1) - discount; // Tax included 198,000 - 10,000

    useEffect(() => {
        track('view_buy_student');
        if (couponCode === 'AF-STUDENT02') {
            toast.success("クーポンが自動適用されました", {
                description: "学生割引 -¥10,000",
                duration: 5000,
            });
        }
    }, [couponCode]);

    const handleCheckout = async () => {
        track('click_buy_to_base');

        if (!agreed) {
            toast.error("購入前の確認事項にチェックを入れてください");
            return;
        }

        setIsSubmitting(true);

        const checkoutUrl = process.env.NEXT_PUBLIC_BASE_CHECKOUT_URL;

        if (!checkoutUrl) {
            track('base_url_missing');
            toast.error("決済システムの接続エラーが発生しました。", {
                description: "恐れ入りますが、サポートまでお問い合わせください。"
            });
            setIsSubmitting(false);
            return;
        }

        // Slight delay for UX sensation
        setTimeout(() => {
            window.location.href = checkoutUrl;
        }, 500);
    };

    return (
        <main className="min-h-screen bg-slate-50 font-sans pb-20">
            <Toaster position="top-center" richColors />

            {/* Minimal Header */}
            <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
                <div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="font-bold text-slate-900 tracking-tight">AirFuture</div>
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
                        <span className="text-xs text-slate-400">決済完了</span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">ご注文内容の確認</h1>

                    {/* Order Summary Card */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-6">
                        <div className="p-6">
                            <div className="flex gap-4 mb-6">
                                <div className="w-24 h-24 bg-slate-100 rounded-lg relative overflow-hidden flex-shrink-0">
                                    <Image
                                        src="/product-angle-cutout.png"
                                        alt={productData.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                                <div>
                                    <h2 className="font-bold text-slate-900 leading-tight mb-2">{productData.name}</h2>
                                    <p className="text-sm text-slate-500 mb-3">{productData.description}</p>
                                    <div className="flex flex-col items-start gap-1">
                                        {discount > 0 ? (
                                            <>
                                                <span className="text-sm text-slate-400 line-through">¥{(Math.floor(basePrice * 1.1)).toLocaleString()}</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xl font-bold text-red-600">¥{finalPrice.toLocaleString()}</span>
                                                    <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded border border-red-100 font-bold">クーポン適用済</span>
                                                </div>
                                            </>
                                        ) : (
                                            <span className="text-xl font-bold text-slate-900">¥{(Math.floor(basePrice * 1.1)).toLocaleString()}</span>
                                        )}
                                        <span className="text-xs text-slate-500">{productData.taxNote}</span>
                                    </div>
                                </div>
                            </div>

                            {discount > 0 && (
                                <div className="mb-4 bg-sky-50 border border-sky-100 rounded-lg p-3 flex items-start gap-3">
                                    <Ticket size={18} className="text-sky-500 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-sky-900">
                                        <p className="font-bold mb-1">クーポンコード: {couponCode}</p>
                                        <p className="text-xs">
                                            ※本クーポン適用には、後日送付されるアンケート（学生様ご本人の使用感）への回答および公式LINEへの登録が必要です。これらに同意の上、決済へお進みください。
                                        </p>
                                    </div>
                                </div>
                            )}

                            <div className="border-t border-slate-100 pt-4 space-y-3">
                                <h3 className="text-sm font-bold text-slate-700">セット内容:</h3>
                                <ul className="text-sm text-slate-600 space-y-1">
                                    {productData.includes.map((item, i) => (
                                        <li key={i} className="flex gap-2 items-center">
                                            <Check size={14} className="text-emerald-500" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-4 bg-slate-50 p-3 rounded text-xs text-slate-500">
                                <span className="font-bold">含まれないもの:</span> {productData.notIncluded.join('、')}
                            </div>
                        </div>
                        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-between items-center">
                            <span className="font-bold text-slate-700">お支払い合計</span>
                            <span className="text-2xl font-bold text-sky-600">¥{finalPrice.toLocaleString()}</span>
                        </div>
                    </div>

                    {/* Pre-purchase Checklist */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <AlertCircle size={18} className="text-amber-500" />
                            購入前の最終確認
                        </h3>
                        <div className="space-y-4 mb-6">
                            <Checkbox
                                id="check1"
                                checked={agreed}
                                onCheckedChange={setAgreed}
                                label="30日間の全額返金保証規定を確認しました（商品到着後30日以内、送料のみお客様負担）。"
                            />
                            {discount > 0 && (
                                <div className="ml-9 p-2 bg-yellow-50 border border-yellow-100 rounded text-xs text-yellow-800">
                                    クーポン条件：公式LINE登録と後日のアンケート回答に同意します。
                                </div>
                            )}
                            <div className="text-xs text-slate-400 pl-9">
                                ※3年間の品質保証も付帯しています。
                            </div>
                        </div>

                        <div className="text-xs text-slate-500 space-y-1 pl-9 border-l-2 border-slate-100">
                            <p>発送目安: {productData.delivery}</p>
                            <p>特定商取引法に基づく表記は<a href={productData.legalLinks.tokusho} target="_blank" className="underline hover:text-sky-600">こちら</a></p>
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
                                        決済へ進む <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                            <p className="text-center text-xs text-slate-400 mt-3">
                                この先はBASE(Pay ID)の安全な決済画面へ移動します。<br />
                                クレジットカード、あと払い、キャリア決済などがご利用いただけます。
                            </p>
                        </div>
                    </div>

                    {/* Padding for mobile sticky footer */}
                    <div className="h-24 md:h-0"></div>

                </motion.div>
            </div>
        </main>
    );
}

export default function StudentBuyPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StudentBuyContent />
        </Suspense>
    );
}
