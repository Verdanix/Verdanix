import BentoStats from '@/Components/BentoStats';
import ContactSection from '@/Components/ContactSection';
import CoreValues from '@/Components/CoreValues';
import ExpertiseSection from '@/Components/ExpertiseSection';
import Footer from '@/Components/Footer';
import HeroSection from '@/Components/HeroSection';
import Navbar from '@/Components/Navbar';
import SystemStatus from '@/Components/SystemStatus';
import TechGrid from '@/Components/TechGrid';
import Timeline from '@/Components/Timeline';

export default function Landing() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <HeroSection />
            <BentoStats />
            <ExpertiseSection />
            <TechGrid />
            <CoreValues />
            <Timeline />
            <ContactSection />
            <SystemStatus />
            <Footer />
        </main>
    );
}
