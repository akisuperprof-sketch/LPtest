import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Img, interpolate, Sequence, staticFile } from 'remotion';
import React from 'react';

// Title component with animation
const Title: React.FC<{ title: string; color: string; delay?: number; fontSize?: string }> = ({ title, color, delay = 0, fontSize = '70px' }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const opacity = spring({
        frame: frame - delay,
        fps,
        from: 0,
        to: 1,
        config: { damping: 200 }
    });

    const translateY = spring({
        frame: frame - delay,
        fps,
        from: 50,
        to: 0,
        config: { damping: 15 }
    });

    return (
        <h1 style={{
            fontFamily: '"Noto Sans JP", sans-serif',
            fontWeight: 900,
            fontSize: fontSize,
            color: color,
            textAlign: 'center',
            lineHeight: 1.2,
            opacity,
            transform: `translateY(${translateY}px)`,
            textShadow: '0 4px 30px rgba(0,0,0,0.8)',
            marginBottom: '20px',
            whiteSpace: 'pre-wrap'
        }}>
            {title}
        </h1>
    );
};

// Scene 1: The Problem (Dramatic, Dark)
const Scene1: React.FC<{ problemText: string; bgImage: string }> = ({ problemText, bgImage }) => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [0, 150], [1.1, 1], { extrapolateRight: 'clamp' });

    return (
        <AbsoluteFill style={{ backgroundColor: '#000' }}>
            <AbsoluteFill style={{ transform: `scale(${scale})` }}>
                <Img src={bgImage} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(60%) brightness(0.6)' }} />
            </AbsoluteFill>
            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Title title={problemText} color="#ef4444" />
                <div style={{ fontSize: '30px', color: '#fff', marginTop: '20px', fontWeight: 'bold' }}>⚠️ 対策は万全ですか？</div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

// Scene 2: The Solution (Bright, Product Reveal)
const Scene2: React.FC<{ solutionText: string; productHero: string; color: string }> = ({ solutionText, productHero, color }) => {
    const frame = useCurrentFrame();
    const moveUp = spring({ frame, fps: 30, from: 100, to: 0 });
    const opacity = spring({ frame, fps: 30, from: 0, to: 1 });

    return (
        <AbsoluteFill style={{ backgroundColor: '#fff' }}>
            <AbsoluteFill style={{ alignItems: 'center', justifyContent: 'center', background: `linear-gradient(135deg, #f8fafc 0%, ${color}20 100%)` }}>
                <div style={{ position: 'absolute', top: '15%', width: '100%', textAlign: 'center', zIndex: 10 }}>
                    <Title title={solutionText} color="#0f172a" />
                </div>
                <Img
                    src={productHero}
                    style={{
                        height: '60%',
                        marginTop: '10%',
                        transform: `translateY(${moveUp}px)`,
                        opacity,
                        filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.3))'
                    }}
                />
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

// Scene 3 & 4: Merits (Features with Image Background)
const SceneMerit: React.FC<{ text: string; subText?: string; color: string; imageSrc: string }> = ({ text, subText, color, imageSrc }) => {
    const frame = useCurrentFrame();
    const scale = interpolate(frame, [0, 100], [1.05, 1], { extrapolateRight: 'clamp' });
    const textY = spring({ frame, fps: 30, from: 30, to: 0 });

    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            <AbsoluteFill style={{ transform: `scale(${scale})` }}>
                <Img src={imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} /> {/* Dark overlay */}
            </AbsoluteFill>

            <AbsoluteFill style={{
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px'
            }}>
                <div style={{ transform: `translateY(${textY}px)` }}>
                    <Title title={text} color="white" fontSize="60px" />
                    {subText && (
                        <div style={{
                            fontSize: '32px',
                            color: 'white',
                            marginTop: '30px',
                            fontWeight: 'bold',
                            padding: '15px 50px',
                            background: `${color}E6`, // High opacity brand color background
                            borderRadius: '30px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            textAlign: 'center'
                        }}>
                            {subText}
                        </div>
                    )}
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
}

// Scene 5: CTA (Clear Action)
const Scene5: React.FC<{ ctaText: string; color: string }> = ({ ctaText, color }) => {
    const frame = useCurrentFrame();
    const scale = spring({ frame, fps: 30, from: 0.9, to: 1, config: { stiffness: 100 } });

    return (
        <AbsoluteFill style={{ backgroundColor: color, alignItems: 'center', justifyContent: 'center' }}>
            <AbsoluteFill style={{
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.2) 100%)',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    padding: '70px 120px',
                    borderRadius: '50px',
                    boxShadow: '0 30px 80px rgba(0,0,0,0.4)',
                    transform: `scale(${scale})`,
                    textAlign: 'center'
                }}>
                    <h2 style={{ fontSize: '90px', fontWeight: 900, color: color, marginBottom: '20px', lineHeight: 1 }}>
                        {ctaText}
                    </h2>
                    <div style={{ fontSize: '40px', fontWeight: 'bold', color: '#334155' }}>
                        今すぐ詳細をチェック
                    </div>
                </div>
                <div style={{ position: 'absolute', bottom: '12%', color: 'white', fontSize: '36px', fontWeight: 'bold', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                    30日間全額返金保証実施中
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

export const PromoVideo: React.FC<{
    problemText: string;
    solutionText: string;
    merit1: string;
    merit2: string;
    merit1Image: string;
    merit2Image: string;
    ctaText: string;
    bgImage: string;
    color: string;
}> = ({ problemText, solutionText, merit1, merit2, merit1Image, merit2Image, ctaText, bgImage, color }) => {
    // Total duration 450 frames (15 sec)
    // Scene 1 (Problem): 0-90 (3s)
    // Scene 2 (Solution): 90-180 (3s)
    // Scene 3 (Merit 1): 180-270 (3s)
    // Scene 4 (Merit 2): 270-360 (3s)
    // Scene 5 (CTA): 360-450 (3s)

    const productImg = staticFile("product-angle-cutout.png");

    return (
        <AbsoluteFill>
            <Sequence from={0} durationInFrames={90}>
                <Scene1 problemText={problemText} bgImage={bgImage} />
            </Sequence>
            <Sequence from={90} durationInFrames={90}>
                <Scene2 solutionText={solutionText} productHero={productImg} color={color} />
            </Sequence>
            <Sequence from={180} durationInFrames={90}>
                <SceneMerit text={merit1} imageSrc={merit1Image} color={color} />
            </Sequence>
            <Sequence from={270} durationInFrames={90}>
                <SceneMerit text={merit2} imageSrc={merit2Image} color={color} />
            </Sequence>
            <Sequence from={360} durationInFrames={90}>
                <Scene5 ctaText={ctaText} color={color} />
            </Sequence>
        </AbsoluteFill>
    );
};
