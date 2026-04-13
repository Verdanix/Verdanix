import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';

const HeroSection = () => (
    <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden"
    >
        {/* Grid background */}
        <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
                backgroundImage:
                    'linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
            }}
        />
        {/* Grain overlay */}
        <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
        />

        <div className="container relative z-10 mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-4xl"
                style={{ transform: 'translate3d(0,0,0)' }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-primary"
                >
                    Systems Engineer // Full-Stack Engineer
                </motion.div>

                <h1 className="mb-8 text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                    Engineering
                    <br />
                    High-Stakes Systems
                    <br />
                    <span className="text-gradient">from the Metal Up.</span>
                </h1>

                <p className="mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                    10+ years of technical grit. From navigating enterprise
                    satellite infrastructure to designing custom PCB circuitry
                    and low-latency robotics protocols. I build resilient,
                    mission-critical systems for industrial environments where
                    failure isn’t an option.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={route('projects')}
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:text-base"
                    >
                        Explore Projects
                        <ArrowRight size={18} />
                    </a>
                    <a
                        href={route('about')}
                        className="inline-flex items-center gap-2 rounded-xl border border-primary/40 px-8 py-4 text-sm font-semibold text-primary transition-colors hover:bg-primary/5 md:text-base"
                    >
                        <FileText size={18} />
                        Read Mission Brief
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
);

export default HeroSection;
