import '@/../css/Pages/Auth/Login.scss';

import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

export default function Login({ unverified }) {
    const { t } = useTranslation('login');

    const { data, setData, post, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const handleChange = (e) => {
        setData(e.target.id, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), data);
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
                        value={data.email}
                        onChange={handleChange}
                    />
                    <input
                        id="password"
                        type="password"
                        placeholder={t('password')}
                        value={data.password}
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
