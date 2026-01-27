'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Utensils, ChefHat, Flame, Wind } from 'lucide-react';

export default function RestaurantLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-orange-700',
                    secondary: 'bg-orange-50',
                    text: 'text-orange-700',
                    border: 'border-orange-200',
                    bgHelper: '#c2410c'
                },
                hero: {
                    badge: '飲食・カフェ・厨房向け',
                    title: <>「美味しい香り」だけを残し、<br />油臭さは消し去る。</>,
                    description: 'お客様の服や髪につく油のニオイ、厨房からの排気臭。飲食店の「ニオイ問題」を解決し、選ばれるお店へ。',
                    imageSrc: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
                    benefit1: 'グリーストラップ臭対策',
                    benefit2: '近隣クレーム防止'
                },
                problem: {
                    title: '「味はいいけど、服が臭くなる」と言われていませんか？',
                    desc: '女性客やビジネスマンは、食事後のニオイ移りを何より気にします。',
                    items: [
                        { title: '染み付いた油煙臭', desc: '壁や天井に染み込んだ油のニオイは、掃除だけでは取れません。', icon: <Flame />, highlight: '頑固な汚れ' },
                        { title: '厨房の生ゴミ・排水', desc: '客席まで漂う腐敗臭や排水口のニオイは、食欲を減退させます。', icon: <Utensils />, highlight: '衛生管理' },
                        { title: '近隣からの苦情', desc: '排気ダクトからのニオイで、近隣トラブルになっていませんか？', icon: <Wind />, highlight: '環境対策' }
                    ]
                },
                product: {
                    title: '厨房のハードな環境にも対応。',
                    desc: '高濃度のイオンクラスターが、油分を含んだニオイ分子も強力に分解。衛生的な店内環境を維持します。',
                    features: [
                        { title: 'カビ・菌の増殖抑制', desc: '浮遊菌だけでなく、壁面のカビ菌も抑制し、衛生検査対策にも有効です。', icon: <ChefHat /> },
                        { title: 'コンパクトで邪魔にならない', desc: '限られたスペースでも設置可能なスリム設計。', icon: <Utensils /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: '硫化水素・メチルメルカプタン除去', source: '自社実験', desc: '生ゴミ臭や腐敗臭の元となる成分を99%分解。', icon: <Utensils /> },
                        { title: '導入店舗様の声', source: '焼肉店オーナー', desc: '「女性のお客様から『ここなら服が臭くならない』と好評です」', icon: <ChefHat /> }
                    ],
                    message: '空間の「味」も、料理の一部です。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: '油でベタベタになりませんか？', a: '本体は定期的な拭き掃除が必要ですが、フィルター交換は不要なのでランニングコストは抑えられます。' },
                    { q: '厨房と客席、どちらに置くべきですか？', a: 'AirFuture Proは広範囲をカバーできるため、客席の中央や厨房との境界付近への設置をお勧めします。' },
                ],
                buyLink: '/buy/pet?model=restaurant'
            }}
        />
    );
}
