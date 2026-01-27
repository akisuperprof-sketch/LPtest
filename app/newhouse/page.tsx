'use client';
import SpecialLPTemplate from '@/app/components/templates/SpecialLP';
import { Home, Hammer, ShieldAlert, Baby } from 'lucide-react';

export default function NewHouseLP() {
    return (
        <SpecialLPTemplate
            data={{
                colorTheme: {
                    primary: 'bg-amber-700',
                    secondary: 'bg-amber-50',
                    text: 'text-amber-800',
                    border: 'border-amber-200',
                    bgHelper: '#b45309'
                },
                hero: {
                    badge: '新築・リフォーム・VOC対策',
                    title: <>新居の「化学物質臭」、<br />そのままにしないで。</>,
                    description: 'せっかくのマイホームが、シックハウスの原因になることも。建材から出るVOC（揮発性有機化合物）を強力分解します。',
                    imageSrc: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80',
                    benefit1: 'シックハウス症候群対策',
                    benefit2: '小さなお子様のいる家庭に'
                },
                problem: {
                    title: '「新築のにおい」は、実は危険信号かもしれません',
                    desc: '接着剤や塗料に含まれるホルムアルデヒドなどが、数年にわたって揮発し続けることをご存知ですか？',
                    items: [
                        { title: '目がチカチカする', desc: '入居してから頭痛や目の痛みが止まらない。典型的なシックハウスの症状です。', icon: <ShieldAlert />, highlight: '健康被害' },
                        { title: '子供のアレルギー発症', desc: '化学物質への感受性は、大人よりも子供の方が高い言われています。', icon: <Baby />, highlight: '子供を守る' },
                        { title: '換気だけでは不十分', desc: '24時間換気システムだけでは、家具の裏などに溜まったVOCは排出できません。', icon: <Home />, highlight: '限界' }
                    ]
                },
                product: {
                    title: '化学物質を「吸着」ではなく「分解」する。',
                    desc: '活性炭フィルターはいずれ飽和しますが、イオンクラスター技術はVOC分子を化学的に分解し無害化し続けます。',
                    features: [
                        { title: 'ホルムアルデヒド分解', desc: 'シックハウスの主原因物質を、水と二酸化炭素に分解します。', icon: <Hammer /> },
                        { title: 'インテリアに馴染むデザイン', desc: '新築のリビングにも違和感なく溶け込む、シンプルでモダンな外観。', icon: <Home /> }
                    ]
                },
                evidence: {
                    items: [
                        { title: 'VOC除去性能試験', source: '日本建築学会基準', desc: '厚生労働省の指針値をクリアする除去性能を確認済み。', icon: <Home /> },
                        { title: '入居前クリーニング採用', source: '大手ハウスメーカー', desc: '引き渡し前の空気環境改善オプションとして正式採用されています。', icon: <ShieldAlert /> }
                    ],
                    message: '一生モノの家だから、空気も一生モノに。'
                },
                price: {
                    miniPrice: 198000,
                    proPrice: 327800,
                    dailyCost: 300
                },
                faq: [
                    { q: 'どのくらいの期間使えばいいですか？', a: '建材からの放散は数年続くと言われています。特に最初の1〜2年は24時間稼働をお勧めします。' },
                    { q: '木造住宅でも使えますか？', a: 'はい、もちろんです。木の香りは残しつつ、有害な化学物質臭だけを低減します。' },
                ],
                buyLink: '/buy/pet?model=newhouse'
            }}
        />
    );
}
