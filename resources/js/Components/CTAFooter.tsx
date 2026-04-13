import { Github, Linkedin } from '@/Components/ui/icons';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAFooter = () => (
    <section className="py-24">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mx-auto max-w-2xl space-y-8 text-center"
            >
                <h2 className="text-3xl font-bold md:text-5xl">
                    Let's Build Something
                    <br />
                    <span className="text-gradient">Complex</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                    Whether it's telecom infrastructure, a voice AI, or a
                    full-stack platform — I'm ready.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a
                        href="mailto:hello@masonroot.dev"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                        Get in Touch <ArrowRight size={18} />
                    </a>
                    <div className="flex gap-3">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-secondary p-3 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-secondary p-3 text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>

        <div className="mt-24 border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>
                © {new Date().getFullYear()} Mason Root. Built with precision.
            </p>
        </div>
    </section>
);

export default CTAFooter;
