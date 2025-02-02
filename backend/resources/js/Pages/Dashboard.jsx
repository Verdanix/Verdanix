import '@/../css/Pages/Dashboard.scss';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import { useTranslation } from 'react-i18next';

export default function Dashboard({
    meta_title,
    meta_description,
    meta_keywords,
}) {
    const { t } = useTranslation('dashboard');
    return (
        <AuthenticatedLayout view={'manage'}>
            <div className="content">
                <a href="/order" className="order">
                    {t('order')}
                </a>
            </div>
        </AuthenticatedLayout>
    );
}
