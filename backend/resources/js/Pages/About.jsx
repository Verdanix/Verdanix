import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/About.scss';

export default function About({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
}) {
    const { t } = useTranslation('about');

    return (
        <GuestLayout view="about">
            <h1>{t('origin.story.title')}</h1>
            <p>
                {t('origin.story.1')}
                <br />
                <br />
                {t('origin.story.2')}
                <br />
                <br />
                {t('origin.story.3')}
            </p>
        </GuestLayout>
    );
}
