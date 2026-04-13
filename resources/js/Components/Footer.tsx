import { Github, Linkedin } from '@/Components/ui/icons';
import { Mail, MapPin } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: '#contact' },
];

const Footer = () => {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="border-t border-border bg-card/30">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                    {/* Identity */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-foreground">
                            Mason <span className="text-primary">Root</span>
                        </h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Systems Engineer & Full-Stack Developer
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin
                                size={14}
                                className="shrink-0 text-primary"
                            />
                            Santa Rosa, CA 94928
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Quick Links
                        </h4>
                        <nav className="flex flex-col gap-2">
                            {quickLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollTo(link.href);
                                    }}
                                    className="w-fit text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                            Contact
                        </h4>
                        <a
                            href="mailto:contact@masonroot.dev"
                            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                            <Mail size={14} className="shrink-0 text-primary" />
                            contact@masonroot.dev
                        </a>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-primary"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-lg bg-secondary p-2.5 text-muted-foreground transition-colors hover:bg-secondary/80 hover:text-primary"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-border">
                <div className="container mx-auto px-6 py-5 text-center text-xs text-muted-foreground">
                    © {new Date().getFullYear()} Mason Root. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
