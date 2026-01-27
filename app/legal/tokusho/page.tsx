export default function Tokusho() {
    return (
        <div className="max-w-3xl mx-auto p-8 font-sans">
            <h1 className="text-2xl font-bold mb-8">特定商取引法に基づく表記</h1>
            <div className="space-y-6 text-sm text-slate-700">
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">販売業者</h2>
                    <p>AirFuture株式会社 (仮)</p>
                </section>
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">運営統括責任者</h2>
                    <p>代表取締役 〇〇 〇〇</p>
                </section>
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">所在地</h2>
                    <p>〒100-0000 東京都〇〇区〇〇 1-2-3</p>
                </section>
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">商品代金以外の必要料金</h2>
                    <p>消費税（商品代金に含む）。送料は全国無料です。</p>
                </section>
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">引き渡し時期</h2>
                    <p>ご注文から3営業日以内に発送いたします。</p>
                </section>
                <section>
                    <h2 className="font-bold border-b mb-2 pb-1">お支払い方法</h2>
                    <p>クレジットカード、銀行振込、キャリア決済、Amazon Pay、あと払い（Pay ID）</p>
                </section>
            </div>
        </div>
    );
}
