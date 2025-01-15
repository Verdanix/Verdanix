import '@/../css/Pages/Auth/Login.scss';
import GuestLayout from '@/Layouts/GuestLayout';
import { router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Login() {
    const { t } = useTranslation('login');
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        email: null,
        password: null,
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
        router.post('/login', values);
    };

    return (
        <GuestLayout>
            <div id="form">
                <h1>{t('h1')}</h1>
                <p>{Object.values(errors)[0]}</p>
                <form onSubmit={submit}>
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
                    <div className="loginOptions">
                        <div id="rememberMe">
                            <input
                                type="checkbox"
                                id="remember"
                                onChange={handleChange}
                            />
                            <label htmlFor="remember">{t('remember_me')}</label>
                        </div>
                        <a href="/password-reset">{t('reset_password')}</a>
                    </div>
                    <button type="submit">{t('submit')}</button>
                </form>
            </div>
        </GuestLayout>
    );
}
