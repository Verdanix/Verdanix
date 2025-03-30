import '@/../css/Pages/Pricing.scss';
import HeroSection from '@/Components/HeroSection.jsx';
import PricingCard from '@/Components/PricingCard.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';

export default function Pricing() {
    const { t } = useTranslation('pricing');

    return (
        <GuestLayout view="pricing">
            <HeroSection translator={t} />
            <div id="tiers">
                <PricingCard translator={t} tier="frontend" />
                <PricingCard translator={t} tier="backend" />
                <PricingCard translator={t} tier="fullstack" />
            </div>
        </GuestLayout>
    );
}
