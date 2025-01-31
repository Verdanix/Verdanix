import '@/../css/Pages/Auth/ForgotPassword.scss';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function ForgotPassword({ meta_title, errors }) {
    const { t } = useTranslation('forgot_password');

    const [values, setValues] = useState({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        setValues((values) => ({
            ...values,
            [e.target.id]: e.target.value,
        }));
    };

    const submit = (e) => {
        e.preventDefault();
        router.post(route('password.email'), values);
    };

    return (
        <GuestLayout>
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('title')}</h1>
                    <p>{Object.values(errors)[0]}</p>
                    <input
                        id="email"
                        type="text"
                        placeholder={t('email')}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                    <div className="loginOptions">
                        <a href="/login">{t('login')}</a>
                        <a href="/register">{t('register')}</a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
