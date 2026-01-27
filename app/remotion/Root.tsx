import React from 'react';
import { Composition, staticFile } from 'remotion';
import { PromoVideo } from './PromoVideo';

export const RemotionRoot: React.FC = () => {
    return (
        <>
            <Composition
                id="StudentPromo"
                component={PromoVideo}
                durationInFrames={300} // 10 seconds
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    title: "受験生の集中力を守る",
                    subtitle: "花粉・ウイルスから勉強部屋をガード",
                    bgImage: staticFile("hero-student.png"),
                    color: "#0ea5e9" // sky-500
                }}
            />
            <Composition
                id="PetPromo"
                component={PromoVideo}
                durationInFrames={300}
                fps={30}
                width={1920}
                height={1080}
                defaultProps={{
                    title: "ペットの匂い、ゼロへ",
                    subtitle: "獣医師も認めた驚異の脱臭力",
                    bgImage: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b",
                    color: "#f97316" // orange-500
                }}
            />
            {/* Additional compositions can be added here for other niches */}
        </>
    );
};
