import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../css/Components/Navbar.scss';

export default function Navbar({ view }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useTranslation('common');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const closeMenu = () => {
            if (isMenuOpen) {
                setIsMenuOpen(false);
            }
        };
        const handleClickOutside = () => {
            closeMenu();
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <>
            <nav onClick={(e) => e.stopPropagation()}>
                <div>
                    {/* TODO: ADD LOGO */}
                    <div id="logo"></div>
                    <div id={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                        <ul id="links">
                            <li>
                                <a
                                    href="/"
                                    id={view === 'home' ? 'current-view' : ''}
                                >
                                    {t('navbar.home')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    id={
                                        view === 'projects'
                                            ? 'current-view'
                                            : ''
                                    }
                                >
                                    {t('navbar.projects')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    id={view === 'about' ? 'current-view' : ''}
                                >
                                    {t('navbar.aboutme')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/resume"
                                    id={view === 'resume' ? 'current-view' : ''}
                                >
                                    {t('navbar.resume')}
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pricing"
                                    id={view === 'resume' ? 'current-view' : ''}
                                >
                                    {t('navbar.pricing')}
                                </a>
                            </li>
                        </ul>
                        <ul id="cta">
                            <li id="login-button">
                                <a href="/login"> {t('navbar.login')}</a>
                            </li>
                            <li id="contact-button">
                                <a href="/register"> {t('navbar.contact')}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="hamburger-menu" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
    );
}
