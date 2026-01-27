'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { BedDouble, ConciergeBell, Cigarette, Star } from 'lucide-react';

export default function HotelLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-slate-800',
                    secondary: 'bg-amber-50',
                    text: 'text-amber-600',
                    border: 'border-amber-200',
                    bgHelper: '#b45309'
                },
                hero: {
                    badge: 'ホテル・宿泊施設向け',
                    title: <>その客室、<br />「前の宿泊客の気配」がしませんか？</>,
                    description: 'タバコ、香水、体臭。チェックアウト後わずか30分で、次のゲストを迎えられる「無臭空間」へリセットします。',
                    imageSrc: 'https://images.unsplash.com/photo-1590490360182-f33efe80a713?auto=format&fit=crop&w=800&q=80',
                    benefit1: '消臭作業の時短',
                    benefit2: '口コミ評価UP'
                },
                problem: {
                    title: '「部屋が臭い」は、致命的なクレームです',
                    desc: '清掃が行き届いていても、ニオイが残っているだけで清潔感はゼロになります。',
                    items: [
                        { title: '染み付いたタバコ臭', desc: '禁煙室への移行期、壁紙の張り替えなしでタバコ臭を除去したい。', icon: <Cigarette />, highlight: '強力消臭' },
                        { title: 'インバウンド対策', desc: '香水や食べ物のニオイなど、海外ゲスト特有の強い生活臭にも対応。', icon: <ConciergeBell />, highlight: '異文化対応' },
                        { title: '稼働率の低下', desc: '「臭いから部屋を変えて」の対応で、売り止めが発生していませんか？', icon: <BedDouble />, highlight: '収益改善' }
                    ]
                },
                product: {
                    title: 'プロ仕様の「空間洗浄機」。',
                    desc: 'オゾン脱臭機のような、使用後の換気待ち時間は不要。スタッフが作業中も安全に稼働させられます。',
                    features: [
                        { title: '短時間リセット', desc: 'ハイパワーモードなら、清掃中の30分でニオイレベルを激減させます。', icon: <Star /> },
                        { title: 'ラグジュアリーなデザイン', desc: '高級ホテルのスイートルームにも馴染む、洗練された外観。', icon: <BedDouble /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: '脱臭スピード実証', source: '自社実験', desc: 'タバコ臭（アセトアルデヒド）を20分で検知限界以下まで低減。', icon: <Cigarette /> },
                        { title: '導入ホテル様の声', source: 'シティホテル支配人', desc: '「ニオイのクレームがゼロになり、リピーターが増えました」', icon: <Star /> }
                    ],
                    message: '最高のおもてなしは、見えない空気に宿る。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: '客室に置きっぱなしでも大丈夫ですか？', a: 'はい、静音設計ですので、宿泊中のお客様の睡眠を妨げません。' },
                    { q: 'レンタルプランはありますか？', a: '法人様向けのリース・レンタルプランもご用意しております。詳細はお問い合わせください。' },
                ],
                buyLink: '/buy/checkout?model=hotel'
            }}
        />
    );
}
