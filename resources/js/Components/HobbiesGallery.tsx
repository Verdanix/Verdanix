import { motion } from 'framer-motion';

const images = [
    {
        src: '/assets/hobby-motorcycle.jpg',
        alt: 'Motorcycling',
        label: 'Motorcycling',
    },
    {
        src: '/assets/hobby-ee.jpg',
        alt: 'Electrical Engineering',
        label: 'Electrical Engineering',
    },
    { src: '/assets/hobby-robotics.jpg', alt: 'Robotics', label: 'Robotics' },
];

const HobbiesGallery = () => (
    <section className="py-24">
        <div className="container mx-auto px-6">
            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center text-3xl font-bold md:text-4xl"
            >
                Beyond the <span className="text-gradient">Code</span>
            </motion.h2>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-3">
                {images.map((img, i) => (
                    <motion.div
                        key={img.alt}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`glow-border group relative overflow-hidden rounded-2xl ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            loading="lazy"
                            className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-56"
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/80 to-transparent p-4">
                            <span className="text-sm font-semibold">
                                {img.label}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

export default HobbiesGallery;
