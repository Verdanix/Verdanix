import '@/../css/Pages/Auth/VerifyEmail.scss';
import Navbar from '@/Components/Navbar.jsx';
import Text from '@/Components/Sections/Text.jsx';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function VerifyEmail({ status }) {
    const { post } = useForm();
    const { t } = useTranslation('verify_email');

    const resend = () => {
        post(route('verification.send'));
    };

    return (
        <div id="verify-email">
            <Navbar view="verify" />
            <div className="content">
                <div className="model">
                    <Text type="h2">{t('h2')}</Text>
                    <Text type="h3">{status === null ? t('p') : status}</Text>
                    <button onClick={resend}>{t('resend')}</button>
                </div>
            </div>
        </div>
    );
}
