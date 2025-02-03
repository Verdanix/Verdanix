import '@/../css/Components/Navbar.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Navbar({ view }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { t } = useTranslation();

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
                <div id="nav">
                    {/* TODO: ADD LOGO */}
                    <div className="logo"></div>
                    <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
                        <li>
                            <a
                                href="/"
                                className={
                                    view === 'home' ? 'current-view' : ''
                                }
                            >
                                {t('navbar.home')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/projects"
                                className={
                                    view === 'projects' ? 'current-view' : ''
                                }
                            >
                                {t('projects')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={
                                    view === 'about' ? 'current-view' : ''
                                }
                            >
                                {t('navbar.aboutme')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pricing"
                                className={
                                    view === 'pricing' ? 'current-view' : ''
                                }
                            >
                                {t('navbar.pricing')}
                            </a>
                        </li>
                        <li>
                            <a className="cta" href="/register">
                                {' '}
                                {t('navbar.register')}
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
