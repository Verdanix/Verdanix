import { motion } from 'framer-motion';
import { Brain, Cpu, Shield } from 'lucide-react';

const cards = [
    {
        icon: Shield,
        title: 'Eagle Scout Grit',
        desc: 'Leadership forged through years of discipline, service, and reliability. Every project gets the same unwavering commitment.',
    },
    {
        icon: Brain,
        title: 'Deep Logic',
        desc: '100% proficiency in Brainfuck. A passion for Java systems architecture and low-level problem solving that most avoid.',
    },
    {
        icon: Cpu,
        title: 'Hardware & Robotics',
        desc: 'Electrical engineering hobbyist, motorcycle mechanic, and robotics builder. I understand systems from silicon to software.',
    },
];

const CoreValues = () => (
    <section className="py-24">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center text-3xl font-bold md:text-4xl"
            >
                Core <span className="text-gradient">Values</span>
            </motion.h2>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12 }}
                        className="glow-border hover:glow-accent group rounded-2xl bg-card p-6 transition-shadow duration-500"
                    >
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10">
                            <card.icon size={22} className="text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold">{card.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            {card.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default CoreValues;
