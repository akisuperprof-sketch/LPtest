import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, Img } from 'remotion';

export const PromoVideo: React.FC<{
    title: string;
    subtitle: string;
    bgImage: string;
    color: string;
}> = ({ title, subtitle, bgImage, color }) => {
    const frame = useCurrentFrame();
    const { fps } = useVideoConfig();

    const scale = spring({
        frame,
        fps,
        from: 1,
        to: 1.05,
        durationInFrames: 300,
    });

    const textY = spring({
        frame: frame - 10,
        fps,
        from: 50,
        to: 0,
    });

    const opacity = spring({
        frame: frame - 10,
        fps,
        from: 0,
        to: 1,
    });

    return (
        <AbsoluteFill style={{ backgroundColor: 'black' }}>
            <AbsoluteFill style={{ transform: `scale(${scale})` }}>
                <Img src={bgImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.4))` }} />
            </AbsoluteFill>

            <AbsoluteFill style={{ justifyContent: 'center', paddingLeft: '100px', alignItems: 'flex-start' }}>
                <h1 style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    fontSize: '80px',
                    color: 'white',
                    transform: `translateY(${textY}px)`,
                    opacity,
                    marginBottom: '20px',
                    textShadow: '0 4px 20px rgba(0,0,0,0.5)'
                }}>
                    {title}
                </h1>
                <h2 style={{
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    fontSize: '40px',
                    color,
                    transform: `translateY(${textY}px)`,
                    opacity,
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(10px)',
                    padding: '10px 30px',
                    borderRadius: '50px'
                }}>
                    {subtitle}
                </h2>
            </AbsoluteFill>
        </AbsoluteFill>
    );
};
