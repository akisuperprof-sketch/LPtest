'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Heart, Activity, ShieldCheck, UserCheck } from 'lucide-react';

export default function ElderlyLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-emerald-600',
                    secondary: 'bg-emerald-50',
                    text: 'text-emerald-600',
                    border: 'border-emerald-200',
                    bgHelper: '#059669'
                },
                hero: {
                    badge: '介護・在宅ケア専用モデル',
                    title: <>介護のニオイ悩み、<br />あきらめていませんか？</>,
                    description: '排泄臭や加齢臭を、香りでごまかさず「分解」消臭。大切なご家族との時間を、もっと穏やかに、快適に。',
                    imageSrc: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80',
                    benefit1: '医療施設の導入実績多数',
                    benefit2: '24時間つけっぱなしOK'
                },
                problem: {
                    title: 'ニオイストレスは、介護の質を下げてしまいます',
                    desc: '「部屋に入った瞬間のニオイが気になる」「換気しても消えない」。その悩み、空気清浄機を変えれば解決できます。',
                    items: [
                        { title: '染み付いた排泄臭', desc: '衣服やカーテンに染み付いたニオイは、通常の換気では取れません。', icon: <Activity />, highlight: '強力分解' },
                        { title: '感染症への不安', desc: '免疫力が低下した高齢者にとって、空気中のウイルスは命に関わります。', icon: <ShieldCheck />, highlight: '徹底除菌' },
                        { title: '訪問客への気遣い', desc: 'ヘルパーさんや親戚が来るたびに、ニオイのことで気を揉んでいませんか？', icon: <UserCheck />, highlight: '精神的ケア' }
                    ]
                },
                product: {
                    title: '施設レベルの空気清浄を、ご家庭で。',
                    desc: '全国の老人ホームや病院で採用されている業務用の除菌脱臭技術を、家庭用サイズに凝縮しました。',
                    features: [
                        { title: 'メンテナンスの手間なし', desc: 'フィルター交換不要。忙しい介護の合間に手間を取らせません。', icon: <Heart /> },
                        { title: '静かで穏やかな風', desc: '就寝中も気にならない静音設計。風当たりも柔らかく、お年寄りに優しい設計です。', icon: <Activity /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: 'アンモニア99%除去', source: '北里環境科学センター', desc: '介護特有のアンモニア臭を強力に分解・除去することを確認。', icon: <Activity /> },
                        { title: '浮遊ウイルス99.9%抑制', source: '日本食品分析センター', desc: 'インフルエンザウイルス等の感染価を著しく低減させます。', icon: <ShieldCheck /> }
                    ],
                    message: '守りたいのは、健康と尊厳です。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: '一日中つけっぱなしでも電気代は大丈夫？', a: 'はい、省エネ設計のため、24時間稼働でも月額100〜200円程度です。' },
                    { q: '操作は難しくないですか？', a: 'ボタン一つで自動運転を開始します。複雑な設定は一切不要です。' },
                ],
                buyLink: '/buy/pet?model=elderly' // Fallback to pet buy page for now or generic
            }}
        />
    );
}
