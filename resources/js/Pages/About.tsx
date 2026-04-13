import ContactSection from '@/Components/ContactSection';
import SystemStatus from '@/Components/SystemStatus';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    Binary,
    Bot,
    CircuitBoard,
    Container,
    Lock,
    Minimize2,
    Rocket,
    Satellite,
    Server,
    Settings,
    Shield,
} from 'lucide-react';
import { useEffect, useState } from 'react';

/* ── Typewriter hook ── */
const useTypewriter = (text: string, speed = 40, startDelay = 0) => {
    const [displayed, setDisplayed] = useState('');
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(t);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;
        if (displayed.length >= text.length) return;
        const id = setTimeout(
            () => setDisplayed(text.slice(0, displayed.length + 1)),
            speed,
        );
        return () => clearTimeout(id);
    }, [displayed, started, text, speed]);

    return displayed;
};

/* ── Data ── */
const expertise = [
    {
        icon: Server,
        title: 'BACKEND ARCHITECTURE',
        subtitle: 'Laravel · Spring · FastAPI',
        desc: 'Building resilient server-side logic and high-performance APIs. Focused on data integrity and fault tolerance using Redis for caching and Spring/Django for enterprise-scale backends.',
    },
    {
        icon: Container,
        title: 'SYSTEMS & DEVOPS',
        subtitle: 'Docker · Linux · GitHub Actions',
        desc: 'Managing the metal-to-cloud pipeline. From Bash scripting and Nginx configuration to automated CI/CD pipelines and hardened Linux administration in industrial environments.',
    },
    {
        icon: CircuitBoard,
        title: 'LOW-LEVEL ENGINEERING',
        subtitle: 'C/C++ · PCB Design · Circuitry',
        desc: 'Engineering at the intersection of hardware and software. Proficient in PCB architecture and circuit design for combat robotics, from initial schematic to hand-soldering and firmware.',
    },
    {
        icon: Binary,
        title: 'FULL-STACK INTEGRATION',
        subtitle: 'React · TypeScript · Next.js',
        desc: 'Bridging the gap between complex system logic and clean user interfaces. Leveraging Tailwind and SASS to build high-performance, responsive dashboards for system monitoring.',
    },
];

const timeline = [
    {
        year: 'Present',
        org: 'Iconic Machinery',
        title: 'Systems Technician',
        impact: 'Providing high-stakes technical support and maintenance for industrial machinery systems, ensuring operational integrity in heavy-duty environments.',
        icon: Settings,
    },
    {
        year: '2025',
        org: 'X2nSat',
        title: 'Infrastructure Intern',
        impact: 'Gained enterprise exposure to satellite telecommunications and mission-critical network security. Assisted in hardware deployments and telecom room routing.',
        icon: Satellite,
    },
    {
        year: '2021—2025',
        org: 'Robotics & Engineering',
        title: 'Club President / Lead Engineer',
        impact: 'Led a 4-year tenure in competitive robotics, architecting custom PCB circuitry for Battlebots and managing team-wide engineering workflows.',
        icon: Bot,
    },
    {
        year: '2018—Present',
        org: 'Freelance',
        title: 'Systems Developer',
        impact: 'Building custom full-stack solutions and automation scripts. Established a 7-year track record of delivering functional, logic-driven software.',
        icon: Rocket,
    },
];
const pillars = [
    {
        icon: Shield,
        title: 'RELIABILITY',
        quote: 'Uptime is the only metric that matters.',
        desc: 'Whether it is a satellite link or a hydraulic press, systems are built to be observable, resilient, and ready for 24/7 operation.',
    },
    {
        icon: Minimize2,
        title: 'PRAGMATISM',
        quote: 'Over-engineering is just another form of technical debt.',
        desc: 'I favor clean, maintainable logic over complex "magic." If a junior can\'t read the code, the code isn\'t finished.',
    },
    {
        icon: Lock,
        title: 'SECURITY',
        quote: 'Hardened from the hardware up.',
        desc: 'Security starts at the physical layer. From cable management to kernel configuration, I build with a defensive-first mindset.',
    },
];

