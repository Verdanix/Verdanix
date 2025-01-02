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
            <h1>{t('story.title')}</h1>
            <p>{t('story.description')}</p>
            <h2>{t('skillset.title')}</h2>
            <p>{t('skillset.description')}</p>
        </GuestLayout>
    );
}
