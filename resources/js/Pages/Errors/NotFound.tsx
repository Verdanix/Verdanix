import '@/../css/NotFound.css';
import { router, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';

const BRAINFUCK_CODE =
    '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';

const BF_OUTPUT = 'Hello World!\n';

const NotFound = () => {
    const locationPathName = usePage().url;
    const [glitching, setGlitching] = useState(false);
    const [running, setRunning] = useState(false);
    const [output, setOutput] = useState('');
    const [done, setDone] = useState(false);

    const handleRun = useCallback(() => {
        if (running || done) return;
        setRunning(true);
        let i = 0;
        const id = setInterval(() => {
            if (i < BF_OUTPUT.length) {
                setOutput((prev) => prev + BF_OUTPUT[i]);
                i++;
            } else {
                clearInterval(id);
                setRunning(false);
                setDone(true);
            }
        }, 80);
    }, [running, done]);

    useEffect(() => {
        console.error(
            '404 Error: User attempted to access non-existent route:',
            locationPathName,
        );
    }, [locationPathName]);

    const handleTerminalClick = useCallback(() => {
        if (glitching) return;
        setGlitching(true);
        setTimeout(() => {
            router.visit(route('landing'));
        }, 2000);
    }, [glitching]);

    return (
        <>
            <div className="scanlines" />

            {glitching && <MatrixOverlay />}

            <div
                className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6"
                style={{ background: '#000' }}
            >
                {/* Glitch 404 */}
                <h1 className="glitch-404 mb-6 select-none text-6xl font-black leading-none tracking-tighter md:text-9xl">
                    404
                </h1>

                {/* Headline */}
                <p
                    className="mb-3 text-sm uppercase tracking-[0.2em] md:text-xl"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'hsl(var(--muted-foreground))',
                    }}
                >
                    ROUTE_NOT_FOUND //{' '}
                    <span style={{ color: 'hsl(var(--primary))' }}>
                        {location.pathname}
                    </span>
                </p>

                {/* Description */}
                <p
                    className="mb-6 max-w-[600px] text-center text-sm leading-relaxed md:text-base"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                    The requested namespace could not be resolved. The route you
                    attempted to access does not exist within the current
                    deployment manifest.
                </p>

                {/* Error code */}
                <p
                    className="xs:block mb-8 hidden text-[10px] uppercase tracking-[0.3em] md:text-xs"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'hsl(var(--muted-foreground) / 0.5)',
                    }}
                >
                    ERROR_CODE: 0xDEADCODE
                </p>

                {/* Terminal Easter Egg */}
                <div className="terminal-box mb-8 w-full max-w-[700px] rounded-lg px-4 py-3 text-left">
                    <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ background: '#ff5f57' }}
                            />
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ background: '#febc2e' }}
                            />
                            <span
                                className="h-2 w-2 rounded-full"
                                style={{ background: '#28c840' }}
                            />
                            <span
                                className="ml-2 text-[10px] uppercase tracking-widest"
                                style={{
                                    color: 'hsl(var(--muted-foreground) / 0.5)',
                                }}
                            >
                                bf_interpreter.exe
                            </span>
                        </div>
                        <button
                            onClick={handleRun}
                            disabled={running || done}
                            className="rounded px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all disabled:opacity-30"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                background: 'hsl(var(--primary) / 0.15)',
                                color: 'hsl(var(--primary))',
                                border: '1px solid hsl(var(--primary) / 0.3)',
                            }}
                        >
                            {running ? 'Running…' : done ? 'Done' : '▶ Run'}
                        </button>
                    </div>
                    <code
                        className="block overflow-x-auto whitespace-pre-wrap break-all text-[11px] leading-relaxed md:text-xs"
                        style={{ color: 'hsl(var(--primary) / 0.7)' }}
                    >
                        <span
                            style={{
                                color: 'hsl(var(--muted-foreground) / 0.4)',
                            }}
                        >
                            ${' '}
                        </span>
                        {BRAINFUCK_CODE}
                    </code>
                    {(output || running) && (
                        <div
                            className="mt-2 border-t pt-2 text-xs font-bold md:text-sm"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                borderColor: 'hsl(var(--primary) / 0.1)',
                                color: 'hsl(var(--foreground))',
                            }}
                        >
                            <span
                                style={{
                                    color: 'hsl(var(--muted-foreground) / 0.4)',
                                }}
                            >
                                →{' '}
                            </span>
                            {output}
                            {running && (
                                <span
                                    className="ml-[1px] inline-block h-[14px] w-[2px] animate-pulse align-middle"
                                    style={{
                                        background: 'hsl(var(--primary))',
                                    }}
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* CTA Button */}
                <a
                    href="/"
                    className="neon-btn inline-flex min-h-[44px] items-center rounded-md px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition-colors"
                    style={{
                        background: 'hsl(var(--primary))',
                        color: 'hsl(var(--primary-foreground))',
                        fontFamily: "'JetBrains Mono', monospace",
                    }}
                >
                    RE-ROUTE TO MAINFRAME
                </a>
            </div>
        </>
    );
};

/* ── Matrix rain overlay ────────────────────────────────── */
function MatrixOverlay() {
    const canvasRef = useCallback((canvas: HTMLCanvasElement | null) => {
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const W = window.innerWidth;
        const H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.scale(dpr, dpr);

        const fontSize = 14;
        const cols = Math.floor(W / fontSize);
        const drops = new Array(cols).fill(1);
        const chars = '01アイウエオカキクケコサシスセソ';

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = '#0fa';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const text = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > H && Math.random() > 0.975)
                    drops[i] = 0;
                drops[i]++;
            }
        };

        const id = setInterval(draw, 33);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="matrix-overlay">
            <canvas ref={canvasRef} />
        </div>
    );
}

export default NotFound;
