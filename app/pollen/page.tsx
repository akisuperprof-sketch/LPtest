'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { CloudRain, Sun, Leaf, Wind } from 'lucide-react';

export default function PollenLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-sky-500',
                    secondary: 'bg-sky-50',
                    text: 'text-sky-600',
                    border: 'border-sky-200',
                    bgHelper: '#0ea5e9'
                },
                hero: {
                    badge: '重度花粉症・アレルギー対策',
                    title: <>家の中だけは、<br />「無菌・無花粉」の聖域に。</>,
                    description: 'モーニングアタックやくしゃみで目覚める朝にサヨナラを。微細な粒子を0.01μmレベルで吸着・分解します。',
                    imageSrc: 'https://images.unsplash.com/photo-1519710889408-a67e1c7e0452?auto=format&fit=crop&w=800&q=80',
                    benefit1: 'PM2.5 / 黄砂も対応',
                    benefit2: '薬に頼りたくない方に'
                },
                problem: {
                    title: '「ただいま」と一緒に、花粉も帰宅しています',
                    desc: '衣服や髪についた花粉は、室内で拡散し続けます。玄関とリビングのダブル対策が必要です。',
                    items: [
                        { title: 'モーニングアタック', desc: '寝起きに鼻水が止まらない。睡眠中の吸い込みが原因です。', icon: <Sun />, highlight: '睡眠改善' },
                        { title: '洗濯物の部屋干し臭', desc: '花粉を避けて部屋干しすると、今度は生乾き臭が...。', icon: <CloudRain />, highlight: '消臭' },
                        { title: '目に見えないカビ胞子', desc: 'アレルギーの原因は花粉だけではありません。カビも同時に抑制。', icon: <Leaf />, highlight: '徹底除去' }
                    ]
                },
                product: {
                    title: '空気を「洗う」という新発想。',
                    desc: 'ただ吸い込むだけではありません。イオンが部屋中に飛び出し、浮遊しているアレル物質を包み込んで無力化します。',
                    features: [
                        { title: 'スピード清浄', desc: '帰宅後10分で、浮遊花粉の99%を除去するハイパワーモード搭載。', icon: <Wind /> },
                        { title: '静電気抑制', desc: 'イオンの力で壁やカーテンへの花粉付着を防止します。', icon: <Leaf /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: 'スギ花粉アレルゲン低減', source: '大学研究機関', desc: 'スギ花粉アレルゲンに対して、99%以上の低減効果を確認。', icon: <Leaf /> },
                        { title: 'ダニの死骸・フン抑制', source: '環境アレルギー研究所', desc: 'ハウスダストの主原因もしっかり無力化します。', icon: <Wind /> }
                    ],
                    message: '深呼吸できる家をつくろう。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: 'PM2.5にも効果はありますか？', a: 'はい。花粉より微細な粒子もしっかりキャッチ・分解します。' },
                    { q: '寝室に置いても音は気になりませんか？', a: '静音モード時は28dB以下。時計の秒針より静かです。' },
                ],
                buyLink: '/buy/pet?model=pollen'
            }}
        />
    );
}
