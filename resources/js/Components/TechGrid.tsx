import { motion } from 'framer-motion';

const categories = [
    {
        label: 'Backend',
        pills: ['Laravel', 'Spring', 'FastAPI', 'Django', 'NodeJS'],
    },
    {
        label: 'Systems',
        pills: ['Docker', 'Linux', 'GH Actions', 'Nginx', 'Bash'],
    },
    {
        label: 'Frontend',
        pills: ['React', 'TypeScript', 'Tailwind', 'SASS/SCSS', 'Next.js'],
    },
    {
        label: 'Low Levels',
        pills: [
            'Circuit Design',
            'PCB Architecture',
            'C/C++',
            'Soldering',
            'Arduino',
            'Raspberry Pi',
        ],
    },
];

const TechGrid = () => (
    <section className="py-24">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center text-3xl font-bold md:text-4xl"
            >
                Technical <span className="text-gradient">Identity</span>
            </motion.h2>

            <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {categories.map((cat, i) => (
                    <motion.div
                        key={cat.label}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="glow-border rounded-2xl bg-card p-5"
                    >
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                            {cat.label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.pills.map((p) => (
                                <span
                                    key={p}
                                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                                >
                                    {p}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default TechGrid;
