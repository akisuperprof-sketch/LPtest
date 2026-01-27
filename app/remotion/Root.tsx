import React from 'react';
import { Composition, staticFile } from 'remotion';
import { PromoVideo } from './PromoVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="StudentPromo"
                component={PromoVideo}
                durationInFrames={450} // 15 seconds
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    problemText: "花粉・ウイルスで\n集中力が途切れていませんか？",
                    solutionText: "勉強部屋専用\nAirFuture Study",
                    merit1: "0.01μmの微粒子も\n99.9%除去",
                    merit2: "図書館より静かな\n徹底した静音設計",
                    ctaText: "志望校合格へ",
                    bgImage: staticFile("hero-student.png"),
                    color: "#0ea5e9" // sky-500
                }}
            />
            <Composition
                id="PetPromo"
                component={PromoVideo}
                durationInFrames={450} // 15 seconds
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    problemText: "「部屋が獣臭い」\nそう思われていませんか？",
                    solutionText: "アンモニア99%除去\nAirFuture Pet",
                    merit1: "驚異の脱臭スピード\n来客も気づかない",
                    merit2: "獣医師も推奨する\n安全性試験クリア",
                    ctaText: "ニオイ、ゼロへ",
                    bgImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
                    color: "#f97316" // orange-500
                }}
            />
            {/* Additional compositions can be added here for other niches */}
        </>
    );
};
