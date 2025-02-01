import '@/../css/Pages/Auth/VerifyEmail.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function VerifyEmail({ meta_title, status }) {
    const { post } = useForm({});

    const { t } = useTranslation('verify_email');
    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <GuestLayout>
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('title')}</h1>
                    <p>{status && t('sent')} </p>
                    <button type="submit">{t('submit')}</button>
                    <a href={route('logout')}>{t('logout')}</a>
                </form>
            </div>
        </GuestLayout>
    );
}
