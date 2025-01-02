import '@/../css/Components/Navbar.scss';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
                <div className="nav">
                    {/* TODO: ADD LOGO */}
                    <div className="logo"></div>
                    <ul className={isMenuOpen ? 'menu-open' : 'menu-closed'}>
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
                                className={view === 'projects' ? 'current-view' : ''}
                            >
                                {t('navbar.projects')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/about"
                                className={view === 'about' ? 'current-view' : ''}
                            >
                                {t('navbar.aboutme')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pricing"
                                className={view === 'resume' ? 'current-view' : ''}
                            >
                                {t('navbar.pricing')}
                            </a>
                        </li>
                        <li>
                            <a className="cta" href="/login">
                                {' '}
                                {t('navbar.contact')}
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
