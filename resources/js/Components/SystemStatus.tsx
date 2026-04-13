import { Github, Linkedin } from '@/Components/ui/icons';

const SystemStatus = () => (
    <section className="border-t border-border py-12">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 sm:flex-row">
            <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
                </span>
                <span className="font-mono text-sm font-semibold uppercase tracking-wider text-muted-foreground md:text-base">
                    System Status:{' '}
                    <span className="text-green-400">Operational</span>{' '}
                    <span className="hidden sm:inline">
                        | Available for Collaboration
                    </span>
                </span>
            </div>

            <div className="flex gap-3">
                <a
                    href="https://github.com/Verdanix"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="GitHub"
                >
                    <Github size={18} />
                </a>
                <a
                    href="https://linkedin.com/in/mason-root"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:text-foreground"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={18} />
                </a>
            </div>
        </div>
    </section>
);

export default SystemStatus;
