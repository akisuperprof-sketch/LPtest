import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig, Sequence } from 'remotion';
import React from 'react';

// --- Shared Components ---

const TitleText = ({ text, delay, style = {} }: { text: string, delay: number, style?: React.CSSProperties }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const enter = spring({
        frame: frame - delay,
        fps,
        config: { damping: 10, stiffness: 100 }
    });

    const opacity = interpolate(enter, [0, 1], [0, 1]);
    const translateY = interpolate(enter, [0, 1], [20, 0]);

    return (
        <div style={{
            opacity,
            transform: `translateY(${translateY}px)`,
            ...style
        }}>
            {text}
        </div>
    );
};

// --- 1. Recruit Motion (Vertical) ---
export const RecruitVideo = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    const scale = interpolate(frame, [0, durationInFrames], [1, 1.1]);

    // Unsplash: Energetic team working
    const bgImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1080&auto=format&fit=crop";

    return (
        <AbsoluteFill style={{ backgroundColor: '#111' }}>
            <AbsoluteFill style={{ overflow: 'hidden' }}>
                <Img src={bgImage} style={{
                    transform: `scale(${scale})`,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.6
                }} />
            </AbsoluteFill>

            <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center', padding: 40 }}>
                <TitleText
                    text="WE ARE HIRING"
                    delay={10}
                    style={{
                        fontSize: 80,
                        fontWeight: 900,
                        color: '#fff',
                        fontFamily: 'Inter, sans-serif',
                        textAlign: 'center',
                        lineHeight: 1,
                        marginBottom: 20
                    }}
                />

                <TitleText
                    text="未経験歓迎 / 月給25万〜"
                    delay={25}
                    style={{
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#fbbf24',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        padding: '10px 30px',
                        borderRadius: 10
                    }}
                />

                <Sequence from={60}>
                    <TitleText
                        text="APPLY NOW ->"
                        delay={0}
                        style={{
                            marginTop: 100,
                            fontSize: 50,
                            fontWeight: 800,
                            color: '#000',
                            backgroundColor: '#fff',
                            padding: '20px 60px',
                            borderRadius: 50
                        }}
                    />
                </Sequence>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

// --- 3. Menu Motion (Vertical) ---
export const MenuVideo = () => {
    const frame = useCurrentFrame();

    // Unsplash: Delicious Burger
    const bgImage = "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1080&auto=format&fit=crop";

    // Steam effect (simple opacity oscillation and upward movement)
    const steamY = interpolate(frame % 90, [0, 90], [0, -100]);
    const steamOpacity = interpolate(frame % 90, [0, 20, 90], [0, 0.6, 0]);

    return (
        <AbsoluteFill style={{ backgroundColor: '#000' }}>
            <Img src={bgImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* Simple Steam / Sizzle Overlay */}
            <div style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: `translate(-50%, ${steamY}px)`,
                opacity: steamOpacity,
                width: 200,
                height: 200,
                background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                filter: 'blur(20px)',
                pointerEvents: 'none'
            }} />

            <AbsoluteFill style={{ justifyContent: 'flex-end', padding: 40, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)' }}>
                <TitleText
                    text="Premium Cheese Burger"
                    delay={10}
                    style={{ fontSize: 60, fontWeight: 800, color: '#fff', marginBottom: 10 }}
                />
                <TitleText
                    text="¥1,200"
                    delay={20}
                    style={{ fontSize: 90, fontWeight: 900, color: '#f59e0b' }}
                />
                <div style={{
                    position: 'absolute', top: 40, right: 40,
                    backgroundColor: '#ef4444', color: 'white', fontWeight: 'bold', padding: 20, borderRadius: '50%',
                    width: 120, height: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                    transform: `rotate(15deg) scale(${interpolate(spring({ frame, fps: 30 }), [0, 1], [0, 1])})`
                }}>
                    Limited<br />Time
                </div>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};

// --- 4. Real Estate "MySoku" (Horizontal) ---
export const RealEstateVideo = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // Slide transition
    const slide = interpolate(frame, [0, 20], [-50, 0], { extrapolateRight: 'clamp' });

    // Background: Bright Living Room
    const bgImage = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1920&auto=format&fit=crop";

    return (
        <AbsoluteFill style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
            {/* Left: Info Panel (MySoku Style) */}
            <div style={{
                width: '35%', height: '100%', backgroundColor: '#f8fafc', padding: 40, borderRight: '5px solid #e2e8f0',
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                transform: `translateX(${slide}px)`
            }}>
                <div style={{ backgroundColor: '#0f172a', color: 'white', padding: '5px 15px', alignSelf: 'flex-start', marginBottom: 20, fontSize: 24 }}>
                    New Arrival
                </div>
                <h1 style={{ fontSize: 60, fontWeight: 900, color: '#334155', lineHeight: 1.1, marginBottom: 20 }}>
                    Grand Maison<br />Shibuya
                </h1>
                <div style={{ fontSize: 32, fontWeight: 700, color: '#64748b', marginBottom: 40 }}>
                    1LDK / 45.2㎡
                </div>
                <div style={{ fontSize: 80, fontWeight: 900, color: '#0ea5e9' }}>
                    ¥148,000
                </div>
                <div style={{ marginTop: 20, fontSize: 24, padding: 20, border: '2px solid #0ea5e9', color: '#0ea5e9', textAlign: 'center' }}>
                    駅徒歩 5分
                </div>
            </div>

            {/* Right: Image */}
            <div style={{ width: '65%', height: '100%', overflow: 'hidden', position: 'relative' }}>
                <Img src={bgImage} style={{
                    width: '100%', height: '100%', objectFit: 'cover',
                    transform: `scale(${interpolate(frame, [0, durationInFrames], [1, 1.1])})`
                }} />
                {/* Overlay Text */}
                <div style={{ position: 'absolute', bottom: 30, right: 30, backgroundColor: 'rgba(255,255,255,0.9)', padding: '10px 30px', fontSize: 24, fontWeight: 'bold' }}>
                    Sunlight Living Area
                </div>
            </div>
        </AbsoluteFill>
    );
};

