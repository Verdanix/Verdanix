import '@/../css/Components/Navbar.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar({ view }) {
    const [isMenuOpen, setIsMenuOpen] = useState(null);

    const { t } = useTranslation();

    const toggleMenu = () => {
        if (isMenuOpen === null) {
            setIsMenuOpen(true);
            return;
        }
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = () => {
            setIsMenuOpen(false);
        };

        document.addEventListener('click', handleClickOutside);
        window.addEventListener('resize', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleClickOutside);
        };
    }, [isMenuOpen]);

    const getClassName = () => {
        if (isMenuOpen === null) return 'nav-links';
        if (isMenuOpen) return 'nav-links-active';
        return 'nav-links-inactive';
    };

    return (
        <>
            <nav onClick={(e) => e.stopPropagation()}>
                <div id="nav">
                    <img
                        loading="lazy"
                        id="header-logo"
                        src="/web-app-manifest-512x512.png"
                        alt="logo"
                    />
                    <span>{t('header.title')}</span>
                </div>

                <div>
                    <ul className={getClassName()}>
                        <li className={view === 'about' ? 'active' : ''}>
                            <a href="/about">{t('header.nav.about')}</a>
                        </li>
                        <li className={view === 'projects' ? 'active' : ''}>
                            <a href="/projects">{t('header.nav.projects')}</a>
                        </li>
                        <li className={view === 'services' ? 'active' : ''}>
                            <a href="/services">{t('header.nav.services')}</a>
                        </li>
                        <li className={view === 'services' ? 'active' : ''}>
                            <a href="/register">
                                <span>{t('header.nav.register')}</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
}
