import '@/../css/Pages/Auth/Login.scss';

import GuestLayout from '@/Layouts/GuestLayout';
import { router } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login({
    meta_title,
    meta_description,
    meta_keywords,
    unverified,
    errors,
}) {
    const { t } = useTranslation('login');

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
        router.post(route('login'), values);
    };

    const verifiedMessage = unverified ? t('verify.email') : null;

    return (
        <GuestLayout view="login">
            <div id="form">
                <form onSubmit={submit}>
                    <h1>{t('title')}</h1>
                    <p>{Object.values(errors)[0] || verifiedMessage}</p>
                    <input
                        id="email"
                        type="text"
                        placeholder={t('email')}
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button type="submit">{t('submit')}</button>
                    <div className="loginOptions">
                        <div className="rememberMe">
                            <input
                                type="checkbox"
                                id="remember"
                                onChange={handleChange}
                            />
                            <label htmlFor="remember">{t('rememberme')}</label>
                        </div>
                        <a href="/forgot-password">{t('forgotpass')}</a>
                        <a href="/register">{t('register')}</a>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
