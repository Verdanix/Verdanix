import '@/../css/Pages/Errors/NotFound404.scss';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import { useTranslation } from 'react-i18next';

export default function NotFound404() {
    const { t } = useTranslation('errors');
    const quotes = t('not_found.quotes', { returnObjects: true });
    return (
        <div id="not_found">
            <Navbar />
            <div>
            <h1>{t('not_found.seo.title')}</h1>
            <h2>{quotes[Math.floor(Math.random() * quotes.length)]}</h2>
            </div>
            <Footer />
        </div>
    );
}
