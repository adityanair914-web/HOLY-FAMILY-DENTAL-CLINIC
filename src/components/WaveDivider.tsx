/**
 * WaveDivider — seamless SVG wave that transitions between two background colours.
 *
 * Props:
 *  topColor    — the bg colour of the section ABOVE  (e.g. '#FBF9F1')
 *  bottomColor — the bg colour of the section BELOW  (e.g. '#E8F0F1')
 *  flip        — mirror the wave vertically (default false)
 */
interface WaveDividerProps {
    topColor: string;
    bottomColor: string;
    flip?: boolean;
}

const WaveDivider = ({ topColor, bottomColor, flip = false }: WaveDividerProps) => (
    <div
        style={{ backgroundColor: bottomColor, lineHeight: 0 }}
        className="relative w-full overflow-hidden"
        aria-hidden="true"
    >
        <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                display: 'block',
                width: '100%',
                height: '60px',
                transform: flip ? 'scaleY(-1)' : undefined,
            }}
        >
            <path
                d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
                fill={topColor}
            />
        </svg>
    </div>
);

export default WaveDivider;