const About = () => {
    const title = useTypewriter('MISSION_BRIEF: MASON_ROOT', 50, 300);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
            {/* Grid bg */}
            <div
                className="pointer-events-none fixed inset-0 z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(hsl(var(--primary) / 0.06) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.06) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Scanline overlay */}
            <div
                className="pointer-events-none fixed inset-0 z-[1]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground) / 0.015) 2px, hsl(var(--foreground) / 0.015) 4px)',
                }}
            />

            {/* Back button */}
            <a
                href={route('landing')}
                className="fixed left-5 top-5 z-50 flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 py-2 font-mono text-xs font-semibold text-muted-foreground backdrop-blur-md transition-colors hover:text-primary"
            >
                <ArrowLeft size={14} />
                BACK TO MAINFRAME
            </a>

            <div className="relative z-10 mx-auto max-w-5xl px-6 pb-20 pt-28">
                {/* ── Briefing Header ── */}
                <section className="mb-20">
                    <h1 className="mb-4 font-mono text-3xl font-black tracking-tight md:text-5xl">
                        <span className="text-gradient">{title}</span>
                        <span className="ml-1 inline-block h-8 w-0.5 animate-pulse bg-primary align-middle md:h-12" />
                    </h1>
                    <p className="mb-10 font-mono text-xs tracking-widest text-muted-foreground md:text-sm">
                        CLEARANCE: SENIOR_LEVEL &nbsp;|&nbsp; STATUS:
                        OPERATIONAL &nbsp;|&nbsp; ORIGIN: SANTA_ROSA_CA
                    </p>

                    <div className="max-w-3xl space-y-5 text-sm leading-relaxed text-secondary-foreground md:text-base">
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                            style={{ transform: 'translate3d(0,0,0)' }}
                        >
                            With over a decade of hands-on experience in logic
                            and systems, my approach is defined by one
                            principle: understand the foundation. From
                            configuring Linux environments to observing
                            enterprise-scale infrastructure, I build systems
                            designed to perform under pressure and scale without
                            compromise.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.6 }}
                            style={{ transform: 'translate3d(0,0,0)' }}
                        >
                            My work spans the full engineering spectrum. I’ve
                            moved from designing custom communication protocols
                            and NLP pipelines for internal projects to
                            architecting hardware—specifically custom PCB
                            circuitry for high-impact robotics. This convergence
                            of software architecture and embedded systems allows
                            me to troubleshoot problems that live between the
                            code and the copper.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.8, duration: 0.6 }}
                            style={{ transform: 'translate3d(0,0,0)' }}
                        >
                            Currently, I operate at the intersection of
                            industrial systems, DevOps, and physical computing.
                            Whether I’m managing a Docker-orchestrated pipeline
                            or diagnosing machinery on a factory floor, my focus
                            remains on building reliable, zero-downtime
                            infrastructure that bridges the gap between digital
                            logic and the physical world.
                        </motion.p>
                    </div>
                </section>

                {/* ── Strategic Expertise Bento ── */}
                <section className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 font-mono text-xs tracking-[0.3em] text-primary"
                    >
                        ▸ STRATEGIC_EXPERTISE
                    </motion.h2>
                    <div className="grid gap-4 md:grid-cols-2">
                        {expertise.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{ transform: 'translate3d(0,0,0)' }}
                                className="glow-border hover:glow-accent group rounded-2xl bg-card p-6 transition-shadow duration-500"
                            >
                                <div className="mb-4 flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-primary/10">
                                        <item.icon
                                            size={18}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="font-mono text-sm font-bold tracking-wider">
                                            {item.title}
                                        </h3>
                                        <p className="font-mono text-[10px] tracking-wider text-muted-foreground">
                                            {item.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── Operational Timeline ── */}
                <section className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 font-mono text-xs tracking-[0.3em] text-primary"
                    >
                        ▸ OPERATIONAL_LOG
                    </motion.h2>

                    <div className="relative mx-auto max-w-2xl">
                        <div className="absolute bottom-0 left-5 top-0 w-px bg-primary/20 md:left-6" />
                        <div className="space-y-10">
                            {timeline.map((m, i) => (
                                <motion.div
                                    key={m.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: i * 0.12,
                                        duration: 0.5,
                                    }}
                                    style={{ transform: 'translate3d(0,0,0)' }}
                                    className="relative flex gap-5 md:gap-7"
                                >
                                    {/* Glowing node */}
                                    <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-card shadow-[0_0_12px_-2px_hsl(var(--primary)/0.4)] md:h-12 md:w-12">
                                        <m.icon
                                            size={16}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div className="pt-0.5">
                                        <div className="mb-1 flex items-center gap-3">
                                            <span className="font-mono text-sm font-bold text-primary">
                                                {m.year}
                                            </span>
                                            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                                                {m.org}
                                            </span>
                                        </div>
                                        <h3 className="mb-1 text-base font-bold">
                                            {m.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground">
                                            {m.impact}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Eagle Scout ── */}
                <section className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ transform: 'translate3d(0,0,0)' }}
                        className="glow-border rounded-2xl bg-card p-8 text-center md:p-12"
                    >
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mb-6 font-mono text-xs tracking-[0.3em] text-primary"
                        >
                            ▸ CORE_DIRECTIVE
                        </motion.h2>
                        <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                            Eagle <span className="text-gradient">Scout</span>
                        </h3>
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                            The Eagle Scout rank isn't a line on a résumé — it's
                            an operating system. The grit to push through when
                            the project is at 90% and the last 10% is the
                            hardest. The leadership to manage teams under real
                            constraints. The ethical framework that ensures
                            every system I architect is built with integrity,
                            from the data layer to the deployment pipeline.
                            Scouting taught me that discipline and service
                            aren't optional — they're the foundation that every
                            great engineer needs.
                        </p>
                    </motion.div>
                </section>

                {/* ── Engineering Philosophy ── */}
                <section className="mb-24">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mb-8 font-mono text-xs tracking-[0.3em] text-primary"
                    >
                        ▸ ENGINEERING_PHILOSOPHY
                    </motion.h2>
                    <div className="grid gap-4 md:grid-cols-3">
                        {pillars.map((p, i) => (
                            <motion.div
                                key={p.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                style={{ transform: 'translate3d(0,0,0)' }}
                                className="rounded-2xl border border-border bg-transparent p-6 transition-colors duration-500 hover:bg-card/50"
                            >
                                <p.icon
                                    size={20}
                                    className="mb-4 text-primary"
                                />
                                <h3 className="mb-2 font-mono text-sm font-bold tracking-wider">
                                    {p.title}
                                </h3>
                                <p className="mb-3 text-sm font-semibold italic text-primary">
                                    "{p.quote}"
                                </p>
                                <p className="text-xs leading-relaxed text-muted-foreground">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ── CTA Footer ── */}
                <ContactSection />
                <SystemStatus />
            </div>
        </div>
    );
};

export default About;
