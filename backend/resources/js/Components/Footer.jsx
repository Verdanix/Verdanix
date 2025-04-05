import '@/../css/Components/Footer.scss';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('home');

    return (
        <footer>
            <div className="content">
                <div className="item">
                    <h2 className="gradient">{t('me.name')}</h2>
                    <p>{t('me.line2')}</p>
                </div>

                <div className="quick">
                    <h3>{t('footer.titles.quick')}</h3>
                    <h4>
                        <a href="/about">{t('footer.links.about')}</a>
                    </h4>
                    <h4>
                        <a href="/projects">{t('footer.links.projects')}</a>
                    </h4>
                    <h4>
                        <a href="/services">{t('footer.links.services')}</a>
                    </h4>
                    <h4>
                        <a href="#contact">{t('footer.links.contact')}</a>
                    </h4>
                </div>

                <div className="contact">
                    <h3>{t('footer.titles.contact')}</h3>
                    <span>
                        <img
                            src="/images/footer/mail.svg"
                            alt={t('footer.images.mail')}
                        />
                        <h4>
                            <a href={'mailto:' + t('footer.links.email')}>
                                {t('footer.links.email')}
                            </a>
                        </h4>
                    </span>
                    <span>
                        <img
                            src="/images/footer/location.svg"
                            alt={t('footer.images.location')}
                        />
                        <h4>{t('footer.links.location')}</h4>
                    </span>
                </div>

                <div className="connect">
                    <h3>{t('footer.titles.connect')}</h3>
                    <div className="icons">
                        <a href={t('footer.connect.github')}>
                            <img
                                src="/images/footer/github.svg"
                                alt={t('footer.images.github')}
                            />
                        </a>
                        <a href={t('footer.connect.linkedin')}>
                            <img
                                src="/images/footer/linkedin.svg"
                                alt={t('footer.images.linkedin')}
                            />
                        </a>
                        <a href={t('footer.connect.instagram')}>
                            <img
                                src="/images/footer/instagram.svg"
                                alt={t('footer.images.instagram')}
                            />
                        </a>
                    </div>
                </div>
            </div>
            <p className="copyright">&copy; {t('footer.rights')}</p>
        </footer>
    );
}
