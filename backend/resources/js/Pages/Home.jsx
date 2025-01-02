import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useTranslation } from 'react-i18next';
import '../../css/Pages/Home.scss';

export default function Home({
    meta_title,
    meta_description,
    meta_keywords,
    meta_twitter_card,
    stats,
}) {
    const { t } = useTranslation('home');

    return (
        <></>
    );
}
