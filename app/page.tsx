import Link from 'next/link';
import { Layout, ShoppingCart, Shield, MessageCircle, ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function Sitemap() {
  const lps = [
    { title: "受験生応援モデル", href: "/student", status: "Complete", desc: "「花粉症・集中力」をテーマにした受験生・保護者向けLP。" },
    { title: "ペット臭対策モデル", href: "/petnioi", status: "Complete", desc: "「ニオイ・抜け毛」に特化。愛犬家・愛猫家向けの脱臭LP。" },
    { title: "介護・高齢者向け", href: "/elderly", status: "Complete", desc: "加齢臭・排泄臭の課題を解決する、介護施設・在宅介護向けLP。" },
    { title: "オフィス・クリニック", href: "/office", status: "Complete", desc: "クリーンな共用空間をアピール。法人・医療機関向けLP。" },
    { title: "花粉症・アレルギー対策", href: "/pollen", status: "Complete", desc: "季節限定の強力訴求。重度花粉症に悩む一般層向けLP。" },
    { title: "新築・VOC対策", href: "/newhouse", status: "Complete", desc: "シックハウス症候群を防ぐ。新築・リノベ検討層向けLP。" },
    { title: "ホテル・民泊向け", href: "/hotel", status: "Complete", desc: "客室の無臭化で顧客満足度向上。宿泊施設オーナー向けLP。" },
    { title: "飲食・カフェ向け", href: "/restaurant", status: "Complete", desc: "調理臭・タバコ臭を強力除去。清潔感を重視する飲食店向けLP。" },
    { title: "美容室・サロン向け", href: "/salon", status: "Complete", desc: "パーマ液等の薬剤臭を分解。美意識の高い空間作り向けLP。" },
    { title: "車載・移動空間向け", href: "/car", status: "Complete", desc: "狭い空間こそ、イオンの力を。タクシー・自家用車向けLP。" },
  ];

  const corePages = [
    { title: "サポート・お問い合わせ", href: "/support", icon: <MessageCircle size={18} /> },
    { title: "プライバシーポリシー", href: "/legal/privacy", icon: <Shield size={18} /> },
    { title: "特定商取引法に基づく表記", href: "/legal/tokusho", icon: <Shield size={18} /> },
    { title: "利用規約", href: "/legal/terms", icon: <Shield size={18} /> },
  ];

  const buyPages = [
    { title: "受験生モデル購入", href: "/buy/student", tag: "Student" },
    { title: "ペットモデル購入", href: "/buy/pet", tag: "Pet" },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-sky-600 p-2 rounded-lg text-white">
              <Layout size={24} />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">AirFuture LP Sitemap</h1>
          </div>
          <p className="text-slate-500">
            全10種のニッチ別LPと、共通ページの構造を可視化しています。
          </p>
        </header>

        {/* LP Section */}
        <section className="mb-16">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="w-1.5 h-6 bg-sky-500 rounded-full"></span>
            ニッチ別ランディングページ (LP)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lps.map((lp, i) => (
              <Link
                key={i}
                href={lp.href}
                className={`group block p-6 rounded-2xl border transition-all ${lp.href === '#'
                  ? 'bg-slate-50 border-slate-200 opacity-60 cursor-not-allowed'
                  : 'bg-white border-slate-200 hover:border-sky-500 hover:shadow-xl hover:-translate-y-1'
                  }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg group-hover:text-sky-600 transition-colors">{lp.title}</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${lp.status === "Complete" ? "bg-emerald-100 text-emerald-700" :
                    lp.status === "In Progress" ? "bg-yellow-100 text-yellow-700" :
                      "bg-slate-200 text-slate-500"
                    }`}>
                    {lp.status}
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{lp.desc}</p>
                {lp.href !== '#' && (
                  <div className="flex items-center gap-1 text-sky-600 text-xs font-bold">
                    ページを表示する <ArrowRight size={14} />
                  </div>
                )}
              </Link>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Buy Flow */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-purple-500 rounded-full"></span>
              購入・決済フロー
            </h2>
            <div className="space-y-4">
              {buyPages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-purple-500 hover:shadow-md transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                      <ShoppingCart size={20} />
                    </div>
                    <div>
                      <span className="block font-bold group-hover:text-purple-600">{page.title}</span>
                      <span className="text-xs text-slate-400">Route: {page.href}</span>
                    </div>
                  </div>
                  <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">{page.tag}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Legal/Support */}
          <section>
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-slate-400 rounded-full"></span>
              管理・法務・サポート
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePages.map((page, i) => (
                <Link
                  key={i}
                  href={page.href}
                  className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-800 transition-all flex items-center gap-3"
                >
                  <div className="text-slate-400">{page.icon}</div>
                  <span className="text-sm font-medium">{page.title}</span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Simple Flowchart representation */}
        <section className="mt-20 pt-16 border-t border-slate-200">
          <h2 className="text-xl font-bold mb-10 text-center">LP 運用・集客フロー図</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Step 1: Ads */}
              <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center">
                <div className="bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold italic">1</div>
                <h3 className="font-bold mb-2">Web広告 / 検索</h3>
                <p className="text-xs text-slate-500">Google Ads / Meta Ads<br />「受験生 花粉症」「ペット 臭い 対策」等のKW検索</p>
              </div>

              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight size={40} />
              </div>

              {/* Step 2: LP */}
              <div className="bg-sky-50 border-2 border-sky-200 rounded-2xl p-6 text-center ring-4 ring-sky-50">
                <div className="bg-sky-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold italic">2</div>
                <h3 className="font-bold mb-2 text-sky-900">ニッチ別LP</h3>
                <p className="text-xs text-sky-700">各ターゲットに刺さる最適化<br />信頼・ベネフィットの提示</p>
              </div>

              <div className="hidden md:flex justify-center text-slate-300">
                <ArrowRight size={40} />
              </div>

              {/* Step 3: Purchase */}
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 text-center">
                <div className="bg-emerald-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold italic">3</div>
                <h3 className="font-bold mb-2 text-emerald-900">購入・決済</h3>
                <p className="text-xs text-emerald-700">クーポン適用・決済完了<br />Customer Success</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-20 text-center text-slate-400 text-xs border-t border-slate-200 pt-8">
          AirFuture Ecosystem &copy; 2026 | Developed for Maximum CV
        </footer>
      </div>
    </main>
  );
}
