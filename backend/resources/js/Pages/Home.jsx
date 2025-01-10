import '@/../css/Pages/Home.scss';
import HeroSection from '@/Components/HeroSection.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';

export default function Home({ stats }) {
    const { t } = useTranslation('home');

    return (
        <GuestLayout view="home">
            <HeroSection
                translator={t}
                includeButtons={true}
                includeStats={true}
                stats={stats}
            />
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
