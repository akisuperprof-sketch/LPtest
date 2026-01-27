'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Briefcase, Users2, Building2, Laptop } from 'lucide-react';

export default function OfficeLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-blue-800',
                    secondary: 'bg-blue-50',
                    text: 'text-blue-800',
                    border: 'border-blue-200',
                    bgHelper: '#1e40af'
                },
                hero: {
                    badge: '法人・オフィス向けモデル',
                    title: <>「選ばれるオフィス」の<br />新基準は、空気の質。</>,
                    description: '社員の健康管理と生産性向上に。ウイルス感染リスクを低減し、安心して働けるクリーンな執務空間を実現します。',
                    imageSrc: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
                    benefit1: '福利厚生として導入急増中',
                    benefit2: '経費計上可能'
                },
                problem: {
                    title: 'オフィスの空気環境は、経営課題です',
                    desc: '不特定多数が出入りする会議室や、密になりがちな執務エリア。見えないリスクが潜んでいます。',
                    items: [
                        { title: 'クラスター発生リスク', desc: '1人の発症が部署全体の停止につながるリスクを最小限に。', icon: <Users2 />, highlight: 'BCP対策' },
                        { title: 'CO2と眠気', desc: '換気不足はCO2濃度上昇を招き、集中力低下の原因になります。', icon: <Laptop />, highlight: '生産性' },
                        { title: '来客時の印象', desc: '会議室のこもったニオイは、企業イメージを損なう要因です。', icon: <Building2 />, highlight: '企業価値' }
                    ]
                },
                product: {
                    title: 'ハイレベルな衛生管理を、置くだけで。',
                    desc: '大規模なダクト工事は不要。コンセントに差すだけで、手術室レベルの除菌空間を作り出します。',
                    features: [
                        { title: '最大30畳まで1台でカバー', desc: '広範囲にイオンが行き渡り、空間全体を浄化します。', icon: <Briefcase /> },
                        { title: 'メンテナンスフリー', desc: '総務担当者の手間を増やしません。フィルター交換不要で管理が楽。', icon: <Building2 /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: '浮遊菌除去率 95%以上', source: '第三者機関実証済', desc: 'オフィス環境を模した空間での実験で、高い除菌効果を証明。', icon: <Users2 /> },
                        { title: '消臭スピード 3倍', source: '自社比較テスト', desc: '一般的な活性炭フィルターと比較し、圧倒的な速さでニオイを分解。', icon: <Building2 /> }
                    ],
                    message: '社員を守ることは、会社を守ること。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: '法人名義での領収書発行は可能ですか？', a: 'はい、可能です。購入画面で宛名をご指定いただけます。' },
                    { q: '複数台導入の相談はできますか？', a: 'はい、ボリュームディスカウントもございます。お問い合わせフォームよりご連絡ください。' },
                ],
                buyLink: '/buy/pet?model=office'
            }}
        />
    );
}
