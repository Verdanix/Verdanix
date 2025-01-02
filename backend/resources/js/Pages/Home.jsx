import '@/../css/Pages/Home.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
    stats,
}) {
    const { t } = useTranslation('home');

    return (
        <GuestLayout view="home">
            <div id="hero">
                <h1>
                    {t('hero.line1')}
                    <br />
                    {t('hero.line2')}
                    <br />
                    {t('hero.line3')}
                    <strong>{t('hero.line3.strong')}</strong>
                </h1>
                <div className="buttons">
                    <a className="hero-button contact-button" href="#quota">
                        {t('navbar.contact')}
                    </a>
                    <a className="hero-button pricing-button" href="/pricing">
                        {t('navbar.pricing')}
                    </a>
                </div>

                <div className="stats">
                    <p>
                        <span>{stats.totalPendingProjects}</span>
                        <br />
                        {t('stats.pending')}
                        <br />
                        {t('projects')}
                    </p>
                    <p>
                        <span> {stats.totalProjects} </span>
                        <br />
                        {t('stats.total')}
                        <br />
                        {t('projects')}
                    </p>
                    <p>
                        <span> {stats.totalClientProjects} </span>
                        <br />
                        {t('stats.client')}
                        <br />
                        {t('projects')}
                    </p>
                    <p>
                        <span> {stats.totalHoursWorked} </span>
                        <br />
                        {t('stats.hours')}
                        <br />
                        {t('stats.worked')}
                    </p>
                </div>
            </div>
        </GuestLayout>
    );
}
