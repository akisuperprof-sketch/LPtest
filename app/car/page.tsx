'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Car, Cigarette, Warehouse, Battery } from 'lucide-react';

export default function CarLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-zinc-800',
                    secondary: 'bg-zinc-100',
                    text: 'text-zinc-700',
                    border: 'border-zinc-200',
                    bgHelper: '#3f3f46'
                },
                hero: {
                    badge: '車載・移動空間向け',
                    title: <>移動時間を、<br />最高の「リラックスタイム」に。</>,
                    description: '車内のタバコ臭、エアコンのカビ臭、食べ物のニオイ。密閉空間だからこそ、最高の空気を。ポータブル電源でも稼働可能。',
                    imageSrc: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
                    benefit1: '車酔い対策',
                    benefit2: 'シガーソケット給電'
                },
                problem: {
                    title: '「愛車のニオイ」気になっていませんか？',
                    desc: '車内は雑菌の温床になりやすく、ニオイがこもりやすい過酷な環境です。',
                    items: [
                        { title: 'エアコンからの悪臭', desc: '内部に発生したカビ菌が、風に乗って車内に撒き散らされています。', icon: <Car />, highlight: 'カビ臭' },
                        { title: 'シートに染み付くタバコ臭', desc: '窓を開けても取れないニオイは、同乗者にとって大きなストレスです。', icon: <Cigarette />, highlight: '残留臭' },
                        { title: 'ペットとのドライブ', desc: '狭い車内では、ペットのニオイも強烈に感じてしまいます。', icon: <Warehouse />, highlight: 'ペット臭' }
                    ]
                },
                product: {
                    title: '車載用空気清浄機の決定版。',
                    desc: 'ドリンクホルダーサイズの頼りない清浄機とは違います。家庭用の本格的な脱臭力を、そのまま車内へ持ち込めます。',
                    features: [
                        { title: '圧倒的な脱臭スピード', desc: '乗車前のわずかな時間で、車内の空気を入れ替えたようにリセット。', icon: <Car /> },
                        { title: 'USB給電 / シガーソケット対応', desc: 'AirFuture Miniなら、ポータブル電源や車載電源でどこでも使用可能（※要変換アダプタ）。', icon: <Battery /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: '密閉空間での除菌効果', source: '自社実験', desc: '車内を想定した空間で、付着菌の減少を確認。', icon: <Car /> },
                        { title: 'タクシー会社採用', source: '導入実績', desc: '「お客様から『新車のにおいがする』と言われるようになった」', icon: <Car /> }
                    ],
                    message: 'ドライブの質は、空気で変わる。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: '走行中の振動は大丈夫ですか？', a: 'はい。内部構造は耐振性を考慮して設計されていますが、転倒防止のため座席等の安定した場所に固定してください。' },
                    { q: '夏場の高温になる車内に置いたままでも平気ですか？', a: '安全のため、炎天下の駐車時などは車内から持ち出すことを推奨しております。' },
                ],
                buyLink: '/buy/pet?model=car'
            }}
        />
    );
}
