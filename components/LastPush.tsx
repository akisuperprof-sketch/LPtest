import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function LastPush() {
    return (
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollReveal width="100%">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                        受験の日は、待ってくれません。<br />
                        <span className="text-sky-400">最高のコンディション</span>を、<br className="md:hidden" />今すぐ整えてあげてください。
                    </h2>
                    <p className="text-lg text-slate-300 mb-12 leading-relaxed max-w-2xl mx-auto">
                        「あの時、もっと環境を整えてあげていれば...」<br />
                        後悔先に立たず、です。<br /><br />
                        お試し期間が30日間あります。<br />
                        まずはお部屋に置いて、その「静寂」と「空気の違い」を体感してください。<br />
                        お子様の集中力という、一生の財産を守る投資です。
                    </p>
                </ScrollReveal>
            </div>
        </section>
    );
}
