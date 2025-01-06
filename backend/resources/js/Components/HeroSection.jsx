import '@/../css/Components/HeroSection.scss';

export default function HeroSection({ view, stats, translator: t }) {
    return (
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
    );
}
