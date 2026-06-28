import { motion } from 'framer-motion';
import {
    Bot,
    CodeXml,
    Monitor,
    Rocket,
    Satellite,
    Settings,
} from 'lucide-react';
const milestones = [
    {
        year: 'Present',
        title: 'IT Technician & Infrastructure Support',
        desc: 'Operating as IT Technician across the Iconic Machinery and Rental Guys networks. Delivering critical infrastructure support and rapid troubleshooting for 23 distinct dealership and rental locations.',
        icon: Settings,
    },
    {
        year: '2025',
        title: 'Eagle Scout & Telecom Exposure',
        desc: 'Achieved Eagle Scout rank. Interned at X2nSat, gaining exposure to mission-critical satellite infrastructure and enterprise-scale network security.',
        icon: Satellite,
    },
    {
        year: '2021 — Present',
        title: 'Systems & Backend Specialization',
        desc: 'Mastering the metal-to-cloud pipeline. Advanced implementation of Laravel, Spring, and low-level C/C++ for embedded systems and scalable backend infrastructure.',
        icon: CodeXml,
    },
    {
        year: '2021 — 2025',
        title: 'Robotics Lead & PCB Architecture',
        desc: 'Served as President of Robotics & Engineering. Architected custom PCB circuitry for high-impact combat robotics, optimizing for power distribution and signal integrity.',
        icon: Bot,
    },
    {
        year: '2018 — 2021',
        title: 'Full-Stack Transition',
        desc: 'Shifted focus to enterprise languages, mastering Java and Python while establishing a deep foundation in frontend architecture (HTML/CSS/JS).',
        icon: Monitor,
    },
    {
        year: '2012 — 2017',
        title: 'Foundational Logic & Robotics',
        desc: 'Early immersion in systems thinking through mechanical engineering (LEGO Technic) and visual logic scripting via Scratch. Developed first Minecraft modifications in 2016.',
        icon: Rocket,
    },
];

const Timeline = () => (
    <section className="py-24">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center text-3xl font-bold md:text-4xl"
            >
                The <span className="text-gradient">Journey</span>
            </motion.h2>

            <div className="relative mx-auto max-w-2xl">
                {/* Vertical line */}
                <div className="bg-border absolute top-0 bottom-0 left-6 w-px md:left-8" />

                <div className="space-y-12">
                    {milestones.map((m, i) => (
                        <motion.div
                            key={m.year}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative flex gap-6 md:gap-8"
                        >
                            <div className="glow-border bg-secondary relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl md:h-16 md:w-16">
                                <m.icon size={20} className="text-primary" />
                            </div>
                            <div className="pt-1">
                                <span className="text-primary text-sm font-semibold tracking-wider">
                                    {m.year}
                                </span>
                                <h3 className="mt-1 text-xl font-bold">
                                    {m.title}
                                </h3>
                                <p className="text-muted-foreground mt-1 leading-relaxed">
                                    {m.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default Timeline;
