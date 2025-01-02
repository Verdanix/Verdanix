import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/Home.scss';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
    stats,
}) {
    const { t } = useTranslation('home');

    return (
        <GuestLayout>
            <div className="hero">
                <div className="text">
                    <h1>
                        {t('hero.quote.line.1')}
                        <br />
                        {t('hero.quote.line.2')}
                        <br />
                        {t('hero.quote.line.3')}
                        <strong>{t('hero.quote.line.4.end.word')}</strong>
                    </h1>

                    <div className="stats">
                        <div className="col1">
                            <p>
                                <span>{stats['totalProjects']}</span>
                                <br />
                                {t('hero.stats.projects')}
                                <br className="nl" />
                                {t('hero.stats.completed')}
                            </p>
                            <p>
                                <span>{stats['totalPendingProjects']}</span>
                                <br />
                                {t('hero.stats.pending')}
                                <br className="nl" />
                                {t('hero.stats.projects')}
                            </p>
                        </div>
                        <div className="col2">
                            <p>
                                <span>{stats['totalClientProjects']}</span>
                                <br />
                                {t('hero.stats.happy')}
                                <br className="nl" />
                                {t('hero.stats.clients')}
                            </p>
                            <p>
                                <span>{stats['totalHoursWorked']}</span>
                                <br />
                                {t('hero.stats.hours')}
                                <br className="nl" />
                                {t('hero.stats.worked')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* TODO: ADD OTHER SECTIONS */}
        </GuestLayout>
    );
}
