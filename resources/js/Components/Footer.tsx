import { Github, Linkedin } from '@/Components/ui/icons';
import { Mail, MapPin } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: route('landing') },
    { label: 'About', href: route('about') },
    { label: 'Projects', href: route('projects') },
    { label: 'Hobbies', href: '#hobbies' },
    { label: 'Contact', href: route('contact') },
];

const Footer = () => {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="border-border bg-card/30 border-t">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
                    {/* Identity */}
                    <div className="space-y-4">
                        <h3 className="text-foreground text-xl font-bold">
                            Mason <span className="text-primary">Root</span>
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Systems Engineer & Full-Stack Developer
                        </p>
                        <div className="text-muted-foreground flex items-center gap-2 text-sm">
                            <MapPin
                                size={14}
                                className="text-primary shrink-0"
                            />
                            Santa Rosa, CA 95407
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-foreground text-sm font-semibold tracking-wider uppercase">
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
                                    className="text-muted-foreground hover:text-primary w-fit text-sm transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-foreground text-sm font-semibold tracking-wider uppercase">
                            Contact
                        </h4>
                        <a
                            href="mailto:contact@masonroot.dev"
                            className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors"
                        >
                            <Mail size={14} className="text-primary shrink-0" />
                            contact@masonroot.dev
                        </a>
                        <div className="flex gap-3 pt-2">
                            <a
                                href="https://github.com/Verdanix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-primary rounded-lg p-2.5 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mason-root/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-primary rounded-lg p-2.5 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-border border-t">
                <div className="text-muted-foreground container mx-auto px-6 py-5 text-center text-xs">
                    © {new Date().getFullYear()} Mason Root. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
