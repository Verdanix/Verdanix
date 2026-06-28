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
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(0);

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
                className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                    scrolled
                        ? 'border-border/50 bg-background/70 shadow-background/20 border-b shadow-lg backdrop-blur-xl'
                        : 'bg-transparent'
                }`}
            >
                <div className="container mx-auto flex h-16 items-center justify-between px-6">
                    <a
                        href={route('landing')}
                        onClick={(e) => {
                            scrollTo(route('landing'));
                        }}
                        className="text-foreground text-lg font-bold tracking-tight"
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
                                    scrollTo(link.href);
                                }}
                                className="text-muted-foreground hover:bg-secondary/50 hover:text-primary rounded-lg px-4 py-2 text-sm font-medium transition-colors"
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
                            <button className="text-muted-foreground hover:bg-secondary/50 hover:text-primary flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors">
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
                                        className="border-border bg-card/95 absolute top-full left-0 mt-1 w-48 rounded-xl border p-1.5 shadow-xl backdrop-blur-xl"
                                    >
                                        {hobbyItems.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={(e) => {
                                                    scrollTo(item.href);
                                                    setHobbyOpen(false);
                                                }}
                                                className="text-muted-foreground hover:bg-secondary/50 hover:text-primary flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors"
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
                                scrollTo(route('contact'));
                            }}
                            className="bg-primary text-primary-foreground ml-2 rounded-lg px-5 py-2 text-sm font-semibold transition-opacity hover:opacity-90"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile toggle */}
                    <button
                        className="text-muted-foreground hover:text-foreground p-2 transition-colors md:hidden"
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
                        className="bg-background/95 fixed inset-0 z-40 flex flex-col px-6 pt-20 backdrop-blur-xl md:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        scrollTo(link.href);
                                    }}
                                    className="text-muted-foreground hover:bg-secondary/30 hover:text-primary rounded-lg px-4 py-3.5 text-lg font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {/* Mobile hobbies accordion */}
                            <button
                                onClick={() =>
                                    setMobileHobbyOpen(!mobileHobbyOpen)
                                }
                                className="text-muted-foreground hover:bg-secondary/30 hover:text-primary flex items-center justify-between rounded-lg px-4 py-3.5 text-lg font-medium transition-colors"
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
                                                        scrollTo(item.href);
                                                    }}
                                                    className="text-muted-foreground hover:text-primary flex items-center gap-3 rounded-lg px-4 py-2.5 text-base transition-colors"
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
                                    scrollTo(route('contact'));
                                }}
                                className="text-muted-foreground hover:bg-secondary/30 hover:text-primary rounded-lg px-4 py-3.5 text-lg font-medium transition-colors"
                            >
                                Contact
                            </a>
                        </div>

                        <div className="mt-auto pb-8">
                            <a
                                href={route('contact')}
                                onClick={(e) => {
                                    scrollTo(route('contact'));
                                }}
                                className="bg-primary text-primary-foreground block w-full rounded-xl px-6 py-3.5 text-center text-base font-semibold transition-opacity hover:opacity-90"
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
