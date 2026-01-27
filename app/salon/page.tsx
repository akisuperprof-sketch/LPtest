'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Scissors, Sparkles, Gem, Flower } from 'lucide-react';

export default function SalonLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-rose-400',
                    secondary: 'bg-rose-50',
                    text: 'text-rose-500',
                    border: 'border-rose-200',
                    bgHelper: '#fb7185'
                },
                hero: {
                    badge: '美容室・ネイルサロン向け',
                    title: <>美しさを作る空間に、<br />薬剤のニオイは要らない。</>,
                    description: 'パーマ液、カラー剤、アクリルリキッド。特有の薬剤臭を元から分解し、サロンを真のリラクゼーション空間へ。',
                    imageSrc: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=800&q=80',
                    benefit1: '長時間滞在も快適に',
                    benefit2: 'スタッフの健康対策'
                },
                problem: {
                    title: 'ニオイに敏感なお客様は、無言で去っていきます',
                    desc: '「美容室のニオイが苦手」というお客様は意外と多いもの。香りのおもてなしにも限界があります。',
                    items: [
                        { title: '特有のアンモニア臭', desc: 'パーマやカラー剤に含まれるアンモニア成分は、不快感の大きな原因です。', icon: <Scissors />, highlight: '薬剤臭' },
                        { title: 'ネイルサロンの揮発臭', desc: 'アセトン等の有機溶剤のニオイは、長時間吸い続けるスタッフの健康も害します。', icon: <Gem />, highlight: '安全性' },
                        { title: '店内の空気の淀み', desc: '長時間滞在する場所だからこそ、空気の鮮度が居心地に直結します。', icon: <Sparkles />, highlight: '快適性' }
                    ]
                },
                product: {
                    title: '「香り」を楽しむための、ベース作り。',
                    desc: '悪臭を消すことで、アロマやシャンプーの良い香りがより引き立ちます。AirFutureは「無臭」というキャンバスを作ります。',
                    features: [
                        { title: 'デザインへのこだわり', desc: '洗練されたサロンのインテリアを邪魔しない、ミニマルで美しいデザイン。', icon: <Flower /> },
                        { title: '薬剤成分の分解', desc: 'ニオイをごまかすのではなく、化学物質そのものを分解・除去します。', icon: <Scissors /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: 'アンモニア除去性能', source: '北里環境科学センター', desc: 'パーマ液の主成分であるアンモニアを99.9%除去。', icon: <Scissors /> },
                        { title: 'VOC除去性能', source: '第三者機関実証済', desc: 'ネイル溶剤に含まれる揮発性物質もしっかり低減。', icon: <Gem /> }
                    ],
                    message: '美意識の高いお客様に選ばれるサロンへ。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: 'アロマの香りまで消えてしまいませんか？', a: '人工的な強い化学物質臭を優先的に分解しますが、自然なアロマの香りは比較的残りやすい傾向にあります。' },
                    { q: 'どのくらいの広さまで対応していますか？', a: 'Proモデルなら〜30畳まで対応。広さに応じて複数台の設置をお勧めします。' },
                ],
                buyLink: '/buy/checkout?model=salon'
            }}
        />
    );
}
