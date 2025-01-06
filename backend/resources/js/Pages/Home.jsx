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
            <main id="hero">
                <h1>
                    {t('hero.line1')}
                    <br />
                    {t('hero.line2')}
                    <br />
                    {t('hero.line3')}
                    <strong>{t('hero.line3.strong')}</strong>
                </h1>
                <div className="buttons">
                    <a className="contact-button" href="/register">
                        {t('navbar.register')}
                    </a>
                    <a className="pricing-button" href="/pricing">
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
            </main>
            <section id="sec2">
                <div className="bio">
                    <h2>{t('sec2.title')}</h2>
                    <p>{t('sec2.description')}</p>
                </div>
                <div className="profile-pic">
                    {/*  TODO: Add profile image  */}
                </div>
            </section>
            <section id="sec3">
                <h2>{t('sec3.whyme')}</h2>
                <div className="reasons">
                    <div className="security">
                        <img
                            src="/images/home/security.png"
                            alt={t('sec3.reason1.alt')}
                        />
                        <p>{t('sec3.reason1')}</p>
                    </div>
                    <div className="performance">
                        <img
                            src="/images/home/speed.png"
                            alt={t('sec3.reason2.alt')}
                        />
                        <p>{t('sec3.reason2')}</p>
                    </div>
                    <div className="scalability">
                        <img
                            src="/images/home/scalability.png"
                            alt={t('sec3.reason3.alt')}
                        />
                        <p>{t('sec3.reason3')}</p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
