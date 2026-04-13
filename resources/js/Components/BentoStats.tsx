import { motion } from 'framer-motion';

const startYear = 2013;
const yearsBuildingLogic = new Date().getFullYear() - startYear;
const stats = [
    { value: yearsBuildingLogic, label: 'Years building logic' },
    { value: '40+', label: 'Systems Shipped' },
    { value: '1M+', label: 'Users Impacted' },
    { value: '100%', label: 'Logic Transparency' },
];

const BentoStats = () => (
    <section className="py-20 md:py-28">
        <div className="container mx-auto px-6">
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        style={{ transform: 'translate3d(0,0,0)' }}
                        className="glow-border hover:glow-accent group relative overflow-hidden rounded-2xl bg-card p-6 transition-shadow duration-500 md:p-8"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        <div className="relative z-10">
                            <span className="text-gradient mb-3 block text-4xl font-black leading-none md:text-5xl lg:text-6xl">
                                {stat.value}
                            </span>
                            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground md:text-sm">
                                {stat.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default BentoStats;
