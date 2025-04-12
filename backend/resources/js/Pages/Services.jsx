import '@/../css/Pages/Services.scss';
import ContactForm from '@/Components/ContactForm.jsx';
import Footer from '@/Components/Footer.jsx';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useTranslation } from 'react-i18next';

function generateDescription(t, section) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`cards.${section}.pros.${num}.title`, {
                defaultValue: '',
            }) && (
                <div className="item" key={num}>
                    <img
                        src={t(`cards.${section}.pros.${num}.icon`)}
                        alt={t(`cards.${section}.pros.${num}.alt`)}
                    />
                    <Text type="p">
                        {t(`cards.${section}.pros.${num}.title`)}
                    </Text>
                </div>
            ),
    );
}

function ServiceCard({ t, className, even }) {
    return (
        <div className={`service ${className}`}>
            <div className="top">
                <div>
                    <img
                        src={t(`cards.${className}.icon`)}
                        alt={t(`cards.${className}.alt`)}
                    />
                    <Text type="p" className={even ? 'even' : 'odd'}>
                        {t(`cards.${className}.tag`)}
                    </Text>
                </div>
                <Text type="h2">{t(`cards.${className}.title`)}</Text>
            </div>

            <div className="price">
                <Text type="h2">{t(`cards.${className}.price`)}</Text>
                <Text type="h3">/{t('project')}</Text>
            </div>
            <div className="description">
                {generateDescription(t, className)}
            </div>
            <hr />
            <a href={route('dashboard')} className={even ? 'even' : 'odd'}>
                {t('select')}
            </a>
        </div>
    );
}

export default function Services() {
    const { t } = useTranslation('services');
    const getServices = () => {
        return Object.values(['backend', 'frontend', 'fullstack', 'uiux']).map(
            (val, index) => {
                return (
                    <ServiceCard t={t} className={val} even={index % 2 === 0} />
                );
            },
        );
    };
    return (
        <div id="services">
            <Navbar view="services" />
            <div className="content">
                <Text type="h1">{t('h1')}</Text>
                <Text type="h2">{t('h2')}</Text>
                <div className="cards">{getServices()}</div>
            </div>
            <ContactForm t={t} />
            <Footer />
        </div>
    );
}
