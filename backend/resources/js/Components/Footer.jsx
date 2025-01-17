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
                <ul>
                    <strong>{t('footer.about.title')}</strong>
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
                <ul>
                    <strong>{t('footer.explore.title')}</strong>
                    <li>
                        <a href="/dashboard">{t('footer.explore.dashboard')}</a>
                    </li>
                    <li>
                        <a href="/projects">{t('footer.explore.projects')}</a>
                    </li>
                    <li>
                        <a href="/docs">{t('footer.explore.docs')}</a>
                    </li>
                </ul>
                <ul>
                    <strong>{t('footer.socials.title')}</strong>
                    <li>
                        <a href="/github">{t('footer.socials.github')}</a>
                    </li>
                    <li>
                        <a href="/linkedin">{t('footer.socials.linkedin')}</a>
                    </li>
                    <li>
                        <a href="/instagram">{t('footer.socials.instagram')}</a>
                    </li>
                </ul>
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
