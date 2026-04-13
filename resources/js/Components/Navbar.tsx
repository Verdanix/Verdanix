import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, Wrench, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const navLinks = [
    { label: 'Home', href: route('landing') },
    { label: 'About', href: route('about') },
    { label: 'Projects', href: route('projects') },
];

const hobbyItems = [
    {
        label: 'Motorcycling',
        icon: Wrench,
        href: route('hobbies.motorcycling'),
    },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hobbyOpen, setHobbyOpen] = useState(false);
    const [mobileHobbyOpen, setMobileHobbyOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setHobbyOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => setHobbyOpen(false), 150);
    };

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <nav
                className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'border-b border-border/50 bg-background/70 shadow-lg shadow-background/20 backdrop-blur-xl'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <a
                        href={route('landing')}
                        onClick={(e) => {
                            e.preventDefault();
                            scrollTo(route('landing'));
                        }}
                        className="text-lg font-bold tracking-tight text-foreground"
                    >
                        mason<span className="text-primary">root</span>
                    </a>

                    {/* Desktop */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(link.href);
                                }}
                                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Hobbies dropdown */}
                        <div
                            ref={dropdownRef}
                            className="relative"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary">
                                Hobbies
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${hobbyOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {hobbyOpen && (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 8,
                                            scale: 0.96,
                                        }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute left-0 top-full mt-1 w-48 rounded-xl border border-border bg-card/95 p-1.5 shadow-xl backdrop-blur-xl"
                                    >
                                        {hobbyItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    scrollTo(item.href);
                                                    setHobbyOpen(false);
                                                }}
                                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary/50 hover:text-primary"
                                            >
                                                <item.icon size={16} />
                                                {item.label}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <a
                            href={route('contact')}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollTo(route('contact'));
                            }}
                            className="ml-2 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="p-2 text-muted-foreground transition-colors hover:text-foreground md:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{
                            type: 'spring',
                            damping: 30,
                            stiffness: 300,
                        }}
                        className="fixed inset-0 z-40 flex flex-col bg-background/95 px-6 pt-20 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo(link.href);
                                    }}
                                    className="rounded-lg px-4 py-3.5 text-lg font-medium text-muted-foreground transition-colors hover:bg-secondary/30 hover:text-primary"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Mobile hobbies accordion */}
                            <button
                                onClick={() =>
                                    setMobileHobbyOpen(!mobileHobbyOpen)
                                }
                                className="flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium text-muted-foreground transition-colors hover:bg-secondary/30 hover:text-primary"
                            >
                                Hobbies
                                <ChevronDown
                                    size={18}
                                    className={`transition-transform duration-200 ${mobileHobbyOpen ? 'rotate-180' : ''}`}
                                />
                            </button>
                            <AnimatePresence>
                                {mobileHobbyOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="flex flex-col gap-0.5 pb-1 pl-6">
                                            {hobbyItems.map((item) => (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        scrollTo(item.href);
                                                    }}
                                                    className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-base text-muted-foreground transition-colors hover:text-primary"
                                                >
                                                    <item.icon size={16} />
                                                    {item.label}
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <a
                                href={route('contact')}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(route('contact'));
                                }}
                                className="rounded-lg px-4 py-3.5 text-lg font-medium text-muted-foreground transition-colors hover:bg-secondary/30 hover:text-primary"
                            >
                                Contact
                            </a>
                        </div>

                        <div className="mt-auto pb-8">
                            <a
                                href={route('contact')}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(route('contact'));
                                }}
                                className="block w-full rounded-xl bg-primary px-6 py-3.5 text-center text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
