import { Mail, Shield, CheckCircle } from 'lucide-react';

const productLinks = [
    { label: 'AirFuture Mini (受験生モデル)', href: '/buy/student' },
];

const supportLinks = [
    { label: 'よくある質問', href: '#faq' },
    { label: 'お問い合わせ', href: '/support' },
];

const companyLinks = [
    { label: '運営会社', href: '/legal/tokusho' },
];

// Define FooterColumn component (assuming it's a simple component that renders links)
function FooterColumn({ title, links }: { title: string, links: { label: string, href: string }[] }) {
    return (
        <div>
            <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>
            <ul className="space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-400 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-white text-2xl font-bold mb-4">AirFuture</h2>
                        <p className="text-sm leading-relaxed max-w-sm">
                            私たちは「空気の質」こそが、パフォーマンスを最大化する鍵であると信じています。
                            受験生、アスリート、クリエイターなど、挑戦するすべての人に、最高の環境を。
                        </p>
                    </div>
                    <FooterColumn title="製品" links={productLinks} />
                    <FooterColumn title="サポート" links={supportLinks} />
                    <FooterColumn title="企業情報" links={companyLinks} />
                </div>
                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                    <p>&copy; {new Date().getFullYear()} AirFuture Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="/legal/privacy" className="hover:text-white transition-colors">プライバシーポリシー</a>
                        <a href="/legal/terms" className="hover:text-white transition-colors">利用規約</a>
                        <a href="/legal/tokusho" className="hover:text-white transition-colors">特定商取引法に基づく表記</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
