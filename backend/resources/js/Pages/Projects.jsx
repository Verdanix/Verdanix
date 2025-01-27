import HeroSection from '@/Components/HeroSection.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/Projects.scss';

export default function Projects({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
    projects,
    stats,
}) {
    const { t } = useTranslation('projects');
    return (
        <GuestLayout view="projects">
            <HeroSection stats={stats} translator={t} />
            <hr />
            <section>
                <h2>{t('featured_projects')}</h2>
                <div className="cards"></div>
            </section>
            <section>
                <h2>{t('client_projects')}</h2>
                <div className="cards"></div>
            </section>
        </GuestLayout>
    );
}
