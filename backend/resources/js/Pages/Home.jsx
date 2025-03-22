import '@/../css/Pages/Home.scss';
import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

export default function Home({ stats }) {
    const { t } = useTranslation('home');

    return (
        <div id="home">
            <div className="section1">
                <Navbar />
                <div id="hero">
                    <div className="text">
                        <h1>
                            {t('hero.h1.sentence')}
                            <br />
                            <span>{t('hero.h1.highlighted')}</span>
                        </h1>
                        <h2>"{t('hero.h2')}"</h2>
                    </div>
                    <div className="cta-buttons">
                        <a className="primary" href="/services">
                            {t('hero.cta.hire')}
                        </a>
                        <a className="secondary" href="/projects">
                            {t('hero.cta.projects')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
