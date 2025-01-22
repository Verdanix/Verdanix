import '@/../css/Components/Footer.scss';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation('common');

    useEffect(() => {
        const scrollToTopButton = document.getElementById('scrollToTop');
        scrollToTopButton.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }, []);

    return (
        <footer>
            <hr />
            <div className="logo"></div>
            <div className="footerLinks">
                <div>
                    <strong>{t('footer.about.title')}</strong>
                    <ul>
                        <li>
                            <a href="/about">{t('footer.about.aboutme')}</a>
                        </li>
                        <li>
                            <a href="/mission">{t('footer.about.mission')}</a>
                        </li>
                        <li>
                            <a href="/legal">{t('footer.about.legal')}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <strong>{t('footer.explore.title')}</strong>
                    <ul>
                        <li>
                            <a href="/dashboard">
                                {t('footer.explore.dashboard')}
                            </a>
                        </li>
                        <li>
                            <a href="/projects">
                                {t('footer.explore.projects')}
                            </a>
                        </li>
                        <li>
                            <a href="/docs">{t('footer.explore.docs')}</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <strong>{t('footer.socials.title')}</strong>
                    <ul>
                        <li>
                            <a href="/socials/github">
                                {t('footer.socials.github')}
                            </a>
                        </li>
                        <li>
                            <a href="/socials/linkedin">
                                {t('footer.socials.linkedin')}
                            </a>
                        </li>
                        <li>
                            <a href="/socials/instagram">
                                {t('footer.socials.instagram')}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="extra">
                <div>
                    <a href="/sitemap.xml">{t('footer.extra.sitemap')}</a>
                    <a href="#nav" id="scrollToTop">
                        {t('footer.extra.backUpTop')}
                    </a>
                </div>
                <small>{t('footer.extra.copyright')}</small>
            </div>
        </footer>
    );
}
