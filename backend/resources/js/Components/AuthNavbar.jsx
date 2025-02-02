import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function AuthNavbar({ view }) {
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
                                href={'/dashboard'}
                                className={
                                    view === 'manage' ? 'current-view' : ''
                                }
                            >
                                {t('auth.navbar.manage')}
                            </a>
                        </li>

                        <li>
                            <a
                                href="/projects"
                                className={
                                    view === 'projects' ? 'current-view' : ''
                                }
                            >
                                {t('auth.navbar.projects')}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/settings"
                                className={
                                    view === 'settings' ? 'current-view' : ''
                                }
                            >
                                {t('auth.navbar.settings')}
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
