import Footer from '@/Components/Footer';
import Navbar from '@/Components/Navbar';
import { useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ArrowLeft, CircuitBoard, Container, Mail, Server } from 'lucide-react';
import React, { useState } from 'react';

const guidelines = [
    {
        icon: Server,
        title: 'Systems Architecture',
        desc: 'Scaling backends, database optimization, and high-availability infrastructure.',
    },
    {
        icon: CircuitBoard,
        title: 'Physical Computing',
        desc: 'PCB architecture, embedded systems (C/C++), and hardware-software integration.',
    },
    {
        icon: Container,
        title: 'Industrial Ops',
        desc: 'Hardened Linux environments, Docker orchestration, and zero-downtime deployments.',
    },
];

type SubmitState = 'idle' | 'handshake' | 'transmitted' | 'success';

const Contact = () => {
    const [state, setState] = useState<SubmitState>('idle');
    const { data, setData, post, errors } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        const key = e.target.name as keyof typeof data;
        setData(key, e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        post(route('submit.inquiry'), {
            preserveScroll: true,
            onError() {
                setState('idle');
            },
            onStart() {
                setState('handshake');
            },
            onSuccess() {
                setTimeout(() => {
                    setState('transmitted');
                }, 1400);

                setTimeout(() => {
                    setState('success');
                }, 2300);
            },
        });
    };

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
            {/* Grid background */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 opacity-[0.08]"
                style={{
                    backgroundImage:
                        'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />
            {/* Scanline overlay */}
            <div
                aria-hidden
                className="pointer-events-none fixed inset-0 z-[1] opacity-[0.04]"
                style={{
                    backgroundImage:
                        'repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, hsl(var(--foreground)) 1px, transparent 1px, transparent 3px)',
                }}
            />

            <Navbar />

            <main className="container relative z-10 mx-auto px-6 pb-24 pt-32">
                <a
                    href={route('landing')}
                    className="mb-10 inline-flex items-center gap-2 font-mono text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                    <ArrowLeft size={14} />
                    [BACK_TO_MAINFRAME]
                </a>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                    style={{ transform: 'translate3d(0,0,0)' }}
                >
                    <div className="mb-3 font-mono text-xs font-bold tracking-widest text-primary sm:text-sm">
                        {'// CONTACT_CHANNEL :: OPEN'}
                    </div>
                    <h1 className="font-mono text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                        INITIATE_
                        <span className="text-gradient">HANDSHAKE</span>
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
                    {/* Left column — Why */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ transform: 'translate3d(0,0,0)' }}
                    >
                        <h2 className="mb-4 font-mono text-2xl font-bold sm:text-3xl">
                            Technical Inquiry Guidelines
                        </h2>
                        <p className="mb-10 text-base leading-relaxed text-muted-foreground lg:text-lg">
                            I am currently accepting inquiries for high-stakes
                            systems architecture, industrial automation, and
                            specialized full-stack development.
                        </p>

                        <ul className="space-y-6">
                            {guidelines.map((g, i) => (
                                <motion.li
                                    key={g.title}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.2 + i * 0.1,
                                    }}
                                    className="glow-border flex gap-4 rounded-xl bg-card/40 p-5 transition-colors hover:border-primary/40"
                                >
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                                        <g.icon
                                            className="text-primary"
                                            size={20}
                                        />
                                    </div>
                                    <div>
                                        <h3 className="mb-1 font-mono text-base font-bold lg:text-lg">
                                            {g.title}
                                        </h3>
                                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                                            {g.desc}
                                        </p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-10 rounded-xl border border-border bg-card/30 p-5 font-mono text-sm">
                            <div className="mb-2 flex items-center gap-2 font-semibold text-primary">
                                <Mail size={14} />
                                DIRECT_CHANNEL
                            </div>
                            <a
                                href="mailto:contact@masonroot.dev"
                                className="break-all text-foreground transition-colors hover:text-primary"
                            >
                                contact@masonroot.dev
                            </a>
                        </div>
                    </motion.section>

                    {/* Right column — Form */}
                    <motion.section
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ transform: 'translate3d(0,0,0)' }}
                    >
                        <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm sm:p-8">
                            {state === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="mb-4 font-mono text-sm font-bold tracking-widest text-primary">
                                        [TRANSMISSION_SUCCESSFUL]
                                    </div>
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                                        <div className="h-3 w-3 animate-pulse rounded-full bg-primary" />
                                    </div>
                                    <p className="mx-auto max-w-md text-base leading-relaxed text-foreground lg:text-lg">
                                        Message logged. Telemetry received. I
                                        will review your inquiry and respond
                                        within 3 business days.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    <Field
                                        label="NAME / ORGANIZATION"
                                        name="name"
                                        value={data.name}
                                        onChange={handleChange}
                                        error={errors.name}
                                        disabled={state !== 'idle'}
                                    />
                                    <Field
                                        label="CONTACT_EMAIL"
                                        name="email"
                                        value={data.email}
                                        onChange={handleChange}
                                        error={errors.email}
                                        disabled={state !== 'idle'}
                                    />
                                    <Field
                                        label="SUBJECT"
                                        name="subject"
                                        value={data.subject}
                                        onChange={handleChange}
                                        error={errors.subject}
                                        disabled={state !== 'idle'}
                                    />
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block font-mono text-xs font-bold tracking-widest text-primary"
                                        >
                                            MESSAGE_BODY
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={6}
                                            value={data.message}
                                            onChange={handleChange}
                                            disabled={state !== 'idle'}
                                            maxLength={2000}
                                            className="w-full resize-none rounded-lg border border-border bg-background/60 px-4 py-3 font-sans text-base text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] focus:outline-none disabled:opacity-50"
                                        />
                                        {errors.message && (
                                            <p className="mt-1.5 font-mono text-xs text-destructive">
                                                {errors.message}
                                            </p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={state !== 'idle'}
                                        className="glow-accent w-full rounded-lg bg-primary px-6 py-4 font-mono text-sm font-bold tracking-widest text-primary-foreground transition-all hover:opacity-90 disabled:cursor-wait disabled:opacity-100"
                                    >
                                        {state === 'idle' &&
                                            '>> TRANSMIT_MESSAGE'}
                                        {state === 'handshake' && (
                                            <span className="inline-flex items-center gap-2">
                                                <span className="h-2 w-2 animate-pulse rounded-full bg-primary-foreground" />
                                                [INITIATING_HANDSHAKE...]
                                            </span>
                                        )}
                                        {state === 'transmitted' &&
                                            '[TRANSMISSION_SUCCESSFUL]'}
                                    </button>

                                    <p className="pt-2 text-center font-mono text-xs text-muted-foreground">
                                        SECURE_CHANNEL :: END_TO_END_ENCRYPTED
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

interface FieldProps {
    label: string;
    name: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    disabled?: boolean;
}

const Field = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    disabled,
}: FieldProps) => (
    <div>
        <label
            htmlFor={name}
            className="mb-2 block font-mono text-xs font-bold tracking-widest text-primary"
        >
            {label}
        </label>
        <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            maxLength={type === 'email' ? 255 : 150}
            className="w-full rounded-lg border border-border bg-background/60 px-4 py-3 font-sans text-base text-foreground transition-all placeholder:text-muted-foreground focus:border-primary focus:shadow-[0_0_0_3px_hsl(var(--primary)/0.15)] focus:outline-none disabled:opacity-50"
        />
        {error && (
            <p className="mt-1.5 font-mono text-xs text-destructive">{error}</p>
        )}
    </div>
);

export default Contact;
