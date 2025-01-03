import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/About.scss';

function generateListItems(t, keyPrefix) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`${keyPrefix}.${num}`, {
                defaultValue: '',
            }) && <li key={num}>{t(`${keyPrefix}.${num}`)}</li>,
    );
}

function generateExperiences(t) {
    return Array.from({ length: 10000 }, (_, i) => i + 1).map(
        (num) =>
            t(`experience.${num}`, {
                defaultValue: '',
            }) && (
                <li key={num}>
                    <strong>{t(`experience.${num}.prefix`)}</strong>{' '}
                    {t(`experience.${num}`)}
                </li>
            ),
    );
}

export default function About({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
}) {
    const { t } = useTranslation('about');

    return (
        <GuestLayout view="about">
            <div id="origin-story">
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
            </div>
            <div id="certsAndAwards">
                <h2>{t('awards.certs.title')}</h2>
                <p>
                    <strong>{t('awards.certs.start')}</strong>
                    <br />
                    <br />
                    <ul>{generateListItems(t, 'awards.certs')}</ul>
                    <br />
                    <strong>{t('awards.certs.end')}</strong>
                </p>
            </div>
            <div id="education">
                <h2>{t('education.title')}</h2>
                <p>
                    <strong>{t('education.start')}</strong>
                    <br />
                    <br />
                    <ul>{generateListItems(t, 'education')}</ul>
                </p>
            </div>
            <div id="experiences">
                <h2>{t('experience.title')}</h2>
                <p>
                    <strong>{t('experience.start')}</strong>
                    <br />
                    <br />
                    <ul>{generateExperiences(t, 'experience')}</ul>
                </p>
            </div>
        </GuestLayout>
    );
}
