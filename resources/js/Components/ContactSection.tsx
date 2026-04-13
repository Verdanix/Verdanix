import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const ContactSection = () => (
    <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-border py-16 text-center"
    >
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">
            Ready to <span className="text-gradient">Initiate Contact</span>?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground">
            Let's discuss your next mission-critical project.
        </p>
        <a
            href={route('contact')}
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
            <Mail size={16} />
            INITIATE CONTACT
        </a>
    </motion.section>
);

export default ContactSection;