// --- 5. Local News (Horizontal) ---
export const LocalNewsVideo = () => {
    const frame = useCurrentFrame();

    // Background: Community Center / Park
    const bgImage = "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1920&auto=format&fit=crop";

    return (
        <AbsoluteFill>
            <Img src={bgImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

            {/* News Ticker Overlay */}
            <AbsoluteFill style={{ justifyContent: 'flex-end' }}>
                <div style={{
                    height: 180, width: '100%', background: 'linear-gradient(to right, #1e3a8a, #3b82f6)',
                    display: 'flex', flexDirection: 'row', alignItems: 'center', padding: '0 40px',
                    color: 'white', boxShadow: '0 -10px 20px rgba(0,0,0,0.3)',
                    transform: `translateY(${interpolate(frame, [0, 15], [100, 0], { extrapolateRight: 'clamp' })}%)`
                }}>
                    <div style={{
                        backgroundColor: '#ef4444', padding: '10px 20px', fontSize: 24, fontWeight: 'bold', borderRadius: 5, marginRight: 30
                    }}>
                        NEWS
                    </div>
                    <div>
                        <div style={{ fontSize: 42, fontWeight: 'bold', marginBottom: 10 }}>
                            春の市民ふれあい祭りが開催決定！
                        </div>
                        <div style={{ fontSize: 24, opacity: 0.9 }}>
                            今週末 4/5(土) 10:00〜 中央公園にて / 入場無料・雨天決行
                        </div>
                    </div>
                    <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                        <div style={{ fontSize: 20 }}>広報しぶや</div>
                        <div style={{ fontSize: 60, fontWeight: 900, fontFamily: 'monospace' }}>18:00</div>
                    </div>
                </div>
            </AbsoluteFill>

            {/* Corner Logo */}
            <div style={{ position: 'absolute', top: 40, right: 40, width: 100, height: 100, backgroundColor: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#1e3a8a', boxShadow: '0 5px 15px rgba(0,0,0,0.2)' }}>
                SHIBUYA<br />CITY
            </div>
        </AbsoluteFill>
    );
};
