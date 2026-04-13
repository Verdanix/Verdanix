import { motion } from 'framer-motion';
import { CircuitBoard, Container, Server } from 'lucide-react';

const expertise = [
    {
        icon: Server,
        title: 'Systems Architecture',
        desc: 'Scalable backend systems. Focused on fault-tolerant logic and implementation of high-performance caching layers like Redis for optimized resource handling.',
    },
    {
        icon: Container,
        title: 'Automation & DevOps',
        desc: 'Docker, GitHub Actions, and Linux systems administration. Experience in physical infrastructure routing and hardware-level debugging in mission-critical telecom environments.',
    },
    {
        icon: CircuitBoard,
        title: 'Physical Computing',
        desc: 'Robotics and PCB Architecture. Bridging the gap between embedded hardware and software through custom circuitry design and industrial machinery technical support.',
    },
];

const ExpertiseSection = () => (
    <section id="about" className="py-20 md:py-28">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center text-3xl font-bold md:text-4xl"
            >
                Core <span className="text-gradient">Expertise</span>
            </motion.h2>

            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
                {expertise.map((item, i) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.5 }}
                        style={{ transform: 'translate3d(0,0,0)' }}
                        className="glow-border hover:glow-accent group rounded-2xl bg-card p-6 transition-shadow duration-500 md:p-8"
                    >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-primary/10">
                            <item.icon size={22} className="text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                        <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default ExpertiseSection;
