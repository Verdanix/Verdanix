import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
}) {
    const { t } = useTranslation('home');
    return (
        <>
            <div className="hero">
                <Navbar view="home" />
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
                                <span>0+</span>
                                <br />
                                Projects
                                <br className="nl" /> completed
                            </p>
                            <p>
                                <span>0+</span>
                                <br />
                                Pending
                                <br className="nl" /> projects
                            </p>
                        </div>
                        <div className="col2">
                            <p>
                                <span>0+</span>
                                <br />
                                Happy
                                <br className="nl" /> clients
                            </p>
                            <p>
                                <span>0+</span>
                                <br />
                                Hours
                                <br className="nl" /> worked
                            </p>
                        </div>
                    </div>
                </div>
                {/* TODO: ADD OTHER SECTIONS */}
            </div>
        </>
    );
}
