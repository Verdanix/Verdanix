import '@/../css/Error.css';
import { usePage } from '@inertiajs/react';
import { Check, Loader, Play } from 'lucide-react';
import { useCallback, useState } from 'react';

type PageProps = {
    data: {
        title: string;
        status_code: number;
        description: string;
        show_route: string;
        brain_fuck: string;
        bf_output: string;
    };
};

const Error = () => {
    const locationPathName = usePage().url;
    const {
        title,
        status_code,
        description,
        show_route,
        brain_fuck,
        bf_output,
    } = usePage<PageProps>().props.data;

    const [running, setRunning] = useState(false);
    const [output, setOutput] = useState('');
    const [done, setDone] = useState(false);

    const handleRun = useCallback(() => {
        if (running || done) return;
        setRunning(true);
        let i = 0;
        const id = setInterval(() => {
            if (i < bf_output.length) {
                setOutput((prev) => prev + bf_output[i - 1]);
                i++;
            } else {
                clearInterval(id);
                setRunning(false);
                setDone(true);
            }
        }, 80);
    }, [running, done]);

    return (
        <>
            <div className="scanlines" />

            <div
                className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6"
                style={{ background: '#000' }}
            >
                {/* Glitch 404 */}
                <h1 className="glitch-404 mb-6 select-none text-6xl font-black leading-none tracking-tighter md:text-9xl">
                    {status_code}
                </h1>

                {/* Headline */}
                <p
                    className="mb-3 text-sm uppercase tracking-[0.2em] md:text-xl"
                    style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: 'hsl(var(--muted-foreground))',
                    }}
                >
                    {title} {show_route && '// '}
                    <span style={{ color: 'hsl(var(--primary))' }}>
                        {show_route && locationPathName}
                    </span>
                </p>

                {/* Description */}
                <p
                    className="mb-6 max-w-[600px] text-center text-sm leading-relaxed md:text-base"
                    style={{ color: 'hsl(var(--muted-foreground))' }}
                >
                    {description}
                </p>

                {/* Terminal Easter Egg */}
                <div className="terminal-box mb-8 w-full max-w-[700px] rounded-lg px-4 py-3 text-left">
                    <div className="mb-1 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span
                                className="h-2 w-2 rounded-full sm:h-4 sm:w-4"
                                style={{ background: '#ff5f57' }}
                            />
                            <span
                                className="h-2 w-2 rounded-full sm:h-4 sm:w-4"
                                style={{ background: '#febc2e' }}
                            />
                            <span
                                className="h-2 w-2 rounded-full sm:h-4 sm:w-4"
                                style={{ background: '#28c840' }}
                            />
                            <span
                                className="ml-2 text-[10px] uppercase tracking-widest sm:text-[14px]"
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
                            className="rounded text-[8px] font-bold uppercase tracking-widest transition-all disabled:opacity-30 sm:px-3 sm:py-1 sm:text-[14px]"
                            style={{
                                fontFamily: "'JetBrains Mono', monospace",
                                background: 'hsl(var(--primary) / 0.15)',
                                color: 'hsl(var(--primary))',
                                border: '1px solid hsl(var(--primary) / 0.3)',
                            }}
                        >
                            {running ? <Loader /> : done ? <Check /> : <Play />}
                        </button>
                    </div>
                    <code
                        className="block overflow-x-auto whitespace-pre-wrap break-all text-[11px] leading-relaxed md:text-sm"
                        style={{ color: 'hsl(var(--primary) / 0.7)' }}
                    >
                        <span
                            style={{
                                color: 'hsl(var(--muted-foreground) / 0.4)',
                            }}
                        >
                            ${' '}
                        </span>
                        {brain_fuck}
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
                    className="neon-btn inline-flex min-h-[44px] items-center rounded-md px-8 py-3 text-center text-sm font-semibold uppercase tracking-[0.2em] transition-colors"
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

export default Error;
