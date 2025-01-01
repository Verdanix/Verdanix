import Navbar from '@/Components/Navbar.jsx';
import { useLaravelReactI18n } from 'laravel-react-i18n';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
}) {
    const { t } = useLaravelReactI18n();
    return (
        <>
            <div className="hero">
                <Navbar view="home" />
                <div className="text">
                    <h1>
                        {t('message.home_quote_line1')}
                        <br />
                        {t('message.home_quote_line2')}
                        <br />
                        {t('message.home_quote_line3')}
                        <strong>
                            {t('message.home_quote_line3_end_word')}
                        </strong>
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
            </div>
        </>
    );
}
